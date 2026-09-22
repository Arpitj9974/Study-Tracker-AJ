import { auth } from "./firebase-config.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// --- Form Elements ---
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginErr = document.getElementById('login-error');
const signupErr = document.getElementById('signup-error');

const googleProvider = new GoogleAuthProvider();

// --- Handle Redirect Result (For Fallback Sign-Ins) ---
getRedirectResult(auth).then((result) => {
  if (result && result.user) {
    const isComplete = localStorage.getItem('onboardingComplete') === 'true';
    window.location.href = isComplete ? 'index.html' : 'onboarding.html';
  }
}).catch((err) => {
  console.error("Google Redirect Auth Error:", err);
  if (loginErr) loginErr.textContent = err.message.replace('Firebase: ', '');
  if (signupErr) signupErr.textContent = err.message.replace('Firebase: ', '');
});

// --- Google Sign In ---
async function handleGoogleLogin(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = "Opening Google...";

  try {
    const result = await signInWithPopup(auth, googleProvider);
    btn.innerHTML = "Signing in...";
    if (result && result.user) {
      // The onAuthStateChanged listener in auth-sync.js will redirect
      const isComplete = localStorage.getItem('onboardingComplete') === 'true';
      window.location.href = isComplete ? 'index.html' : 'onboarding.html';
    }
  } catch (err) {
    console.error("Google sign-in error:", err);
    if (err.code === 'auth/popup-blocked') {
      btn.innerHTML = "Redirecting to Google...";
      try {
        await signInWithRedirect(auth, googleProvider);
        return;
      } catch (redirectErr) {
        console.error("Google redirect fallback failed:", redirectErr);
        if (loginErr) loginErr.textContent = redirectErr.message.replace('Firebase: ', '');
        if (signupErr) signupErr.textContent = redirectErr.message.replace('Firebase: ', '');
      }
    } else if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
      if (loginErr) loginErr.textContent = err.message.replace('Firebase: ', '');
      if (signupErr) signupErr.textContent = err.message.replace('Firebase: ', '');
    }
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }
}

document.querySelectorAll('.google-login-btn').forEach(btn => {
  btn.addEventListener('click', handleGoogleLogin);
});

// --- Email / Password Login ---
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginBtn.disabled = true;
  loginBtn.textContent = 'Logging in...';
  loginErr.textContent = '';
  
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (err) {
    let msg = err.message.replace('Firebase: ', '');
    if (err.code === 'auth/invalid-credential') {
      msg = 'Incorrect email or password.';
    }
    loginErr.textContent = msg;
    loginBtn.disabled = false;
    loginBtn.textContent = 'Log In';
  }
});

// --- Email / Password Sign Up ---
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  signupBtn.disabled = true;
  signupBtn.textContent = 'Creating Account...';
  signupErr.textContent = '';
  
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-pass').value;
  
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
  } catch (err) {
    signupErr.textContent = err.message.replace('Firebase: ', '');
    signupBtn.disabled = false;
    signupBtn.textContent = 'Sign Up';
  }
});
