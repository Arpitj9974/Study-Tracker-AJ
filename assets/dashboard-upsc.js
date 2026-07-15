// dashboard-upsc.js — UPSC CSE-specific dashboard logic

const UPSC_SUBJECTS = [
  { key: "upsc_polity",           label: "Indian Polity",            icon: "⚖️", color: "#3B5BDB", link: "tracker-upsc.html?subj=upsc_polity" },
  { key: "upsc_modern_history",   label: "Modern History",           icon: "✊", color: "#B04A2F", link: "tracker-upsc.html?subj=upsc_modern_history" },
  { key: "upsc_geography",        label: "Geography",                icon: "🌍", color: "#2B8A6E", link: "tracker-upsc.html?subj=upsc_geography" },
  { key: "upsc_economy",          label: "Indian Economy",           icon: "📈", color: "#B7791F", link: "tracker-upsc.html?subj=upsc_economy" },
  { key: "upsc_env_eco",          label: "Environment & Ecology",    icon: "🌿", color: "#4C9A3F", link: "tracker-upsc.html?subj=upsc_env_eco" },
  { key: "upsc_ancient_medieval", label: "Ancient & Medieval",       icon: "🏺", color: "#8C6239", link: "tracker-upsc.html?subj=upsc_ancient_medieval" },
  { key: "upsc_art_culture",      label: "Art & Culture",            icon: "🎭", color: "#A64D9C", link: "tracker-upsc.html?subj=upsc_art_culture" },
  { key: "upsc_sci_tech",         label: "Science & Tech",           icon: "🔬", color: "#2C7A9E", link: "tracker-upsc.html?subj=upsc_sci_tech" },
  { key: "upsc_ir_security",      label: "IR & Security",            icon: "🌐", color: "#5F5AA2", link: "tracker-upsc.html?subj=upsc_ir_security" },
  { key: "upsc_ethics_gs4",       label: "Ethics (GS-4)",            icon: "🧭", color: "#6B7280", link: "tracker-upsc.html?subj=upsc_ethics_gs4" },
  { key: "upsc_csat_aptitude",    label: "CSAT Aptitude",            icon: "🧮", color: "#B34747", link: "tracker-upsc.html?subj=upsc_csat_aptitude" },
];

const UPSC_TOTAL = 126;

function renderUPSCCountdown() {
  const examDate = new Date(EXAM_CONFIG.upsc.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#3B5BDB';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left' : 'Prelims Exam Day!'; badge.style.color = color; }
}

function renderUPSCDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / UPSC_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = UPSC_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / UPSC_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${UPSC_TOTAL}</text>`;
}

function renderUPSCMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / UPSC_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderUPSCSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = UPSC_SUBJECTS.map((s) => {
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

function renderUPSCFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = UPSC_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All 11 UPSC modules above 80%. Shift to intensive PYQ & Answer Writing practice!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All UPSC core modules above 50%. Focus on revision and weak topics!</div>`;
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

function renderUPSCSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const polity = stats.upsc_polity ? stats.upsc_polity.done : 0;
  const history = stats.upsc_modern_history ? stats.upsc_modern_history.done : 0;
  const eco = stats.upsc_economy ? stats.upsc_economy.done : 0;
  const geo = stats.upsc_geography ? stats.upsc_geography.done : 0;

  let msg = '', color = '#3B5BDB';
  if (polity < 15 || eco < 10) {
    msg = `📌 Core Foundation First: Prioritize Polity and Economy. They carry ~35-40% weightage in Prelims and form the baseline for Mains.`;
    color = 'var(--accent-amber)';
  } else if (history < 10 || geo < 10) {
    msg = `📌 High Yield Phase: Focus on Modern Indian History & Physical/Indian Geography. Integrated Map practice is key.`;
    color = 'var(--accent-amber)';
  } else {
    msg = `💡 Balanced Prep: Consolidate Environment, Sci-Tech & CSAT diagnostic mocks weekly alongside GS revision.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshUPSCUI() {
  renderUPSCCountdown();
  const stats = readExamStats('upsc');
  renderUPSCDonut(stats);
  renderUPSCMasterStats(stats);
  renderUPSCSubjectCards(stats);
  renderUPSCFocusBox(stats);
  renderUPSCSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'upsc');
  refreshUPSCUI();
});

window.addEventListener('cloudDataSynced', refreshUPSCUI);
window.addEventListener('storage', refreshUPSCUI);
