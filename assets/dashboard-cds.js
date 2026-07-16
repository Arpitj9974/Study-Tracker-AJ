// dashboard-cds.js — UPSC CDS Exam-specific dashboard logic

const CDS_SUBJECTS = [
  { key: "cds_gk", label: "General Knowledge",       icon: "🌍", color: "#F59E0B", link: "tracker-cds.html?subj=cds_gk", otaExcluded: false },
  { key: "cds_en", label: "English",                 icon: "📝", color: "#10B981", link: "tracker-cds.html?subj=cds_en", otaExcluded: false },
  { key: "cds_ma", label: "Elementary Mathematics", icon: "📐", color: "#3B82F6", link: "tracker-cds.html?subj=cds_ma", otaExcluded: true }
];

const CDS_TOTAL = 30;

function renderCDSCountdown() {
  const examDate = new Date(EXAM_CONFIG.cds.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : '#10B981';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left (Confirmed)' : 'CDS 2 Exam Day!'; badge.style.color = color; }
}

function renderCDSDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CDS_TOTAL) * 100);

  let usedAngle = 0;
  const arcs = CDS_SUBJECTS.map(s => {
    const d = stats[s.key] || { done: 0 };
    const subjPct = d.done / CDS_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${CDS_TOTAL}</text>`;
}

function renderCDSMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / CDS_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderCODSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = CDS_SUBJECTS.map((s) => {
    const d = stats[s.key] || { done: 0, total: 10 };
    const totp = d.total > 0 ? Math.round((d.done / d.total) * 100) : 0;
    const otaLabel = s.otaExcluded ? `<span class="sc-ota-badge">IMA/INA/AFA Only</span>` : '';
    return `<div class="subject-card" style="--subj-color:${s.color}">
      <div class="sc-header">
        <div class="sc-title"><span class="sc-icon">${s.icon}</span>${s.label} ${otaLabel}</div>
        <span class="sc-pct" style="color:${s.color};font:700 20px/1 'JetBrains Mono'">${totp}%</span>
      </div>
      <div class="sc-phases">
        <div class="sc-phase">
          <div class="sc-phase-label"><span>Chapters Completed</span><span class="sc-phase-count">${d.done}/${d.total}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="background:${s.color}" data-w="${totp}"></div></div>
        </div>
      </div>
      <a href="${s.link}" class="sc-link">View Paper Syllabus →</a>
    </div>`;
  }).join('');
  setTimeout(() => {
    container.querySelectorAll('.progress-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 100);
}

function renderCDSFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = CDS_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 Excellent! All 3 CDS papers above 80%. Master 2-hour offline OMR timed practice!</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All CDS papers above 50%. Focus on Science weightage in GK & English accuracy under −1/3 marking!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ High Importance Papers (< 50% Complete)</div>
    <div class="focus-items">${weak.map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderCDSSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const gk = stats.cds_gk ? stats.cds_gk.done : 0;
  const en = stats.cds_en ? stats.cds_en.done : 0;
  const ma = stats.cds_ma ? stats.cds_ma.done : 0;

  let msg = '', color = '#10B981';
  if (gk < 4) {
    msg = `📌 Science is King in CDS GK: Physics, Chemistry & Biology account for 25–35 questions (~25% of GK paper). Master NCERT Class 9-10 Science first!`;
    color = 'var(--accent-amber)';
  } else if (en < 3) {
    msg = `📌 High ROI English: CDS English has 120 Qs with no higher-level literature. Spotting Errors (20 Qs) and Vocab (30 Qs) offer maximum scoring speed!`;
    color = 'var(--accent-amber)';
  } else if (ma < 4) {
    msg = `📌 Elementary Maths Focus: CDS Maths is strictly Class 10 level — Arithmetic, Geometry, Trigonometry, and Mensuration. Daily practice secures IMA/INA cutoffs!`;
  } else {
    msg = `💡 Sectional Cutoff Reminder: UPSC requires a minimum ~20% in each paper. Ensure you attempt with high precision to clear all paper cutoffs cleanly!`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

function refreshCDSUI() {
  renderCDSCountdown();
  const stats = readExamStats('cds');
  renderCDSDonut(stats);
  renderCDSMasterStats(stats);
  renderCODSubjectCards(stats);
  renderCDSFocusBox(stats);
  renderCDSSmartSuggestion(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'cds');
  refreshCDSUI();
});

window.addEventListener('cloudDataSynced', refreshCDSUI);
window.addEventListener('storage', refreshCDSUI);
