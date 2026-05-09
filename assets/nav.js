// Storage polyfill
if (!window.storage) {
  window.storage = {
    get: async (k) => ({ value: localStorage.getItem(k) }),
    set: async (k, v) => localStorage.setItem(k, v),
    delete: async (k) => localStorage.removeItem(k)
  };
}

const SUBJECT_COLORS = {
  speedmath: { primary: '#F97316', dim: '#EA580C', bg: '#2A1500' },
  quant:     { primary: '#7F77DD', dim: '#534AB7', bg: '#26215C' },
  reasoning: { primary: '#3B82F6', dim: '#1D4ED8', bg: '#0C2A3D' },
  coding:    { primary: '#D97706', dim: '#B45309', bg: '#3B2000' },
  english:   { primary: '#1D9E75', dim: '#0F6E56', bg: '#04342C' },
  gk:        { primary: '#EC4899', dim: '#BE185D', bg: '#3D0022' },
};

const KEYS = {
  speedmath: { prefix: 'sm_',  total: 28, p1: 28 },
  quant:     { prefix: 'qt3_', total: 41, p1: 27 },
  reasoning: { prefix: 'rs3_', total: 44, p1: 23 },
  coding:    { prefix: 'cdf_', total: 16, p1: 16 },
  english:   { prefix: 'en_',  total: 26, p1: 25 },
  gk:        { prefix: 'gk_', total: 23, p1: 12 },
};

const NQT_MAX = { speedmath: 0, quant: 27, reasoning: 23, coding: 16, english: 25, gk: 0  };
const SSC_MAX = { speedmath: 0, quant: 14, reasoning: 21, coding: 0,  english: 1,  gk: 23 };

// ── Read all stats from localStorage ──────────────────────────────────────────
function readStats() {
  const results = {};
  for (const [subj, cfg] of Object.entries(KEYS)) {
    let done = 0, p1done = 0, p2done = 0;
    for (let i = 1; i <= cfg.total; i++) {
      if (localStorage.getItem(cfg.prefix + i) === '1') {
        done++;
        if (i <= cfg.p1) p1done++; else p2done++;
      }
    }
    results[subj] = { done, p1done, p2done, total: cfg.total, p1: cfg.p1, p2: cfg.total - cfg.p1 };
  }
  return results;
}

// ── Countdown ──────────────────────────────────────────────────────────────────
function getCountdown() {
  const nqt = new Date('2025-08-01T00:00:00');
  return Math.ceil((nqt - new Date()) / 86400000);
}

function getTimelineProgress() {
  const start = new Date('2025-05-01'), nqt = new Date('2025-08-01');
  return Math.max(0, Math.min(100, Math.round(((new Date() - start) / (nqt - start)) * 100)));
}

