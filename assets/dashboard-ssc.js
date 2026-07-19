/* ============================================================================
 * dashboard-ssc.js — Multi-exam controller for SSC CGL, CHSL, and MTS
 * ============================================================================ */


function renderSSCDashboard() {
  const params = new URLSearchParams(window.location.search);
  let examType = params.get('exam') || 'cgl';
  if (!['cgl', 'chsl', 'mts'].includes(examType)) examType = 'cgl';

  const examKey = examType === 'chsl' ? 'ssc_chsl' : (examType === 'mts' ? 'ssc_mts' : 'ssc');
  const config = EXAM_CONFIG[examKey];


  // Headers
  if (examType === 'cgl') {
    document.getElementById('ssc-exam-title').textContent = "SSC CGL";
    document.getElementById('ssc-exam-sub').textContent = "Combined Graduate Level Examination (Group B & C Posts)";
    document.getElementById('ssc-strategy-note').innerHTML = "<strong>💡 Strategy Note:</strong> Tier 1 (100 Qs / 200 Marks / 60 Min) is shortlisting. Tier 2 (Quant, Reasoning, English, GA, Computer) determines final merit list.";
  } else if (examType === 'chsl') {
    document.getElementById('ssc-exam-title').textContent = EXAM_CONFIG_CHSL.fullName;
    document.getElementById('ssc-exam-sub').textContent = `${EXAM_CONFIG_CHSL.eligibility} · Posts: ${EXAM_CONFIG_CHSL.posts}`;
    document.getElementById('ssc-strategy-note').innerHTML = "<strong>💡 Strategy Note:</strong> Tier 1 (100 Qs / 200 Marks) is qualifying. Tier 2 Session I objective score determines final merit. Skill/Typing test is qualifying.";
  } else {
    document.getElementById('ssc-exam-title').textContent = EXAM_CONFIG_MTS.fullName;
    document.getElementById('ssc-exam-sub').textContent = `${EXAM_CONFIG_MTS.eligibility}`;
    document.getElementById('ssc-strategy-note').innerHTML = "<strong>💡 Strategy Note:</strong> Session I (Math & Reasoning) has <strong>NO negative marking</strong>. Session II (GA & English) has <strong>−1 negative marking</strong> and determines final merit selection!";
  }

  // Calculate statistics
  let totalDone = 0;
  let totalChapters = config.totalChapters;

  let subjectsList = [];
  if (examType === 'cgl') {
    subjectsList = [
      { key: 'speedmath', name: 'Speed Math', icon: '⚡', color: '#7F77DD', tracker: 'tracker-speedmath.html' },
      { key: 'quant',     name: 'Quantitative Aptitude', icon: '🔢', color: '#1D9E75', tracker: 'tracker-quant.html' },
      { key: 'reasoning', name: 'Reasoning Ability', icon: '🧠', color: '#3B5BDB', tracker: 'tracker-reasoning.html' },
      { key: 'english',   name: 'English Language', icon: '📝', color: '#8E44AD', tracker: 'tracker-english.html' },
      { key: 'gk',        name: 'General Knowledge', icon: '🌍', color: '#B7791F', tracker: 'tracker-gk.html' }
    ];
  } else if (examType === 'chsl') {
    subjectsList = EXAM_CONFIG_CHSL.subjects.map(s => ({
      key: s.key,
      name: s.name,
      icon: s.icon,
      color: s.color,
      stage: s.examStage,
      tracker: `tracker-ssc.html?exam=chsl&subj=${s.key}`
    }));
  } else {
    subjectsList = EXAM_CONFIG_MTS.subjects.map(s => ({
      key: s.key,
      name: s.name,
      icon: s.icon,
      color: s.color,
      stage: s.examStage,
      tracker: `tracker-ssc.html?exam=mts&subj=${s.key}`
    }));
  }

  const subjectCardsHTML = subjectsList.map(subj => {
    let subjDone = 0;
    let chapterCount = 0;

    if (examType === 'cgl') {
      const cfg = KEYS[subj.key];
      chapterCount = cfg.total;
      for (let i = 1; i <= cfg.total; i++) {
        if (localStorage.getItem(cfg.prefix + i) === '1') subjDone++;
      }
    } else if (examType === 'chsl') {
      const chapters = Object.entries(CHSL_PRIORITY_DATA).filter(([k]) => k.startsWith(KEYS[subj.key].prefix));
      chapterCount = chapters.length;
      chapters.forEach(([k]) => {
        if (localStorage.getItem(k) === '1') subjDone++;
      });
    } else {
      const chapters = Object.entries(MTS_PRIORITY_DATA).filter(([k]) => k.startsWith(KEYS[subj.key].prefix));
      chapterCount = chapters.length;
      chapters.forEach(([k]) => {
        if (localStorage.getItem(k) === '1') subjDone++;
      });
    }

    totalDone += subjDone;
    const subjPct = chapterCount > 0 ? Math.round((subjDone / chapterCount) * 100) : 0;

    return `
      <div style="background:var(--bg-elevated);border:1px solid var(--border-medium);border-radius:12px;padding:20px;display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <span style="font-size:24px">${subj.icon}</span>
            <span style="font:600 11px/1 'JetBrains Mono';padding:4px 8px;border-radius:12px;background:rgba(255,255,255,0.06);color:var(--text-secondary)">${subj.stage || 'Tier 1 & 2'}</span>
          </div>
          <div style="font:700 16px/1.2 'DM Sans';color:var(--text-primary);margin-bottom:8px">${subj.name}</div>
          <div style="font:600 12px/1 'JetBrains Mono';color:${subj.color};margin-bottom:14px">${subjDone} / ${chapterCount} chapters completed (${subjPct}%)</div>
          <div style="width:100%;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;margin-bottom:16px">
            <div style="width:${subjPct}%;height:100%;background:${subj.color}"></div>
          </div>
        </div>
        <a href="${subj.tracker}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('ssc-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', config.color || '#1D9E75');
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('ssc-days-left').innerHTML = `
    <strong>Target Date:</strong> ${config.examDate} (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details
  if (examType === 'cgl') {
    document.getElementById('ssc-pattern-details').innerHTML = `
      <div style="margin-bottom:10px"><strong>Tier 1:</strong> 100 Qs / 200 Marks / 60 Min (Qualifying / Shortlisting)</div>
      <div style="margin-bottom:10px"><strong>Tier 2:</strong> Section I (Math 30Q + Reasoning 30Q) + Section II (English 45Q + GA 25Q) + Computer (20Q)</div>
      <div style="margin-bottom:10px"><strong>Marking Scheme:</strong> Tier 1: +2 / −0.50 | Tier 2: +3 / −1</div>
      <div><strong>Qualifying Threshold:</strong> UR 30% · OBC/EWS 25% · SC/ST 20%</div>
    `;
  } else if (examType === 'chsl') {
    const p = EXAM_CONFIG_CHSL.examPattern;
    document.getElementById('ssc-pattern-details').innerHTML = `
      <div style="margin-bottom:10px"><strong>Stages:</strong> ${p.stages}</div>
      <div style="margin-bottom:10px"><strong>Tier 1 Scheme:</strong> ${p.tier1.marking} (${p.tier1.totalQuestions} Qs / ${p.tier1.totalMarks} Marks / ${p.tier1.durationMinutes} Min)</div>
      <div style="margin-bottom:10px"><strong>Tier 2 Session I:</strong> ${p.tier2.session1} (${p.tier2.marking})</div>
      <div><strong>Tier 2 Session II:</strong> ${p.tier2.session2}</div>
    `;
  } else {
    const p = EXAM_CONFIG_MTS.examPattern;
    document.getElementById('ssc-pattern-details').innerHTML = `
      <div style="margin-bottom:10px"><strong>Stages:</strong> ${p.stages}</div>
      <div style="margin-bottom:10px"><strong>Session I:</strong> ${p.cbe.session1}</div>
      <div style="margin-bottom:10px"><strong>Session II (Merit):</strong> ${p.cbe.session2}</div>
      <div><strong>PET Standard:</strong> ${p.pet}</div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSSCDashboard();
});

window.addEventListener('cloudDataSynced', renderSSCDashboard);
window.addEventListener('storage', renderSSCDashboard);
