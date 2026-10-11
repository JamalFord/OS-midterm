// Operating Systems (CSC 4320 / 6320) Exam 1 Command Center — Main Application Logic
(function () {
  'use strict';

  // =========================================================================
  // 1. TAB NAVIGATION & THEME TOGGLE
  // =========================================================================
  const navButtons = document.querySelectorAll('.nav-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      navButtons.forEach((b) => b.classList.remove('active'));
      tabPanels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('os_exam1_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('os_exam1_theme', next);
  });

  // =========================================================================
  // 2. TAB 1: 2-SIDED CHEAT SHEET STUDIO
  // =========================================================================
  const printCsBtn = document.getElementById('print-cheatsheet-btn');
  const toggleEditCsBtn = document.getElementById('toggle-edit-cs-btn');
  const densitySelect = document.getElementById('cs-density-select');
  const resetCsBtn = document.getElementById('reset-cs-btn');
  const csPrintable = document.getElementById('cheat-sheet-printable');
  const defaultCsHtml = csPrintable ? csPrintable.innerHTML : '';

  const savedCsHtml = localStorage.getItem('os_exam1_custom_cs_v1');
  if (savedCsHtml && csPrintable) {
    csPrintable.innerHTML = savedCsHtml;
  }

  let isCsEditable = false;
  if (printCsBtn) {
    printCsBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (toggleEditCsBtn && csPrintable) {
    toggleEditCsBtn.addEventListener('click', () => {
      isCsEditable = !isCsEditable;
      const boxes = csPrintable.querySelectorAll('.cs-box');
      boxes.forEach((b) => {
        b.setAttribute('contenteditable', isCsEditable ? 'true' : 'false');
        b.style.outline = isCsEditable ? '1.5px dashed #0284c7' : 'none';
      });
      toggleEditCsBtn.textContent = isCsEditable ? '💾 Save & Lock Edits' : '✏️ Enable Edit Mode';
      if (!isCsEditable) {
        localStorage.setItem('os_exam1_custom_cs_v1', csPrintable.innerHTML);
      }
    });

    csPrintable.addEventListener('input', () => {
      if (isCsEditable) {
        localStorage.setItem('os_exam1_custom_cs_v1', csPrintable.innerHTML);
      }
    });
  }

  if (densitySelect) {
    densitySelect.addEventListener('change', () => {
      const pages = document.querySelectorAll('.cs-sheet-page');
      pages.forEach((p) => {
        p.classList.remove('density-compact');
        if (densitySelect.value === 'compact') {
          p.classList.add('density-compact');
        }
      });
    });
  }

  if (resetCsBtn && csPrintable) {
    resetCsBtn.addEventListener('click', () => {
      localStorage.removeItem('os_exam1_custom_cs_v1');
      csPrintable.innerHTML = defaultCsHtml;
      isCsEditable = false;
      toggleEditCsBtn.textContent = '✏️ Enable Edit Mode';
    });
  }

  // =========================================================================
  // 3. TAB 2: 5 FULL-LENGTH PRACTICE EXAMS ENGINE
  // =========================================================================
  const examsData = window.EXAMS_DATA || [];
  let currentExamIndex = 0;
  let examMode = 'study'; // 'study' | 'timed'
  let isExamGraded = false;
  const userAnswers = {}; // key: question.id -> value
  const optionOrderMap = {}; // key: question.id -> array of original option indices
  const questionOrderMap = {}; // key: exam.id -> array of original question indices

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function shuffleExamAnswers(exam) {
    if (!exam) return;
    exam.questions.forEach((q) => {
      if (q.type === 'mc' && Array.isArray(q.options)) {
        const baseIndices = q.options.map((_, i) => i);
        optionOrderMap[q.id] = shuffleArray(baseIndices);
      }
    });
  }

  function shuffleExamQuestionsAndAnswers(exam) {
    if (!exam) return;
    const qIndices = exam.questions.map((_, i) => i);
    questionOrderMap[exam.id] = shuffleArray(qIndices);
    shuffleExamAnswers(exam);
  }

  function resetExamOrder(exam) {
    if (!exam) return;
    questionOrderMap[exam.id] = exam.questions.map((_, i) => i);
    exam.questions.forEach((q) => {
      if (q.type === 'mc' && Array.isArray(q.options)) {
        optionOrderMap[q.id] = q.options.map((_, i) => i);
      }
    });
  }

  // Initialize all exams with shuffled MC answer choices by default so correct answers aren't predictable
  examsData.forEach((ex) => {
    questionOrderMap[ex.id] = ex.questions.map((_, i) => i);
    shuffleExamAnswers(ex);
  });

  const examSelectorList = document.getElementById('exam-selector-list');
  const examQuestionsContainer = document.getElementById('exam-questions-container');
  const examScoreSummary = document.getElementById('exam-score-summary');
  const examModeSelect = document.getElementById('exam-mode-select');
  const gradeExamBtn = document.getElementById('grade-exam-btn');
  const shuffleAnswersToolbarBtn = document.getElementById('shuffle-answers-toolbar-btn');

  // Timer state
  let timerSeconds = 75 * 60;
  let timerInterval = null;
  const timerDisplay = document.getElementById('exam-timer-display');
  const timerStartBtn = document.getElementById('timer-start-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  if (timerStartBtn) {
    timerStartBtn.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerStartBtn.textContent = '▶️ Resume Timer';
      } else {
        timerStartBtn.textContent = '⏸️ Pause Timer';
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            timerDisplay.textContent = formatTime(timerSeconds);
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            isExamGraded = true;
            renderCurrentExam();
          }
        }, 1000);
      }
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      const ex = examsData[currentExamIndex];
      timerSeconds = ((ex && ex.timeMinutes) || 75) * 60;
      timerDisplay.textContent = formatTime(timerSeconds);
      timerStartBtn.textContent = '▶️ Start Timer';
    });
  }

  if (shuffleAnswersToolbarBtn) {
    shuffleAnswersToolbarBtn.addEventListener('click', () => {
      const exam = examsData[currentExamIndex];
      shuffleExamAnswers(exam);
      renderCurrentExam();
    });
  }

  function formatRichText(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  }

  function renderExamSelector() {
    if (!examSelectorList) return;
    examSelectorList.innerHTML = '';
    examsData.forEach((exam, idx) => {
      const btn = document.createElement('div');
      btn.className = 'exam-select-card' + (idx === currentExamIndex ? ' active' : '');
      btn.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <span class="pill pill-sky">${exam.badge || '100 Pts'}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${exam.questions.length} Qs</span>
        </div>
        <h4>${exam.title}</h4>
        <p>${exam.subtitle}</p>
      `;
      btn.addEventListener('click', () => {
        currentExamIndex = idx;
        isExamGraded = false;
        timerSeconds = (exam.timeMinutes || 75) * 60;
        if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
        renderExamSelector();
        renderCurrentExam();
      });
      examSelectorList.appendChild(btn);
    });
  }

  function computeExamScore(exam) {
    let earned = 0;
    let total = 0;
    exam.questions.forEach((q) => {
      total += q.points;
      const ans = userAnswers[q.id];
      if (q.type === 'mc') {
        if (ans === q.correct) earned += q.points;
      } else if (q.type === 'tf') {
        if (ans === q.correct) earned += q.points;
      } else if (q.type === 'numeric_multi') {
        if (ans && Array.isArray(q.fields)) {
          let correctCount = 0;
          q.fields.forEach((f, fIdx) => {
            const uVal = parseFloat(ans[fIdx]);
            if (!isNaN(uVal) && Math.abs(uVal - f.answer) < 0.05) {
              correctCount++;
            }
          });
          earned += Math.round((correctCount / q.fields.length) * q.points * 10) / 10;
        }
      } else if (q.type === 'frq') {
        if (ans && Array.isArray(ans.rubricChecks) && Array.isArray(q.rubric)) {
          const checked = ans.rubricChecks.filter(Boolean).length;
          earned += Math.round((checked / q.rubric.length) * q.points * 10) / 10;
        }
      }
    });
    return { earned: Math.round(earned * 10) / 10, total };
  }

  function renderCurrentExam() {
    const exam = examsData[currentExamIndex];
    if (!exam || !examQuestionsContainer) return;

    const scoreObj = computeExamScore(exam);
    if (examScoreSummary) {
      examScoreSummary.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
          <span style="font-weight:700;">Current Score:</span>
          <span class="pill pill-emerald" style="font-size:0.9rem;">${scoreObj.earned} / ${scoreObj.total} pts (${Math.round((scoreObj.earned / scoreObj.total) * 100)}%)</span>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted);">
          For Free-Response (FRQ) questions, check the self-grading rubric items that your written answer satisfies.
        </p>
      `;
    }

    examQuestionsContainer.innerHTML = '';

    // Exam Banner Card
    const headerCard = document.createElement('div');
    headerCard.className = 'card';
    headerCard.style.marginBottom = '1rem';
    headerCard.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
        <div>
          <span class="pill pill-amber" style="margin-bottom:0.35rem;">${exam.badge}</span>
          <h3 style="font-size:1.15rem;">${exam.title}</h3>
          <p style="font-size:0.84rem; color:var(--text-muted);">${exam.subtitle}</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.45rem;">
          <button class="btn btn-sm btn-amber" id="shuffle-answers-card-btn">🔀 Shuffle Answer Choices</button>
          <button class="btn btn-sm" id="shuffle-both-card-btn">🎲 Shuffle Questions &amp; Answers</button>
          <button class="btn btn-sm" id="reset-order-card-btn">↺ Default Order</button>
          <button class="btn btn-sm" id="reveal-all-explanations-btn">👁️ Show All Answers &amp; Rubrics</button>
          <button class="btn btn-sm" id="clear-exam-answers-btn">🗑️ Clear My Answers</button>
        </div>
      </div>
    `;
    examQuestionsContainer.appendChild(headerCard);

    headerCard.querySelector('#shuffle-answers-card-btn').addEventListener('click', () => {
      shuffleExamAnswers(exam);
      renderCurrentExam();
    });
    headerCard.querySelector('#shuffle-both-card-btn').addEventListener('click', () => {
      shuffleExamQuestionsAndAnswers(exam);
      renderCurrentExam();
    });
    headerCard.querySelector('#reset-order-card-btn').addEventListener('click', () => {
      resetExamOrder(exam);
      renderCurrentExam();
    });
    headerCard.querySelector('#reveal-all-explanations-btn').addEventListener('click', () => {
      isExamGraded = true;
      renderCurrentExam();
    });
    headerCard.querySelector('#clear-exam-answers-btn').addEventListener('click', () => {
      exam.questions.forEach((q) => delete userAnswers[q.id]);
      isExamGraded = false;
      renderCurrentExam();
    });

    const qOrder = questionOrderMap[exam.id] || exam.questions.map((_, i) => i);

    qOrder.forEach((origQIdx, displayIdx) => {
      const q = exam.questions[origQIdx];
      const card = document.createElement('div');
      card.className = 'question-card';
      const showFeedback = isExamGraded || (examMode === 'study' && userAnswers[q.id] !== undefined && userAnswers[q.id]._revealed);

      let inputHtml = '';
      let correctLetterTag = '';

      if (q.type === 'mc') {
        const selectedOrigIdx = userAnswers[q.id];
        const showMcResult = isExamGraded || (examMode === 'study' && selectedOrigIdx !== undefined);
        const optOrder = optionOrderMap[q.id] || q.options.map((_, i) => i);
        const correctDispPos = optOrder.indexOf(q.correct);
        if (correctDispPos !== -1) {
          correctLetterTag = ` (Correct Choice: ${String.fromCharCode(65 + correctDispPos)})`;
        }

        inputHtml = `<div class="mc-options">` + optOrder.map((origOptIdx, dispIdx) => {
          const opt = q.options[origOptIdx];
          let cls = 'mc-option';
          if (selectedOrigIdx === origOptIdx) cls += ' selected';
          if (showMcResult) {
            if (origOptIdx === q.correct) cls += ' correct';
            else if (selectedOrigIdx === origOptIdx && selectedOrigIdx !== q.correct) cls += ' incorrect';
          }
          const letter = String.fromCharCode(65 + dispIdx);
          return `
            <div class="${cls}" data-q="${q.id}" data-opt="${origOptIdx}">
              <span style="font-weight:800; font-family:var(--font-mono); min-width:22px;">(${letter})</span>
              <div>${formatRichText(opt)}</div>
            </div>
          `;
        }).join('') + `</div>`;
      } else if (q.type === 'tf') {
        const selectedVal = userAnswers[q.id];
        const showTfResult = isExamGraded || (examMode === 'study' && selectedVal !== undefined);
        const opts = [
          { label: 'TRUE', val: true },
          { label: 'FALSE', val: false }
        ];
        inputHtml = `<div class="mc-options" style="flex-direction:row; gap:0.75rem;">` + opts.map((o) => {
          let cls = 'mc-option';
          if (selectedVal === o.val) cls += ' selected';
          if (showTfResult) {
            if (o.val === q.correct) cls += ' correct';
            else if (selectedVal === o.val && selectedVal !== q.correct) cls += ' incorrect';
          }
          return `
            <div class="${cls}" style="flex:1; justify-content:center; font-weight:700;" data-q="${q.id}" data-tf="${o.val}">
              ${o.label}
            </div>
          `;
        }).join('') + `</div>`;
      } else if (q.type === 'numeric_multi') {
        const savedObj = userAnswers[q.id] || {};
        inputHtml = `<div class="numeric-grid">` + q.fields.map((f, fIdx) => {
          const val = savedObj[fIdx] !== undefined ? savedObj[fIdx] : '';
          let statusBadge = '';
          if (showFeedback) {
            const num = parseFloat(val);
            const isOk = !isNaN(num) && Math.abs(num - f.answer) < 0.05;
            statusBadge = isOk
              ? `<span class="pill pill-emerald">✓ Correct (${f.answer})</span>`
              : `<span class="pill pill-rose">✗ Answer: ${f.answer}</span>`;
          }
          return `
            <div class="numeric-field">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:0.3rem;">
                <label>${formatRichText(f.label)}</label>
                ${statusBadge}
              </div>
              <input type="number" step="any" data-q="${q.id}" data-field="${fIdx}" value="${val}" placeholder="Enter numeric value..." />
            </div>
          `;
        }).join('') + `</div>`;
        if (examMode === 'study') {
          inputHtml += `<div style="margin-top:0.65rem;"><button class="btn btn-sm btn-emerald check-workout-btn" data-q="${q.id}">✓ Check Workout Answers</button></div>`;
        }
      } else if (q.type === 'frq') {
        const savedFrq = userAnswers[q.id] || { text: '', rubricChecks: [], _revealed: false };
        inputHtml = `
          <textarea class="frq-textarea" data-q="${q.id}" placeholder="Write your paper-exam response here, then compare against the official slide rubric below...">${savedFrq.text || ''}</textarea>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <button class="btn btn-sm btn-emerald reveal-frq-btn" data-q="${q.id}">👁️ Reveal Grading Rubric &amp; Sample Solution</button>
          </div>
        `;
        if (showFeedback && Array.isArray(q.rubric)) {
          inputHtml += `
            <div class="rubric-checklist">
              <div style="font-size:0.8rem; font-weight:700; color:var(--accent-emerald); margin-bottom:0.35rem;">
                Self-Grading Rubric (Check each point your answer covers):
              </div>
              ${q.rubric.map((rItem, rIdx) => {
                const checked = savedFrq.rubricChecks && savedFrq.rubricChecks[rIdx] ? 'checked' : '';
                return `
                  <label class="rubric-item">
                    <input type="checkbox" data-q="${q.id}" data-rubric="${rIdx}" ${checked} />
                    <span>${formatRichText(rItem)}</span>
                  </label>
                `;
              }).join('')}
            </div>
          `;
        }
      }

      const shouldShowExplanation =
        isExamGraded ||
        (examMode === 'study' && (
          ((q.type === 'mc' || q.type === 'tf') && userAnswers[q.id] !== undefined) ||
          (userAnswers[q.id] && userAnswers[q.id]._revealed)
        ));

      const explanationHtml = shouldShowExplanation
        ? `<div class="explanation-box">
             <div style="font-weight:700; color:var(--accent-primary); margin-bottom:0.25rem;">
               📖 Official Slide &amp; Speaker Note Explanation (${q.slideRef})${correctLetterTag}:
             </div>
             ${formatRichText(q.explanation || q.sampleAnswer || '')}
           </div>`
        : '';

      card.innerHTML = `
        <div class="question-header">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="pill pill-sky">Q${displayIdx + 1} • ${q.points} pts</span>
            <span class="pill pill-purple">${q.chapter}</span>
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">${q.part}</span>
          </div>
          <span class="pill pill-amber">📍 ${q.slideRef}</span>
        </div>
        <div class="question-body">${formatRichText(q.question)}</div>
        ${inputHtml}
        ${explanationHtml}
      `;

      examQuestionsContainer.appendChild(card);
    });

    // Attach listeners for MC
    examQuestionsContainer.querySelectorAll('.mc-option[data-opt]').forEach((el) => {
      el.addEventListener('click', () => {
        const qId = el.getAttribute('data-q');
        const optIdx = parseInt(el.getAttribute('data-opt'), 10);
        userAnswers[qId] = optIdx;
        renderCurrentExam();
      });
    });

    // Attach listeners for TF
    examQuestionsContainer.querySelectorAll('.mc-option[data-tf]').forEach((el) => {
      el.addEventListener('click', () => {
        const qId = el.getAttribute('data-q');
        const val = el.getAttribute('data-tf') === 'true';
        userAnswers[qId] = val;
        renderCurrentExam();
      });
    });

    // Attach listeners for numeric_multi inputs
    examQuestionsContainer.querySelectorAll('input[data-field]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const qId = inp.getAttribute('data-q');
        const fIdx = parseInt(inp.getAttribute('data-field'), 10);
        if (!userAnswers[qId]) userAnswers[qId] = {};
        userAnswers[qId][fIdx] = inp.value;
      });
    });

    examQuestionsContainer.querySelectorAll('.check-workout-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-q');
        if (!userAnswers[qId]) userAnswers[qId] = {};
        userAnswers[qId]._revealed = true;
        renderCurrentExam();
      });
    });

    // Attach listeners for FRQ
    examQuestionsContainer.querySelectorAll('.frq-textarea').forEach((ta) => {
      ta.addEventListener('input', () => {
        const qId = ta.getAttribute('data-q');
        if (!userAnswers[qId]) userAnswers[qId] = { text: '', rubricChecks: [], _revealed: false };
        userAnswers[qId].text = ta.value;
      });
    });

    examQuestionsContainer.querySelectorAll('.reveal-frq-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-q');
        if (!userAnswers[qId]) userAnswers[qId] = { text: '', rubricChecks: [], _revealed: true };
        else userAnswers[qId]._revealed = true;
        renderCurrentExam();
      });
    });

    examQuestionsContainer.querySelectorAll('input[data-rubric]').forEach((cb) => {
      cb.addEventListener('change', () => {
        const qId = cb.getAttribute('data-q');
        const rIdx = parseInt(cb.getAttribute('data-rubric'), 10);
        if (!userAnswers[qId]) userAnswers[qId] = { text: '', rubricChecks: [], _revealed: true };
        userAnswers[qId].rubricChecks[rIdx] = cb.checked;
        renderCurrentExam();
      });
    });
  }

  if (examModeSelect) {
    examModeSelect.addEventListener('change', () => {
      examMode = examModeSelect.value;
      isExamGraded = false;
      renderCurrentExam();
    });
  }

  if (gradeExamBtn) {
    gradeExamBtn.addEventListener('click', () => {
      isExamGraded = true;
      renderCurrentExam();
    });
  }

  renderExamSelector();
  renderCurrentExam();

  // =========================================================================
  // 4. TAB 3: INTERACTIVE CPU SCHEDULING & GANTT SIMULATOR
  // =========================================================================
  const SIM_PRESETS = {
    rr_s125: {
      algo: 'RR',
      quantum: 4,
      procs: [
        { pid: 'P1', at: 0, bt: 10, prio: 1 },
        { pid: 'P2', at: 1, bt: 5, prio: 2 },
        { pid: 'P3', at: 2, bt: 8, prio: 3 }
      ]
    },
    mlfq4_s139: {
      algo: 'MLFQ4',
      quantum: 1,
      procs: [
        { pid: 'P1', at: 0, bt: 8, prio: 1 },
        { pid: 'P2', at: 0, bt: 3, prio: 2 },
        { pid: 'P3', at: 1, bt: 5, prio: 3 }
      ]
    },
    mlfq3_s135: {
      algo: 'MLFQ3',
      quantum: 8,
      procs: [
        { pid: 'P1', at: 0, bt: 30, prio: 1 },
        { pid: 'P2', at: 2, bt: 6, prio: 2 },
        { pid: 'P3', at: 10, bt: 12, prio: 3 }
      ]
    },
    srtf_s117: {
      algo: 'SRTF',
      quantum: 4,
      procs: [
        { pid: 'P1', at: 0, bt: 8, prio: 1 },
        { pid: 'P2', at: 1, bt: 4, prio: 2 },
        { pid: 'P3', at: 2, bt: 9, prio: 3 },
        { pid: 'P4', at: 3, bt: 5, prio: 4 }
      ]
    },
    sjf_s114: {
      algo: 'SJF',
      quantum: 4,
      procs: [
        { pid: 'P1', at: 0, bt: 6, prio: 1 },
        { pid: 'P2', at: 2, bt: 8, prio: 2 },
        { pid: 'P3', at: 4, bt: 7, prio: 3 },
        { pid: 'P4', at: 5, bt: 3, prio: 4 }
      ]
    },
    prio_s109: {
      algo: 'PRIO_NP',
      quantum: 4,
      procs: [
        { pid: 'P1', at: 0, bt: 10, prio: 3 },
        { pid: 'P2', at: 2, bt: 6, prio: 1 },
        { pid: 'P3', at: 5, bt: 2, prio: 2 }
      ]
    },
    fcfs_s108: {
      algo: 'FCFS',
      quantum: 4,
      procs: [
        { pid: 'P1', at: 0, bt: 24, prio: 1 },
        { pid: 'P2', at: 0, bt: 3, prio: 2 },
        { pid: 'P3', at: 0, bt: 3, prio: 3 }
      ]
    }
  };

  let simProcs = JSON.parse(JSON.stringify(SIM_PRESETS.rr_s125.procs));
  const simInputTbody = document.getElementById('sim-input-tbody');
  const simPresetSelect = document.getElementById('sim-preset-select');
  const simAlgoSelect = document.getElementById('sim-algo-select');
  const simQuantumInput = document.getElementById('sim-quantum-input');
  const simRunBtn = document.getElementById('sim-run-btn');
  const simAddProcBtn = document.getElementById('sim-add-proc-btn');
  const simRemProcBtn = document.getElementById('sim-rem-proc-btn');
  const simGanttContainer = document.getElementById('sim-gantt-container');
  const simMetricsContainer = document.getElementById('sim-metrics-container');
  const simTraceLog = document.getElementById('sim-trace-log');

  const PROC_COLORS = ['#0284c7', '#4f46e5', '#059669', '#d97706', '#e11d48', '#7c3aed', '#0d9488'];

  function renderSimInputTable() {
    if (!simInputTbody) return;
    simInputTbody.innerHTML = simProcs.map((p, idx) => `
      <tr>
        <td style="font-weight:700; font-family:var(--font-mono);">${p.pid}</td>
        <td><input type="number" min="0" value="${p.at}" data-idx="${idx}" data-key="at" /></td>
        <td><input type="number" min="1" value="${p.bt}" data-idx="${idx}" data-key="bt" /></td>
        <td><input type="number" min="0" value="${p.prio}" data-idx="${idx}" data-key="prio" /></td>
      </tr>
    `).join('');

    simInputTbody.querySelectorAll('input').forEach((inp) => {
      inp.addEventListener('input', () => {
        const i = parseInt(inp.getAttribute('data-idx'), 10);
        const k = inp.getAttribute('data-key');
        const v = parseInt(inp.value, 10);
        if (!isNaN(v)) {
          simProcs[i][k] = k === 'bt' ? Math.max(1, v) : Math.max(0, v);
          runSchedulingSimulation();
        }
      });
    });
  }

  function simulateCPU(procsInput, algo, quantum) {
    const procs = procsInput.map((p, idx) => ({
      pid: p.pid,
      idx,
      at: Number(p.at),
      bt: Number(p.bt),
      rem: Number(p.bt),
      prio: Number(p.prio),
      firstStart: null,
      ct: 0,
      finishQueue: 0
    }));

    const n = procs.length;
    let completed = 0;
    let t = 0;
    const segments = [];
    const logs = [];

    function pushSegment(pid, idx, start, end, note) {
      if (end <= start) return;
      const last = segments[segments.length - 1];
      if (last && last.pid === pid && last.note === note && last.end === start) {
        last.end = end;
      } else {
        segments.push({ pid, idx, start, end, note: note || '' });
      }
    }

    if (algo === 'FCFS' || algo === 'SJF' || algo === 'PRIO_NP') {
      while (completed < n) {
        const ready = procs.filter((p) => p.rem > 0 && p.at <= t);
        if (ready.length === 0) {
          const nextArrival = Math.min(...procs.filter((p) => p.rem > 0).map((p) => p.at));
          pushSegment('IDLE', -1, t, nextArrival, '');
          t = nextArrival;
          continue;
        }
        ready.sort((a, b) => {
          if (algo === 'FCFS') return a.at - b.at || a.idx - b.idx;
          if (algo === 'SJF') return a.bt - b.bt || a.at - b.at || a.idx - b.idx;
          if (algo === 'PRIO_NP') return a.prio - b.prio || a.at - b.at || a.idx - b.idx;
          return 0;
        });
        const cur = ready[0];
        if (cur.firstStart === null) cur.firstStart = t;
        const start = t;
        t += cur.rem;
        cur.rem = 0;
        cur.ct = t;
        completed++;
        pushSegment(cur.pid, cur.idx, start, t, '');
        logs.push(`t=${start}–${t}: ${cur.pid} runs to completion (CT=${t}).`);
      }
    } else if (algo === 'SRTF' || algo === 'PRIO_P') {
      while (completed < n) {
        const ready = procs.filter((p) => p.rem > 0 && p.at <= t);
        if (ready.length === 0) {
          const nextArrival = Math.min(...procs.filter((p) => p.rem > 0).map((p) => p.at));
          pushSegment('IDLE', -1, t, nextArrival, '');
          t = nextArrival;
          continue;
        }
        ready.sort((a, b) => {
          if (algo === 'SRTF') return a.rem - b.rem || a.at - b.at || a.idx - b.idx;
          return a.prio - b.prio || a.at - b.at || a.idx - b.idx;
        });
        const cur = ready[0];
        if (cur.firstStart === null) cur.firstStart = t;
        pushSegment(cur.pid, cur.idx, t, t + 1, '');
        cur.rem--;
        t++;
        if (cur.rem === 0) {
          cur.ct = t;
          completed++;
          logs.push(`t=${t}: ${cur.pid} finishes (CT=${t}).`);
        }
      }
    } else if (algo === 'RR') {
      const q = Math.max(1, Number(quantum) || 4);
      const queue = [];
      const arrived = new Array(n).fill(false);

      // Enqueue initial arrivals at t=0
      procs
        .filter((p) => p.at <= t)
        .sort((a, b) => a.at - b.at || a.idx - b.idx)
        .forEach((p) => {
          queue.push(p);
          arrived[p.idx] = true;
        });

      while (completed < n) {
        if (queue.length === 0) {
          const nextP = procs.filter((p) => p.rem > 0 && !arrived[p.idx]).sort((a, b) => a.at - b.at || a.idx - b.idx)[0];
          if (nextP) {
            pushSegment('IDLE', -1, t, nextP.at, '');
            t = nextP.at;
            procs
              .filter((p) => p.rem > 0 && !arrived[p.idx] && p.at <= t)
              .sort((a, b) => a.at - b.at || a.idx - b.idx)
              .forEach((p) => {
                queue.push(p);
                arrived[p.idx] = true;
              });
          }
          continue;
        }

        const cur = queue.shift();
        if (cur.firstStart === null) cur.firstStart = t;
        const slice = Math.min(q, cur.rem);
        const start = t;
        t += slice;
        cur.rem -= slice;
        pushSegment(cur.pid, cur.idx, start, t, `Q=${q}`);

        // Enqueue newly arrived processes BEFORE re-queueing preempted process
        procs
          .filter((p) => p.rem > 0 && !arrived[p.idx] && p.at <= t)
          .sort((a, b) => a.at - b.at || a.idx - b.idx)
          .forEach((p) => {
            queue.push(p);
            arrived[p.idx] = true;
          });

        if (cur.rem > 0) {
          queue.push(cur);
          logs.push(`t=${start}–${t}: ${cur.pid} runs ${slice}ms (rem=${cur.rem}ms); re-queued.`);
        } else {
          cur.ct = t;
          completed++;
          logs.push(`t=${start}–${t}: ${cur.pid} finishes (CT=${t}).`);
        }
      }
    } else if (algo === 'MLFQ3' || algo === 'MLFQ4') {
      const quanta = algo === 'MLFQ4' ? [1, 2, 4, Infinity] : [8, 16, Infinity];
      const queues = quanta.map(() => []);
      const arrived = new Array(n).fill(false);

      function enqueueNewArrivals(upToTime) {
        procs
          .filter((p) => p.rem > 0 && !arrived[p.idx] && p.at <= upToTime)
          .sort((a, b) => a.at - b.at || a.idx - b.idx)
          .forEach((p) => {
            queues[0].push(p);
            arrived[p.idx] = true;
          });
      }

      enqueueNewArrivals(t);

      while (completed < n) {
        let qLvl = queues.findIndex((qArr) => qArr.length > 0);
        if (qLvl === -1) {
          const nextP = procs.filter((p) => p.rem > 0 && !arrived[p.idx]).sort((a, b) => a.at - b.at || a.idx - b.idx)[0];
          if (nextP) {
            pushSegment('IDLE', -1, t, nextP.at, '');
            t = nextP.at;
            enqueueNewArrivals(t);
          }
          continue;
        }

        const cur = queues[qLvl].shift();
        if (cur.firstStart === null) cur.firstStart = t;
        const qSlice = Math.min(quanta[qLvl], cur.rem);
        const start = t;
        t += qSlice;
        cur.rem -= qSlice;
        pushSegment(cur.pid, cur.idx, start, t, `Q${qLvl}`);

        enqueueNewArrivals(t);

        if (cur.rem === 0) {
          cur.ct = t;
          cur.finishQueue = qLvl;
          completed++;
          logs.push(`t=${start}–${t}: ${cur.pid} finishes in Q${qLvl} (CT=${t}).`);
        } else {
          const nextLvl = Math.min(quanta.length - 1, qLvl + 1);
          queues[nextLvl].push(cur);
          logs.push(`t=${start}–${t}: ${cur.pid} uses full ${qSlice}ms quantum in Q${qLvl} (rem=${cur.rem}ms) → demoted to Q${nextLvl}.`);
        }
      }
    }

    return { procs, segments, logs, totalTime: t };
  }

  function runSchedulingSimulation() {
    if (!simGanttContainer || !simMetricsContainer) return;
    const algo = simAlgoSelect.value;
    const q = parseInt(simQuantumInput.value, 10) || 4;
    const res = simulateCPU(simProcs, algo, q);

    // Render Gantt Chart
    const total = Math.max(1, res.totalTime);
    simGanttContainer.innerHTML = res.segments.map((seg) => {
      const dur = seg.end - seg.start;
      const pct = Math.max(6, (dur / total) * 100);
      const bg = seg.idx === -1 ? '#475569' : PROC_COLORS[seg.idx % PROC_COLORS.length];
      return `
        <div class="gantt-block" style="flex: ${pct} 1 0%; background: ${bg};">
          <div class="gantt-block-title">${seg.pid} ${seg.note ? `<span style="font-size:0.66rem;opacity:0.85;">(${seg.note})</span>` : ''}</div>
          <div class="gantt-block-times">
            <span>${seg.start}</span>
            <span>${seg.end}</span>
          </div>
        </div>
      `;
    }).join('');

    // Compute Table Metrics
    let sumTAT = 0;
    let sumWT = 0;
    let sumRT = 0;
    let busyTime = 0;

    const rowsHtml = res.procs.map((p) => {
      const tat = p.ct - p.at;
      const wt = tat - p.bt;
      const rt = p.firstStart - p.at;
      sumTAT += tat;
      sumWT += wt;
      sumRT += rt;
      busyTime += p.bt;
      return `
        <tr>
          <td style="font-weight:700; font-family:var(--font-mono);">${p.pid}</td>
          <td>${p.at}</td>
          <td>${p.bt}</td>
          <td>${p.prio}</td>
          <td>${p.firstStart}</td>
          <td style="font-weight:700; color:var(--accent-primary);">${p.ct}</td>
          <td style="font-weight:700; color:var(--accent-emerald);">${tat}</td>
          <td style="font-weight:700; color:var(--accent-amber);">${wt}</td>
          <td>${rt}</td>
        </tr>
      `;
    }).join('');

    const n = res.procs.length;
    const avgTAT = (sumTAT / n).toFixed(2);
    const avgWT = (sumWT / n).toFixed(2);
    const avgRT = (sumRT / n).toFixed(2);
    const util = ((busyTime / total) * 100).toFixed(1);

    simMetricsContainer.innerHTML = `
      <table class="sim-table">
        <thead>
          <tr>
            <th>Process</th>
            <th>Arrival (AT)</th>
            <th>Burst (BT)</th>
            <th>Priority</th>
            <th>1st CPU Start</th>
            <th>Completion (CT)</th>
            <th>Turnaround (TAT = CT−AT)</th>
            <th>Waiting (WT = TAT−BT)</th>
            <th>Response (RT = Start−AT)</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
        <tfoot>
          <tr style="background:var(--bg-elevated); font-weight:800;">
            <td colspan="6" style="text-align:right;">Averages &amp; CPU Utilization (${util}%):</td>
            <td style="color:var(--accent-emerald);">Avg TAT = ${avgTAT}</td>
            <td style="color:var(--accent-amber);">Avg WT = ${avgWT}</td>
            <td>Avg RT = ${avgRT}</td>
          </tr>
        </tfoot>
      </table>
    `;

    if (simTraceLog) {
      simTraceLog.innerHTML = `<div style="font-weight:700; color:var(--accent-primary); margin-bottom:0.25rem;">Step-by-Step Execution Log:</div>` +
        res.logs.map((l) => `• ${l}`).join('\n');
    }
  }

  if (simPresetSelect) {
    simPresetSelect.addEventListener('change', () => {
      const preset = SIM_PRESETS[simPresetSelect.value];
      if (preset) {
        simProcs = JSON.parse(JSON.stringify(preset.procs));
        simAlgoSelect.value = preset.algo;
        simQuantumInput.value = preset.quantum;
        renderSimInputTable();
        runSchedulingSimulation();
      }
    });
  }

  if (simAlgoSelect) simAlgoSelect.addEventListener('change', runSchedulingSimulation);
  if (simQuantumInput) simQuantumInput.addEventListener('input', runSchedulingSimulation);
  if (simRunBtn) simRunBtn.addEventListener('click', runSchedulingSimulation);

  if (simAddProcBtn) {
    simAddProcBtn.addEventListener('click', () => {
      const nextNum = simProcs.length + 1;
      simProcs.push({ pid: `P${nextNum}`, at: 0, bt: 4, prio: nextNum });
      renderSimInputTable();
      runSchedulingSimulation();
    });
  }

  if (simRemProcBtn) {
    simRemProcBtn.addEventListener('click', () => {
      if (simProcs.length > 1) {
        simProcs.pop();
        renderSimInputTable();
        runSchedulingSimulation();
      }
    });
  }

  renderSimInputTable();
  runSchedulingSimulation();

  // =========================================================================
  // 5. TAB 4: SPEAKER NOTES VAULT & HIGH-YIELD TRAPS
  // =========================================================================
  const VAULT_ITEMS = [
    {
      title: "Ch 1 Speaker Notes: OS Abstractions, RTOS Examples & File Systems",
      badge: "Ch 1 S4–20 Notes",
      points: [
        "<b>5 Core Abstractions (Slide 4 Note)</b>: Process (hides raw CPU via time-sharing), Virtual Memory (hides physical RAM limits), File System (hides disk tracks/sectors), Device Drivers (standard controller interface), System Calls (safe kernel API).",
        "<b>Named Real-Time OSes (Slide 16 Note)</b>: <b>FreeRTOS</b> (open-source RTOS kernel for microcontrollers/IoT, overseen by AWS since 2017); <b>VxWorks</b> (commercial RTOS by Wind River Systems for aerospace, defense, medical, automotive); <b>QNX</b> (commercial Unix-like microkernel RTOS).",
        "<b>OS Comparison Table (Slide 20)</b>: Windows 11 = <code>NTFS</code> + Windows NT Hybrid Kernel; macOS = <code>APFS</code> + XNU Hybrid Kernel (Mach-influenced); Linux = <code>ext4 / Btrfs / XFS</code> + Monolithic Modular Kernel."
      ]
    },
    {
      title: "Ch 1 Speaker Notes: Device Chain, Instruction Cycle & Timer Protection",
      badge: "Ch 1 S23–31 Notes",
      points: [
        "<b>Physical Device vs Controller vs Driver (Slide 23 Note)</b>: Physical device = actual hardware (SSD flash); <b>Device controller</b> = HARDWARE on the device with registers/buffers that runs the device &amp; raises interrupts; <b>Device driver</b> = OS SOFTWARE inside the kernel that issues commands to the controller.",
        "<b>5-Step Instruction Cycle with Interrupts (Slide 24–25 Note)</b>: Fetch (at PC) → Decode → Execute → Write Back / Update PC → <b>Check Events</b> (at instruction boundary, CPU checks if an enabled interrupt is pending).",
        "<b>Preventing Runaway Loops (Slide 31 Note)</b>: Kernel sets a hardware timer (privileged operation) before dispatching user code. Even if user code runs <code>while(1);</code>, the timer counts down in hardware and interrupts the CPU back to kernel mode."
      ]
    },
    {
      title: "Ch 1 Speaker Notes & Quiz: glibc Wrapper, %rax, strace & Bootloader",
      badge: "Ch 1 S42–65 + Quiz",
      points: [
        "<b>Wrapper vs Syscall (Slide 42–45 Note)</b>: Calling <code>read()</code> in C calls the <code>glibc</code> wrapper, which loads the syscall number into <code>%rax</code>, executes <code>syscall</code> (synchronous trap), and translates negative kernel returns into <code>errno</code> and <code>-1</code>.",
        "<b>System Call Forensics Quiz (`strace`)</b>: <code>fd 0</code>=stdin, <code>fd 1</code>=stdout, <code>fd 2</code>=stderr, <code>fd 3</code>=first opened file (<code>openat()=3</code>). When <code>openat()</code> returns <code>-1 ENOENT</code>, <code>perror()</code> writes to <code>fd 2</code> and the program returns early before <code>read()</code> or <code>close()</code>. <code>strace</code> cannot see the CPU mode bit or context switches.",
        "<b>Why Bootloader Copies Kernel to RAM (Slide 62 Note)</b>: The CPU can only fetch and execute instructions from memory (RAM), NOT directly from persistent disk/SSD blocks! So GRUB copies both the <b>kernel image</b> and <b>initramfs</b> into RAM."
      ]
    },
    {
      title: "Ch 2 Speaker Notes: Address Space, Suspended States & PCB Out-of-Date Rule",
      badge: "Ch 2 S6–18 & S70–75",
      points: [
        "<b>Memory Layout (Slide 6–7 Note)</b>: Text (low address, read-only code) → Data (Initialized globals/statics + <b>BSS</b> uninitialized/zero globals) → Heap (grows UPWARD ↑) → Stack (high address, grows DOWNWARD ↓).",
        "<b>Blocked Suspended → Ready Suspended (Slide 15 Note)</b>: If a blocked process is swapped out to disk (<code>Blocked Suspended</code>) and its I/O completes while still on disk, it moves to <code>Ready Suspended</code> (NOT <code>Ready</code>!) until swapped back into RAM.",
        "<b>PCB Out-of-Date While Running (Slide 70–75 Note)</b>: While Process $p$ is actively running on the CPU, $p$'s live state is in the CPU registers and <b>$p$'s PCB contains an out-of-date copy</b> until an interrupt/trap saves the CPU state into $p$'s PCB!"
      ]
    },
    {
      title: "Ch 2 Speaker Notes: fork/execvp, _exit(127), Zombie vs Orphan & clone()",
      badge: "Ch 2 S27–36 & S60",
      points: [
        "<b>Why `_exit(127)` after failed `execvp`? (Slide 28 Note)</b>: <code>_exit(127)</code> exits immediately in the child without flushing duplicated <code>stdio</code> buffers inherited from the parent; <code>127</code> is the standard Unix code for command not found. Parent extracts exit code via <code>WIFEXITED(status)</code> and <code>WEXITSTATUS(status)</code>.",
        "<b>Zombie vs Orphan (Slide 33)</b>: <b>Zombie</b> = child is dead, parent hasn't called <code>wait()</code> yet. <b>Orphan</b> = parent died first while child is still running (reparented to PID 1 <code>init/systemd</code>).",
        "<b>Linux `clone()` Task Model (Slide 60 Note)</b>: Linux represents both processes and threads as <code>tasks</code>. <code>clone()</code> flags control sharing: <code>CLONE_VM</code> (address space), <code>CLONE_FILES</code> (open file table), <code>CLONE_THREAD</code> (thread group)."
      ]
    },
    {
      title: "Ch 2 Speaker Notes: TLB, Scheduling Decision Points, RR Overhead & EEVDF",
      badge: "Ch 2 S82–149 Notes",
      points: [
        "<b>TLB (Slide 82–83 Note)</b>: Translation Lookaside Buffer = hardware cache inside the MMU storing recent virtual-to-physical (<code>VPN → PFN</code>) page translations. Context switching between processes flushes/cools the TLB (an indirect cost).",
        "<b>Slide 77 & 93 True/False Traps</b>: Process $q$ can NEVER directly force a context switch on running process $p$ (only $p$ or the OS can). A non-preemptive scheduler makes decisions ONLY when the running process <b>blocks</b> or <b>terminates</b> (NOT on new arrival in RL or wake to ready).",
        "<b>RR Context-Switch Wasted Fraction (Slide 128–129)</b>: When burst $T < Q$, wasted fraction $= \frac{S}{T+S}$. When $T \gg Q$, wasted fraction $= \frac{S}{Q+S}$.",
        "<b>Linux CFS vs EEVDF (Slide 149)</b>: CFS picks smallest <code>vruntime</code>; <b>EEVDF</b> (Linux 6.6+) checks eligibility (nonnegative lag) and picks earliest virtual deadline."
      ]
    },
    {
      title: "Ch 3.1 (Exam 1 Oct 7/8 Cutoff): Stack Pointer Trap & Lost-Update Trace",
      badge: "Ch 3 S1–21 (Cutoff)",
      points: [
        "<b>Official Slide 21 Marker</b>: <i>\"Exam1, end of the session for October 7, and 8\"</i> appears at the end of Section 3.1.",
        "<b>Stack Variable Pointer Warning (Slide 9–10 Note)</b>: \"Local variable\" describes storage location on a thread's stack, NOT hardware memory isolation! If Thread A passes <code>&amp;x</code> to Thread B, Thread B CAN read/modify A's stack variable while the frame is alive.",
        "<b>Single-Core Interleaving vs Multicore Parallelism (Slide 14–20)</b>: On 1 core, two threads are <b>concurrent</b> (interleaved) but NOT parallel. Because <code>counter++</code> is 3 instructions (<code>r = counter; r = r + 1; counter = r;</code>), a context switch after both read <code>10</code> causes a <b>lost update</b> (final value <code>11</code> instead of <code>12</code>)."
      ]
    },
    {
      title: "Ch 3.2–3.8 Full Chapter Backup: Peterson's, Mesa Monitors & Classics",
      badge: "Ch 3 S22–111",
      points: [
        "<b>Peterson's Algorithm & Memory Reordering (Slide 37–41)</b>: Uses <code>flag[2]</code> (intent) + <code>turn</code> (tie-breaker). If $T_0$ sets <code>turn=1</code> and $T_1$ sets <code>turn=0</code>, the last write (<code>turn=0</code>) wins and $T_0$ enters first! On modern CPUs, store buffers can reorder writes before reads unless a <b>memory barrier/fence</b> is used.",
        "<b>Mesa vs Hoare Monitors (Slide 74)</b>: In Mesa monitors (POSIX <code>pthread_cond_wait</code>), the signaler continues and another thread can run before the awakened waiter and invalidate the condition → <b>always recheck in a `while` loop, never `if`</b>!",
        "<b>Bounded Buffer & Amdahl's Law (Slide 80–105)</b>: Always call <code>wait(empty)</code>/<code>wait(full)</code> BEFORE <code>wait(mutex)</code> to avoid deadlock! Amdahl's Law: $\text{Speedup} \le \frac{1}{s + (1-s)/p}$ (for $s=0.20, p=4 \implies 2.5\times$; max as $p\to\infty$ is $1/s = 5\times$)."
      ]
    }
  ];

  const vaultGridContainer = document.getElementById('vault-grid-container');
  const vaultSearchInput = document.getElementById('vault-search-input');

  function renderVault(query) {
    if (!vaultGridContainer) return;
    const q = (query || '').trim().toLowerCase();
    const filtered = VAULT_ITEMS.filter((item) => {
      if (!q) return true;
      return item.title.toLowerCase().includes(q) || item.points.some((p) => p.toLowerCase().includes(q));
    });
    vaultGridContainer.innerHTML = filtered.map((item) => `
      <div class="vault-card">
        <h3>
          <span>${item.title}</span>
          <span class="pill pill-amber">${item.badge}</span>
        </h3>
        <ul>
          ${item.points.map((pt) => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (vaultSearchInput) {
    vaultSearchInput.addEventListener('input', () => renderVault(vaultSearchInput.value));
  }
  renderVault('');

  // =========================================================================
  // 6. TAB 5: ACTIVE-RECALL FLASHCARDS
  // =========================================================================
  const allFlashcards = window.FLASHCARDS_DATA || [];
  let activeDeck = allFlashcards.slice();
  let fcIndex = 0;
  let fcFlipped = false;

  const fcBox = document.getElementById('flashcard-box');
  const fcBadgeCh = document.getElementById('fc-badge-ch');
  const fcProgress = document.getElementById('fc-progress');
  const fcBadgeSide = document.getElementById('fc-badge-side');
  const fcText = document.getElementById('fc-text');
  const fcPrevBtn = document.getElementById('fc-prev-btn');
  const fcNextBtn = document.getElementById('fc-next-btn');
  const fcFlipBtn = document.getElementById('fc-flip-btn');
  const fcChapterFilter = document.getElementById('fc-chapter-filter');
  const fcShuffleBtn = document.getElementById('fc-shuffle-btn');

  function renderFlashcard() {
    if (!fcText || activeDeck.length === 0) return;
    const card = activeDeck[fcIndex];
    fcBadgeCh.textContent = `${card.ch} • ${card.src}`;
    fcProgress.textContent = `Card ${fcIndex + 1} / ${activeDeck.length}`;
    if (!fcFlipped) {
      fcBadgeSide.textContent = 'QUESTION (Click to Flip)';
      fcBadgeSide.className = 'pill pill-amber';
      fcText.innerHTML = `<div style="font-weight:700; font-size:1.15rem;">${formatRichText(card.q)}</div>`;
    } else {
      fcBadgeSide.textContent = 'OFFICIAL SLIDE / NOTE ANSWER';
      fcBadgeSide.className = 'pill pill-emerald';
      fcText.innerHTML = `<div style="color:var(--accent-emerald); font-weight:600;">${formatRichText(card.a)}</div>`;
    }
  }

  if (fcBox) {
    fcBox.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      fcFlipped = !fcFlipped;
      renderFlashcard();
    });
  }

  if (fcFlipBtn) {
    fcFlipBtn.addEventListener('click', () => {
      fcFlipped = !fcFlipped;
      renderFlashcard();
    });
  }

  if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
      fcIndex = (fcIndex - 1 + activeDeck.length) % activeDeck.length;
      fcFlipped = false;
      renderFlashcard();
    });
  }

  if (fcNextBtn) {
    fcNextBtn.addEventListener('click', () => {
      fcIndex = (fcIndex + 1) % activeDeck.length;
      fcFlipped = false;
      renderFlashcard();
    });
  }

  if (fcChapterFilter) {
    fcChapterFilter.addEventListener('change', () => {
      const val = fcChapterFilter.value;
      activeDeck = val === 'ALL' ? allFlashcards.slice() : allFlashcards.filter((c) => c.ch === val);
      fcIndex = 0;
      fcFlipped = false;
      renderFlashcard();
    });
  }

  if (fcShuffleBtn) {
    fcShuffleBtn.addEventListener('click', () => {
      for (let i = activeDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = activeDeck[i];
        activeDeck[i] = activeDeck[j];
        activeDeck[j] = tmp;
      }
      fcIndex = 0;
      fcFlipped = false;
      renderFlashcard();
    });
  }

  renderFlashcard();

  // =========================================================================
  // 7. TAB 6: ALL 331 SLIDES + SPEAKER NOTES + DIAGRAMS BROWSER
  // =========================================================================
  const slidesData = window.SLIDES_DATA || { ch1: [], ch2: [], ch3: [] };
  const slidesChapterSelect = document.getElementById('slides-chapter-select');
  const slidesFilterSelect = document.getElementById('slides-filter-select');
  const slidesSearchInput = document.getElementById('slides-search-input');
  const slidesBrowserContainer = document.getElementById('slides-browser-container');
  const slidesCountBanner = document.getElementById('slides-count-banner');

  function getCombinedSlides(chKey) {
    if (chKey === 'all') {
      return [
        ...slidesData.ch1.map((s) => ({ ...s, chLabel: 'Chapter 1', chCode: 'ch1' })),
        ...slidesData.ch2.map((s) => ({ ...s, chLabel: 'Chapter 2', chCode: 'ch2' })),
        ...slidesData.ch3.map((s) => ({ ...s, chLabel: 'Chapter 3', chCode: 'ch3' }))
      ];
    }
    const labelMap = { ch1: 'Chapter 1', ch2: 'Chapter 2', ch3: 'Chapter 3' };
    return (slidesData[chKey] || []).map((s) => ({ ...s, chLabel: labelMap[chKey], chCode: chKey }));
  }

  function renderSlidesBrowser() {
    if (!slidesBrowserContainer) return;
    const chKey = slidesChapterSelect ? slidesChapterSelect.value : 'ch1';
    const filterKey = slidesFilterSelect ? slidesFilterSelect.value : 'all';
    const query = (slidesSearchInput ? slidesSearchInput.value : '').trim().toLowerCase();

    let list = getCombinedSlides(chKey);

    if (filterKey === 'notes') {
      list = list.filter((s) => s.notes_text && s.notes_text.trim().length > 0);
    } else if (filterKey === 'media') {
      list = list.filter((s) => Array.isArray(s.media) && s.media.length > 0);
    } else if (filterKey === 'exam1_ch3') {
      list = getCombinedSlides('ch3').filter((s) => s.slide_num <= 21);
    }

    if (query) {
      list = list.filter(
        (s) =>
          (s.slide_text && s.slide_text.toLowerCase().includes(query)) ||
          (s.notes_text && s.notes_text.toLowerCase().includes(query)) ||
          `slide ${s.slide_num}`.includes(query)
      );
    }

    if (slidesCountBanner) {
      slidesCountBanner.textContent = `Showing ${list.length} slide(s) with complete slide text, speaker notes, and embedded diagrams.`;
    }

    slidesBrowserContainer.innerHTML = list.map((s) => {
      const isCutoffSlide = s.chCode === 'ch3' && s.slide_num === 21;
      const cutoffBanner = isCutoffSlide
        ? `<div class="pill pill-rose" style="margin-bottom:0.5rem;">📌 OFFICIAL EXAM 1 CUTOFF MARKER ON THIS SLIDE: "Exam1, end of the session for October 7, and 8"</div>`
        : '';

      const mediaHtml = Array.isArray(s.media) && s.media.length > 0
        ? `<div class="slide-media-grid">` +
          s.media.map((m) => `<a href="media/${m}" target="_blank"><img src="media/${m}" alt="${s.chLabel} Slide ${s.slide_num} Diagram" loading="lazy" /></a>`).join('') +
          `</div>`
        : '';

      const notesHtml = s.notes_text && s.notes_text.trim()
        ? formatRichText(s.notes_text)
        : `<span style="color:var(--text-muted); font-style:italic;">(No speaker notes under this slide)</span>`;

      return `
        <div class="slide-item-card" style="${isCutoffSlide ? 'border: 2px solid var(--accent-rose);' : ''}">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem;">
              <span class="pill pill-sky">${s.chLabel} — Slide ${s.slide_num}</span>
              ${Array.isArray(s.media) && s.media.length > 0 ? `<span class="pill pill-emerald">🖼️ ${s.media.length} Diagram(s)</span>` : ''}
            </div>
            ${cutoffBanner}
            <div class="slide-pane">${formatRichText(s.slide_text)}</div>
            ${mediaHtml}
          </div>
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem;">
              <span class="pill pill-amber">📝 Speaker Notes Under Slide ${s.slide_num}</span>
            </div>
            <div class="notes-pane">${notesHtml}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (slidesChapterSelect) slidesChapterSelect.addEventListener('change', renderSlidesBrowser);
  if (slidesFilterSelect) slidesFilterSelect.addEventListener('change', renderSlidesBrowser);
  if (slidesSearchInput) slidesSearchInput.addEventListener('input', renderSlidesBrowser);

  renderSlidesBrowser();
})();
