import { db, auth } from "./firebase-config.js";
import { collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

let cachedUsers = [];

const EXAM_LABELS = {
  not_selected: 'Not Selected',
  nqt: 'TCS NQT',
  ssc: 'SSC CGL',
  ssc_chsl: 'SSC CHSL',
  ssc_mts: 'SSC MTS',
  ugcnet: 'UGC NET',
  upsc: 'UPSC CSE',
  nda: 'UPSC NDA',
  ibps_po: 'IBPS PO',
  ibps_clerk: 'IBPS Clerk',
  ibps_so_2026: 'IBPS SO',
  ibps_so_it_2026: 'IBPS SO (IT)',
  jee: 'JEE Main & Adv',
  neet_ug: 'NEET UG',
  cat: 'CAT (MBA)',
  cmat: 'CMAT (MBA)',
  xat: 'XAT (XLRI)',
  clat_ug: 'CLAT UG',
  cuet_ug: 'CUET UG',
  cuet_pg_general: 'CUET PG General',
  cds: 'UPSC CDS',
  cfa_l1: 'CFA Level 1',
  cfa_l2: 'CFA Level 2',
  cfa_l3: 'CFA Level 3',
  cma_foundation: 'CMA Foundation',
  ca_foundation: 'CA Foundation',
  ca_inter: 'CA Intermediate',
  ca_final: 'CA Final',
  rrb_ntpc: 'RRB NTPC',
  rrb_group_d: 'RRB Group D'
};

const EXAM_COLORS = {
  not_selected: '#9CA3AF',
  nqt: '#7F77DD', ssc: '#1D9E75', ssc_chsl: '#8E44AD', ssc_mts: '#E67E22',
  ugcnet: '#4F46E5', upsc: '#3B5BDB', nda: '#F59E0B', ibps_po: '#B7791F',
  ibps_clerk: '#E11D48', ibps_so_2026: '#1F618D', ibps_so_it_2026: '#117A65',
  jee: '#3B5BDB', neet_ug: '#4C9A3F', cat: '#E67E22', cmat: '#EF4444',
  xat: '#943126', clat_ug: '#7B241C', cuet_ug: '#3B82F6', cuet_pg_general: '#059669',
  cds: '#10B981', cfa_l1: '#C0392B', cfa_l2: '#B03A2E', cfa_l3: '#922B21',
  cma_foundation: '#7D3C98', ca_foundation: '#C0392B', ca_inter: '#B03A2E',
  ca_final: '#922B21', rrb_ntpc: '#6C3483', rrb_group_d: '#229954'
};

function formatDate(isoStr) {
  if (!isoStr) return 'Unknown';
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch (e) {
    return isoStr;
  }
}

function getTimeAgo(isoStr) {
  if (!isoStr) return 'Never';
  const diff = Date.now() - new Date(isoStr).getTime();
  if (isNaN(diff)) return 'Unknown';
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(isoStr);
}

function countUserCompletedChapters(progressObj) {
  if (!progressObj || typeof progressObj !== 'object') return 0;
  return Object.values(progressObj).filter(v => parseInt(v) > 0).length;
}

async function loadAdminData() {
  const tableBody = document.getElementById('user-table-body');
  tableBody.innerHTML = `
    <tr>
      <td colspan="7" style="text-align:center;padding:40px;color:var(--text-secondary)">
        <div style="font-size:18px;margin-bottom:8px">⌛ Connecting to Firestore Database...</div>
        <div style="font-size:12px;color:var(--text-tertiary)">Fetching user documents from collection 'users'</div>
      </td>
    </tr>
  `;

  try {
    console.log("[Admin] Fetching all user documents from Firestore collection 'users'...");
    
    // 8-Second Timeout Wrapper for Firestore Network Call
    const getDocsPromise = getDocs(collection(db, "users"));
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("NETWORK_TIMEOUT: Firestore query exceeded 8 seconds. Check internet connection or ad-blockers.")), 8000)
    );

    const querySnapshot = await Promise.race([getDocsPromise, timeoutPromise]);
    console.log(`[Admin] Successfully retrieved ${querySnapshot.size} user document(s).`);

    cachedUsers = [];
    
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      cachedUsers.push({
        uid: docSnap.id,
        email: data.email || 'Anonymous Student',
        name: data.name || 'Not Provided',
        age: data.age || '--',
        mobile: data.mobile || 'Not Provided',
        status: data.status || 'Unknown',
        createdAt: data.createdAt || null,
        lastLogin: data.lastLogin || null,
        lastActive: data.lastActive || data.lastLogin || null,
        loginCount: data.loginCount || 1,
        selectedExam: data.selectedExam || 'not_selected',
        progress: data.progress || {}
      });
    });

    renderMetrics();
    populateExamFilter();
    
    if (cachedUsers.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;padding:40px;color:var(--text-secondary)">
            <div style="font:600 16px 'DM Sans';color:#F59E0B;margin-bottom:6px">📂 Firestore Connected — 0 Users Found</div>
            <div style="font:400 13px 'DM Sans';color:var(--text-tertiary);max-width:500px;margin:0 auto 16px">
              The 'users' collection in Firestore is currently empty. As soon as students log in or sign up on the hub, their profiles and study progress will automatically appear here!
            </div>
            <button onclick="window.loadAdminData()" class="btn-inspect" style="padding:8px 20px">🔄 Refresh User List</button>
          </td>
        </tr>
      `;
      return;
    }

    renderUserTable();
  } catch (e) {
    console.error("Error fetching admin users from Firestore:", e);
    const isPermissionErr = e.code === 'permission-denied' || (e.message && e.message.includes('permissions'));
    const isTimeout = e.message && e.message.includes('NETWORK_TIMEOUT');

    // Attempt self-profile fallback so admin sees their own active progress while updating rules
    let selfUser = null;
    if (isPermissionErr && auth.currentUser) {
      try {
        const selfDocSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (selfDocSnap.exists()) {
          const sdata = selfDocSnap.data();
          selfUser = {
            uid: selfDocSnap.id,
            email: sdata.email || auth.currentUser.email || 'Admin',
            name: sdata.name || auth.currentUser.displayName || 'Administrator (You)',
            age: sdata.age || '--',
            mobile: sdata.mobile || 'Not Provided',
            status: sdata.status || 'Active Admin',
            createdAt: sdata.createdAt || null,
            lastLogin: sdata.lastLogin || new Date().toISOString(),
            lastActive: sdata.lastActive || sdata.lastLogin || new Date().toISOString(),
            loginCount: sdata.loginCount || 1,
            selectedExam: sdata.selectedExam || 'not_selected',
            progress: sdata.progress || {}
          };
          cachedUsers = [selfUser];
          renderMetrics();
        }
      } catch (selfErr) {
        console.warn("[Admin] Self-profile fallback failed:", selfErr);
      }
    }

    const firestoreRuleText = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null;
    }
  }
}`;

    const bannerHtml = `
      <tr>
        <td colspan="7" style="padding:20px;text-align:left">
          <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:14px;padding:22px;color:var(--text-primary)">
            <div style="font:700 16px/1.2 'DM Sans';color:#EF4444;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
              <span>⚠️ Firestore Data Fetch Error (${e.code || 'permission-denied'})</span>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button onclick="window.copyFirestoreRule()" id="btn-copy-rule" class="btn-inspect" style="background:#F59E0B;color:#0A0C10;font-weight:700;border:none;padding:7px 16px;cursor:pointer;">📋 Copy Rule</button>
                <a href="https://console.firebase.google.com/project/arpits-exam-hub/firestore/rules" target="_blank" class="btn-inspect" style="background:rgba(255,255,255,0.1);color:#ffffff;border:1px solid rgba(255,255,255,0.2);padding:7px 16px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">🚀 Open Firebase Console Rules</a>
                <button onclick="window.loadAdminData()" class="btn-inspect" style="background:#EF4444;color:white;border:none;padding:7px 16px;cursor:pointer;">🔄 Retry Now</button>
              </div>
            </div>
            <div style="font:400 13px/1.5 'DM Sans';color:var(--text-secondary);margin-bottom:12px">
              ${isPermissionErr 
                ? `Your Firebase Firestore Security Rules currently restrict reading all user accounts. ${selfUser ? '<strong>(Your admin account data is loaded below as a preview)</strong>.' : ''} To grant read access to all student records, update your rules in Firebase Console:` 
                : (isTimeout 
                  ? 'The request to Firestore timed out after 8 seconds. Please check if an ad-blocker or browser extension (e.g. uBlock, Brave Shields) is blocking Firebase gRPC WebSockets.' 
                  : e.message)}
            </div>
            ${isPermissionErr ? `
              <div style="position:relative;margin-bottom:12px;">
                <pre id="firestore-rules-pre" style="background:rgba(0,0,0,0.5);padding:14px;border-radius:8px;font:400 12px/1.5 'JetBrains Mono',monospace;color:#FCD34D;overflow-x:auto;border:1px solid rgba(245,158,11,0.2);margin:0;">${firestoreRuleText}</pre>
              </div>
              <div style="font:400 12px/1.5 'DM Sans';color:var(--text-tertiary)">
                👉 <strong>How to fix in 1 minute:</strong>
                <ol style="margin:6px 0 0 18px;padding:0;line-height:1.6;">
                  <li>Click <strong>"Copy Rule"</strong> above.</li>
                  <li>Click <strong>"Open Firebase Console Rules"</strong> to open project <strong>arpits-exam-hub</strong>.</li>
                  <li>In the <strong>Rules</strong> tab, select all text, paste the rule, and click <strong>"Publish"</strong>.</li>
                  <li>Return here and click <strong>"Retry Now"</strong>!</li>
                </ol>
              </div>
            ` : ''}
          </div>
        </td>
      </tr>
    `;

    if (selfUser) {
      tableBody.innerHTML = bannerHtml;
      // Also render self user row below the banner
      const now = Date.now();
      const doneCount = countUserCompletedChapters(selfUser.progress);
      const exKey = selfUser.selectedExam || 'not_selected';
      const exLabel = EXAM_LABELS[exKey] || exKey;
      const exColor = EXAM_COLORS[exKey] || '#9CA3AF';
      tableBody.insertAdjacentHTML('beforeend', `
        <tr>
          <td>
            <div class="user-email">
              <span class="status-dot dot-active" title="Active Admin"></span>
              <div style="display:flex; flex-direction:column;">
                <span style="font-weight:600;color:var(--text-primary);margin-bottom:2px">${selfUser.name} <span style="font-size:10px;background:rgba(207,188,255,0.15);color:#cfbcff;padding:2px 6px;border-radius:4px;margin-left:4px;">ADMIN</span></span>
                <span style="font-size:11px;color:var(--text-secondary)">${selfUser.email}</span>
              </div>
            </div>
          </td>
          <td>
            <div style="display:flex; flex-direction:column;">
              <span style="color:var(--text-primary);margin-bottom:2px">${selfUser.status}</span>
              <span style="font-size:11px;color:var(--text-tertiary)">Age: ${selfUser.age}</span>
            </div>
          </td>
          <td>
            <span class="exam-pill" style="background:${exColor}20;color:${exColor};border:1px solid ${exColor}40">${exLabel}</span>
          </td>
          <td>
            <span style="font:600 14px 'JetBrains Mono';color:#10B981">${doneCount}</span> chapters
          </td>
          <td>${getTimeAgo(selfUser.lastActive)}</td>
          <td><span style="font:600 13px 'JetBrains Mono'">${selfUser.loginCount}</span></td>
          <td>
            <button class="btn-inspect" data-uid="${selfUser.uid}">🔍 Inspect</button>
          </td>
        </tr>
      `);
      const btn = tableBody.querySelector(`.btn-inspect[data-uid="${selfUser.uid}"]`);
      if (btn) btn.addEventListener('click', () => openUserModal(selfUser.uid));
    } else {
      tableBody.innerHTML = bannerHtml;
    }
  }
}
window.loadAdminData = loadAdminData;

