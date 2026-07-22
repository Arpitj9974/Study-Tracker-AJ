/* dashboard-generic.js — one renderer for all redesigned dashboards.
 * Each page sets window.DASH_SPEC (before loading this file):
 *   window.DASH_SPEC = {
 *     param: 'exam',                 // optional query param to pick a variant
 *     variants: [                    // 1+ variants; variants[0] is the default
 *       { id:'chsl', config: EXAM_CONFIG_CHSL, storageKey:'ssc_chsl', trackerQuery:'exam=chsl' },
 *     ],
 *     trackerPage: 'tracker-ssc.html',
 *     smart: '<strong>Strategy:</strong> ...'   // optional strategy note (HTML)
 *   };
 * Data comes from each variant's rich EXAM_CONFIG_* object
 * (subjects: {key,name,icon,color,prefix,totalChapters,examStage}).
 */
(function () {
  const spec = window.DASH_SPEC;
  if (!spec || !Array.isArray(spec.variants) || !spec.variants.length) return;

  const params = new URLSearchParams(window.location.search);
  const chosen = spec.param ? params.get(spec.param) : null;
  const variant = spec.variants.find(v => v.id === chosen) || spec.variants[0];
  const config = variant.config;
  if (!config) return;

  if (variant.storageKey) localStorage.setItem('selectedExam', variant.storageKey);

  const $ = id => document.getElementById(id);
  const setText = (id, v) => { const e = $(id); if (e) e.textContent = v; };
  const setHTML = (id, v) => { const e = $(id); if (e) e.innerHTML = v; };
  const trackerLink = key => `${spec.trackerPage}?${variant.trackerQuery ? variant.trackerQuery + '&' : ''}subj=${key}`;

  function computeStats() {
    let totalDone = 0, totalCh = 0;
    const subjStats = config.subjects.map(subj => {
      let done = 0;
      for (let i = 1; i <= subj.totalChapters; i++) {
        const v = localStorage.getItem(subj.prefix + i);
        if (v === '1' || v === '2' || v === '3') done++;
      }
      totalDone += done;
      totalCh += subj.totalChapters;
      const pct = subj.totalChapters > 0 ? Math.round((done / subj.totalChapters) * 100) : 0;
      return { ...subj, done, pct, total: subj.totalChapters };
    });
    return { subjStats, totalDone, totalCh, overallPct: totalCh > 0 ? Math.round((totalDone / totalCh) * 100) : 0 };
  }

  function render() {
    const name = config.examName || config.fullName || 'Exam';
    const { subjStats, totalDone, totalCh, overallPct } = computeStats();

    // Header
    setText('hub-name', name);
    setText('ibps-hub-name', name);
    setText('hub-tag', `${config.subjects.length} subjects · ${totalCh} chapters`);
    setText('ibps-hub-tag', `${config.subjects.length} subjects · ${totalCh} chapters`);
    setText('ibps-stats-title', `${name} Stats`);

    // Stats
    setText('ms-total-done', totalDone);
    setText('ms-total-chapters', totalCh);
    setText('ms-overall-pct', overallPct + '%');
    setText('ms-subj-count', config.subjects.length);
    setText('ms-syllabus-sub', name.split(' ')[0]);

    // Countdown
    if (config.examDate) {
      const target = new Date(config.examDate + 'T00:00:00');
      const days = Math.ceil((target - new Date()) / 86400000);
      setText('countdown-days', days > 0 ? days : '0');
      setText('countdown-lbl', `Days until ${name.split(' ')[0]} Exam`);
      setText('ms-target-date', target.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }));
    }

    // Donut (segmented by subject share of completed chapters)
    const svg = $('donut-svg');
    if (svg) {
      const R = 54, C = 2 * Math.PI * R;
      let used = 0;
      const arcs = subjStats.map(s => {
        const frac = totalCh > 0 ? s.done / totalCh : 0;
        const off = C - frac * C;
        const rot = -90 + used * 360;
        used += frac;
        return `<circle cx="60" cy="60" r="${R}" fill="none" stroke="${s.color}" stroke-width="10"
          stroke-dasharray="${C}" stroke-dashoffset="${off}" stroke-linecap="round"
          transform="rotate(${rot} 60 60)" style="transition:stroke-dashoffset 1s ease"/>`;
      }).join('');
      svg.innerHTML = `
        <circle cx="60" cy="60" r="${R}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
        ${arcs}
        <text x="60" y="56" text-anchor="middle" font-family="Inter" font-size="17" font-weight="800" fill="#e6e0e9">${overallPct}%</text>
        <text x="60" y="72" text-anchor="middle" font-family="Inter" font-size="9" fill="rgba(203,196,210,0.6)">${totalDone}/${totalCh}</text>`;
    }

    // Subject cards
    setHTML('subject-cards', subjStats.map(s => `
      <div class="subject-card" style="--subj-color:${s.color}">
        <div class="sc-header">
          <div class="sc-title"><span class="sc-icon">${s.icon}</span>${s.name}</div>
          <span class="sc-pct" style="color:${s.color}">${s.pct}%</span>
        </div>
        <div class="sc-phases">
          <div class="sc-phase">
            <div class="sc-phase-label"><span>Progress</span><span class="sc-phase-count">${s.done} / ${s.total}</span></div>
            <div class="progress-bar"><div class="progress-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
          </div>
        </div>
        <a href="${trackerLink(s.key)}" class="sc-link">Open Subject Roadmap →</a>
      </div>`).join(''));

    // Focus box (weak subjects < 50%)
    const weak = subjStats.filter(s => s.pct < 50).sort((a, b) => a.pct - b.pct);
    if (weak.length === 0) {
      setHTML('focus-box', `<div class="focus-on-track">✅ All subjects above 50%. Keep revising and attempt full-length mocks!</div>`);
    } else {
      setHTML('focus-box', `<div class="focus-title">⚡ Priority Focus (${weak.length} below 50%)</div>
        <div class="focus-items">${weak.slice(0, 5).map(s => `
          <div class="focus-item">
            <span class="focus-subject">${s.icon} ${s.name}</span>
            <span class="focus-pct">${s.pct}%</span>
            <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
          </div>`).join('')}</div>`);
    }

    // Strategy note
    setHTML('smart-box', `<div>${spec.smart || 'Focus on your weakest subjects first, then reinforce with daily revision and weekly full-length mocks.'}</div>`);

    // Highlight the active level/variant tab (if the page has clickable level tabs)
    try {
      document.querySelectorAll('[data-dash-level]').forEach(a => {
        const on = a.getAttribute('data-dash-level') === variant.id;
        a.style.background = on ? 'rgba(207,188,255,0.15)' : '';
        a.style.borderColor = on ? 'rgba(207,188,255,0.45)' : '';
        a.style.color = on ? '#cfbcff' : '';
      });
    } catch (e) {}

    // let the page's inline stat-bar script update
    if (typeof window.updateStatBars === 'function') window.updateStatBars();
  }

  render();
  document.addEventListener('DOMContentLoaded', render);
  window.addEventListener('cloudDataSynced', render);
  window.addEventListener('storage', render);
})();
