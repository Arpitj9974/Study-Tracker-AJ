import { auth, db } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, updateDoc, setDoc, deleteField, collection, getDocs, setLogLevel } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Enable detailed Firestore SDK debug logs to output directly to the browser console.
// This allows you to inspect if Firebase is successfully connecting, or if it times out/fails due to console rules.
try {
  setLogLevel("debug");
  console.log("[AuthSync] Firestore debug logging activated.");
} catch(e) {
  console.warn("[AuthSync] Failed to enable Firestore debug logging:", e);
}

// Expose Firebase elements globally for other scripts (like nav.js) to access
window.auth = auth;
window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.updateDoc = updateDoc;
window.deleteField = deleteField;

// 1. DYNAMIC PREMIUM LOADING SCREEN INJECTION
const overlayId = 'auth-loading-overlay';
let overlayEl = document.getElementById(overlayId);
if (!overlayEl) {
  const overlayHtml = `
    <div id="${overlayId}" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #0D0F14;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      color: #F0F2FF;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    ">
      <!-- Glow effects -->
      <div style="
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(127, 119, 221, 0.15) 0%, rgba(13, 15, 20, 0) 70%);
        top: 30%;
        left: 35%;
        pointer-events: none;
      "></div>
      
      <div style="position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <!-- Premium Pulsing & Spinning Ring -->
        <div style="position: relative; width: 64px; height: 64px;">
          <div style="
            box-sizing: border-box;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid rgba(255, 255, 255, 0.05);
            border-radius: 50%;
          "></div>
          <div class="auth-spinner-ring" style="
            box-sizing: border-box;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-top-color: #7F77DD;
            border-right-color: #7F77DD;
            border-radius: 50%;
            animation: auth-spin 0.8s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
          "></div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <div style="font-weight: 700; font-size: 16px; letter-spacing: -0.01em; color: #F0F2FF;">AspirantFlow</div>
          <div id="auth-loading-text" style="font-size: 11px; font-weight: 600; color: #9BA3C4; letter-spacing: 0.05em; text-transform: uppercase;">Verifying Session...</div>
        </div>
      </div>
      
      <style>
        @keyframes auth-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', overlayHtml);
  overlayEl = document.getElementById(overlayId);
}

function updateLoadingText(text) {
  const el = document.getElementById('auth-loading-text');
  if (el) el.textContent = text;
}

function hideLoadingOverlay() {
  if (overlayEl) {
    overlayEl.style.opacity = '0';
    overlayEl.style.visibility = 'hidden';
    setTimeout(() => {
      if (overlayEl && overlayEl.parentNode) {
        overlayEl.remove();
        overlayEl = null;
      }
    }, 300);
  }
}

// 2. VALIDATION CONSTANTS
const validPrefixes = ['note_', 'qt3_', 'rs3_', 'cdf_', 'en_', 'gk_', 'sm_', 'upsc_', 'ibps_', 'iso_pk_', 'iso_qa_', 'iso_reas_', 'iso_eng_', 'jee_', 'neet_', 'cat_', 'cmat_', 'cds_', 'cafnd_', 'cain_', 'cafin_', 'cma_fnd_', 'cfa1_', 'cfa2_', 'cfa3_', 'ntpc_ga_', 'ntpc_reas_', 'ntpc_math_', 'rrbd_reas_', 'rrbd_sci_', 'rrbd_math_', 'rrbd_ga_', 'chsl_eng_', 'chsl_reason_', 'chsl_math_', 'chsl_ga_', 'chsl_comp_', 'mts_ga_', 'mts_eng_', 'mts_math_', 'mts_reason_', 'ugcnet_ta_', 'ugcnet_ra_', 'ugcnet_lr_', 'ugcnet_di_', 'ugcnet_com_', 'ugcnet_rc_', 'ugcnet_ict_', 'ugcnet_env_', 'ugcnet_he_', 'iclk_qa_', 'iclk_ra_', 'iclk_gfa_', 'iclk_eng_', 'iclk_comp_', 'nda_gat_', 'nda_ma_', 'xat_dm_', 'xat_valr_', 'xat_qadi_', 'xat_gk_', 'clat_legal_', 'clat_ca_', 'clat_eng_', 'clat_lr_', 'clat_qt_', 'cuet_ug_lang_', 'cuet_ug_gat_', 'cuet_ug_phy_', 'cuet_ug_chem_', 'cuet_ug_bio_', 'cuet_ug_math_', 'cuet_ug_eco_', 'cuet_ug_bst_', 'cuet_ug_acc_', 'cuet_ug_his_', 'cuet_ug_pol_', 'cuet_ug_geo_', 'cuet_ug_psy_', 'cuet_ug_cs_', 'cpg_qa_', 'cpg_lr_', 'cpg_gk_', 'cpg_eng_', 'cpg_comp_'];

function isValidKey(key) {
  return key && validPrefixes.some(p => key.startsWith(p));
}

const ADMIN_EMAILS = ['jaiswalarpit4282@gmail.com', 'arpitj9974@gmail.com'];

window.isAdmin = function(email) {
  const target = email || window.currentUserEmail;
  if (!target) return false;
  return ADMIN_EMAILS.includes(target.trim().toLowerCase());
};

// 3. CLOUD HYDRATION & TIMEOUT-SAFE BIDIRECTIONAL SYNC
let currentUid = null;
let isSyncing = false;
const FIRESTORE_TIMEOUT_MS = 5000;

function runWithTimeout(promise, errorMsg) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`TIMEOUT: ${errorMsg}`)), FIRESTORE_TIMEOUT_MS))
  ]);
}

async function syncCloudAndLocalStorage(uid) {
  if (isSyncing) return null;
  isSyncing = true;
  try {
    console.log("[AuthSync] Starting sync with Firestore for UID:", uid);
    const userRef = doc(db, "users", uid);
    
    // Fetch profile snapshot from firestore with timeout
    const userSnap = await runWithTimeout(getDoc(userRef), "Firestore query timed out after 5s");
    const userData = userSnap.exists() ? userSnap.data() : {};
    const cloudProgress = userData.progress || {};

    console.log("[AuthSync] Profile fetched successfully.", userData);

    // Save onboarding state locally for fallback detection
    if (userData.onboardingComplete) {
      localStorage.setItem('onboardingComplete', 'true');
    } else {
      localStorage.setItem('onboardingComplete', 'false');
    }

    // A. Sync Selected Exam Preference
    const cloudSelectedExam = userData.selectedExam;
    const localSelectedExam = localStorage.getItem('selectedExam');

    if (cloudSelectedExam) {
      localStorage.setItem('selectedExam', cloudSelectedExam);
    } else if (localSelectedExam) {
      await runWithTimeout(updateDoc(userRef, { selectedExam: localSelectedExam }), "updateDoc selectedExam").catch(async () => {
        await runWithTimeout(setDoc(userRef, { selectedExam: localSelectedExam }, { merge: true }), "setDoc selectedExam");
      });
    }

    // B. Sync Active Exams
    const cloudActiveExams = userData.activeExams;
    let localActiveExams = [];
    try {
      const raw = localStorage.getItem('activeExams');
      if (raw) localActiveExams = JSON.parse(raw);
    } catch (e) {}

    if (Array.isArray(cloudActiveExams)) {
      localStorage.setItem('activeExams', JSON.stringify(cloudActiveExams));
    } else if (Array.isArray(localActiveExams) && localActiveExams.length > 0) {
      await runWithTimeout(updateDoc(userRef, { activeExams: localActiveExams }), "updateDoc activeExams").catch(async () => {
        await runWithTimeout(setDoc(userRef, { activeExams: localActiveExams }, { merge: true }), "setDoc activeExams");
      });
    }

    // C. Sync Dates & Streaks
    if (userData.targetExamDate) {
      localStorage.setItem('targetExamDate', userData.targetExamDate);
    }
    if (userData.currentStreak) {
      localStorage.setItem('currentStreak', userData.currentStreak.toString());
    }
    if (userData.lastStudyDate) {
      localStorage.setItem('lastStudyDate', userData.lastStudyDate);
    }

    // D. Sync Progress: Cloud -> Local (Only update if different)
    for (const [key, value] of Object.entries(cloudProgress)) {
      if (isValidKey(key)) {
        if (localStorage.getItem(key) !== value) {
          localStorage.setItem(key, value);
        }
      }
    }

    // E. Sync Progress: Local -> Cloud (Only push if not in cloud or different)
    let cloudPending = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isValidKey(key)) {
        const val = localStorage.getItem(key);
        if (val !== null && val !== cloudProgress[key]) {
          cloudPending[`progress.${key}`] = val;
        }
      }
    }

    if (Object.keys(cloudPending).length > 0) {
      await runWithTimeout(updateDoc(userRef, cloudPending), "updateDoc progress").catch(async () => {
        const rawDoc = {};
        for (const [k, v] of Object.entries(cloudPending)) {
          rawDoc[k.replace('progress.', '')] = v;
        }
        await runWithTimeout(setDoc(userRef, { progress: rawDoc }, { merge: true }), "setDoc progress");
      });
    }

    window.dispatchEvent(new CustomEvent('cloudDataSynced'));
    window.dispatchEvent(new Event('storage'));

    return userData;
  } catch (err) {
    console.error("[AuthSync] Error/Timeout during database sync. Continuing in local-only fallback mode:", err);
    
    // Resolve fallback user structure using local storage values
    const localActive = localStorage.getItem('activeExams');
    const localOnboarded = localStorage.getItem('onboardingComplete') === 'true';
    
    console.warn(`[AuthSync] Fallback parameters - Onboarded: ${localOnboarded}, Active Exams: ${localActive}`);
    
    return {
      onboardingComplete: localOnboarded,
      activeExams: localActive ? JSON.parse(localActive) : [],
      selectedExam: localStorage.getItem('selectedExam'),
      isFallback: true
    };
  } finally {
    isSyncing = false;
  }
}

// 4. ROUTE PROTECTION & STATE WATCH
onAuthStateChanged(auth, async (user) => {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (user) {
    currentUid = user.uid;
    window.currentUserEmail = user.email;
    updateLoadingText("Syncing Cloud Progress...");

    // Inject user email into layout badges
    const brandSubs = document.querySelectorAll('.sidebar-brand p, .mh-brand-sub');
    brandSubs.forEach(b => {
      b.innerHTML = `Logged in: <span style="color:#cfbcff;font-size:10px">${user.email}</span>`;
    });
    
    const userBadge = document.getElementById('header-user-email');
    if (userBadge) {
      userBadge.textContent = user.email;
    }

    // Sync cloud & local storage
    const userData = await syncCloudAndLocalStorage(user.uid);

    // Guard 1: Onboarding check
    const isComplete = userData && userData.onboardingComplete;
    if (!isComplete) {
      if (page !== 'onboarding.html') {
        window.location.href = 'onboarding.html';
        return;
      }
    } else {
      // If onboarding is complete, don't allow on login.html or onboarding.html
      if (page === 'login.html' || page === 'onboarding.html') {
        window.location.href = 'index.html';
        return;
      }
    }

    // Guard 2: Admin Panel check
    if (page === 'admin.html') {
      if (!window.isAdmin(user.email)) {
        alert("Access Denied: You do not have administrator permissions.");
        window.location.href = 'index.html';
        return;
      }
    }

    // Auth verification complete, hide overlay
    hideLoadingOverlay();
  } else {
    // User is logged out
    currentUid = null;
    window.currentUserEmail = null;
    
    if (page !== 'login.html') {
      window.location.href = 'login.html';
    } else {
      hideLoadingOverlay();
    }
  }
});

// 5. LEADERBOARD STATS EXPORT
window.fetchLeaderboardStats = async function(myTotalDone) {
  const cacheKey = 'leaderboard_stats';
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp < 2 * 60 * 60 * 1000) {
        return calculatePercentileFromData(data.scores, myTotalDone);
      }
    } catch (e) {}
  }

  try {
    const fetchPromise = getDocs(collection(db, "users"));
    const snap = await runWithTimeout(fetchPromise, "Fetch leaderboard snap");
    const scores = [];
    snap.forEach(doc => {
      const d = doc.data();
      if (d.progress) {
        const count = Object.values(d.progress).filter(v => parseInt(v) > 0).length;
        scores.push(count);
      } else {
        scores.push(0);
      }
    });
    scores.sort((a, b) => a - b);

    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      scores: scores
    }));

    return calculatePercentileFromData(scores, myTotalDone);
  } catch (e) {
    console.error("Failed to fetch leaderboard", e);
    return null;
  }
};

function calculatePercentileFromData(scores, myTotalDone) {
  if (!scores || scores.length === 0) return 100;
  const belowOrEqual = scores.filter(s => s <= myTotalDone).length;
  let pct = Math.round((belowOrEqual / scores.length) * 100);
  if (pct > 99 && myTotalDone < scores[scores.length - 1]) pct = 99;
  return pct;
}

// 6. LOGOUT FUNCTIONALITY
window.handleLogout = async function() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Firebase SignOut Error:", err);
  }
  localStorage.clear();
  window.location.href = 'login.html';
};

// Global click delegation for Log Out triggers
document.addEventListener('click', async (e) => {
  const logoutBtn = e.target.closest('#logout-btn, .logout-btn-trigger, .logout-btn');
  if (logoutBtn) {
    e.preventDefault();
    await window.handleLogout();
  }
});

// 7. REAL-TIME STORAGE EVENT & MESSAGE SYNCHRONIZATION
window.addEventListener('storage', async (e) => {
  if (!currentUid || isSyncing) return;

  const keyToSync = e.key;
  if (keyToSync && isValidKey(keyToSync)) {
    const userRef = doc(db, "users", currentUid);
    const val = localStorage.getItem(keyToSync);
    try {
      if (val === null) {
        await runWithTimeout(updateDoc(userRef, { [`progress.${keyToSync}`]: deleteField() }), "delete progress key");
      } else {
        await runWithTimeout(updateDoc(userRef, { [`progress.${keyToSync}`]: val }), "update progress key");
      }
    } catch (err) {
      if (err.code === 'not-found' && val !== null) {
        await runWithTimeout(setDoc(userRef, { progress: { [keyToSync]: val } }, { merge: true }), "set progress key");
      }
    }
  }
});

// Sync progress changes from embedded iframe trackers (using window messaging)
window.addEventListener('message', async (e) => {
  if (e.data && e.data.type === 'storageChange') {
    const { key, value } = e.data;
    if (!isValidKey(key)) return;

    if (value === null) {
      localStorage.removeItem(key);
      if (currentUid) {
        const userRef = doc(db, "users", currentUid);
        await runWithTimeout(updateDoc(userRef, { [`progress.${key}`]: deleteField() }), "iframe delete progress key").catch(err => console.error(err));
      }
    } else {
      localStorage.setItem(key, value);
      if (currentUid) {
        const userRef = doc(db, "users", currentUid);
        await runWithTimeout(updateDoc(userRef, { [`progress.${key}`]: value }), "iframe update progress key").catch(async (err) => {
          if (err.code === 'not-found') {
            await runWithTimeout(setDoc(userRef, { progress: { [key]: value } }, { merge: true }), "iframe fallback set progress key");
          }
        });
      }
      
      // Update Daily Streak when progress changes
      const todayStr = new Date().toDateString();
      const lastStudyDate = localStorage.getItem('lastStudyDate');
      
      if (lastStudyDate !== todayStr) {
        let currentStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);
        if (lastStudyDate) {
          const lastDate = new Date(lastStudyDate);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          if (lastDate.toDateString() === yesterday.toDateString()) {
            currentStreak += 1;
          } else {
            currentStreak = 1;
          }
        } else {
          currentStreak = 1;
        }
        
        localStorage.setItem('currentStreak', currentStreak.toString());
        localStorage.setItem('lastStudyDate', todayStr);
        
        if (currentUid) {
          const userRef = doc(db, "users", currentUid);
          runWithTimeout(updateDoc(userRef, {
            currentStreak: currentStreak,
            lastStudyDate: todayStr
          }), "update streak").catch(e => console.error('Error saving streak', e));
        }

        if (typeof buildNav === 'function') {
          buildNav();
        }
      }
    }
    window.dispatchEvent(new Event('storage'));
  }
});