window.copyFirestoreRule = function() {
  const pre = document.getElementById('firestore-rules-pre');
  if (pre) {
    const text = pre.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btn-copy-rule');
        if (btn) {
          btn.textContent = '✅ Copied!';
          btn.style.background = '#10B981';
          btn.style.color = '#ffffff';
          setTimeout(() => {
            btn.textContent = '📋 Copy Rule';
            btn.style.background = '#F59E0B';
            btn.style.color = '#0A0C10';
          }, 3000);
        }
      });
    }
  }
};

function renderMetrics() {
  const totalUsers = cachedUsers.length;
  document.getElementById('kpi-total-users').textContent = totalUsers;

  const now = Date.now();
  const dayMs = 86400000;
  let active24h = 0;
  let active7d = 0;
  const examCounts = {};

  cachedUsers.forEach(u => {
    const actTime = u.lastActive ? new Date(u.lastActive).getTime() : 0;
    if (now - actTime <= dayMs) active24h++;
    if (now - actTime <= 7 * dayMs) active7d++;

    const ex = u.selectedExam || 'not_selected';
    examCounts[ex] = (examCounts[ex] || 0) + 1;
  });

  document.getElementById('kpi-active-users').textContent = active24h;
  document.getElementById('kpi-active-sub').textContent = `${active7d} active in last 7 days`;

  // Find top choice exam
  let topExam = 'N/A';
  let maxCount = 0;
  for (const [ex, count] of Object.entries(examCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topExam = ex;
    }
  }
  document.getElementById('kpi-top-exam').textContent = EXAM_LABELS[topExam] || topExam;
  document.getElementById('kpi-top-exam-sub').textContent = maxCount > 0 ? `${maxCount} enrolled (${Math.round((maxCount/totalUsers)*100)}%)` : 'No choices yet';
}

