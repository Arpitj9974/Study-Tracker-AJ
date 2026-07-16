/* ============================================================================
 * dashboard-clat.js — Dashboard controller for CLAT UG
 * ============================================================================ */

function renderCLATDashboard() {
  const config = EXAM_CONFIG_CLAT_UG;
  const priorityData = CLAT_UG_PRIORITY_DATA;

  localStorage.setItem('selectedExam', 'clat_ug_2027');

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
        <a href="tracker-clat.html?subj=${subj.key}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('clat-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', '#7B241C');
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('clat-days-left').innerHTML = `
    <strong>Target Date:</strong> 6 Dec 2026 (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details
  const p = config.examPattern;
  document.getElementById('clat-pattern-details').innerHTML = `
    <div style="margin-bottom:8px"><strong>Mode:</strong> ${p.mode}</div>
    <div style="margin-bottom:8px"><strong>Paper:</strong> 120 MCQs · 120 Marks · 120 Mins (+1 / −0.25)</div>
    <div style="margin-bottom:8px"><strong>Sections:</strong> Legal Reasoning (28–32 Qs), Current Affairs & GK (28–32 Qs), English (22–26 Qs), Logical Reasoning (22–26 Qs), Quant Techniques (10–14 Qs)</div>
    <div><strong>Participating NLUs:</strong> ${config.participatingNLUs} National Law Universities across India</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCLATDashboard();
});

window.addEventListener('cloudDataSynced', renderCLATDashboard);
window.addEventListener('storage', renderCLATDashboard);
