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
  // UPSC colors
  upsc_polity:           { primary: '#3B5BDB' },
  upsc_modern_history:   { primary: '#B04A2F' },
  upsc_geography:        { primary: '#2B8A6E' },
  upsc_economy:          { primary: '#B7791F' },
  upsc_env_eco:          { primary: '#4C9A3F' },
  upsc_ancient_medieval: { primary: '#8C6239' },
  upsc_art_culture:      { primary: '#A64D9C' },
  upsc_sci_tech:         { primary: '#2C7A9E' },
  upsc_ir_security:      { primary: '#5F5AA2' },
  upsc_ethics_gs4:       { primary: '#6B7280' },
  upsc_csat_aptitude:    { primary: '#B34747' },
};

const KEYS = {
  speedmath: { prefix: 'sm_',  total: 28, p1: 28 },
  quant:     { prefix: 'qt3_', total: 41, p1: 27 },
  reasoning: { prefix: 'rs3_', total: 44, p1: 23 },
  coding:    { prefix: 'cdf_', total: 16, p1: 16 },
  english:   { prefix: 'en_',  total: 26, p1: 25 },
  gk:        { prefix: 'gk_', total: 23, p1: 12 },
  // UPSC subjects
  upsc_polity:           { prefix: 'upsc_pol_', total: 23, p1: 23 },
  upsc_modern_history:   { prefix: 'upsc_mhi_', total: 14, p1: 14 },
  upsc_geography:        { prefix: 'upsc_geo_', total: 16, p1: 16 },
  upsc_economy:          { prefix: 'upsc_eco_', total: 14, p1: 14 },
  upsc_env_eco:          { prefix: 'upsc_env_', total: 10, p1: 10 },
  upsc_ancient_medieval: { prefix: 'upsc_anc_', total: 10, p1: 10 },
  upsc_art_culture:      { prefix: 'upsc_art_', total: 8,  p1: 8  },
  upsc_sci_tech:         { prefix: 'upsc_sct_', total: 8,  p1: 8  },
  upsc_ir_security:      { prefix: 'upsc_irs_', total: 8,  p1: 8  },
  upsc_ethics_gs4:       { prefix: 'upsc_eth_', total: 8,  p1: 8  },
  upsc_csat_aptitude:    { prefix: 'upsc_csa_', total: 7,  p1: 7  },
};

const NQT_MAX = { speedmath: 0, quant: 27, reasoning: 23, coding: 16, english: 25, gk: 0  };
const SSC_MAX = { speedmath: 0, quant: 14, reasoning: 21, coding: 0,  english: 1,  gk: 23 };

