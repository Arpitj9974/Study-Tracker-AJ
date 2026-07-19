// assets/dashboard-ibps.js — IBPS PO & IBPS Clerk Multi-Exam Controller

const IBPS_PO_SUBJECTS = [
  { key: "ibps_qnt", label: "Quantitative Aptitude", icon: "🔢", color: "#B7791F", link: "tracker-ibps.html?exam=po&subj=ibps_qnt" },
  { key: "ibps_rea", label: "Reasoning Ability",     icon: "🧩", color: "#5F5AA2", link: "tracker-ibps.html?exam=po&subj=ibps_rea" },
  { key: "ibps_eng", label: "English Language",       icon: "📖", color: "#B04A2F", link: "tracker-ibps.html?exam=po&subj=ibps_eng" },
  { key: "ibps_dia", label: "Data Analysis & DI",     icon: "📊", color: "#2C7A9E", link: "tracker-ibps.html?exam=po&subj=ibps_dia" },
  { key: "ibps_gab", label: "Banking & GA",          icon: "🏦", color: "#2B8A6E", link: "tracker-ibps.html?exam=po&subj=ibps_gab" },
  { key: "ibps_dsc", label: "Descriptive English",   icon: "✍️", color: "#A64D9C", link: "tracker-ibps.html?exam=po&subj=ibps_dsc" }
];

const IBPS_CLERK_SUBJECTS = [
  { key: "ibps_clerk_qa",   label: "Numerical / Quant Aptitude", icon: "🔢", color: "#E11D48", link: "tracker-ibps.html?exam=clerk&subj=ibps_clerk_qa" },
  { key: "ibps_clerk_ra",   label: "Reasoning Ability",          icon: "🧠", color: "#1D4ED8", link: "tracker-ibps.html?exam=clerk&subj=ibps_clerk_ra" },
  { key: "ibps_clerk_gfa",  label: "General / Financial Awareness",icon: "🏦", color: "#92400E", link: "tracker-ibps.html?exam=clerk&subj=ibps_clerk_gfa" },
  { key: "ibps_clerk_eng",  label: "English Language",            icon: "📚", color: "#0D9488", link: "tracker-ibps.html?exam=clerk&subj=ibps_clerk_eng" },
  { key: "ibps_clerk_comp", label: "Computer Aptitude",           icon: "💻", color: "#6B21A8", link: "tracker-ibps.html?exam=clerk&subj=ibps_clerk_comp" }
];

const IBPS_SO_SUBJECTS = [
  { key: "iso_pk",   label: "Professional Knowledge", icon: "💻", color: "#1F618D", link: "tracker-ibps.html?exam=so&subj=iso_pk" },
  { key: "iso_qa",   label: "Quantitative Aptitude",  icon: "🔢", color: "#B9770E", link: "tracker-ibps.html?exam=so&subj=iso_qa" },
  { key: "iso_reas", label: "Reasoning Ability",      icon: "🧩", color: "#6C3483", link: "tracker-ibps.html?exam=so&subj=iso_reas" },
  { key: "iso_eng",  label: "English Language",       icon: "📖", color: "#117A65", link: "tracker-ibps.html?exam=so&subj=iso_eng" }
];

const IBPS_SO_IT_SUBJECTS = [
  { key: "iso_pk",   label: "Professional Knowledge (IT)", icon: "💻", color: "#1F618D", link: "tracker-ibps.html?exam=so_it&subj=iso_pk" },
  { key: "iso_qa",   label: "Quantitative Aptitude",  icon: "🔢", color: "#B9770E", link: "tracker-ibps.html?exam=so_it&subj=iso_qa" },
  { key: "iso_reas", label: "Reasoning Ability",      icon: "🧩", color: "#6C3483", link: "tracker-ibps.html?exam=so_it&subj=iso_reas" },
  { key: "iso_eng",  label: "English Language",       icon: "📖", color: "#117A65", link: "tracker-ibps.html?exam=so_it&subj=iso_eng" }
];

function getActiveIBPSExam() {
  const params = new URLSearchParams(window.location.search);
  const ex = params.get('exam');
  if (ex === 'clerk') return 'ibps_clerk';
  if (ex === 'so') return 'ibps_so_2026';
  if (ex === 'so_it') return 'ibps_so_it_2026';
  return 'ibps_po';
}


