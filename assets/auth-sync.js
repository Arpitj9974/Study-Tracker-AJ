import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, updateDoc, deleteField, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

let currentUid = null;

// Protect Routes & Watch Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUid = user.uid;
    window.currentUserEmail = user.email;
    
    // Inject user email into the sidebar if it exists
    const brand = document.querySelector('.sidebar-brand p');
    if (brand) brand.innerHTML = `Logged in as: <br><span style="color:var(--accent-purple);font-size:10px">${user.email}</span>`;
    
  } else {
    // Not logged in! Redirect to login if we are not already there
    if (!window.location.pathname.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
});

// Bind Logout Button (injected by nav.js)
// Use mutation observer or just wait a bit since nav.js runs on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      import("https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js").then((m) => {
        logoutBtn.addEventListener('click', () => {
          m.signOut(auth).then(() => {
            localStorage.clear();
            window.location.href = 'login.html';
          });
        });
      });
    }
  }, 100);
});

// Background Cloud Sync
// This listens to changes from the iframe trackers and pushes them to Firestore instantly
window.addEventListener('storage', async (e) => {
  if (!currentUid) return;
  
  // We only sync keys that belong to our trackers
  const validPrefixes = ['qt3_', 'rs3_', 'cdf_', 'en_', 'gk_', 'sm_', 'upsc_'];
  const isValid = validPrefixes.some(p => e.key && e.key.startsWith(p));
  
  if (isValid) {
    const userRef = doc(db, "users", currentUid);
    try {
      if (e.newValue === null) {
        // Unchecked a box -> Delete from cloud
        await updateDoc(userRef, {
          [`progress.${e.key}`]: deleteField()
        });
      } else {
        // Checked a box -> Save to cloud
        await updateDoc(userRef, {
          [`progress.${e.key}`]: e.newValue
        });
      }
    } catch (err) {
      // If document doesn't exist yet, updateDoc throws an error. Use setDoc instead.
      if (err.code === 'not-found') {
        if (e.newValue !== null) {
          await setDoc(userRef, { progress: { [e.key]: e.newValue } }, { merge: true });
        }
      } else {
        console.error("Cloud Sync Failed", err);
      }
    }
  }
});
