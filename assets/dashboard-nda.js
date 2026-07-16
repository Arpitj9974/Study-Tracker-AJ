/* ============================================================================
 * dashboard-nda.js — Dashboard controller for UPSC NDA & NA
 * ============================================================================ */

function renderNDADashboard() {
  const config = EXAM_CONFIG_NDA;
  const priorityData = NDA_PRIORITY_DATA;

  localStorage.setItem('selectedExam', 'nda');

  let totalDone = 0;
  let totalChapters = config.subjects.reduce((s, v) => s + v.totalChapters, 0);

  const subjectCardsHTML = config.subjects.map(subj => {
    const chapters = Object.entries(priorityData)
      .filter(([key]) => key.startsWith(subj.prefix))
      .map(([key, data]) => ({ key, ...data }));

    let subjDone = 0;
    chapters.forEach(ch => {
      if (localStorage.getItem(ch.key) === '1') subjDone++;
    });

    totalDone += subjDone;
    const subjPct = chapters.length > 0 ? Math.round((subjDone / chapters.length) * 100) : 0;

    return `
      <div style="background:var(--bg-elevated);border:1px solid var(--border-medium);border-radius:12px;padding:20px;display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <span style="font-size:24px">${subj.icon}</span>
            <span style="font:600 11px/1 'JetBrains Mono';padding:4px 8px;border-radius:12px;background:rgba(255,255,255,0.06);color:var(--text-secondary)">${subj.examStage}</span>
          </div>
          <div style="font:700 16px/1.2 'DM Sans';color:var(--text-primary);margin-bottom:8px">${subj.name}</div>
          <div style="font:600 12px/1 'JetBrains Mono';color:${subj.color};margin-bottom:14px">${subjDone} / ${chapters.length} chapters completed (${subjPct}%)</div>
          <div style="width:100%;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;margin-bottom:16px">
            <div style="width:${subjPct}%;height:100%;background:${subj.color}"></div>
          </div>
        </div>
        <a href="tracker-nda.html?subj=${subj.key}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('nda-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', '#F59E0B');
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('nda-days-left').innerHTML = `
    <strong>Target Date:</strong> 13 Sep 2026 (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details
  const p = config.examPattern;
  document.getElementById('nda-pattern-details').innerHTML = `
    <div style="margin-bottom:10px"><strong>Mode:</strong> ${p.mode}</div>
    <div style="margin-bottom:10px"><strong>Paper I Mathematics:</strong> 120 Qs · 300 Marks · 2.5 Hrs (+2.5 / −0.83) · Sectional cutoff: 25% (≥75 M)</div>
    <div style="margin-bottom:10px"><strong>Paper II GAT:</strong> 150 Qs · 600 Marks · 2.5 Hrs (Part A English 200M + Part B GK 400M, +4 / −1.33)</div>
    <div><strong>Total Written:</strong> 900 Marks · 270 Qs | <strong>Stage 2 SSB:</strong> 900 Marks</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNDADashboard();
});

window.addEventListener('cloudDataSynced', renderNDADashboard);
window.addEventListener('storage', renderNDADashboard);
