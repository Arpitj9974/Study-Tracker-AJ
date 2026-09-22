/**
 * mock-tracker.js — AspirantFlow Mock Test Engine
 * Logs, calculates statistics, and visualizes full-length mock tests per exam.
 */

(function () {
  function getMocks(examKey) {
    if (!examKey) return [];
    try {
      const raw = localStorage.getItem('mocks_' + examKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Error reading mocks for ' + examKey, e);
    }
    return [];
  }

  function saveMock(examKey, data) {
    if (!examKey || !data) return false;
    const list = getMocks(examKey);
    const newMock = {
      id: 'mock_' + Date.now(),
      date: data.date || new Date().toISOString().split('T')[0],
      title: data.title || 'Full Mock Test',
      score: parseFloat(data.score) || 0,
      maxScore: parseFloat(data.maxScore) || 200,
      accuracy: data.accuracy ? parseFloat(data.accuracy) : null,
      percentile: data.percentile ? parseFloat(data.percentile) : null,
      notes: data.notes || ''
    };
    list.unshift(newMock); // newest first
    localStorage.setItem('mocks_' + examKey, JSON.stringify(list));

    // Cloud sync if available
    if (window.auth && window.auth.currentUser && window.db && window.setDoc && window.doc) {
      const updateData = {};
      updateData[`mocks.${examKey}`] = list;
      window.setDoc(window.doc(window.db, "users", window.auth.currentUser.uid), updateData, { merge: true })
        .catch(err => console.error("Cloud mock sync error:", err));
    }

    window.dispatchEvent(new Event('storage'));
    return true;
  }

  function deleteMock(examKey, mockId) {
    if (!examKey || !mockId) return;
    const list = getMocks(examKey).filter(m => m.id !== mockId);
    localStorage.setItem('mocks_' + examKey, JSON.stringify(list));

    if (window.auth && window.auth.currentUser && window.db && window.setDoc && window.doc) {
      const updateData = {};
      updateData[`mocks.${examKey}`] = list;
      window.setDoc(window.doc(window.db, "users", window.auth.currentUser.uid), updateData, { merge: true })
        .catch(err => console.error("Cloud mock delete sync error:", err));
    }

    window.dispatchEvent(new Event('storage'));
  }

  let lastTrackerContext = null;

  function renderMockTracker(containerId, examKey, examName) {
    const container = document.getElementById(containerId);
    if (!container) return;

    lastTrackerContext = { containerId, examKey, examName };

    const list = getMocks(examKey);
    const count = list.length;
    let latestScore = '--';
    let avgScore = '--';
    let bestScore = '--';

    if (count > 0) {
      latestScore = `${list[0].score} / ${list[0].maxScore}`;
      const scores = list.map(m => m.score);
      bestScore = Math.max(...scores);
      const sum = scores.reduce((a, b) => a + b, 0);
      avgScore = (sum / count).toFixed(1);
    }

    const html = `
      <div class="mock-tracker-card glass-card" style="border-radius:18px; padding:24px; margin-top:24px; border:1px solid rgba(127,119,221,0.2); background:rgba(20,23,32,0.65);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:16px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:38px; height:38px; border-radius:10px; background:rgba(127,119,221,0.15); display:flex; align-items:center; justify-content:center; font-size:20px;">📝</div>
            <div>
              <h3 style="font-size:16px; font-weight:800; color:#F0F2FF; margin:0;">${examName || 'Exam'} Mock Test Tracker</h3>
              <p style="font-size:11px; color:rgba(203,196,210,0.6); margin:2px 0 0;">Log full-length mocks, track score progression & accuracy</p>
            </div>
          </div>
          <button onclick="window.openMockModal('${examKey}', '${examName || 'Exam'}')" 
                  style="background:linear-gradient(135deg, #7F77DD 0%, #534AB7 100%); color:#fff; border:none; border-radius:10px; padding:10px 18px; font-size:12px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; box-shadow:0 4px 12px rgba(127,119,221,0.25); transition:all 0.2s;">
            <span class="material-symbols-outlined" style="font-size:16px;">add_circle</span>
            <span>Log Mock Test</span>
          </button>
        </div>

        <!-- Summary Stats Grid -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; margin-bottom:20px;">
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px 14px;">
            <div style="font-size:9px; font-weight:700; text-transform:uppercase; color:rgba(203,196,210,0.6); letter-spacing:0.06em;">Latest Score</div>
            <div style="font-size:18px; font-weight:800; color:#A78BFA; margin-top:4px;">${latestScore}</div>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px 14px;">
            <div style="font-size:9px; font-weight:700; text-transform:uppercase; color:rgba(203,196,210,0.6); letter-spacing:0.06em;">Best Score</div>
            <div style="font-size:18px; font-weight:800; color:#10B981; margin-top:4px;">${bestScore !== '--' ? '🏆 ' + bestScore : '--'}</div>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px 14px;">
            <div style="font-size:9px; font-weight:700; text-transform:uppercase; color:rgba(203,196,210,0.6); letter-spacing:0.06em;">Average Score</div>
            <div style="font-size:18px; font-weight:800; color:#38BDF8; margin-top:4px;">${avgScore}</div>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px 14px;">
            <div style="font-size:9px; font-weight:700; text-transform:uppercase; color:rgba(203,196,210,0.6); letter-spacing:0.06em;">Mocks Attempted</div>
            <div style="font-size:18px; font-weight:800; color:#F59E0B; margin-top:4px;">${count}</div>
          </div>
        </div>

        <!-- Mocks List -->
        <div class="mock-list-container">
          ${count === 0 ? `
            <div style="text-align:center; padding:24px 16px; background:rgba(255,255,255,0.02); border-radius:12px; border:1px dashed rgba(255,255,255,0.1);">
              <p style="font-size:12px; color:rgba(203,196,210,0.6); margin:0;">No mock tests logged yet for ${examName || 'this exam'}.</p>
              <p style="font-size:11px; color:rgba(203,196,210,0.4); margin:4px 0 0;">Tap "+ Log Mock Test" after completing a test series mock to monitor your score progression.</p>
            </div>
          ` : `
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${list.map(m => {
                const pct = m.maxScore > 0 ? Math.round((m.score / m.maxScore) * 100) : 0;
                let scoreColor = '#10B981';
                if (pct < 45) scoreColor = '#EF4444';
                else if (pct < 65) scoreColor = '#F59E0B';

                return `
                  <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding:12px 16px; border-radius:12px; background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.05); transition:all 0.2s;">
                    <div style="display:flex; align-items:center; gap:12px; min-width:180px;">
                      <span style="font-size:10px; font-family:'JetBrains Mono',monospace; color:rgba(203,196,210,0.5); background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">${m.date}</span>
                      <div>
                        <div style="font-size:13px; font-weight:700; color:#E6E0E9;">${m.title}</div>
                        ${m.notes ? `<div style="font-size:11px; color:rgba(203,196,210,0.5); margin-top:2px;">⚠️ ${m.notes}</div>` : ''}
                      </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:12px; margin-left:auto;">
                      ${m.percentile ? `<span style="font-size:10px; font-weight:700; background:rgba(59,130,246,0.12); color:#60A5FA; border:1px solid rgba(59,130,246,0.25); padding:2px 8px; border-radius:6px;">${m.percentile}%tile</span>` : ''}
                      ${m.accuracy ? `<span style="font-size:10px; font-weight:700; background:rgba(16,185,129,0.12); color:#34D399; border:1px solid rgba(16,185,129,0.25); padding:2px 8px; border-radius:6px;">${m.accuracy}% Acc</span>` : ''}
                      <div style="font-size:15px; font-weight:800; color:${scoreColor}; min-width:70px; text-align:right;">
                        ${m.score} <span style="font-size:10px; color:rgba(203,196,210,0.4); font-weight:600;">/ ${m.maxScore}</span>
                      </div>
                      <button onclick="window.deleteMockEntry('${examKey}', '${m.id}')" title="Delete mock" 
                              style="background:transparent; border:none; color:rgba(239,68,68,0.6); cursor:pointer; padding:4px; font-size:14px; display:inline-flex; align-items:center;">
                        <span class="material-symbols-outlined" style="font-size:16px;">delete</span>
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  // Global Handlers
  window.openMockModal = function (examKey, examName) {
    let modal = document.getElementById('mock-modal');
    if (modal) modal.remove();

    const todayStr = new Date().toISOString().split('T')[0];
    const modalHtml = `
      <div id="mock-modal" style="display:flex; position:fixed; z-index:10000; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.65); align-items:center; justify-content:center; backdrop-filter:blur(6px);">
        <div style="background:#141720; border:1px solid rgba(127,119,221,0.3); border-radius:18px; padding:28px; width:92%; max-width:440px; box-shadow:0 20px 50px rgba(0,0,0,0.7);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
            <div>
              <h3 style="font-size:18px; font-weight:800; color:#F0F2FF; margin:0;">Log Mock Test</h3>
              <p style="font-size:11px; color:#A78BFA; margin:2px 0 0;">${examName || 'Exam'}</p>
            </div>
            <button onclick="document.getElementById('mock-modal').remove()" style="background:transparent; border:none; color:rgba(203,196,210,0.6); font-size:22px; cursor:pointer;">&times;</button>
          </div>

          <form id="mock-log-form" onsubmit="window.handleMockSubmit(event, '${examKey}')" style="display:flex; flex-direction:column; gap:14px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Mock Test Name / Platform</label>
              <input type="text" id="mock-title" required placeholder="e.g. Testbook Full Mock 3" 
                     style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
                <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Score Obtained</label>
                <input type="number" step="0.25" id="mock-score" required placeholder="138" 
                       style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
              </div>
              <div>
                <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Max Score</label>
                <input type="number" id="mock-max" value="200" required 
                       style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
                <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Accuracy % (Optional)</label>
                <input type="number" step="0.1" id="mock-acc" placeholder="88.5" 
                       style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
              </div>
              <div>
                <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Percentile % (Optional)</label>
                <input type="number" step="0.1" id="mock-pctile" placeholder="94.2" 
                       style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
              </div>
            </div>

            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Date Attempted</label>
              <input type="date" id="mock-date" value="${todayStr}" 
                     style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
            </div>

            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:rgba(203,196,210,0.7); text-transform:uppercase; margin-bottom:6px;">Weak Areas / Strategy Notes</label>
              <input type="text" id="mock-notes" placeholder="e.g. Lost time on Reading Comprehension" 
                     style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; font-size:13px; color:#fff; outline:none;" />
            </div>

            <button type="submit" style="background:linear-gradient(135deg, #7F77DD 0%, #534AB7 100%); color:#fff; font-weight:700; padding:12px; border-radius:10px; border:none; cursor:pointer; margin-top:8px;">Save Mock Result</button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  };

  window.handleMockSubmit = function (e, examKey) {
    e.preventDefault();
    const data = {
      title: document.getElementById('mock-title').value,
      score: document.getElementById('mock-score').value,
      maxScore: document.getElementById('mock-max').value,
      accuracy: document.getElementById('mock-acc').value,
      percentile: document.getElementById('mock-pctile').value,
      date: document.getElementById('mock-date').value,
      notes: document.getElementById('mock-notes').value
    };

    saveMock(examKey, data);
    const modal = document.getElementById('mock-modal');
    if (modal) modal.remove();
    if (lastTrackerContext) {
      renderMockTracker(lastTrackerContext.containerId, lastTrackerContext.examKey, lastTrackerContext.examName);
    }
  };

  window.deleteMockEntry = function (examKey, mockId) {
    if (confirm("Delete this mock test result?")) {
      deleteMock(examKey, mockId);
      if (lastTrackerContext) {
        renderMockTracker(lastTrackerContext.containerId, lastTrackerContext.examKey, lastTrackerContext.examName);
      }
    }
  };

  function autoMountMockTracker() {
    const isDashboard = window.location.pathname.includes('dashboard') || !!document.querySelector('.preptrack-page') || !!document.querySelector('.main-grid');
    if (!isDashboard && !document.getElementById('mock-tracker-container')) return;

    let container = document.getElementById('mock-tracker-container');
    if (!container) {
      const leftCol = document.querySelector('.main-grid > div:first-child');
      if (leftCol) {
        container = document.createElement('div');
        container.id = 'mock-tracker-container';
        container.style.marginTop = '28px';
        leftCol.appendChild(container);
      } else {
        const page = document.querySelector('.preptrack-page') || document.querySelector('main');
        if (page) {
          container = document.createElement('div');
          container.id = 'mock-tracker-container';
          container.style.marginTop = '28px';
          page.appendChild(container);
        }
      }
    }

    if (!container) return;

    let examKey = 'nqt';
    let examName = 'Exam';

    if (window.DASH_SPEC && Array.isArray(window.DASH_SPEC.variants) && window.DASH_SPEC.variants.length) {
      const params = new URLSearchParams(window.location.search);
      const chosen = window.DASH_SPEC.param ? params.get(window.DASH_SPEC.param) : null;
      const variant = window.DASH_SPEC.variants.find(v => v.id === chosen) || window.DASH_SPEC.variants[0];
      if (variant) {
        examKey = variant.storageKey || variant.id || 'nqt';
        examName = (variant.config && (variant.config.examName || variant.config.fullName)) || examKey.toUpperCase();
      }
    } else if (typeof window.getCurrentExam === 'function') {
      examKey = window.getCurrentExam() || 'nqt';
      if (window.EXAM_CONFIG && window.EXAM_CONFIG[examKey]) {
        examName = window.EXAM_CONFIG[examKey].label || examKey.toUpperCase();
      }
    } else {
      examKey = localStorage.getItem('selectedExam') || 'nqt';
    }

    renderMockTracker('mock-tracker-container', examKey, examName);
  }

  window.addEventListener('storage', () => {
    if (lastTrackerContext) {
      renderMockTracker(lastTrackerContext.containerId, lastTrackerContext.examKey, lastTrackerContext.examName);
    }
  });

  window.addEventListener('cloudDataSynced', () => {
    if (lastTrackerContext) {
      renderMockTracker(lastTrackerContext.containerId, lastTrackerContext.examKey, lastTrackerContext.examName);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(autoMountMockTracker, 150));
  } else {
    setTimeout(autoMountMockTracker, 150);
  }

  window.autoMountMockTracker = autoMountMockTracker;
  window.getMocks = getMocks;
  window.saveMock = saveMock;
  window.deleteMock = deleteMock;
  window.renderMockTracker = renderMockTracker;
})();

