// dashboard-ibps.js — IBPS PO/MT Exam-specific dashboard logic

const IBPS_SUBJECTS = [
  { key: "ibps_qnt", label: "Quantitative Aptitude", icon: "🔢", color: "#B7791F", link: "tracker-ibps.html?subj=ibps_qnt" },
  { key: "ibps_rea", label: "Reasoning Ability",     icon: "🧩", color: "#5F5AA2", link: "tracker-ibps.html?subj=ibps_rea" },
  { key: "ibps_eng", label: "English Language",       icon: "📖", color: "#B04A2F", link: "tracker-ibps.html?subj=ibps_eng" },
  { key: "ibps_dia", label: "Data Analysis & DI",     icon: "📊", color: "#2C7A9E", link: "tracker-ibps.html?subj=ibps_dia" },
  { key: "ibps_gab", label: "Banking & GA",          icon: "🏦", color: "#2B8A6E", link: "tracker-ibps.html?subj=ibps_gab" },
  { key: "ibps_dsc", label: "Descriptive English",   icon: "✍️", color: "#A64D9C", link: "tracker-ibps.html?subj=ibps_dsc" }
];

const IBPS_TOTAL = 68;

function renderIBPSCountdown() {
  const examDate = new Date(EXAM_CONFIG.ibps_po.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#B7791F';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left' : 'Prelims Exam Day!'; badge.style.color = color; }
}

function renderIBPSDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / IBPS_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = IBPS_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / IBPS_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${IBPS_TOTAL}</text>`;
}

function renderIBPSMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / IBPS_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderIBPSSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = IBPS_SUBJECTS.map((s) => {
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
      <a href="${s.link}" class="sc-link">View Subject Roadmap →</a>
    </div>`;
  }).join('');
  setTimeout(() => {
    container.querySelectorAll('.progress-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 100);
}

function renderIBPSFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = IBPS_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All 6 IBPS PO modules above 80%. Shift to timed full-length mocks!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All IBPS PO modules above 50%. Focus on DI speed and Mains Banking Awareness!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ High ROI Focus Areas (< 50% Complete)</div>
    <div class="focus-items">${weak.slice(0, 5).map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderIBPSSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const qnt = stats.ibps_qnt ? stats.ibps_qnt.done : 0;
  const rea = stats.ibps_rea ? stats.ibps_rea.done : 0;
  const gab = stats.ibps_gab ? stats.ibps_gab.done : 0;

  let msg = '', color = '#B7791F';
  if (qnt < 8 || rea < 8) {
    msg = `📌 Speed & Accuracy First: Prioritize Speed Math, Inequalities, Syllogisms & Basic Puzzles. They form ~70% of Prelims cutoff marks.`;
    color = 'var(--accent-amber)';
  } else if (gab < 6) {
    msg = `📌 Parallel Mains Track: Run General/Banking Awareness daily (RBI Circulars & Current Affairs). Mains G.A. carries 60 heavy marks!`;
    color = 'var(--accent-amber)';
  } else {
    msg = `💡 Advanced Stage: Focus on Caselet DI, Complex Seating Arrangements, and Essay structuring drills under 30-min timer.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshIBPSUI() {
  renderIBPSCountdown();
  const stats = readExamStats('ibps_po');
  renderIBPSDonut(stats);
  renderIBPSMasterStats(stats);
  renderIBPSSubjectCards(stats);
  renderIBPSFocusBox(stats);
  renderIBPSSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'ibps_po');
  refreshIBPSUI();
});

window.addEventListener('cloudDataSynced', refreshIBPSUI);
window.addEventListener('storage', refreshIBPSUI);
