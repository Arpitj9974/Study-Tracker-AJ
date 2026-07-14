// dashboard-nqt.js — NQT-specific dashboard logic

const NQT_SUBJECTS = [
  { key: 'speedmath', label: 'Speed Math',  icon: '⚡', color: SUBJECT_COLORS.speedmath.primary, link: 'tracker-speedmath.html' },
  { key: 'quant',     label: 'Quant',       icon: '🔢', color: SUBJECT_COLORS.quant.primary,     link: 'tracker-quant.html' },
  { key: 'reasoning', label: 'Reasoning',   icon: '🧠', color: SUBJECT_COLORS.reasoning.primary, link: 'tracker-reasoning.html' },
  { key: 'english',   label: 'English',     icon: '📝', color: SUBJECT_COLORS.english.primary,   link: 'tracker-english.html' },
  { key: 'coding',    label: 'NQT Coding',  icon: '💻', color: SUBJECT_COLORS.coding.primary,    link: 'tracker-coding.html' },
];

const NQT_TOTAL = 119;

function renderNQTCountdown() {
  const examDate = new Date(EXAM_CONFIG.nqt.examDate + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : 'var(--accent-green)';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left' : 'NQT Exam Day!'; badge.style.color = color; }
}

function renderNQTDonut(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / NQT_TOTAL) * 100);

  // Per-subject arcs
  let usedAngle = 0;
  const arcs = NQT_SUBJECTS.map(s => {
    const d = stats[s.key];
    const subjPct = d.done / NQT_TOTAL;
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
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${NQT_TOTAL}</text>`;
}

function renderNQTMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct = Math.round((grandDone / NQT_TOTAL) * 100);
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done', grandDone);
  set('ms-overall-pct', pct + '%');
}

function renderNQTSubjectCards(stats) {
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = NQT_SUBJECTS.map((s, idx) => {
    const d = stats[s.key];
    const totp = d.total > 0 ? Math.round((d.done / d.total) * 100) : 0;
    const wide = idx === NQT_SUBJECTS.length - 1 && NQT_SUBJECTS.length % 2 !== 0 ? ' subject-card--wide' : '';
    return `<div class="subject-card${wide}" style="--subj-color:${s.color}">
      <div class="sc-header">
        <div class="sc-title"><span class="sc-icon">${s.icon}</span>${s.label}</div>
        <span class="sc-pct" style="color:${s.color};font:700 20px/1 'JetBrains Mono'">${totp}%</span>
      </div>
      <div class="sc-phases">
        <div class="sc-phase">
          <div class="sc-phase-label"><span>Progress</span><span class="badge badge--nqt">NQT</span><span class="sc-phase-count">${d.done}/${d.total}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="background:${s.color}" data-w="${totp}"></div></div>
        </div>
      </div>
      <a href="${s.link}" class="sc-link">View Full Tracker →</a>
    </div>`;
  }).join('');
  setTimeout(() => {
    container.querySelectorAll('.progress-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 100);
}

function renderNQTFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const items = NQT_SUBJECTS.map(s => ({
    label: s.label,
    pct: stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
  }));
  const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = items.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 On track — maintain momentum! All NQT subjects above 80%.</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All NQT subjects above 50%. Push for 80%!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ Focus Now — Below 50%</div>
    <div class="focus-items">${weak.map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderNQTSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const c = stats.coding, q = stats.quant, r = stats.reasoning;
  let msg = '', color = 'var(--accent-green)';
  if (c.done < c.total) {
    msg = `📌 Finish Coding first — it's NQT-only and high ROI. (${c.done}/${c.total} done)`;
    color = 'var(--accent-amber)';
  } else if (q.done < q.total || r.done < r.total) {
    msg = `📌 Focus on Quant & Reasoning — these are your biggest NQT sections.`;
    color = 'var(--accent-amber)';
  } else if (NQT_SUBJECTS.every(s => stats[s.key].done / stats[s.key].total > 0.9)) {
    msg = `🌟 Excellent! All NQT subjects above 90%. You're NQT-ready!`;
    color = 'var(--accent-green)';
  } else {
    msg = `💡 Keep pushing — Quant + Reasoning are your highest-ROI subjects for NQT.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('selectedExam', 'nqt');
  renderNQTCountdown();
  const stats = readExamStats('nqt');
  renderNQTDonut(stats);
  renderNQTMasterStats(stats);
  renderNQTSubjectCards(stats);
  renderNQTFocusBox(stats);
  renderNQTSmartSuggestion(stats);
});