function populateExamFilter() {
  const select = document.getElementById('exam-filter');
  select.innerHTML = `<option value="ALL">All Selected Exams</option>`;
  
  const uniqueExams = Array.from(new Set(cachedUsers.map(u => u.selectedExam || 'not_selected')));
  uniqueExams.forEach(ex => {
    const opt = document.createElement('option');
    opt.value = ex;
    opt.textContent = EXAM_LABELS[ex] || ex;
    select.appendChild(opt);
  });
}

function renderUserTable() {
  const searchQuery = (document.getElementById('user-search').value || '').toLowerCase().trim();
  const examFilter = document.getElementById('exam-filter').value;
  const sortFilter = document.getElementById('sort-filter').value;

  let filtered = cachedUsers.filter(u => {
    const matchSearch = u.email.toLowerCase().includes(searchQuery);
    const matchExam = examFilter === 'ALL' || (u.selectedExam || 'not_selected') === examFilter;
    return matchSearch && matchExam;
  });

  // Sort
  const now = Date.now();
  filtered.sort((a, b) => {
    if (sortFilter === 'lastActive') {
      const ta = a.lastActive ? new Date(a.lastActive).getTime() : 0;
      const tb = b.lastActive ? new Date(b.lastActive).getTime() : 0;
      return tb - ta;
    } else if (sortFilter === 'lastLogin') {
      const ta = a.lastLogin ? new Date(a.lastLogin).getTime() : 0;
      const tb = b.lastLogin ? new Date(b.lastLogin).getTime() : 0;
      return tb - ta;
    } else if (sortFilter === 'progress') {
      return countUserCompletedChapters(b.progress) - countUserCompletedChapters(a.progress);
    } else if (sortFilter === 'created') {
      const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return tb - ta;
    }
    return 0;
  });

  const tableBody = document.getElementById('user-table-body');

  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--text-tertiary)">No matching users found.</td></tr>`;
    return;
  }

  const dayMs = 86400000;
  tableBody.innerHTML = filtered.map(u => {
    const doneCount = countUserCompletedChapters(u.progress);
    const exKey = u.selectedExam || 'not_selected';
    const exLabel = EXAM_LABELS[exKey] || exKey;
    const exColor = EXAM_COLORS[exKey] || '#9CA3AF';

    // Activity status dot
    const actTime = u.lastActive ? new Date(u.lastActive).getTime() : 0;
    let dotClass = 'dot-idle';
    if (now - actTime <= dayMs) dotClass = 'dot-active';
    else if (now - actTime <= 7 * dayMs) dotClass = 'dot-recent';

    return `
      <tr>
        <td>
          <div class="user-email">
            <span class="status-dot ${dotClass}" title="${dotClass === 'dot-active' ? 'Active in last 24h' : (dotClass === 'dot-recent' ? 'Active in last 7 days' : 'Inactive')}"></span>
            <div style="display:flex; flex-direction:column;">
              <span style="font-weight:600;color:var(--text-primary);margin-bottom:2px">${u.name}</span>
              <span style="font-size:11px;color:var(--text-secondary)">${u.email}</span>
            </div>
          </div>
        </td>
        <td>
          <div style="display:flex; flex-direction:column;">
            <span style="color:var(--text-primary);margin-bottom:2px">${u.status}</span>
            <span style="font-size:11px;color:var(--text-tertiary)">Age: ${u.age}</span>
          </div>
        </td>
        <td>
          <span class="exam-pill" style="background:${exColor}20;color:${exColor};border:1px solid ${exColor}40">${exLabel}</span>
        </td>
        <td>
          <span style="font:600 14px 'JetBrains Mono';color:#10B981">${doneCount}</span> chapters
        </td>
        <td>${getTimeAgo(u.lastActive)}</td>
        <td><span style="font:600 13px 'JetBrains Mono'">${u.loginCount}</span></td>
        <td>
          <button class="btn-inspect" data-uid="${u.uid}">🔍 Inspect</button>
        </td>
      </tr>
    `;
  }).join('');

  // Attach button click listeners
  document.querySelectorAll('.btn-inspect').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const uid = e.currentTarget.getAttribute('data-uid');
      openUserModal(uid);
    });
  });
}

