/* ============================================================================
 * dashboard-ugcnet.js — Dashboard controller for UGC NET Paper 1
 * ============================================================================ */

function renderUGCNETDashboard() {
  const config = EXAM_CONFIG_UGCNET;
  const priorityData = UGCNET_PRIORITY_DATA;

  localStorage.setItem('selectedExam', 'ugcnet');

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
          <div style="font:600 12px/1 'JetBrains Mono';color:${subj.color};margin-bottom:14px">${subjDone} / ${chapters.length} units completed (${subjPct}%)</div>
          <div style="width:100%;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;margin-bottom:16px">
            <div style="width:${subjPct}%;height:100%;background:${subj.color}"></div>
          </div>
        </div>
        <a href="tracker-ugcnet.html?subj=${subj.key}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('ugcnet-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', '#4F46E5');
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('ugcnet-days-left').innerHTML = `
    <strong>Target Date:</strong> ${config.examDate} (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details
  const p = config.examPattern;
  document.getElementById('ugcnet-pattern-details').innerHTML = `
    <div style="margin-bottom:10px"><strong>Mode & Duration:</strong> ${p.mode} · 180 Minutes (3 Hours single session, no break)</div>
    <div style="margin-bottom:10px"><strong>Structure:</strong> Paper 1 (50Q / 100M) + Paper 2 (100Q / 200M) = 150 Qs / 300 Marks</div>
    <div style="margin-bottom:10px"><strong>Marking Scheme:</strong> +2 Marks per correct answer · <strong>NO Negative Marking</strong></div>
    <div><strong>Qualification:</strong> ${p.qualification.jrfAndAP} | ${p.qualification.apOnly}</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderUGCNETDashboard();
});

window.addEventListener('cloudDataSynced', renderUGCNETDashboard);
window.addEventListener('storage', renderUGCNETDashboard);
