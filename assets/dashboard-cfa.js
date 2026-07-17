/* ============================================================================
 * dashboard-cfa.js — Dashboard controller for CFA Level 1, 2 & 3
 * ============================================================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const level = params.get('level') || 'l1';

  let config = EXAM_CONFIG_CFA_L1;
  let priorityData = CFA_L1_PRIORITY_DATA;
  let examKeyStorage = 'cfa_l1';

  if (level === 'l2') {
    config = EXAM_CONFIG_CFA_L2;
    priorityData = CFA_L2_PRIORITY_DATA;
    examKeyStorage = 'cfa_l2';
    document.getElementById('tab-l2')?.classList.add('active');
  } else if (level === 'l3') {
    config = EXAM_CONFIG_CFA_L3;
    priorityData = CFA_L3_PRIORITY_DATA;
    examKeyStorage = 'cfa_l3';
    document.getElementById('tab-l3')?.classList.add('active');
  } else {
    document.getElementById('tab-l1')?.classList.add('active');
  }

  localStorage.setItem('selectedExam', examKeyStorage);

  // Set page headers
  const cfaName = document.getElementById('cfa-name');
  const cfaTag = document.getElementById('cfa-tag');
  if (cfaName) cfaName.textContent = config.examName;
  
  const stageDesc = level === 'l1' ? '180 MCQs Total' : level === 'l2' ? '88 Vignette MCQs' : 'Vignette MCQs + Essays';
  if (cfaTag) cfaTag.textContent = `${config.subjects.length} Topics · ${stageDesc}`;

  // Set countdown color and title border color based on level
  const accentColor = level === 'l1' ? '#1D4ED8' : level === 'l2' ? '#059669' : '#7C3AED';
  document.getElementById('cfa-header').style.borderLeftColor = accentColor;
  document.getElementById('countdown-days').style.color = accentColor;
  document.getElementById('countdown-badge').style.color = accentColor;

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
      const val = localStorage.getItem(subj.prefix + i);
      if (val === '1' || val === '2' || val === '3') {
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
  const msDateVal = document.getElementById('ms-date-val');

  if (msTotalDone) msTotalDone.textContent = totalDoneAll;
  if (msTotalCh) msTotalCh.textContent = totalChAll;

  const overallPct = totalChAll > 0 ? Math.round((totalDoneAll / totalChAll) * 100) : 0;
  if (msOverallPct) msOverallPct.textContent = overallPct + '%';
  if (msPapersVal) msPapersVal.textContent = config.subjects.length;
  if (msDateVal && config.examDate) {
    const parsedDate = new Date(config.examDate);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    msDateVal.textContent = `${parsedDate.getDate()} ${months[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`;
  }

  // Modify stats display colors based on level
  document.querySelectorAll('.ms-card').forEach((card, idx) => {
    if (idx === 0 || idx === 2 || idx === 3) {
      card.style.borderLeftColor = accentColor;
    }
  });

  // Render Donut
  const donutSvg = document.getElementById('donut-svg');
  if (donutSvg) {
    const r = 45;
    const circ = 2 * Math.PI * r;
    const offset = circ - (overallPct / 100) * circ;
    donutSvg.innerHTML = `
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--bg-elevated)" stroke-width="12"/>
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="${accentColor}" stroke-width="12"
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
            <div style="height:4px;background:var(--bg-hover);border-radius:2px;overflow:hidden;margin-top:4px;">
              <div style="height:100%;width:${subj.pct}%;background:${subj.color};border-radius:2px;transition:width 0.5s;"></div>
            </div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:6px;display:flex;justify-content:space-between;">
              <span>Weight: ${subj.topicWeight}</span>
              <span>${subj.estQuestions || subj.estItemSets || ''}</span>
            </div>
          </div>
        </div>
        <a href="tracker-cfa.html?level=${level}&subj=${subj.key}" class="sc-link" style="color:var(--text-tertiary);text-decoration:none;font:500 12px/1 'DM Sans';border-top:1px solid var(--border-subtle);padding-top:10px;margin-top:auto;display:inline-flex;align-items:center;">Open Topic Tracker →</a>
      </div>
    `).join('');
  }

  // Focus Box (Weak subjects < 50%)
  const focusBox = document.getElementById('focus-box');
  if (focusBox) {
    const weak = subjStats.filter(s => s.pct < 50);
    if (weak.length === 0) {
      focusBox.innerHTML = `<div class="focus-on-track">🎉 Excellent work! All topics are above 50% complete. Keep revising!</div>`;
    } else {
      focusBox.innerHTML = `
        <div class="focus-title" style="font:700 12px/1 'JetBrains Mono';color:var(--accent-amber);text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;">⚠️ Priority Focus Required (${weak.length} Topics Below 50%)</div>
        <div class="focus-items" style="display:flex;flex-direction:column;gap:10px;">
          ${weak.map(w => `
            <div class="focus-item" style="display:flex;align-items:center;gap:12px;">
              <span class="focus-subject" style="font:600 13px/1 'DM Sans';color:var(--text-primary);min-width:240px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">${w.icon} ${w.name}</span>
              <div style="flex:1;height:4px;background:var(--bg-hover);border-radius:2px;overflow:hidden;">
                <div style="height:100%;width:${w.pct}%;background:${w.color};border-radius:2px;"></div>
              </div>
              <span class="focus-pct" style="font:500 12px/1 'JetBrains Mono';min-width:42px;color:var(--accent-amber);text-align:right;">${w.pct}%</span>
              <a href="tracker-cfa.html?level=${level}&subj=${w.key}" class="btn" style="padding:4px 10px;font-size:11px;background:var(--bg-hover);color:var(--text-primary);border:1px solid var(--border-medium);text-decoration:none;border-radius:4px;">Study →</a>
            </div>
          `).join('')}
        </div>`;
    }
  }

  // Strategy Box
  const smartBox = document.getElementById('smart-box');
  if (smartBox) {
    let rec = '';
    if (level === 'l1') {
      rec = `Focus heavily on the "Big Four" topics: <strong>Ethics</strong>, <strong>FSA</strong>, <strong>Fixed Income</strong>, and <strong>Equity Investments</strong>. They constitute over 50% of the total exam weight. Ethics score is the deciding factor in borderline pass/fail scenarios!`;
    } else if (level === 'l2') {
      rec = `Level 2 is entirely vignette-supported item sets (4 questions per set). Practice reading complex scenarios and filtering out irrelevant information. Prioritise <strong>Equity Valuation</strong> and <strong>Financial Statement Analysis</strong>.`;
    } else {
      rec = `Level 3 contains constructed response essay sets. Practice typing out structured bullet-point answers under tight time constraints. Ensure you choose your Specialized Pathway correctly (Defaults to <strong>Portfolio Management</strong>).`;
    }
    smartBox.innerHTML = `<div style="font:400 13px/1.6 'DM Sans';color:var(--text-secondary)">💡 <strong>CFA Strategy Note:</strong> ${rec}</div>`;
  }
})();