// ── Sidebar injection ─────────────────────────────────────────────────────────
function buildNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    { page: 'index.html',              href: 'index.html?v=3',              icon: '📊', label: 'Dashboard' },
    { page: 'tracker-speedmath.html',  href: 'tracker-speedmath.html?v=3',  icon: '⚡', label: 'Speed Math' },
    { page: 'tracker-quant.html',      href: 'tracker-quant.html?v=3',      icon: '🔢', label: 'Quant' },
    { page: 'tracker-reasoning.html',  href: 'tracker-reasoning.html?v=3',  icon: '🧠', label: 'Reasoning' },
    { page: 'tracker-english.html',    href: 'tracker-english.html?v=3',    icon: '📝', label: 'English' },
    { page: 'tracker-coding.html',     href: 'tracker-coding.html?v=3',     icon: '💻', label: 'NQT Coding' },
    { page: 'tracker-gk.html',         href: 'tracker-gk.html?v=3',         icon: '🌍', label: 'General Knowledge' },
  ];

  const stats   = readStats();
  const total   = 178;
  const done    = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct     = Math.round((done / total) * 100);
  const days    = getCountdown();
  let daysColor = '#1D9E75';
  if (days < 30) daysColor = '#EF4444';
  else if (days < 60) daysColor = '#D97706';

  const navLinks = links.map(l => {
    const active = (page === l.page) || (page === '' && l.page === 'index.html');
    return `<a href="${l.href}" class="nav-link${active ? ' active' : ''}" data-page="${l.page}">
      <span class="ni">${l.icon}</span>${l.label}
    </a>`;
  }).join('');

  const sidebarHTML = `
  <div id="sidebar">
    <div class="sidebar-brand">
      <h1>🎯 Arpit's Exam Hub</h1>
      <p>NQT · SSC · One Dashboard</p>
    </div>
    <div class="sidebar-divider"></div>
    <div class="nav-links">${navLinks}</div>
    <div class="sidebar-bottom">
      <div class="sidebar-divider"></div>
      <div class="sidebar-progress-block">
        <span class="spb-label">Overall Progress</span>
        <div class="spb-bar-wrap">
          <div class="spb-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="spb-numbers"><span>${done}</span> / ${total} done · ${pct}%</div>
      </div>
      <div class="sidebar-countdown">
        <span class="sc-label">NQT In</span>
        <div class="sc-days" style="color:${daysColor}">${days > 0 ? days : '🎯'}</div>
        <div class="sc-sub">${days > 0 ? 'days' : 'Exam Day!'}</div>
      </div>
      <button id="logout-btn" style="width:100%;background:rgba(239,68,68,0.1);color:#EF4444;border:1px solid rgba(239,68,68,0.2);padding:10px;border-radius:8px;font:600 12px/1 'DM Sans';cursor:pointer;margin-top:16px;transition:all 0.2s">Log Out</button>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  // Mobile bottom tabs
  const mobTabs = links.map(l => {
    const active = page === l.page;
    return `<a href="${l.href}" class="mob-tab${active ? ' active' : ''}">
      <span class="mt-icon">${l.icon}</span>${l.label.split(' ')[0]}
    </a>`;
  }).join('');
  document.body.insertAdjacentHTML('beforeend',
    `<nav id="mobile-tabs">${mobTabs}</nav>`);
}

// ── CSS variable injection into iframes ───────────────────────────────────────
function injectTheme(iframe) {
  try {
    const r = iframe.contentDocument.documentElement.style;
    r.setProperty('--font-sans',                 'DM Sans, sans-serif');
    r.setProperty('--font-mono',                 'JetBrains Mono, monospace');
    r.setProperty('--color-background-primary',  '#141720');
    r.setProperty('--color-background-secondary','#1C2030');
    r.setProperty('--color-text-primary',        '#F0F2FF');
    r.setProperty('--color-text-secondary',      '#9BA3C4');
    r.setProperty('--color-text-tertiary',       '#5A6080');
    r.setProperty('--color-border-tertiary',     'rgba(255,255,255,0.07)');
    r.setProperty('--color-border-secondary',    'rgba(255,255,255,0.12)');
    r.setProperty('--border-radius-md',          '8px');
    r.setProperty('--border-radius-lg',          '12px');
    r.setProperty('--bg-surface',                '#141720');
    r.setProperty('--bg-elevated',               '#1C2030');
    r.setProperty('--bg-hover',                  '#222640');
    r.setProperty('--border-subtle',             'rgba(255,255,255,0.07)');
    r.setProperty('--border-medium',             'rgba(255,255,255,0.12)');
    r.setProperty('--text-primary',              '#F0F2FF');
    r.setProperty('--text-secondary',            '#9BA3C4');
    r.setProperty('--text-tertiary',             '#5A6080');
    r.setProperty('--accent-purple',             '#7F77DD');
    r.setProperty('--accent-green',              '#1D9E75');
    r.setProperty('--accent-amber',              '#D97706');
    r.setProperty('--radius-md',                 '10px');
    r.setProperty('--radius-lg',                 '14px');
    // also set bg color on body
    iframe.contentDocument.body.style.background = '#141720';
    iframe.contentDocument.body.style.color       = '#F0F2FF';
  } catch(e) {}
}

function syncIframeHeight(iframe) {
  injectTheme(iframe);
  iframe.setAttribute('scrolling', 'no');
  
  const resize = () => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc || !doc.body) return;

      // Step 1: Make iframe very tall so content renders at its NATURAL height
      // (This is the key insight — content must NOT be constrained when measuring)
      iframe.style.height = '50000px';

      // Step 2: Find the actual content container inside the tracker
      const wrapper = doc.querySelector('.w, .wrap');
      
      let height;
      if (wrapper) {
        // Best case: measure the wrapper directly
        height = wrapper.offsetHeight;
      } else {
        // Fallback: measure the last element in the body
        const children = doc.body.children;
        if (children.length > 0) {
          const last = children[children.length - 1];
          height = last.offsetTop + last.offsetHeight;
        } else {
          height = doc.body.scrollHeight;
        }
      }

      // Step 3: Set iframe to exactly the content height + small breathing room
      if (height > 50) {
        iframe.style.height = (height + 32) + 'px';
      }
    } catch(e) {
      // If cross-origin or other error, set a reasonable fallback
      iframe.style.height = '800px';
    }
  };

  // Run at increasing intervals to catch async data loading from localStorage
  resize();
  setTimeout(resize, 300);
  setTimeout(resize, 800);
  setTimeout(resize, 2000);
}

// ── Mini stats for tracker header ─────────────────────────────────────────────
function renderMiniStats(subj, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const cfg = KEYS[subj];
  const col = SUBJECT_COLORS[subj];
  let done = 0, p1done = 0, p2done = 0;
  for (let i = 1; i <= cfg.total; i++) {
    if (localStorage.getItem(cfg.prefix + i) === '1') {
      done++; if (i <= cfg.p1) p1done++; else p2done++;
    }
  }
  const pct = Math.round((done / cfg.total) * 100);
  el.innerHTML = `
    <div class="th-stat">
      <div class="th-stat-val" style="color:${col.primary}">${done}</div>
      <div class="th-stat-lbl">Done of ${cfg.total}</div>
    </div>
    <div class="th-stat">
      <div class="th-stat-val" style="color:${col.primary}">${p1done}<span style="font-size:14px;color:#5A6080"> /${cfg.p1}</span></div>
      <div class="th-stat-lbl">Phase 1</div>
    </div>
    <div class="th-stat">
      <div class="th-stat-val" style="color:${col.primary}">${pct}%</div>
      <div class="th-stat-lbl">Complete</div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', buildNav);
