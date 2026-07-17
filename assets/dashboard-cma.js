/* ============================================================================
 * dashboard-cma.js — Dashboard controller for CMA Foundation (ICMAI)
 * ============================================================================ */

(function () {
  const config = EXAM_CONFIG_CMA_FOUNDATION;
  const priorityData = CMA_FOUNDATION_PRIORITY_DATA;
  const examKeyStorage = 'cma_foundation';

  localStorage.setItem('selectedExam', examKeyStorage);

  // Set page headers
  const cmaName = document.getElementById('cma-name');
  const cmaTag = document.getElementById('cma-tag');
  if (cmaName) cmaName.textContent = config.examName;
  if (cmaTag) cmaTag.textContent = `${config.subjects.length} Papers · ${config.examPattern.totalMarks} Marks Total (${config.examPattern.stages})`;

  // Set countdown
  const countdownDays = document.getElementById('countdown-days');
  if (countdownDays && config.examDate) {
    const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
    countdownDays.textContent = daysLeft > 0 ? daysLeft : '🎯';
  }

  // Master stats counts
  let totalDoneOnly = 0;
  let totalRevised = 0;
  let totalMock = 0;
  let totalDoneAll = 0;
  let totalChAll = 0;
  const subjStats = [];

  config.subjects.forEach(subj => {
    let done = 0;
    for (let i = 1; i <= subj.totalChapters; i++) {
      const val = localStorage.getItem(subj.prefix + i);
      if (val === '1') {
        done++;
        totalDoneOnly++;
      } else if (val === '2') {
        done++;
        totalRevised++;
      } else if (val === '3') {
        done++;
        totalMock++;
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
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="${config.subjects[0].color || '#16A085'}" stroke-width="12"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
      <text x="60" y="66" text-anchor="middle" fill="var(--text-primary)" font-family="JetBrains Mono" font-size="20" font-weight="700">${overallPct}%</text>
    `;
  }

  // Render Stacked Progress Bar in donut-wrap
  const donutWrap = document.querySelector('.donut-wrap');
  if (donutWrap) {
    const untouched = totalChAll - totalDoneAll;
    const mockPct = totalChAll > 0 ? Math.round((totalMock / totalChAll) * 100) : 0;
    const revisedPct = totalChAll > 0 ? Math.round((totalRevised / totalChAll) * 100) : 0;
    const donePct = totalChAll > 0 ? Math.round((totalDoneOnly / totalChAll) * 100) : 0;
    const untouchedPct = 100 - mockPct - revisedPct - donePct;

    // Remove any existing stacked bar first
    const existingBar = document.getElementById('stacked-progress-bar');
    if (existingBar) existingBar.remove();

    const barHtml = `
      <div id="stacked-progress-bar" style="margin-top: 16px; width: 100%; display: flex; flex-direction: column; gap: 8px;">
        <div style="font: 600 10px 'JetBrains Mono'; color: var(--text-secondary); text-transform: uppercase; display: flex; justify-content: space-between">
          <span>Stage Breakdown</span>
        </div>
        <div style="height: 10px; width: 100%; display: flex; border-radius: 5px; overflow: hidden; background: var(--bg-hover)">
          <div style="width: ${mockPct}%; background: #EC4899" title="Mock Tested (${mockPct}%)"></div>
          <div style="width: ${revisedPct}%; background: #F59E0B" title="Revised (${revisedPct}%)"></div>
          <div style="width: ${donePct}%; background: #16A085" title="Done (${donePct}%)"></div>
          <div style="width: ${untouchedPct}%; background: var(--border-subtle)" title="Untouched (${untouchedPct}%)"></div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 10px; font-family: 'DM Sans'; color: var(--text-secondary); width: 100%">
          <div style="display: flex; align-items: center; justify-content: space-between">
            <span style="display: flex; align-items: center; gap: 6px"><span style="width: 8px; height: 8px; background: #EC4899; border-radius: 2px"></span>🏆 Mock Tested</span>
            <span style="font-family: 'JetBrains Mono'">${totalMock} (${mockPct}%)</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <span style="display: flex; align-items: center; gap: 6px"><span style="width: 8px; height: 8px; background: #F59E0B; border-radius: 2px"></span>⭐ Revised</span>
            <span style="font-family: 'JetBrains Mono'">${totalRevised} (${revisedPct}%)</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <span style="display: flex; align-items: center; gap: 6px"><span style="width: 8px; height: 8px; background: #16A085; border-radius: 2px"></span>✓ Done Only</span>
            <span style="font-family: 'JetBrains Mono'">${totalDoneOnly} (${donePct}%)</span>
          </div>
        </div>
      </div>
    `;
    donutWrap.insertAdjacentHTML('beforeend', barHtml);
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
          </div>
        </div>
        <a href="tracker-cma.html?subj=${subj.key}" class="sc-link" style="color:var(--text-tertiary);text-decoration:none;font:500 12px/1 'DM Sans';border-top:1px solid var(--border-subtle);padding-top:10px;margin-top:auto;display:inline-flex;align-items:center;">Open Paper Tracker →</a>
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
        <div class="focus-title" style="font:700 12px/1 'JetBrains Mono';color:var(--accent-amber);text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;">⚠️ Priority Focus Required (${weak.length} Papers Below 50%)</div>
        <div class="focus-items" style="display:flex;flex-direction:column;gap:10px;">
          ${weak.map(w => `
            <div class="focus-item" style="display:flex;align-items:center;gap:12px;">
              <span class="focus-subject" style="font:600 13px/1 'DM Sans';color:var(--text-primary);min-width:180px;">${w.icon} ${w.name}</span>
              <div style="flex:1;height:4px;background:var(--bg-hover);border-radius:2px;overflow:hidden;">
                <div style="height:100%;width:${w.pct}%;background:${w.color};border-radius:2px;"></div>
              </div>
              <span class="focus-pct" style="font:500 12px/1 'JetBrains Mono';min-width:42px;color:var(--accent-amber);text-align:right;">${w.pct}%</span>
              <a href="tracker-cma.html?subj=${w.key}" class="btn" style="padding:4px 10px;font-size:11px;background:var(--bg-hover);color:var(--text-primary);border:1px solid var(--border-medium);text-decoration:none;border-radius:4px;">Study →</a>
            </div>
          `).join('')}
        </div>`;
    }
  }

  // Strategy Box
  const smartBox = document.getElementById('smart-box');
  if (smartBox) {
    const rec = `Prioritise <strong>Financial & Cost Accounting (P2)</strong> and <strong>Business Math & Stats (P3)</strong>. Practice arithmetic, interest calculations, and statistics concepts regularly. Since there is NO negative marking in the MCQ format, ensure you plan to attempt all 100 questions per paper!`;
    smartBox.innerHTML = `<div style="font:400 13px/1.6 'DM Sans';color:var(--text-secondary)">💡 <strong>ICMAI Strategy Note:</strong> ${rec}</div>`;
  }
})();
