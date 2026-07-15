// dashboard-jee.js — JEE Main + Advanced Exam-specific dashboard logic

const JEE_SUBJECTS = [
  { key: "jee_phy", label: "Physics",     icon: "⚛️", color: "#3B5BDB", link: "tracker-jee.html?subj=jee_phy" },
  { key: "jee_che", label: "Chemistry",   icon: "🧪", color: "#2B8A6E", link: "tracker-jee.html?subj=jee_che" },
  { key: "jee_mat", label: "Mathematics", icon: "📐", color: "#B7791F", link: "tracker-jee.html?subj=jee_mat" }
];

const JEE_TOTAL = 56;

function renderJEECountdown() {
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = 'Jan 2027';
  if (badge) { badge.textContent = 'Session 1 Target'; badge.style.color = '#3B5BDB'; }
}

function renderJEEDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / JEE_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = JEE_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / JEE_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${JEE_TOTAL}</text>`;
}

function renderJEEMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / JEE_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderJEESubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = JEE_SUBJECTS.map((s) => {
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

function renderJEEFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = JEE_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All 3 PCM subjects above 80%. Focus on full-length JEE Main & Advanced mocks!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All PCM subjects above 50%. Focus on solving past 5 years PYQs!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ High Importance Areas (< 50% Complete)</div>
    <div class="focus-items">${weak.slice(0, 3).map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderJEESmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const che = stats.jee_che ? stats.jee_che.done : 0;
  const phy = stats.jee_phy ? stats.jee_phy.done : 0;
  const mat = stats.jee_mat ? stats.jee_mat.done : 0;

  let msg = '', color = '#3B5BDB';
  if (che < 10) {
    msg = `📌 High ROI Chemistry: Chemistry is the highest scoring and fastest subject in JEE Main. Prioritize Chemical Bonding, Coordination Compounds, GOC & Hydrocarbons.`;
    color = 'var(--accent-amber)';
  } else if (phy < 10 || mat < 8) {
    msg = `📌 Core Problem Solving: Mechanics, Electrodynamics, Matrices, Complex Numbers & Calculus are essential score drivers for Main & Advanced.`;
    color = 'var(--accent-amber)';
  } else {
    msg = `💡 Advanced Practice: Solve multi-concept Advanced level problem sets and timed JEE Main 3-hour tests.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshJEEUI() {
  renderJEECountdown();
  const stats = readExamStats('jee');
  renderJEEDonut(stats);
  renderJEEMasterStats(stats);
  renderJEESubjectCards(stats);
  renderJEEFocusBox(stats);
  renderJEESmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'jee');
  refreshJEEUI();
});

window.addEventListener('cloudDataSynced', refreshJEEUI);
window.addEventListener('storage', refreshJEEUI);