function refreshIBPSUI() {
  const activeExam = getActiveIBPSExam();
  const isClerk = activeExam === 'ibps_clerk';
  const isSO = activeExam === 'ibps_so_2026';
  const isSOIT = activeExam === 'ibps_so_it_2026';

  localStorage.setItem('selectedExam', activeExam);


  // Config & Data
  const examKey = activeExam;
  const subjects = isSOIT ? IBPS_SO_IT_SUBJECTS : (isSO ? IBPS_SO_SUBJECTS : (isClerk ? IBPS_CLERK_SUBJECTS : IBPS_PO_SUBJECTS));
  const config = isSOIT ? EXAM_CONFIG_IBPS_SO_IT : (isSO ? EXAM_CONFIG_IBPS_SO : (isClerk ? EXAM_CONFIG_IBPS_CLERK : EXAM_CONFIG_IBPS_PO));
  const primaryColor = (isSO || isSOIT) ? '#1F618D' : (isClerk ? '#E11D48' : '#B7791F');

  // Header update
  const hubHeader = document.getElementById('ibps-hub-header');
  if (hubHeader) hubHeader.style.borderLeftColor = primaryColor;

  const hubName = document.getElementById('ibps-hub-name');
  if (hubName) {
    if (isSOIT) hubName.textContent = '💻 IBPS SO IT Officer (CRP SPL-XVI)';
    else if (isSO) hubName.textContent = '🏛️ IBPS SO (CRP SPL-XVI)';
    else if (isClerk) hubName.textContent = '📋 IBPS Clerk / CSA (CRP CSA-XVI)';
    else hubName.textContent = '🏦 IBPS PO / MT (CRP PO/MT-XVI)';
  }

  const hubTag = document.getElementById('ibps-hub-tag');
  if (hubTag) {
    if (isSOIT) {
      hubTag.textContent = 'Prelims (Qualifying) · Mains Objective PK + Descriptive · Interview';
    } else if (isSO) {
      hubTag.textContent = 'Prelims (Qualifying) · Mains Objective PK + Descriptive · Interview';
    } else if (isClerk) {
      hubTag.textContent = 'Prelims (Qualifying) · Mains Objective (155 Qs / 200 Marks / 120 Min) · NO Interview';
    } else {
      hubTag.textContent = 'Prelims (Qualifying) · Mains Objective + Descriptive · Interview';
    }
    hubTag.style.color = primaryColor;
  }

  const countdownDays = document.getElementById('countdown-days');
  const countdownBadge = document.getElementById('countdown-badge');
  const countdownLbl = document.getElementById('countdown-lbl');

  const examDateStr = config.examDate || config.prelimsDate;
  const examDate = new Date(examDateStr + 'T00:00:00');
  const days = Math.ceil((examDate - new Date()) / 86400000);

  if (countdownDays) {
    countdownDays.textContent = days > 0 ? days : '0';
    countdownDays.style.color = primaryColor;
  }
  if (countdownBadge) {
    countdownBadge.textContent = days > 0 ? 'days left' : 'Prelims Exam Day!';
    countdownBadge.style.color = primaryColor;
  }
  if (countdownLbl) {
    countdownLbl.textContent = isSOIT ? 'Days until SO IT Prelims 2026' : (isSO ? 'Days until SO Prelims 2026' : (isClerk ? 'Days until Clerk Prelims 2026' : 'Days until PO Prelims 2026'));
  }

  // Read Stats
  const stats = readExamStats(examKey);
  const grandDone = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const totalChapters = (isSO || isSOIT) ? config.subjects.reduce((sum, s) => sum + s.totalChapters, 0) : (isClerk ? 50 : 68);
  const pct = totalChapters > 0 ? Math.round((grandDone / totalChapters) * 100) : 0;

  // Stats Grid
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('ibps-stats-title', isSOIT ? 'IBPS SO IT Stats' : (isSO ? 'IBPS SO Stats' : (isClerk ? 'IBPS Clerk Stats' : 'IBPS PO Stats')));
  set('ms-total-done', grandDone);
  set('ms-total-chapters', totalChapters);
  set('ms-syllabus-sub', isSOIT ? 'IBPS SO IT syllabus' : (isSO ? 'IBPS SO syllabus' : (isClerk ? 'IBPS Clerk syllabus' : 'IBPS PO syllabus')));
  set('ms-overall-pct', pct + '%');
  set('ms-subj-count', subjects.length);
  set('ms-target-date', (isSO || isSOIT) ? '29 Aug 2026' : (isClerk ? '10 Oct 2026' : '22 Aug 2026'));
  set('ms-target-label', (isSO || isSOIT) ? 'SO Prelims' : (isClerk ? 'Clerk Prelims' : 'PO Prelims'));

  const cardDone = document.getElementById('ms-card-done');
  if (cardDone) cardDone.style.borderLeftColor = primaryColor;
  const cardPct = document.getElementById('ms-card-pct');
  if (cardPct) cardPct.style.borderLeftColor = primaryColor;
  const cardSubj = document.getElementById('ms-card-subj');
  if (cardSubj) cardSubj.style.borderLeftColor = primaryColor;

  // Donut Chart
  const svg = document.getElementById('donut-svg');
  if (svg) {
    const R = 54, C = 2 * Math.PI * R;
    let usedAngle = 0;
    const arcs = subjects.map(s => {
      const d = stats[s.key] || { done: 0 };
      const subjPct = d.done / totalChapters;
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
      <text x="60" y="72" text-anchor="middle" font-family="DM Sans" font-size="9" fill="#5A6080">${grandDone}/${totalChapters}</text>`;
  }

  // Subject Cards
  const container = document.getElementById('subject-cards');
  if (container) {
    container.innerHTML = subjects.map((s) => {
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

  // Focus Box
  const focusBox = document.getElementById('focus-box');
  if (focusBox) {
    const items = subjects.map(s => ({
      label: s.label,
      pct: stats[s.key] && stats[s.key].total > 0 ? Math.round((stats[s.key].done / stats[s.key].total) * 100) : 0
    }));
    const weak = items.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
    const allStrong = items.every(s => s.pct >= 80);
    const labelName = isSOIT ? 'IBPS SO IT' : (isSO ? 'IBPS SO' : (isClerk ? 'IBPS Clerk' : 'IBPS PO'));
    const modulesCount = (isSO || isSOIT) ? 4 : (isClerk ? 5 : 6);
    if (allStrong) {
      focusBox.innerHTML = `<div class="focus-on-track">🚀 Outstanding! All ${modulesCount} ${labelName} modules above 80%. Shift to timed full-length mocks!</div>`;
    } else if (weak.length === 0) {
      focusBox.innerHTML = `<div class="focus-on-track">✅ All ${labelName} modules above 50%. Focus on DI speed and Mains Financial Awareness!</div>`;
    } else {
      focusBox.innerHTML = `<div class="focus-title">⚡ High ROI Focus Areas (< 50% Complete)</div>
      <div class="focus-items">${weak.slice(0, 5).map(s => `
        <div class="focus-item">
          <span class="focus-subject">${s.label}</span>
          <span class="focus-pct">${s.pct}%</span>
          <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:var(--accent-amber)"></div></div>
        </div>`).join('')}</div>`;
    }
  }

  // Strategy Box
  const smartBox = document.getElementById('smart-box');
  if (smartBox) {
    let msg = '', color = primaryColor;
    if (isSOIT) {
      msg = `💡 <strong>SO IT Strategy Note:</strong> Professional Knowledge (IT) is 100% of the Mains weight! Clear sectional cut-offs in Quant/Reas/Eng, but put maximum time into your IT core subjects.`;
    } else if (isSO) {
      msg = `💡 <strong>SO Strategy Note:</strong> Professional Knowledge decides your merit! Focus on clearing sectional cut-offs in aptitude, then maximize score in your post-specific PK paper.`;
    } else if (isClerk) {
      msg = `💡 <strong>Clerk Strategy Note:</strong> Mains Reasoning & Computer Aptitude carries <strong>1.5 Marks/Q</strong> (highest ratio). Simplification (4Q), Puzzles (10Q) & Financial Awareness (50M) form the core merit path. <strong>No Interview!</strong>`;
    } else {
      msg = `💡 <strong>PO Strategy Note:</strong> Speed & Accuracy First! Simplifications, Syllogisms & Basic Puzzles form ~70% of Prelims cutoff. Mains G.A. carries 60 heavy marks.`;
    }
    smartBox.innerHTML = `<div style="color:${color};font:500 14px/1.6 'DM Sans'">${msg}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  refreshIBPSUI();
});

window.addEventListener('popstate', refreshIBPSUI);
window.addEventListener('cloudDataSynced', refreshIBPSUI);
window.addEventListener('storage', refreshIBPSUI);
