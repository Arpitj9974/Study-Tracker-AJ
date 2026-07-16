import { auth, db } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, updateDoc, setDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

let currentUid = null;
const validPrefixes = ['qt3_', 'rs3_', 'cdf_', 'en_', 'gk_', 'sm_', 'upsc_', 'ibps_', 'jee_', 'neet_', 'cat_', 'cmat_', 'cds_', 'cafnd_', 'cain_', 'cafin_', 'ntpc_ga_', 'ntpc_reas_', 'ntpc_math_', 'rrbd_reas_', 'rrbd_sci_', 'rrbd_math_', 'rrbd_ga_'];

function isValidKey(key) {
  return key && validPrefixes.some(p => key.startsWith(p));
}

// Map exam keys to their respective main dashboard URLs
function getDashboardUrl(examKey) {
  const map = {
    nqt: 'dashboard-nqt.html',
    ssc: 'dashboard-ssc.html',
    upsc: 'dashboard-upsc.html',
    ibps_po: 'dashboard-ibps.html',
    jee: 'dashboard-jee.html',
    neet_ug: 'dashboard-neet.html',
    cat: 'dashboard-cat.html',
    cmat: 'dashboard-cmat.html',
    cds: 'dashboard-cds.html',
    ca_foundation: 'dashboard-ca.html?level=foundation',
    ca_inter: 'dashboard-ca.html?level=inter',
    ca_final: 'dashboard-ca.html?level=final',
    rrb_ntpc: 'dashboard-rrb.html?exam=ntpc',
    rrb_group_d: 'dashboard-rrb.html?exam=group_d'
  };
  return map[examKey] || null;
}

// Global function to set selected exam and sync to Firestore
window.setSelectedExam = async function(examKey) {
  if (!examKey) return;
  localStorage.setItem('selectedExam', examKey);
  if (currentUid) {
    try {
      const userRef = doc(db, "users", currentUid);
      await updateDoc(userRef, { selectedExam: examKey }).catch(async (err) => {
        if (err.code === 'not-found') {
          await setDoc(userRef, { selectedExam: examKey }, { merge: true });
        }
      });
    } catch (err) {
      console.error("Failed to sync selectedExam to cloud:", err);
    }
  }
};

// 2-Way Sync / Cloud Hydration Function
async function syncCloudAndLocalStorage(uid) {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.exists() ? userSnap.data() : {};
    const cloudProgress = userData.progress || {};
    
    // 1. Sync Selected Exam Preference
    const cloudSelectedExam = userData.selectedExam;
    const localSelectedExam = localStorage.getItem('selectedExam');

    if (cloudSelectedExam && !localSelectedExam) {
      localStorage.setItem('selectedExam', cloudSelectedExam);
    } else if (localSelectedExam && cloudSelectedExam !== localSelectedExam) {
      await updateDoc(userRef, { selectedExam: localSelectedExam }).catch(async (err) => {
        if (err.code === 'not-found') {
          await setDoc(userRef, { selectedExam: localSelectedExam }, { merge: true });
        }
      });
    }

    let localChanged = false;
    let cloudPending = {};

    // 2. Pull cloud keys into localStorage
    for (const [key, value] of Object.entries(cloudProgress)) {
      if (isValidKey(key)) {
        if (localStorage.getItem(key) !== value) {
          localStorage.setItem(key, value);
          localChanged = true;
        }
      }
    }

    // 3. Push any local keys that are NOT in cloud up to Firestore
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
    
    // Route Redirection Check:
    // If user is on index.html (or root) and NOT explicitly in switch-exam mode (?select=true),
    // auto-redirect to their selected exam dashboard.
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(window.location.search);
    const isSelectMode = params.get('select') === 'true';

    if ((page === 'index.html' || page === '') && !isSelectMode) {
      const activeExam = localStorage.getItem('selectedExam');
      const targetUrl = getDashboardUrl(activeExam);
      if (targetUrl) {
        window.location.href = targetUrl;
        return;
      }
    }

  } else {
    // Not logged in! Redirect to login if we are not already there
    if (!window.location.pathname.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
});

// Global window.handleLogout function
window.handleLogout = async function() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Firebase SignOut Error:", err);
  }
  localStorage.clear();
  window.location.href = 'login.html';
};

// Robust Global Click Delegation for Logout Buttons
document.addEventListener('click', async (e) => {
  const logoutBtn = e.target.closest('#logout-btn, .logout-btn-trigger, .logout-btn');
  if (logoutBtn) {
    e.preventDefault();
    await window.handleLogout();
  }
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
