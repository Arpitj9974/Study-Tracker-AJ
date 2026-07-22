// dashboard-cmat.js — CMAT MBA Exam-specific dashboard logic

const CMAT_SUBJECTS = [
  { key: "cmat_qt", label: "Quant & DI",       icon: "📐", color: "#3B82F6", link: "tracker-cmat.html?subj=cmat_qt" },
  { key: "cmat_lr", label: "Logical Reasoning", icon: "🧩", color: "#8B5CF6", link: "tracker-cmat.html?subj=cmat_lr" },
  { key: "cmat_lc", label: "Language Comp",    icon: "📖", color: "#10B981", link: "tracker-cmat.html?subj=cmat_lc" },
  { key: "cmat_ga", label: "General Awareness", icon: "🌐", color: "#F59E0B", link: "tracker-cmat.html?subj=cmat_ga" },
  { key: "cmat_ie", label: "Innovation & Entr", icon: "🚀", color: "#EF4444", link: "tracker-cmat.html?subj=cmat_ie" }
];

const CMAT_TOTAL = 58;

function renderCMATCountdown() {
  const examDate = new Date(EXAM_CONFIG.cmat.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#EF4444';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left (Est)' : 'CMAT Exam Day!'; badge.style.color = color; }
}

function renderCMATDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CMAT_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = CMAT_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / CMAT_TOTAL;
    const arc = subjPct * C;
    const off = C - arc;
    const rot = -90 + usedAngle * 360;
    usedAngle += subjPct;
    return `<circle cx="60" cy="60" r="${R}" fill="none" stroke="${s.color}" stroke-width="10"
      stroke-dasharray="${C}" stroke-dashoffset="${off}"
      stroke-linecap="round" transform="rotate(${rot} 60 60)" style="transition:stroke-dashoffset 1.2s ease"/>`;
  });

  svg.innerHTML = `
    <circle cx="60" cy="60" r="${R}" fill="none" stroke="#222640" stroke-width="10"/>
    ${arcs.join('')}
    <text x="60" y="56" text-anchor="middle" font-family="JetBrains Mono" font-size="16" font-weight="600" fill="#F0F2FF">${pct}%</text>
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${CMAT_TOTAL}</text>`;
}

function renderCMATMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CMAT_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-total-chapters', CMAT_TOTAL);
  set('ms-subj-count', CMAT_SUBJECTS.length);
  set('ms-overall-pct', pct + '%');
}

function renderCMATSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = CMAT_SUBJECTS.map((s) => {
    const d = stats[s.key] || { done: 0, total: 10 };
    const totp = d.total > 0 ? Math.round((d.done / d.total) * 100) : 0;
    return `<div class="subject-card" style="--subj-color:${s.color}">
      <div class="sc-header">
        <div class="sc-title"><span class="sc-icon">${s.icon}</span>${s.label}</div>
        <span class="sc-pct" style="color:${s.color};font:700 20px/1 'JetBrains Mono'">${totp}%</span>
      </div>
      <div class="sc-phases">
        <div class="sc-phase">
          <div class="sc-phase-label"><span>Chapters Completed</span><span class="sc-phase-count">${d.done}/${d.total}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="background:${s.color}" data-w="${totp}"></div></div>
        </div>
      </div>
      <a href="${s.link}" class="sc-link">View Section Roadmap →</a>
    </div>`;
  }).join('');
  setTimeout(() => {
    container.querySelectorAll('.progress-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 100);
}

function renderCMATFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = CMAT_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All 5 CMAT sections above 80%. Practice full 180-min non-stop 100 Qs speed mocks!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All 5 CMAT sections above 50%. Focus on Innovation & Entrepreneurship concepts and Static GK speed recall!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ High Importance Sections (< 50% Complete)</div>
    <div class="focus-items">${weak.map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderCMATSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const qt = stats.cmat_qt ? stats.cmat_qt.done : 0;
  const ie = stats.cmat_ie ? stats.cmat_ie.done : 0;
  const ga = stats.cmat_ga ? stats.cmat_ga.done : 0;

  let msg = '', color = '#EF4444';
  if (qt < 7) {
    msg = `📌 Arithmetic Lock-in: Arithmetic carries ~50% of Quant questions in CMAT. Lock in Percentages, Ratios, TSD & Work to maximize your 80M Quant score!`;
    color = 'var(--accent-amber)';
  } else if (ie < 6) {
    msg = `📌 Innovation & Entrepreneurship Advantage: Unique 80M section. Master Startup funding types (Angel, VC, Bootstrapping), IPR, and Government schemes for easy scoring!`;
    color = 'var(--accent-amber)';
  } else if (ga < 5) {
    msg = `📌 Static GK Focus: CMAT General Awareness is heavily Static GK (~15-19 Qs). Focus on Indian History, Polity, Economy & Business Brands!`;
  } else {
    msg = `💡 Full 180-min Strategy: CMAT has NO sectional timers. Time management is flexible — finish GA and I&E fast (15 mins each) to save 150 mins for Quant & LR!`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshCMATUI() {
  renderCMATCountdown();
  const stats = readExamStats('cmat');
  renderCMATDonut(stats);
  renderCMATMasterStats(stats);
  renderCMATSubjectCards(stats);
  renderCMATFocusBox(stats);
  renderCMATSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'cmat');
  refreshCMATUI();
});

window.addEventListener('cloudDataSynced', refreshCMATUI);
window.addEventListener('storage', refreshCMATUI);
