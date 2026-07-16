/* ============================================================================
 * dashboard-rrb.js — Dashboard controller for RRB NTPC & Group D
 * ============================================================================ */

function switchRRBExam(examType) {
  const url = new URL(window.location.href);
  url.searchParams.set('exam', examType);
  window.history.pushState({}, '', url.toString());
  localStorage.setItem('selectedExam', examType === 'group_d' ? 'rrb_group_d' : 'rrb_ntpc');
  renderRRBDashboard();
}

function renderRRBDashboard() {
  const params = new URLSearchParams(window.location.search);
  const examType = params.get('exam') === 'group_d' ? 'group_d' : 'ntpc';

  const config = examType === 'group_d' ? EXAM_CONFIG_RRB_GROUP_D : EXAM_CONFIG_RRB_NTPC;
  const priorityData = examType === 'group_d' ? RRB_GROUP_D_PRIORITY_DATA : RRB_NTPC_PRIORITY_DATA;
  const examKey = examType === 'group_d' ? 'rrb_group_d' : 'rrb_ntpc';

  // Active Tab Highlight
  document.querySelectorAll('#rrb-tabs button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-exam') === examType);
  });

  // Headers
  document.getElementById('rrb-exam-title').textContent = config.examName;
  document.getElementById('rrb-exam-sub').textContent = examType === 'group_d' 
    ? `Single CBT + PET + DV/Medical (CEN 09/2025 · 22,195 Vacancies)`
    : `Qualifying CBT-1 + Merit CBT-2 + CBAT / Typing (Graduate & UG)`;

  // Strategy Note
  document.getElementById('rrb-strategy-note').innerHTML = examType === 'group_d'
    ? `<strong>⚠️ Strategy Note:</strong> Single CBT (100 Qs / 90 min) with <strong>−1/3 negative marking</strong>. Physical Efficiency Test (PET) is pass/fail. Merit is decided strictly by normalized CBT score.`
    : `<strong>💡 Strategy Note:</strong> CBT 1 is <strong>Qualifying Only</strong>. CBT 2 (120 Qs / 90 min) decides final merit. Science is a topic within GA (not a separate section).`;

  // Read stats
  let totalDone = 0;
  let totalChapters = 0;

  const subjectCardsHTML = config.subjects.map(subj => {
    const chapters = Object.entries(priorityData)
      .filter(([key]) => key.startsWith(subj.prefix))
      .map(([key, data]) => ({ key, ...data }));

    let subjDone = 0;
    chapters.forEach(ch => {
      if (localStorage.getItem(ch.key) === '1') subjDone++;
    });

    totalDone += subjDone;
    totalChapters += chapters.length;

    const subjPct = chapters.length > 0 ? Math.round((subjDone / chapters.length) * 100) : 0;

    return `
      <div style="background:var(--bg-elevated);border:1px solid var(--border-medium);border-radius:12px;padding:20px;display:flex;flex-direction:column;justify-space-between">
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
        <a href="tracker-rrb.html?exam=${examType}&subj=${subj.key}" class="btn" style="background:${subj.color};text-align:center;text-decoration:none;display:block;padding:10px;font-size:13px;border-radius:8px;color:white;font-weight:600">
          Open ${subj.name} Tracker →
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('rrb-subject-cards').innerHTML = subjectCardsHTML;

  // Overall Donut Update
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  document.getElementById('overall-pct').textContent = `${overallPct}%`;
  document.getElementById('overall-count').textContent = `${totalDone} / ${totalChapters}`;
  
  const donutPath = document.getElementById('overall-donut-path');
  if (donutPath) {
    donutPath.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    donutPath.setAttribute('stroke', config.subjects[0].color);
  }

  // Days Countdown
  const daysLeft = Math.ceil((new Date(config.examDate + 'T00:00:00') - new Date()) / 86400000);
  document.getElementById('rrb-days-left').innerHTML = `
    <strong>Target Date:</strong> ${config.examDate} (${daysLeft > 0 ? daysLeft + ' days left' : 'Exam Day!'})
  `;

  // Pattern Details Table
  const pattern = config.examPattern;
  document.getElementById('rrb-pattern-details').innerHTML = `
    <div style="margin-bottom:10px"><strong>Stages:</strong> ${pattern.stages}</div>
    <div style="margin-bottom:10px"><strong>Marking Scheme:</strong> ${pattern.marking}</div>
    <div style="margin-bottom:10px"><strong>Qualifying Threshold:</strong> ${pattern.qualifyingMarks}</div>
    <div><strong>Normalization:</strong> ${pattern.normalization}</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderRRBDashboard();
});

window.addEventListener('cloudDataSynced', renderRRBDashboard);
window.addEventListener('storage', renderRRBDashboard);