// ── Exam Configuration ────────────────────────────────────────────────────────
const EXAM_CONFIG = {
  nqt: {
    label: 'TCS NQT',
    color: '#7F77DD',
    icon: '🎯',
    subjects: ['speedmath', 'quant', 'reasoning', 'coding', 'english'],
    // For NQT, only count chapters up to p1
    countMode: 'p1',
    examDate: '2025-08-01',
    totalChapters: 119,
    links: [
      { page: 'dashboard-nqt.html', href: 'dashboard-nqt.html', icon: '📊', label: 'NQT Dashboard' },
      { page: 'tracker-speedmath.html', href: 'tracker-speedmath.html', icon: '⚡', label: 'Speed Math' },
      { page: 'tracker-quant.html',     href: 'tracker-quant.html',     icon: '🔢', label: 'Quant' },
      { page: 'tracker-reasoning.html', href: 'tracker-reasoning.html', icon: '🧠', label: 'Reasoning' },
      { page: 'tracker-english.html',   href: 'tracker-english.html',   icon: '📝', label: 'English' },
      { page: 'tracker-coding.html',    href: 'tracker-coding.html',    icon: '💻', label: 'NQT Coding' },
    ]
  },
  ssc: {
    label: 'SSC CGL',
    color: '#1D9E75',
    icon: '📋',
    subjects: ['quant', 'reasoning', 'english', 'gk'],
    // For SSC, count ALL chapters (p1 + p2)
    countMode: 'all',
    examDate: '2025-09-15',
    totalChapters: 134,
    links: [
      { page: 'dashboard-ssc.html', href: 'dashboard-ssc.html', icon: '📊', label: 'SSC Dashboard' },
      { page: 'tracker-quant.html',     href: 'tracker-quant.html',     icon: '🔢', label: 'Quant' },
      { page: 'tracker-reasoning.html', href: 'tracker-reasoning.html', icon: '🧠', label: 'Reasoning' },
      { page: 'tracker-english.html',   href: 'tracker-english.html',   icon: '📝', label: 'English' },
      { page: 'tracker-gk.html',        href: 'tracker-gk.html',        icon: '🌍', label: 'General Knowledge' },
    ]
  },
  upsc: {
    label: 'UPSC CSE',
    color: '#3B5BDB',
    icon: '🏛️',
    subjects: [
      'upsc_polity', 'upsc_modern_history', 'upsc_geography', 'upsc_economy',
      'upsc_env_eco', 'upsc_ancient_medieval', 'upsc_art_culture', 'upsc_sci_tech',
      'upsc_ir_security', 'upsc_ethics_gs4', 'upsc_csat_aptitude'
    ],
    countMode: 'all',
    examDate: '2027-05-23',
    totalChapters: 126,
    links: [
      { page: 'dashboard-upsc.html', href: 'dashboard-upsc.html', icon: '📊', label: 'UPSC Dashboard' },
      { page: 'tracker-upsc.html?subj=upsc_polity',           href: 'tracker-upsc.html?subj=upsc_polity',           icon: '⚖️', label: 'Polity' },
      { page: 'tracker-upsc.html?subj=upsc_modern_history',   href: 'tracker-upsc.html?subj=upsc_modern_history',   icon: '✊', label: 'Modern History' },
      { page: 'tracker-upsc.html?subj=upsc_geography',        href: 'tracker-upsc.html?subj=upsc_geography',        icon: '🌍', label: 'Geography' },
      { page: 'tracker-upsc.html?subj=upsc_economy',          href: 'tracker-upsc.html?subj=upsc_economy',          icon: '📈', label: 'Economy' },
      { page: 'tracker-upsc.html?subj=upsc_env_eco',          href: 'tracker-upsc.html?subj=upsc_env_eco',          icon: '🌿', label: 'Environment' },
      { page: 'tracker-upsc.html?subj=upsc_ancient_medieval', href: 'tracker-upsc.html?subj=upsc_ancient_medieval', icon: '🏺', label: 'Ancient/Medieval' },
      { page: 'tracker-upsc.html?subj=upsc_art_culture',      href: 'tracker-upsc.html?subj=upsc_art_culture',      icon: '🎭', label: 'Art & Culture' },
      { page: 'tracker-upsc.html?subj=upsc_sci_tech',         href: 'tracker-upsc.html?subj=upsc_sci_tech',         icon: '🔬', label: 'Sci & Tech' },
      { page: 'tracker-upsc.html?subj=upsc_ir_security',      href: 'tracker-upsc.html?subj=upsc_ir_security',      icon: '🌐', label: 'IR & Security' },
      { page: 'tracker-upsc.html?subj=upsc_ethics_gs4',       href: 'tracker-upsc.html?subj=upsc_ethics_gs4',       icon: '🧭', label: 'Ethics (GS-4)' },
      { page: 'tracker-upsc.html?subj=upsc_csat_aptitude',    href: 'tracker-upsc.html?subj=upsc_csat_aptitude',    icon: '🧮', label: 'CSAT' },
    ]
  }
};

// Detect current exam context from URL
function getCurrentExam() {
  const page = window.location.pathname.split('/').pop() || '';
  if (page.includes('nqt')) return 'nqt';
  if (page.includes('ssc')) return 'ssc';
  if (page.includes('upsc')) return 'upsc';
  // For tracker pages, check localStorage for last selected exam
  return localStorage.getItem('selectedExam') || 'nqt';
}

