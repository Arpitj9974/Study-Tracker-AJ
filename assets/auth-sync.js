import { auth, db } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, updateDoc, setDoc, deleteField, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

let currentUid = null;
const validPrefixes = ['note_', 'qt3_', 'rs3_', 'cdf_', 'en_', 'gk_', 'sm_', 'upsc_', 'ibps_', 'iso_pk_', 'iso_qa_', 'iso_reas_', 'iso_eng_', 'jee_', 'neet_', 'cat_', 'cmat_', 'cds_', 'cafnd_', 'cain_', 'cafin_', 'cma_fnd_', 'cfa1_', 'cfa2_', 'cfa3_', 'ntpc_ga_', 'ntpc_reas_', 'ntpc_math_', 'rrbd_reas_', 'rrbd_sci_', 'rrbd_math_', 'rrbd_ga_', 'chsl_eng_', 'chsl_reason_', 'chsl_math_', 'chsl_ga_', 'chsl_comp_', 'mts_ga_', 'mts_eng_', 'mts_math_', 'mts_reason_', 'ugcnet_ta_', 'ugcnet_ra_', 'ugcnet_lr_', 'ugcnet_di_', 'ugcnet_com_', 'ugcnet_rc_', 'ugcnet_ict_', 'ugcnet_env_', 'ugcnet_he_', 'iclk_qa_', 'iclk_ra_', 'iclk_gfa_', 'iclk_eng_', 'iclk_comp_', 'nda_gat_', 'nda_ma_', 'xat_dm_', 'xat_valr_', 'xat_qadi_', 'xat_gk_', 'clat_legal_', 'clat_ca_', 'clat_eng_', 'clat_lr_', 'clat_qt_', 'cuet_ug_lang_', 'cuet_ug_gat_', 'cuet_ug_phy_', 'cuet_ug_chem_', 'cuet_ug_bio_', 'cuet_ug_math_', 'cuet_ug_eco_', 'cuet_ug_bst_', 'cuet_ug_acc_', 'cuet_ug_his_', 'cuet_ug_pol_', 'cuet_ug_geo_', 'cuet_ug_psy_', 'cuet_ug_cs_', 'cpg_qa_', 'cpg_lr_', 'cpg_gk_', 'cpg_eng_', 'cpg_comp_'];

function isValidKey(key) {
  return key && validPrefixes.some(p => key.startsWith(p));
}

// Map exam keys to their respective main dashboard URLs
function getDashboardUrl(examKey) {
  const map = {
    nqt: 'dashboard-nqt.html',
    ssc: 'dashboard-ssc.html',
    ssc_chsl: 'dashboard-ssc.html?exam=chsl',
    ssc_mts: 'dashboard-ssc.html?exam=mts',
    ugcnet: 'dashboard-ugcnet.html',
    upsc: 'dashboard-upsc.html',
    cma_foundation: 'dashboard-cma.html',
    cfa_l1: 'dashboard-cfa.html?level=l1',
    cfa_l2: 'dashboard-cfa.html?level=l2',
    cfa_l3: 'dashboard-cfa.html?level=l3',
    nda: 'dashboard-nda.html',
    ibps_po: 'dashboard-ibps.html',
    ibps_clerk: 'dashboard-ibps.html?exam=clerk',
    jee: 'dashboard-jee.html',
    neet_ug: 'dashboard-neet.html',
    cat: 'dashboard-cat.html',
    cmat: 'dashboard-cmat.html',
    xat: 'dashboard-xat.html',
    clat_ug: 'dashboard-clat.html',
    cuet_ug: 'dashboard-cuet-ug.html',
    cuet_pg_general: 'dashboard-cuet-pg.html',
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

    // Sync Active Exams List
    const cloudActiveExams = userData.activeExams;
    let localActiveExams = [];
    try {
      const raw = localStorage.getItem('activeExams');
      if (raw) localActiveExams = JSON.parse(raw);
    } catch(e){}

    if (Array.isArray(cloudActiveExams)) {
      localStorage.setItem('activeExams', JSON.stringify(cloudActiveExams));
    } else if (Array.isArray(localActiveExams)) {
      await updateDoc(userRef, { activeExams: localActiveExams }).catch(async (err) => {
        if (err.code === 'not-found') {
          await setDoc(userRef, { activeExams: localActiveExams }, { merge: true });
        }
      });
    }

    if (userData.targetExamDate) {
      localStorage.setItem('targetExamDate', userData.targetExamDate);
    } else {
      localStorage.removeItem('targetExamDate');
    }
    
    if (userData.currentStreak) {
      localStorage.setItem('currentStreak', userData.currentStreak.toString());
    }
    if (userData.lastStudyDate) {
      localStorage.setItem('lastStudyDate', userData.lastStudyDate);
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
        if (val !== null && val !== cloudProgress[key]) {
          cloudPending[`progress.${key}`] = val;
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
    
    return userData;
  } catch (err) {
    console.error("Cloud hydration error:", err);
    return null;
  }
}

const ADMIN_EMAILS = ['jaiswalarpit4282@gmail.com', 'arpitj9974@gmail.com'];

window.isAdmin = function(email) {
  const target = email || window.currentUserEmail;
  if (!target) return false;
  return ADMIN_EMAILS.includes(target.trim().toLowerCase());
};

window.fetchLeaderboardStats = async function(myTotalDone) {
  const cacheKey = 'leaderboard_stats';
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp < 2 * 60 * 60 * 1000) {
        return calculatePercentileFromData(data.scores, myTotalDone);
      }
    } catch(e) {}
  }

  try {
    const snap = await getDocs(collection(db, "users"));
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
    scores.sort((a,b) => a-b);
    
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      scores: scores
    }));
    
    return calculatePercentileFromData(scores, myTotalDone);
  } catch(e) {
    console.error("Failed to fetch leaderboard", e);
    return null;
  }
}

