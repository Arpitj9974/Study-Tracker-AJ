import { auth, db } from "./firebase-config.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// --- Form Elements ---
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginErr = document.getElementById('login-error');
const signupErr = document.getElementById('signup-error');

const googleProvider = new GoogleAuthProvider();

// --- Handle Redirect Result (For Mobile / Fallback Sign-Ins) ---
getRedirectResult(auth).then(async (result) => {
  if (result && result.user) {
    await hydrateLocalCache(result.user.uid, result.user.email);
    window.location.href = 'index.html';
  }
}).catch((err) => {
  console.error("Google Redirect Auth Error:", err);
  if (loginErr) loginErr.textContent = err.message.replace('Firebase: ', '');
});

// --- Hydrate LocalStorage from Cloud ---
// This is the magic that restores progress on a new device
async function hydrateLocalCache(uid, email) {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    const now = new Date().toISOString();
    
    // Telemetry & user profile recording
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: email || "Unknown User",
        createdAt: now,
        lastLogin: now,
        lastActive: now,
        loginCount: 1
      }, { merge: true });
    } else {
      const data = userSnap.data();
      await setDoc(userRef, {
        email: email || data.email || "Unknown User",
        lastLogin: now,
        lastActive: now,
        loginCount: (data.loginCount || 0) + 1
      }, { merge: true });
    }

    // Step 1: Wipe local storage completely so we don't mix up users
    localStorage.clear();
    
    // Step 2: Inject the cloud data
    if (userSnap.exists()) {
      const data = userSnap.data();
      if (data.selectedExam) {
        localStorage.setItem('selectedExam', data.selectedExam);
      }
      if (data.progress) {
        for (const [key, value] of Object.entries(data.progress)) {
          localStorage.setItem(key, value);
        }
      }
    }
  } catch (e) {
    console.error("Failed to hydrate from cloud", e);
  }
}

// --- Google Sign In ---
const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

async function handleGoogleLogin(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const originalHtml = btn.innerHTML;
  btn.disabled = true;

  // On mobile or in-app webview, use redirect directly to avoid popup blocking
  if (isMobileDevice()) {
    btn.innerHTML = "Redirecting to Google...";
    try {
      await signInWithRedirect(auth, googleProvider);
      return;
    } catch (err) {
      console.error("Google redirect failed:", err);
      alert("Google Sign-In failed: " + err.message);
      btn.disabled = false;
      btn.innerHTML = originalHtml;
      return;
    }
  }
  
  btn.innerHTML = "Opening Google...";
  try {
    const result = await signInWithPopup(auth, googleProvider);
    btn.innerHTML = "Syncing Data...";
    await hydrateLocalCache(result.user.uid, result.user.email);
    window.location.href = 'index.html';
  } catch (err) {
    console.error("Popup login error:", err);
    // If popup was blocked or closed on desktop browser, fallback to redirect
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/cancelled-popup-request' || err.code === 'auth/popup-closed-by-user') {
      try {
        btn.innerHTML = "Redirecting to Google...";
        await signInWithRedirect(auth, googleProvider);
        return;
      } catch (redirectErr) {
        console.error("Google redirect fallback failed:", redirectErr);
        alert("Google Sign-In failed: " + redirectErr.message);
      }
    } else {
      alert("Google Sign-In failed: " + err.message);
    }
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }
}

document.querySelectorAll('.google-login-btn').forEach(btn => {
  btn.addEventListener('click', handleGoogleLogin);
});

// --- Handlers ---
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginBtn.disabled = true;
  loginBtn.textContent = 'Logging in...';
  loginErr.textContent = '';
  
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  
  try {
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    await hydrateLocalCache(cred.user.uid, cred.user.email || email);
    window.location.href = 'index.html';
  } catch (err) {
    loginErr.textContent = err.message.replace('Firebase: ', '');
    loginBtn.disabled = false;
    loginBtn.textContent = 'Log In';
  }
});

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  signupBtn.disabled = true;
  signupBtn.textContent = 'Creating Account...';
  signupErr.textContent = '';
  
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-pass').value;
  
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    localStorage.clear();
    await hydrateLocalCache(cred.user.uid, cred.user.email || email);
    window.location.href = 'index.html';
  } catch (err) {
    signupErr.textContent = err.message.replace('Firebase: ', '');
    signupBtn.disabled = false;
    signupBtn.textContent = 'Sign Up';
  }
});