function openUserModal(uid) {
  const u = cachedUsers.find(x => x.uid === uid);
  if (!u) return;

  document.getElementById('modal-user-name').textContent = u.name || 'Not Provided';
  document.getElementById('modal-user-email').textContent = u.email;
  document.getElementById('modal-user-uid').textContent = `UID: ${u.uid}`;
  
  document.getElementById('modal-status').textContent = u.status || 'Unknown';
  document.getElementById('modal-age').textContent = u.age || '--';
  document.getElementById('modal-mobile').textContent = u.mobile || 'Not Provided';
  
  document.getElementById('modal-created').textContent = formatDate(u.createdAt);
  document.getElementById('modal-last-login').textContent = formatDate(u.lastLogin);
  document.getElementById('modal-logins').textContent = u.loginCount;

  const breakdownContainer = document.getElementById('modal-exam-breakdown');
  
  if (typeof window.EXAM_CONFIG === 'undefined' || typeof window.KEYS === 'undefined') {
    breakdownContainer.innerHTML = `<div style="color:var(--text-tertiary)">Exam configuration unavailable.</div>`;
  } else {
    const userProg = u.progress || {};
    const cards = Object.entries(window.EXAM_CONFIG).map(([exKey, config]) => {
      let done = 0;
      let total = config.totalChapters || 0;

      config.subjects.forEach(subjKey => {
        const cfg = window.KEYS[subjKey];
        if (cfg) {
          const max = config.countMode === 'p1' ? cfg.p1 : cfg.total;
          for (let i = 1; i <= max; i++) {
            if (userProg[cfg.prefix + i] === '1') done++;
          }
        }
      });

      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const col = config.color || '#7F77DD';

      return `
        <div style="background:var(--bg-hover);border:1px solid var(--border-medium);border-radius:10px;padding:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-weight:700;font-size:13px;color:var(--text-primary);display:flex;align-items:center;gap:6px">
              <span>${config.icon}</span> ${config.label}
            </span>
            <span style="font:600 11px 'JetBrains Mono';color:${col}">${pct}%</span>
          </div>
          <div style="font:400 11px 'JetBrains Mono';color:var(--text-secondary);margin-bottom:8px">${done} of ${total} chapters done</div>
          <div style="width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden">
            <div style="width:${pct}%;height:100%;background:${col}"></div>
          </div>
        </div>
      `;
    }).join('');

    breakdownContainer.innerHTML = cards;
  }

  document.getElementById('user-modal').classList.add('active');
}

window.closeUserModal = function() {
  document.getElementById('user-modal').classList.remove('active');
};

document.getElementById('user-search').addEventListener('input', renderUserTable);
document.getElementById('exam-filter').addEventListener('change', renderUserTable);
document.getElementById('sort-filter').addEventListener('change', renderUserTable);

onAuthStateChanged(auth, (user) => {
  if (user) {
    loadAdminData();
  }
});

if (auth.currentUser) {
  loadAdminData();
}