function calculatePercentileFromData(scores, myTotalDone) {
  if (!scores || scores.length === 0) return 100;
  const belowOrEqual = scores.filter(s => s <= myTotalDone).length;
  let pct = Math.round((belowOrEqual / scores.length) * 100);
  if (pct > 99 && myTotalDone < scores[scores.length - 1]) pct = 99; // Cap at 99th unless they are truly the absolute highest
  return pct;
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

    // Save/update basic user metadata & lastActive timestamp in Firestore
    try {
      const userRef = doc(db, "users", user.uid);
      const now = new Date().toISOString();
      const targetExamDate = localStorage.getItem('targetExamDate') || null;
      const currentStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);
      const lastCheckDate = localStorage.getItem('lastCheckDate') || null;

      const updateData = {
        email: user.email || "Unknown User",
        lastActive: now
      };
      if (targetExamDate !== null) updateData.targetExamDate = targetExamDate;
      if (currentStreak > 0) updateData.currentStreak = currentStreak;
      if (lastCheckDate !== null) updateData.lastStudyDate = lastCheckDate;

      await setDoc(userRef, updateData, { merge: true });
    } catch (e) {
      console.error("Telemetry update error:", e);
    }

    // Automatically pull & sync cloud progress on login / session restore
    const userData = await syncCloudAndLocalStorage(user.uid);
    
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(window.location.search);
    const isSelectMode = params.get('select') === 'true';


    // -------------------------------------------------------------
    // ONBOARDING GUARD
    // -------------------------------------------------------------
    if (page !== 'onboarding.html' && page !== 'login.html') {
      const isComplete = userData && userData.onboardingComplete;
      if (!isComplete) {
        window.location.href = 'onboarding.html';
        return;
      }
    }

    // Route Protection for Admin Panel
    if (page === 'admin.html') {
      if (!window.isAdmin(user.email)) {
        alert("Access Denied: You do not have administrator permissions.");
        window.location.href = 'index.html';
        return;
      }
    }

    // Stay on index.html when user navigates to Home portal without delayed auto-redirects

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
window.addEventListener('message', async (e) => {
  if (e.data && e.data.type === 'storageChange') {
    const { key, value } = e.data;
    if (value === null) {
      localStorage.removeItem(key);
      if (currentUid && isValidKey(key)) {
        const userRef = doc(db, "users", currentUid);
        await updateDoc(userRef, { [`progress.${key}`]: deleteField() }).catch(err => console.error(err));
      }
    } else {
      localStorage.setItem(key, value);
      if (currentUid && isValidKey(key)) {
        const userRef = doc(db, "users", currentUid);
        await updateDoc(userRef, { [`progress.${key}`]: value }).catch(async (err) => {
          if (err.code === 'not-found') {
            await setDoc(userRef, { progress: { [key]: value } }, { merge: true });
          }
        });
      }
      
      // Update streak
      const todayStr = new Date().toDateString();
      const lastStudyDate = localStorage.getItem('lastStudyDate');
      
      if (lastStudyDate !== todayStr) {
        let currentStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);
        
        if (lastStudyDate) {
          const lastDate = new Date(lastStudyDate);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          
          if (lastDate.toDateString() === yesterday.toDateString()) {
            currentStreak += 1; // Studied yesterday, increment streak
          } else {
            currentStreak = 1; // Missed a day, reset streak
          }
        } else {
          currentStreak = 1; // First time studying
        }
        
        localStorage.setItem('currentStreak', currentStreak.toString());
        localStorage.setItem('lastStudyDate', todayStr);
        
        // Sync streak to Firestore
        if (currentUid) {
          const userRef = doc(db, "users", currentUid);
          updateDoc(userRef, {
            currentStreak: currentStreak,
            lastStudyDate: todayStr
          }).catch(e => console.error('Error saving streak', e));
        }

        // Re-build nav to show updated streak
        if (typeof buildNav === 'function') {
          buildNav();
        }
      }
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
