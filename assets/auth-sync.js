import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, updateDoc, deleteField, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

let currentUid = null;

// Protect Routes & Watch Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUid = user.uid;
    window.currentUserEmail = user.email;
    
    // Inject user email into sidebar and mobile header if present
    const brandSubs = document.querySelectorAll('.sidebar-brand p, .mh-brand-sub');
    brandSubs.forEach(b => {
      b.innerHTML = `Logged in: <span style="color:var(--accent-purple);font-size:10px">${user.email}</span>`;
    });
    
  } else {
    // Not logged in! Redirect to login if we are not already there
    if (!window.location.pathname.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
});

// Bind Logout Buttons (injected by nav.js)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const logoutBtns = document.querySelectorAll('#logout-btn, .logout-btn-trigger');
    if (logoutBtns.length > 0) {
      import("https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js").then((m) => {
        logoutBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            m.signOut(auth).then(() => {
              localStorage.clear();
              window.location.href = 'login.html';
            });
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
