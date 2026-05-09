// dashboard.js — loaded ONLY on index.html

function renderCountdown() {
  const days = getCountdown();
  const el   = document.getElementById('countdown-days');
  const badge = document.getElementById('countdown-badge');
  if (!el) return;
  el.textContent = days > 0 ? days : '0';
  const color = days < 30 ? 'var(--accent-red)' : days < 60 ? 'var(--accent-amber)' : 'var(--accent-green)';
  el.style.color   = color;
  if (badge) { badge.textContent = days > 0 ? 'days left' : 'NQT Exam Day!'; badge.style.color = color; }
}

function renderDonutRing(stats) {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;
  const R = 54, C = 2 * Math.PI * R;
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const total     = 178;
  const pct       = Math.round((grandDone / total) * 100);

  // NQT done
  let nqtDone = 0, sscDone = 0;
  for (const [subj, v] of Object.entries(stats)) {
    nqtDone += Math.min(v.p1done, NQT_MAX[subj]);
    sscDone += Math.min(v.p2done, SSC_MAX[subj]);
  }
  const nqtArc = (nqtDone / total) * C;
  const sscArc = (sscDone / total) * C;
  const nqtOff = C - nqtArc;
  const sscOff = C - sscArc;
  const nqtRot = -90;
  const sscRot = -90 + (nqtDone / total) * 360;

  svg.innerHTML = `
    <circle cx="60" cy="60" r="${R}" fill="none" stroke="#222640" stroke-width="10"/>
    <circle cx="60" cy="60" r="${R}" fill="none" stroke="#7F77DD" stroke-width="10"
      stroke-dasharray="${C}" stroke-dashoffset="${nqtOff}"
      stroke-linecap="round" transform="rotate(${nqtRot} 60 60)" style="transition:stroke-dashoffset 1.2s ease"/>
    <circle cx="60" cy="60" r="${R}" fill="none" stroke="#1D9E75" stroke-width="10"
      stroke-dasharray="${C}" stroke-dashoffset="${sscOff}"
      stroke-linecap="round" transform="rotate(${sscRot} 60 60)" style="transition:stroke-dashoffset 1.2s ease"/>
    <text x="60" y="56" text-anchor="middle" font-family="JetBrains Mono" font-size="16" font-weight="600" fill="#F0F2FF">${pct}%</text>
    <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/178</text>`;
}

function renderMasterStats(stats) {
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct       = Math.round((grandDone / 178) * 100);
  let nqtDone = 0, sscDone = 0;
  for (const [subj, v] of Object.entries(stats)) {
    nqtDone += Math.min(v.p1done, NQT_MAX[subj]);
    sscDone += Math.min(v.p2done, SSC_MAX[subj]);
  }
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ms-total-done',     grandDone);
  set('ms-overall-pct',    pct + '%');
  set('ms-nqt-done',       nqtDone + ' / 91');
  set('ms-ssc-done',       sscDone + ' / 59');
}

