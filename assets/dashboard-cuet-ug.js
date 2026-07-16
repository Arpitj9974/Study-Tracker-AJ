/* ============================================================================
 * dashboard-cuet-ug.js — Dashboard controller for CUET UG
 * ============================================================================ */

function renderCUETUGDashboard() {
  const config = EXAM_CONFIG_CUETUG;
  const priorityData = CUETUG_PRIORITY_DATA;

  localStorage.setItem('selectedExam', 'cuet_ug');

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
        <a href="tracker-cuet-ug.html?subj=${subj.key}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('cuet-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', '#3B82F6');
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('cuet-days-left').innerHTML = `
    <strong>Target Date:</strong> 15 May 2027 (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details
  const p = config.examPattern;
  document.getElementById('cuet-pattern-details').innerHTML = `
    <div style="margin-bottom:8px"><strong>Conducting Body:</strong> NTA (National Testing Agency)</div>
    <div style="margin-bottom:8px"><strong>Mode:</strong> ${p.mode}</div>
    <div style="margin-bottom:8px"><strong>Paper Specs:</strong> 50 MCQs (ALL compulsory) · 250 Marks · 60 Mins (+5 / −1)</div>
    <div style="margin-bottom:8px"><strong>Structure:</strong> Section I (Languages), Section II (Domain NCERT Class 12), Section III (GAT)</div>
    <div><strong>Rules:</strong> Max 5 papers per candidate · Open stream selection across 37 total papers</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCUETUGDashboard();
});

window.addEventListener('cloudDataSynced', renderCUETUGDashboard);
window.addEventListener('storage', renderCUETUGDashboard);
