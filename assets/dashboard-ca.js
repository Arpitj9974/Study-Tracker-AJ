/* ============================================================================
 * dashboard-ca.js — Dashboard controller for CA Foundation, Inter & Final
 * ============================================================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const level = params.get('level') || 'foundation';

  let config = EXAM_CONFIG_CA_FOUNDATION;
  let priorityData = CA_FOUNDATION_PRIORITY_DATA;
  let examKeyStorage = 'ca_foundation';

  if (level === 'inter') {
    config = EXAM_CONFIG_CA_INTER;
    priorityData = CA_INTER_PRIORITY_DATA;
    examKeyStorage = 'ca_inter';
    document.getElementById('tab-inter')?.classList.add('active');
  } else if (level === 'final') {
    config = EXAM_CONFIG_CA_FINAL;
    priorityData = CA_FINAL_PRIORITY_DATA;
    examKeyStorage = 'ca_final';
    document.getElementById('tab-final')?.classList.add('active');
  } else {
    document.getElementById('tab-foundation')?.classList.add('active');
  }

  localStorage.setItem('selectedExam', examKeyStorage);

  // Set page headers
  const caName = document.getElementById('ca-name');
  const caTag = document.getElementById('ca-tag');
  if (caName) caName.textContent = config.examName;
  if (caTag) caTag.textContent = `${config.subjects.length} Papers · ${config.examPattern.totalMarks} Marks Total (${config.examPattern.stages})`;

  // Set countdown
  const countdownDays = document.getElementById('countdown-days');
  if (countdownDays && config.examDate) {
    const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
    countdownDays.textContent = daysLeft > 0 ? daysLeft : '🎯';
  }

  // Master stats counts
  let totalDoneAll = 0;
  let totalChAll = 0;
  const subjStats = [];

  config.subjects.forEach(subj => {
    let done = 0;
    for (let i = 1; i <= subj.totalChapters; i++) {
      if (localStorage.getItem(subj.prefix + i) === '1') {
        done++;
      }
    }
    totalDoneAll += done;
    totalChAll += subj.totalChapters;
    const pct = subj.totalChapters > 0 ? Math.round((done / subj.totalChapters) * 100) : 0;
    subjStats.push({ ...subj, done, pct });
  });

  const msTotalDone = document.getElementById('ms-total-done');
  const msTotalCh = document.getElementById('ms-total-ch');
  const msOverallPct = document.getElementById('ms-overall-pct');
  const msPapersVal = document.getElementById('ms-papers-val');

  if (msTotalDone) msTotalDone.textContent = totalDoneAll;
  if (msTotalCh) msTotalCh.textContent = totalChAll;

  const overallPct = totalChAll > 0 ? Math.round((totalDoneAll / totalChAll) * 100) : 0;
  if (msOverallPct) msOverallPct.textContent = overallPct + '%';
  if (msPapersVal) msPapersVal.textContent = config.subjects.length;

  // Render Donut
  const donutSvg = document.getElementById('donut-svg');
  if (donutSvg) {
    const r = 45;
    const circ = 2 * Math.PI * r;
    const offset = circ - (overallPct / 100) * circ;
    donutSvg.innerHTML = `
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--bg-elevated)" stroke-width="12"/>
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="${config.subjects[0].color || '#C0392B'}" stroke-width="12"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
      <text x="60" y="66" text-anchor="middle" fill="var(--text-primary)" font-family="JetBrains Mono" font-size="20" font-weight="700">${overallPct}%</text>
    `;
  }

  // Render Subject Cards
  const cardsContainer = document.getElementById('subject-cards');
  if (cardsContainer) {
    cardsContainer.innerHTML = subjStats.map(subj => `
      <div class="subject-card" style="--subj-color:${subj.color}">
        <div class="sc-header">
          <div class="sc-title"><span class="sc-icon">${subj.icon}</span>${subj.name}</div>
          <span style="font:600 13px/1 'JetBrains Mono';color:${subj.color}">${subj.pct}%</span>
        </div>
        <div class="sc-phases">
          <div class="sc-phase">
            <div class="sc-phase-label">
              <span>Progress</span>
              <span class="sc-phase-count">${subj.done} / ${subj.totalChapters}</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" style="width:${subj.pct}%;background:${subj.color}"></div>
            </div>
          </div>
        </div>
        <a href="tracker-ca.html?level=${level}&subj=${subj.key}" class="sc-link">Open Paper Tracker →</a>
      </div>
    `).join('');
  }

  // Focus Box (Weak subjects < 50%)
  const focusBox = document.getElementById('focus-box');
  if (focusBox) {
    const weak = subjStats.filter(s => s.pct < 50);
    if (weak.length === 0) {
      focusBox.innerHTML = `<div class="focus-on-track">🎉 Excellent work! All papers are above 50% complete. Keep revising!</div>`;
    } else {
      focusBox.innerHTML = `
        <div class="focus-title">⚠️ Priority Focus Required (${weak.length} Papers Below 50%)</div>
        <div class="focus-items">
          ${weak.map(w => `
            <div class="focus-item">
              <span class="focus-subject">${w.icon} ${w.name}</span>
              <div class="progress-bar-wrap" style="flex:1">
                <div class="progress-bar-fill" style="width:${w.pct}%;background:${w.color}"></div>
              </div>
              <span class="focus-pct">${w.pct}%</span>
              <a href="tracker-ca.html?level=${level}&subj=${w.key}" class="level-btn" style="padding:4px 10px;font-size:11px">Study →</a>
            </div>
          `).join('')}
        </div>`;
    }
  }

  // Strategy Box
  const smartBox = document.getElementById('smart-box');
  if (smartBox) {
    let rec = '';
    if (level === 'foundation') {
      rec = `Focus on <strong>Accounting (P1)</strong> and <strong>Business Laws (P2)</strong> subjective answer writing daily. Papers 3 & 4 (QA & Economics) are MCQ-based with 0.25 negative marking — attempt only confident questions!`;
    } else if (level === 'inter') {
      rec = `Target aggregate pass threshold of 150/300 marks in each group. <strong>Advanced Accounting (P1)</strong> and <strong>Taxation (P3)</strong> are critical for Group 1. Remember: All Inter papers have 30 marks case-study MCQs with NO negative marking!`;
    } else {
      rec = `For CA Final, ensure mandatory clearance of <strong>SPOM Online Modules</strong> prior to sitting. Prioritise <strong>Financial Reporting (P1)</strong> and <strong>Direct Tax (P4)</strong>. Paper 6 IBS is 4-hour Open Book — focus on cross-disciplinary indexing and retrieval strategy!`;
    }
    smartBox.innerHTML = `<div style="font:400 13px/1.6 'DM Sans';color:var(--text-secondary)">💡 <strong>ICAI Strategy Note:</strong> ${rec}</div>`;
  }
})();
