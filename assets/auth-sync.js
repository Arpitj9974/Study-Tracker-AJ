import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, updateDoc, setDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

let currentUid = null;
const validPrefixes = ['qt3_', 'rs3_', 'cdf_', 'en_', 'gk_', 'sm_', 'upsc_', 'ibps_', 'jee_'];

function isValidKey(key) {
  return key && validPrefixes.some(p => key.startsWith(p));
}

// 2-Way Sync / Cloud Hydration Function
async function syncCloudAndLocalStorage(uid) {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    const cloudProgress = (userSnap.exists() && userSnap.data().progress) ? userSnap.data().progress : {};
    
    let localChanged = false;
    let cloudPending = {};

    // 1. Pull cloud keys into localStorage
    for (const [key, value] of Object.entries(cloudProgress)) {
      if (isValidKey(key)) {
        if (localStorage.getItem(key) !== value) {
          localStorage.setItem(key, value);
          localChanged = true;
        }
      }
    }

    // 2. Push any local keys that are NOT in cloud up to Firestore
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isValidKey(key)) {
        const val = localStorage.getItem(key);
        if (val === '1' && cloudProgress[key] !== '1') {
          cloudPending[`progress.${key}`] = '1';
        }
      }
    }

    // If there are pending local progress items to upload
    if (Object.keys(cloudPending).length > 0) {
      try {
        await updateDoc(userRef, cloudPending);
      } catch (err) {
        if (err.code === 'not-found') {
          const rawDoc = {};
          for (const [k, v] of Object.entries(cloudPending)) {
            const cleanKey = k.replace('progress.', '');
            rawDoc[cleanKey] = v;
          }
          await setDoc(userRef, { progress: rawDoc }, { merge: true });
        }
      }
    }

    // Always notify UI to re-render with latest synced data after cloud sync completes
    window.dispatchEvent(new CustomEvent('cloudDataSynced'));
    window.dispatchEvent(new Event('storage'));
  } catch (err) {
    console.error("Cloud hydration error:", err);
  }
}

// Protect Routes & Watch Auth State
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUid = user.uid;
    window.currentUserEmail = user.email;
    
    // Inject user email into sidebar and mobile header if present
    const brandSubs = document.querySelectorAll('.sidebar-brand p, .mh-brand-sub');
    brandSubs.forEach(b => {
      b.innerHTML = `Logged in: <span style="color:var(--accent-purple);font-size:10px">${user.email}</span>`;
    });

    // Automatically pull & sync cloud progress on login / session restore
    await syncCloudAndLocalStorage(user.uid);
    
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

// Listen for storageChange postMessage from iframe trackers
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'storageChange') {
    const { key, value } = e.data;
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
    // Trigger storage event to initiate cloud sync
    window.dispatchEvent(new Event('storage'));
  }
});

// Background Cloud Sync
// Listens to local changes and pushes them to Firestore instantly
window.addEventListener('storage', async (e) => {
  if (!currentUid) return;

  // Key can be passed in storage event or we can inspect all keys
  const keyToSync = e.key;
  if (keyToSync && isValidKey(keyToSync)) {
    const userRef = doc(db, "users", currentUid);
    const val = localStorage.getItem(keyToSync);
    try {
      if (val === null) {
        await updateDoc(userRef, { [`progress.${keyToSync}`]: deleteField() });
      } else {
        await updateDoc(userRef, { [`progress.${keyToSync}`]: val });
      }
    } catch (err) {
      if (err.code === 'not-found') {
        if (val !== null) {
          await setDoc(userRef, { progress: { [keyToSync]: val } }, { merge: true });
        }
      } else {
        console.error("Cloud Sync Failed", err);
      }
    }
  }
});