function renderSubjectCards(stats) {
  const subjects = [
    { key: 'speedmath', label: 'Speed Math',        icon: '⚡', color: SUBJECT_COLORS.speedmath.primary, link: 'tracker-speedmath.html' },
    { key: 'quant',     label: 'Quant',             icon: '🔢', color: SUBJECT_COLORS.quant.primary,     link: 'tracker-quant.html' },
    { key: 'reasoning', label: 'Reasoning',         icon: '🧠', color: SUBJECT_COLORS.reasoning.primary, link: 'tracker-reasoning.html' },
    { key: 'english',   label: 'English',           icon: '📝', color: SUBJECT_COLORS.english.primary,   link: 'tracker-english.html' },
    { key: 'coding',    label: 'NQT Coding',        icon: '💻', color: SUBJECT_COLORS.coding.primary,    link: 'tracker-coding.html' },
    { key: 'gk',        label: 'General Knowledge', icon: '🌍', color: SUBJECT_COLORS.gk.primary,        link: 'tracker-gk.html' },
  ];
  const container = document.getElementById('subject-cards');
  if (!container) return;
  container.innerHTML = subjects.map((s, idx) => {
    const d    = stats[s.key];
    const p1p  = d.p1 > 0 ? Math.round((d.p1done / d.p1) * 100) : 100;
    const p2p  = d.p2 > 0 ? Math.round((d.p2done / d.p2) * 100) : 0;
    const totp = Math.round((d.done / d.total) * 100);
    const wide = idx === 5 ? ' subject-card--wide' : '';
    return `<div class="subject-card${wide}" style="--subj-color:${s.color}">
      <div class="sc-header">
        <div class="sc-title"><span class="sc-icon">${s.icon}</span>${s.label}</div>
        <span class="sc-pct" style="color:${s.color};font:700 20px/1 'JetBrains Mono'">${totp}%</span>
      </div>
      <div class="sc-phases">
        <div class="sc-phase">
          <div class="sc-phase-label"><span>Phase 1</span><span class="badge badge--nqt">NQT</span><span class="sc-phase-count">${d.p1done}/${d.p1}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="background:${s.color}" data-w="${p1p}"></div></div>
        </div>
        ${d.p2 > 0 ? `<div class="sc-phase">
          <div class="sc-phase-label"><span>Phase 2</span><span class="badge badge--ssc">SSC</span><span class="sc-phase-count">${d.p2done}/${d.p2}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="background:#1D9E75" data-w="${p2p}"></div></div>
        </div>` : ''}
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

function renderTimeline() {
  const pct = getTimelineProgress();
  const bar = document.getElementById('timeline-bar');
  const marker = document.getElementById('timeline-today');
  if (bar)    setTimeout(() => { bar.style.width = pct + '%'; }, 200);
  if (marker) setTimeout(() => { marker.style.left = pct + '%'; }, 200);
}

function renderFocusBox(stats) {
  const box = document.getElementById('focus-box');
  if (!box) return;
  const p1s = [
    { label: 'Speed Math', pct: Math.round((stats.speedmath.p1done / stats.speedmath.p1) * 100) || 0 },
    { label: 'Quant',      pct: Math.round((stats.quant.p1done     / stats.quant.p1)     * 100) || 0 },
    { label: 'Reasoning',  pct: Math.round((stats.reasoning.p1done / stats.reasoning.p1) * 100) || 0 },
    { label: 'Coding',     pct: Math.round((stats.coding.p1done    / stats.coding.p1)    * 100) || 0 },
    { label: 'English',    pct: Math.round((stats.english.p1done   / stats.english.p1)   * 100) || 0 },
    { label: 'GK P1',      pct: Math.round((stats.gk.p1done        / stats.gk.p1)        * 100) || 0 },
  ];
  const weak = p1s.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
  const allStrong = p1s.every(s => s.pct >= 80);
  if (allStrong) {
    box.innerHTML = `<div class="focus-on-track">🚀 On track — maintain momentum! All Phase 1 above 80%.</div>`;
  } else if (weak.length === 0) {
    box.innerHTML = `<div class="focus-on-track">✅ All Phase 1 above 50%. Push for 80%!</div>`;
  } else {
    box.innerHTML = `<div class="focus-title">⚡ Focus Now — Phase 1 Below 50%</div>
    <div class="focus-items">${weak.map(s => `
      <div class="focus-item">
        <span class="focus-subject">${s.label}</span>
        <span class="focus-pct">${s.pct}%</span>
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
      </div>`).join('')}</div>`;
  }
}

function renderSmartSuggestion(stats) {
  const box = document.getElementById('smart-box');
  if (!box) return;
  const c = stats.coding, q = stats.quant, r = stats.reasoning;
  let msg = '', color = 'var(--accent-green)';
  if (c.p1done < c.p1) {
    msg = `📌 Finish Coding Level 1 before anything else. (${c.p1done}/${c.p1} done)`;
    color = 'var(--accent-amber)';
  } else if (q.p1done < q.p1 || r.p1done < r.p1) {
    msg = `📌 Finish Quant & Reasoning Phase 1 first — NQT is soon.`;
    color = 'var(--accent-amber)';
  } else if ([stats.speedmath, stats.quant, stats.reasoning, stats.coding, stats.english].every(s => s.p1done / s.p1 > 0.9)) {
    msg = `🌟 Excellent! All Phase 1 above 90%. Start Phase 2 subjects.`;
    color = 'var(--accent-green)';
  } else {
    msg = `💡 Keep going on Phase 1. Quant + Reasoning are your highest-ROI subjects right now.`;
  }
  box.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCountdown();
  renderTimeline();
  const stats = readStats();
  renderDonutRing(stats);
  renderMasterStats(stats);
  renderSubjectCards(stats);
  renderFocusBox(stats);
  renderSmartSuggestion(stats);
});

// subjectKey = 'quant' | 'reasoning' | 'english' | 'gk' | 'coding' | 'speedmath'
function injectPriorityData(subjectKey) {
  if (!window.PRIORITY_DATA) return;

  const doInject = (root) => {
    // Inject the necessary CSS for grid-based table structure
    if (root !== document && !root.getElementById('priority-styles')) {
      const style = root.createElement('style');
      style.id = 'priority-styles';
      style.textContent = `
        .priority-badge {
          display: inline-block; font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px;
          letter-spacing: 0.02em; text-transform: uppercase; white-space: nowrap; text-align: center;
        }
        .priority-VERY-HIGH { background: rgba(239,68,68,0.15);   color: #F87171; border: 1px solid rgba(239,68,68,0.3);   }
        .priority-HIGH      { background: rgba(251,146,60,0.15);  color: #FB923C; border: 1px solid rgba(251,146,60,0.3);  }
        .priority-MEDIUM    { background: rgba(250,204,21,0.12);  color: #FCD34D; border: 1px solid rgba(250,204,21,0.25); }
        .priority-LOW       { background: rgba(148,163,184,0.10); color: #94A3B8; border: 1px solid rgba(148,163,184,0.2); }
        .priority-SKIP      { background: rgba(100,116,139,0.10); color: #64748B; border: 1px solid rgba(100,116,139,0.15); text-decoration: line-through; }

        .meta-pill { 
          font-size: 10px; color: #9BA3C4; background: rgba(255,255,255,0.04); 
          border: 1px solid rgba(255,255,255,0.08); padding: 3px 6px; border-radius: 4px; 
          white-space: nowrap; text-align: center;
        }
        .meta-pill.ssc-qs { color: #7F77DD; border-color: rgba(127,119,221,0.25); }
        .meta-pill.days   { color: #1D9E75; border-color: rgba(29,158,117,0.25);  }
        
        /* Grid Table Layout */
        .tr { padding: 10px 14px !important; transition: background 0.2s; }
        .ct { 
          display: grid !important; 
          grid-template-columns: 20px 24px 1fr 100px 75px 75px !important; 
          align-items: center !important; 
          gap: 12px !important; 
          width: 100% !important; 
        }
        .chapter-meta { display: contents !important; }
        
        /* Mobile adjustment */
        @media (max-width: 650px) {
          .ct { 
            grid-template-columns: 20px 24px 1fr !important; 
            grid-template-rows: auto auto !important;
            gap: 8px !important;
          }
          .chapter-meta { 
            display: flex !important; 
            grid-column: 3 / -1 !important; 
            gap: 6px !important;
            margin-top: 4px !important;
          }
        }
      `;
      root.head.appendChild(style);
    }

    root.querySelectorAll('.tr').forEach(card => {
      const chNum = card.getAttribute('data-n');
      if (!chNum) return;

      const data = window.PRIORITY_DATA[subjectKey + '_' + chNum];
      if (!data) return;

      if (card.querySelector('.chapter-meta')) return;

      const ct = card.querySelector('.ct');
      if (!ct) return;

      const priorityClass = 'priority-' + data.priority.replace(' ', '-');
      const sscHTML = data.sscQs !== '—' ? `<span class="meta-pill ssc-qs">📊 ${data.sscQs} Qs</span>` : '<span></span>';
      const daysHTML = `<span class="meta-pill days">⏱ ${data.days}</span>`;

      const meta = root.createElement('div');
      meta.className = 'chapter-meta';
      meta.innerHTML = `
        <span class="priority-badge ${priorityClass}">${data.priority}</span>
        ${sscHTML}
        ${daysHTML}
      `;
      
      ct.appendChild(meta);
    });
  };

  const attempt = () => {
    doInject(document);
    document.querySelectorAll('iframe').forEach(iframe => {
      try {
        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
          doInject(iframe.contentDocument);
        } else {
          iframe.onload = () => doInject(iframe.contentDocument);
        }
      } catch (e) {}
    });
  };

  attempt();
  setTimeout(attempt, 600);
  setTimeout(attempt, 2000);
}