// ── Read stats filtered by exam ───────────────────────────────────────────────
function readExamStats(examKey) {
  const config = EXAM_CONFIG[examKey];
  if (!config) return readStats();
  const results = {};
  for (const subj of config.subjects) {
    const cfg = KEYS[subj];
    let done = 0, p1done = 0, p2done = 0;
    const max = config.countMode === 'p1' ? cfg.p1 : cfg.total;
    for (let i = 1; i <= max; i++) {
      if (localStorage.getItem(cfg.prefix + i) === '1') {
        done++;
        if (i <= cfg.p1) p1done++; else p2done++;
      }
    }
    results[subj] = { done, p1done, p2done, total: max, p1: Math.min(cfg.p1, max), p2: Math.max(0, max - cfg.p1) };
  }
  return results;
}

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
  
  // Don't show sidebar on the exam selector (index.html)
  if (page === 'index.html' || page === '') return;

  const examKey = getCurrentExam();
  const config  = EXAM_CONFIG[examKey] || EXAM_CONFIG.nqt;
  const links   = config.links;

  const stats   = readExamStats(examKey);
  const total   = config.totalChapters;
  const done    = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct     = Math.round((done / total) * 100);
  const examDate = new Date(config.examDate + 'T00:00:00');
  const days    = Math.ceil((examDate - new Date()) / 86400000);
  let daysColor = '#1D9E75';
  if (days < 30) daysColor = '#EF4444';
  else if (days < 60) daysColor = '#D97706';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const fullPath    = currentPage + window.location.search;

  const isActive = (l) => {
    return fullPath === l.href || currentPage === l.href || fullPath === l.page || currentPage === l.page;
  };

  const navLinks = links.map(l => {
    const active = isActive(l);
    return `<a href="${l.href}" class="nav-link${active ? ' active' : ''}" data-page="${l.page}">
      <span class="ni">${l.icon}</span>${l.label}
    </a>`;
  }).join('');

  const sidebarHTML = `
  <div id="sidebar">
    <div class="sidebar-top">
      <div class="sidebar-brand">
        <h1>${config.icon} ${config.label}</h1>
        <p>Arpit's Exam Hub</p>
      </div>
      <a href="index.html" class="switch-exam-btn">🔄 Switch Exam</a>
      <div class="sidebar-divider"></div>
    </div>
    <div class="sidebar-scrollable">
      <div class="nav-links">${navLinks}</div>
      <div class="sidebar-bottom">
        <div class="sidebar-divider"></div>
        <div class="sidebar-progress-block">
          <span class="spb-label">${config.label} Progress</span>
          <div class="spb-bar-wrap">
            <div class="spb-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${config.color},${config.color}dd)"></div>
          </div>
          <div class="spb-numbers"><span style="color:${config.color}">${done}</span> / ${total} done · ${pct}%</div>
        </div>
        <div class="sidebar-countdown">
          <span class="sc-label">${config.label} In</span>
          <div class="sc-days" style="color:${daysColor}">${days > 0 ? days : '🎯'}</div>
          <div class="sc-sub">${days > 0 ? 'days' : 'Exam Day!'}</div>
        </div>
        <button id="logout-btn" style="width:100%;background:rgba(239,68,68,0.1);color:#EF4444;border:1px solid rgba(239,68,68,0.2);padding:10px;border-radius:8px;font:600 12px/1 'DM Sans';cursor:pointer;margin-top:16px;transition:all 0.2s">Log Out</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  // Mobile bottom tabs - slide system
  const mobTabs = links.map(l => {
    const active = isActive(l);
    return `<a href="${l.href}" class="mob-tab${active ? ' active' : ''}">
      <span class="mt-icon">${l.icon}</span>
      <span class="mt-label">${l.label}</span>
    </a>`;
  }).join('');
  document.body.insertAdjacentHTML('beforeend',
    `<nav id="mobile-tabs">${mobTabs}</nav>`);

  // Auto-scroll active tab into view
  setTimeout(() => {
    const activeTab = document.querySelector('#mobile-tabs .mob-tab.active');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 100);
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
  // Height is now handled by each tracker file sending postMessage
  // Set a reasonable initial height while waiting for the message
  iframe.style.height = '600px';
}

// Global listener: receive height messages from tracker iframes
window.addEventListener('message', function(evt) {
  if (!evt.data || evt.data.type !== 'iframeHeight') return;
  var h = evt.data.height;
  if (h < 50) return;
  // Find the iframe that sent this message
  var frames = document.querySelectorAll('iframe');
  for (var i = 0; i < frames.length; i++) {
    try {
      if (frames[i].contentWindow === evt.source) {
        frames[i].style.height = (h + 32) + 'px';
        break;
      }
    } catch(ex) {}
  }
});

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
