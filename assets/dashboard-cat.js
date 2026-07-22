// dashboard-cat.js — CAT MBA Exam-specific dashboard logic

const CAT_SUBJECTS = [
  { key: "cat_qa",   label: "Quantitative Ability", icon: "🔢", color: "#E67E22", link: "tracker-cat.html?subj=cat_qa" },
  { key: "cat_dilr", label: "DILR",                 icon: "🧩", color: "#27AE60", link: "tracker-cat.html?subj=cat_dilr" },
  { key: "cat_varc", label: "VARC",                 icon: "📖", color: "#2E86C1", link: "tracker-cat.html?subj=cat_varc" }
];

const CAT_TOTAL = 42;

function renderCATCountdown() {
  const examDate = new Date(EXAM_CONFIG.cat.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#E67E22';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left (Est)' : 'CAT Exam Day!'; badge.style.color = color; }
}

function renderCATDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CAT_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = CAT_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / CAT_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${CAT_TOTAL}</text>`;
}

function renderCATMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CAT_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-total-chapters', CAT_TOTAL);
  set('ms-subj-count', CAT_SUBJECTS.length);
  set('ms-overall-pct', pct + '%');
}

function renderCATSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = CAT_SUBJECTS.map((s) => {
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

function renderCATFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = CAT_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Excellent! All 3 CAT sections above 80%. Shift focus to 120-minute full-length mocks & sectional tests!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All CAT sections above 50%. Focus on DILR set selection & QA accuracy under 40-min timer!</div>`;
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

function renderCATSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const qa  = stats.cat_qa ? stats.cat_qa.done : 0;
  const dilr = stats.cat_dilr ? stats.cat_dilr.done : 0;
  const varc = stats.cat_varc ? stats.cat_varc.done : 0;

  let msg = '', color = '#E67E22';
  if (qa < 8) {
    msg = `📌 Arithmetic First: Arithmetic makes up ~7-10 questions in QA and powers calculation-heavy DI sets. Complete Percentages, Ratio, TSD & Work first!`;
    color = 'var(--accent-amber)';
  } else if (varc < 3) {
    msg = `📌 Daily RC Habit: Reading Comprehension carries 16 out of 24 VARC questions (~67% of section marks). Read 2 diversity essays (Aeon, Guardian, Eco Times) daily!`;
    color = 'var(--accent-amber)';
  } else if (dilr < 5) {
    msg = `📌 Set Selection Mastery: DILR requires solving 2-3 complete sets in 40 minutes. Practice Arrangements, Grids & Games-Tournaments sets daily under timer.`;
  } else {
    msg = `💡 Mock Test Mode: Focus on 40-minute sectional timers, option elimination strategy, and TITA question accuracy.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshCATUI() {
  renderCATCountdown();
  const stats = readExamStats('cat');
  renderCATDonut(stats);
  renderCATMasterStats(stats);
  renderCATSubjectCards(stats);
  renderCATFocusBox(stats);
  renderCATSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'cat');
  refreshCATUI();
});

window.addEventListener('cloudDataSynced', refreshCATUI);
window.addEventListener('storage', refreshCATUI);
