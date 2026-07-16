// dashboard-neet.js — NEET UG Exam-specific dashboard logic

const NEET_SUBJECTS = [
  { key: "neet_bot", label: "Botany",    icon: "🌱", color: "#4C9A3F", link: "tracker-neet.html?subj=neet_bot" },
  { key: "neet_zoo", label: "Zoology",   icon: "🧬", color: "#B04A2F", link: "tracker-neet.html?subj=neet_zoo" },
  { key: "neet_che", label: "Chemistry", icon: "🧪", color: "#7C3AED", link: "tracker-neet.html?subj=neet_che" },
  { key: "neet_phy", label: "Physics",   icon: "⚛️", color: "#3B5BDB", link: "tracker-neet.html?subj=neet_phy" }
];

const NEET_TOTAL = 70;

function renderNEETCountdown() {
  const examDate = new Date(EXAM_CONFIG.neet_ug.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#4C9A3F';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left (Est)' : 'NEET Exam Day!'; badge.style.color = color; }
}

function renderNEETDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / NEET_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = NEET_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / NEET_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${NEET_TOTAL}</text>`;
}

function renderNEETMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / NEET_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderNEETSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = NEET_SUBJECTS.map((s) => {
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

function renderNEETFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = NEET_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All 4 NEET subjects above 80%. Target full 180-min speed OMR practice!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All NEET subjects above 50%. Focus on NCERT line-by-line Biology drills & PYQs!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ High Yield Focus Areas (< 50% Complete)</div>
    <div class="focus-items">${weak.slice(0, 4).map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderNEETSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const bot = stats.neet_bot ? stats.neet_bot.done : 0;
  const zoo = stats.neet_zoo ? stats.neet_zoo.done : 0;
  const che = stats.neet_che ? stats.neet_che.done : 0;

  let msg = '', color = '#4C9A3F';
  if (bot + zoo < 20) {
    msg = `📌 Biology Dominance (360/720 marks): NCERT Botany & Zoology carry 50% of the total score. Memorize NCERT diagrams, summary tables, and examples daily!`;
    color = 'var(--accent-amber)';
  } else if (che < 10) {
    msg = `📌 High ROI Chemistry: Master Inorganic NCERT lines & Organic reaction mechanisms. Chemistry is the key rank booster for top 650+ scores.`;
    color = 'var(--accent-amber)';
  } else {
    msg = `💡 Speed & Accuracy Drills: Master Physics formula application and practice 180 questions under 180 minutes timer.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshNEETUI() {
  renderNEETCountdown();
  const stats = readExamStats('neet_ug');
  renderNEETDonut(stats);
  renderNEETMasterStats(stats);
  renderNEETSubjectCards(stats);
  renderNEETFocusBox(stats);
  renderNEETSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'neet_ug');
  refreshNEETUI();
});

window.addEventListener('cloudDataSynced', refreshNEETUI);
window.addEventListener('storage', refreshNEETUI);
