/* ===========================
   HARLAND ONBOARDING APP
   script.js — Real Content Build
   =========================== */

const modules = [

  // ── MODULE 1: TEACHWORKS ──────────────────────────────────────────────────
  {
    id: 0,
    title: "Teachworks",
    icon: "📅",
    subtitle: "Calendar, availability & class completion",
    info: [
      {
        heading: "Your Calendar System",
        body: "Teachworks is Harland's central system for managing your assigned classes. You'll use it every day to track your schedule, update your availability, and mark classes as complete.",
        bullets: [
          "Login at: harland.teachworks.com/calendar",
          "X = Missed class (student did not attend)",
          "Strikethrough name = Cancelled class",
          "✓ = Completed class"
        ],
        tip: "Tip: Bookmark harland.teachworks.com/calendar on day one — you'll open it before every class."
      },
      {
        heading: "Setting Your Availability",
        body: "You must update your availability in Teachworks so the admin team can schedule your classes correctly.",
        steps: [
          "Sign in at harland.teachworks.com/calendar",
          "Go to Settings",
          "Scroll down to 'Add Availability' → click 'Add Row'",
          "Add the days and times you're available (in-person or online)",
          "Click 'Submit', then take a screenshot",
          "Send the screenshot to your Teacher LINE group"
        ],
        tip: "Tip: Update your availability as soon as you receive your account credentials."
      },
      {
        heading: "Completing a Class",
        body: "All classes must be completed in Teachworks the same day they occur — no exceptions.",
        steps: [
          "Click on the class in the calendar",
          "Select 'Complete'",
          "Change the status to 'Completed'",
          "Paste your Class Notes into the Shared Notes field",
          "Check the 'Email Shared Notes' box",
          "Click Submit"
        ],
        tip: "Tip: Never leave a class unmarked overnight. Complete it before you close your computer."
      }
    ],
    questions: [
      {
        q: "What does a strikethrough on a student's name in Teachworks mean?",
        options: ["The student missed class", "The class was cancelled", "The class is completed", "The student is enrolled but hasn't paid"],
        answer: 1,
        explanation: "A strikethrough name means the class was cancelled. 'X' means the student missed class, and ✓ means completed."
      },
      {
        q: "What must you do after submitting your availability in Teachworks?",
        options: ["Email it to HR", "Call your supervisor", "Take a screenshot and send it to your Teacher LINE group", "Log out and wait for confirmation"],
        answer: 2,
        explanation: "After submitting, take a screenshot of your availability and send it to your Teacher LINE group so it's confirmed."
      },
      {
        q: "When completing a class in Teachworks, which box must you check before clicking Submit?",
        options: ["Mark as Reviewed", "Email Shared Notes", "Notify Admin", "Send to Parent"],
        answer: 1,
        explanation: "You must check the 'Email Shared Notes' box so the class notes are automatically emailed to the student/parent."
      }
    ]
  },

  // ── MODULE 2: CLASS NOTES & COMPLETION ────────────────────────────────────
  {
    id: 1,
    title: "Class Notes & LINE",
    icon: "📝",
    subtitle: "Note format, LINE protocol & cancellation policy",
    info: [
      {
        heading: "Class Note Format",
        body: "After every class, you must write class notes in Harland's standard bilingual format. These are sent to parents and must be accurate, professional, and complete. Refer to the Class Note Format document for the full template.",
        bullets: [
          "Class notes must follow the official 5-section format",
          "Content must be bilingual (English + Chinese)",
          "Notes are pasted into Teachworks AND sent via LINE",
          "If you are a substitute teacher, send notes to your Teacher LINE group",
          "If you are the primary teacher, send notes to the relevant student group"
        ],
        tip: "Tip: Always check the class note format document before writing your first set of notes."
      },
      {
        heading: "LINE App Protocol",
        body: "LINE is the official communication platform between teachers, students, and parents at Harland. You must follow strict group etiquette.",
        bullets: [
          "Use the LINE desktop app — find it in the Start menu or search for it",
          "Log in via QR code: open LINE on your phone and scan using the QR icon in the search bar",
          "Tag @admin for all cancellation notifications",
          "Reply 'Noted.' to acknowledge messages in the group",
          "Never use personal social media to contact students or parents",
          "Do not share personal LINE accounts with students or families"
        ],
        tip: "Tip: The Teacher LINE group is also called your TG. You'll refer to it often."
      },
      {
        heading: "Cancellation Policy",
        body: "There are three types of cancellations, each with different consequences. Know these well.",
        bullets: [
          "Regular Cancellation: More than 24 hours' notice — no penalty",
          "Late Cancellation: Less than 24 hours but more than 3 hours — partial penalty",
          "Missed Class: Less than 3 hours' notice (or no-show) — full penalty applies",
          "All cancellations must be reported in LINE with @admin tagged"
        ],
        tip: "Tip: The full cancellation policy document is linked in your onboarding materials."
      }
    ],
    questions: [
      {
        q: "If you taught a class as a substitute teacher, where do you send the class notes via LINE?",
        options: ["Directly to the student", "To the student's parent only", "To your Teacher LINE group", "To the school director"],
        answer: 2,
        explanation: "Substitute teachers send class notes to the Teacher LINE group. Primary teachers send to the relevant student group."
      },
      {
        q: "A student cancels 2 hours before class. Which cancellation type applies?",
        options: ["Regular Cancellation", "Late Cancellation", "Missed Class", "Emergency Cancellation"],
        answer: 2,
        explanation: "Less than 3 hours counts as a Missed Class — the most serious cancellation type with a full penalty."
      },
      {
        q: "What must you always do when someone sends a message in your LINE group?",
        options: ["Send a thumbs up emoji", "Reply 'Noted.'", "Wait for admin to respond first", "Screenshot and file it"],
        answer: 1,
        explanation: "The standard acknowledgement on Harland LINE groups is 'Noted.' — always reply this way to confirm you've seen a message."
      }
    ]
  },

  // ── MODULE 3: CURRICULA & WRITING ─────────────────────────────────────────
  {
    id: 2,
    title: "Curricula & Writing",
    icon: "📚",
    subtitle: "Student curricula, lesson tracking & writing docs",
    info: [
      {
        heading: "Student Curricula",
        body: "Each student has a personalised curriculum containing their vocabulary, writing, grammar, and (for Levels K–2) reading activities. Before every class, check the student's curriculum to know exactly what to teach.",
        bullets: [
          "Curricula cover vocabulary, writing, and grammar",
          "Levels LK–L2 also include reading activities",
          "Some students may be at a different content level than their assigned level",
          "Writing documents are labelled by student name — find them in the curriculum",
          "Content links may sometimes be broken — if so, search for the topic title manually"
        ],
        tip: "Tip: Always check the student's curriculum before the class begins, not during."
      },
      {
        heading: "Lesson Tracking & Notes",
        body: "You are responsible for keeping the student's curriculum up to date after every class.",
        bullets: [
          "Mark completed lessons directly in the student's curriculum",
          "If you deviate from the curriculum, update the notes column",
          "If the previous lesson was missed, do your best to catch up both lessons",
          "Give constructive feedback aligned with Harland Core Values (HCV)",
          "Incomplete activities (e.g. IXL) should be assigned as homework"
        ],
        tip: "Tip: Lesson tracking is part of class completion — don't skip it."
      },
      {
        heading: "Harland Writing Document",
        body: "The writing document is a core part of every lesson and must be completed. Each student has their own personal writing document.",
        bullets: [
          "Writing projects: Units 1–3",
          "Presentation: Unit 4",
          "Time frame: 25–30 minutes per lesson",
          "Writing project review at Lesson 7 (Paragraph 1) and Lesson 10",
          "At review lessons, send the essay title, student level/unit, and document link to your Teacher LINE group for review",
          "If previous lesson was missed, try to cover both writing tasks in one session"
        ],
        tip: "Tip: The writing activity must be completed every class — it is not optional."
      }
    ],
    questions: [
      {
        q: "Which levels include reading activities in their curriculum?",
        options: ["All levels", "Only Level 4 and above", "Levels LK to L2", "Only Level K"],
        answer: 2,
        explanation: "Reading is included in the curriculum for Levels LK through L2. Higher levels focus on vocabulary, writing, and grammar."
      },
      {
        q: "What should you do if an activity is not completed during class time?",
        options: ["Skip it and move on", "Assign it as homework (e.g. IXL)", "Contact the parent immediately", "Redo the previous lesson"],
        answer: 1,
        explanation: "Incomplete in-class activities should be assigned as homework so the student still completes the learning objective."
      },
      {
        q: "At which lesson numbers must you send a writing review to your Teacher LINE group?",
        options: ["Lesson 5 and Lesson 8", "Lesson 7 and Lesson 10", "Lesson 3 and Lesson 6", "Lesson 1 and Lesson 4"],
        answer: 1,
        explanation: "Send the essay title, student level/unit (LXUX), and document link to your TG at Lesson 7 (Paragraph 1 review) and Lesson 10."
      }
    ]
  },

  // ── MODULE 4: LEARNING PLATFORMS ──────────────────────────────────────────
  {
    id: 3,
    title: "Learning Platforms",
    icon: "💻",
    subtitle: "Flocabulary, IXL, BrainPop & Actively Learn",
    info: [
      {
        heading: "Flocabulary",
        body: "Flocabulary is used to teach vocabulary. The goal is comprehension of diverse topics from a Western perspective — not rote memorisation.",
        bullets: [
          "Website: flocabulary.com/subjects/",
          "Time frame: 35–40 minutes",
          "Always follow this order: 1. Vocab Cards → 2. Video (press Discuss) → 3. Vocab Game",
          "If time permits: 'Read & Respond' first, then 'Quiz' afterwards",
          "Remember to press the 'Discuss' button during the video"
        ],
        tip: "Tip: Never jump straight to the video — always do Vocab Cards first so the student is prepared."
      },
      {
        heading: "IXL",
        body: "IXL is used to teach grammar concepts. Each student has their own individual login which you can find in their curriculum.",
        bullets: [
          "Website: ixl.com",
          "Time frame: 10–15 minutes per class",
          "Each student has their own IXL login — check their curriculum",
          "Log into the student's account for in-class activities AND when checking homework",
          "Subjects used: English, Math, and Science",
          "Target SmartScore: 80"
        ],
        tip: "Tip: Always log into the student's own account — never use a shared or teacher account for IXL activities."
      },
      {
        heading: "BrainPop ELL (Levels 1–2)",
        body: "BrainPop ELL is used for grammar concept teaching for Level 1 and Level 2 students.",
        bullets: [
          "Website: brainpop.com/discover",
          "Login — Username: tas / Password: tiger",
          "Copy the lesson link from the student's curriculum",
          "If the link doesn't work, search for the lesson title manually",
          "Main characters are Ben and Moby (the robot)"
        ],
        tip: "Tip: BrainPop is only for Level 1–2 students. Check the curriculum before using it."
      },
      {
        heading: "Actively Learn (Homework)",
        body: "Actively Learn is used for assigned reading homework. You check and grade student reading here.",
        bullets: [
          "Website: read.activelylearn.com",
          "Teacher login — U: philip.harlandeducation@gmail.com / P: H*rland556",
          "To check homework: Menu (top left) → Harland Class",
          "Copy the book link from the previous lesson's class notes → paste into a new tab to find the title",
          "Search for the book title using Ctrl+F in Harland Class",
          "Find the student under 'All Students' and grade accordingly"
        ],
        tip: "Tip: Check Actively Learn at the start of each class to confirm whether the student completed their reading homework."
      }
    ],
    questions: [
      {
        q: "What is the correct order of activities in a Flocabulary lesson?",
        options: [
          "Video → Vocab Cards → Vocab Game",
          "Vocab Game → Video → Vocab Cards",
          "Vocab Cards → Video → Vocab Game",
          "Read & Respond → Vocab Cards → Video"
        ],
        answer: 2,
        explanation: "The required order is: 1. Vocab Cards, 2. Video (with Discuss), 3. Vocab Game. Read & Respond and Quiz are optional extras if time allows."
      },
      {
        q: "Which platform uses the shared login username 'tas' and password 'tiger'?",
        options: ["Flocabulary", "IXL", "BrainPop ELL", "Actively Learn"],
        answer: 2,
        explanation: "BrainPop ELL uses the shared login: U: tas / P: tiger. Each student has their own IXL login, and Actively Learn uses the Harland teacher account."
      },
      {
        q: "How much time is allocated to IXL in a typical class?",
        options: ["5 minutes", "10–15 minutes", "25–30 minutes", "35–40 minutes"],
        answer: 1,
        explanation: "IXL is given 10–15 minutes per class. Flocabulary takes 35–40 minutes, and the Writing Document takes 25–30 minutes."
      }
    ]
  },

  // ── MODULE 5: TECH TOOLS ──────────────────────────────────────────────────
  {
    id: 4,
    title: "Tech Tools",
    icon: "🖥️",
    subtitle: "Zoom setup, screen sharing & Chrome Remote Desktop",
    info: [
      {
        heading: "Zoom: Starting a Class",
        body: "All online classes are conducted via Zoom using the Harland student account. School computers should already be logged in.",
        bullets: [
          "Zoom email: student.harlandeducation@gmail.com",
          "Password is given on an as-needed basis by your supervisor",
          "Click the dropdown arrow next to 'New Meeting' and confirm 'Use my personal meeting ID (PMI)' is selected",
          "Click 'New Meeting'",
          "Check your microphone, speakers, camera, and background",
          "Click 'Start' when ready"
        ],
        tip: "Tip: Always check your audio and video settings before the student joins — don't troubleshoot during class."
      },
      {
        heading: "Zoom: Screen Sharing & Annotation",
        body: "The two most important Zoom features for teaching are screen sharing (with sound) and the annotation tools.",
        bullets: [
          "To share: click 'Share' → select your screen → check 'Share sound' if playing audio → click 'Share'",
          "To allow the student to share: click the ^ arrow on the Share button → select 'Multiple Participants can share simultaneously'",
          "Annotation tools: click 'Annotate' in the toolbar to write on screen",
          "Select the pen tool → choose a colour → click and drag to write",
          "To erase a section: click the eraser and click over what you want to remove",
          "To clear everything: click the trash icon → 'Erase All'"
        ],
        tip: "Tip: Always check 'Share sound' before sharing — forgetting this means the student won't hear Flocabulary videos."
      },
      {
        heading: "Chrome Remote Desktop",
        body: "Chrome Remote Desktop allows you to access and control a student's computer remotely — useful for in-person support or troubleshooting.",
        bullets: [
          "Click the Chrome Remote Desktop icon in the taskbar on your screen",
          "Select the machine you want to connect to — all machines are labelled (e.g. Harland13s, Harland11s)",
          "Once connected, you can control the student's computer as if it were your own",
          "If the student is using their keyboard or mouse at the same time, their input will override yours",
          "Wait for them to stop before continuing"
        ],
        tip: "Tip: Use Chrome Remote Desktop when a student is struggling with a platform login or technical issue — it's faster than explaining over Zoom."
      }
    ],
    questions: [
      {
        q: "Before starting a Zoom class, which option must be selected in the 'New Meeting' dropdown?",
        options: ["Start with video only", "Use my personal meeting ID (PMI)", "Join a meeting by invite", "Use a scheduled meeting link"],
        answer: 1,
        explanation: "Always select 'Use my personal meeting ID (PMI)' in the dropdown before clicking New Meeting — this ensures students can always join using the same consistent link."
      },
      {
        q: "What must you check when sharing your screen if you are playing a Flocabulary video?",
        options: ["Optimize for video sharing", "Share Zoom windows", "Share sound", "Enable HD mode"],
        answer: 2,
        explanation: "You must check 'Share sound' when sharing your screen, otherwise the student will see the video but not hear the audio."
      },
      {
        q: "You are using Chrome Remote Desktop but the student keeps moving their mouse. What happens?",
        options: ["Your actions take priority", "The session disconnects", "The student's input overrides yours — you must wait", "You get an admin notification"],
        answer: 2,
        explanation: "When a student uses their keyboard or mouse at the same time, their input overrides yours. Wait for them to stop before making changes."
      }
    ]
  },

  // ── MODULE 6: FINAL CHECK ─────────────────────────────────────────────────
  {
    id: 5,
    title: "Final Check",
    icon: "🏅",
    subtitle: "Review all systems and standards",
    info: [
      {
        heading: "Almost There!",
        body: "This is your final knowledge check. Questions draw from all five previous modules. A score of 2 out of 3 or higher is a pass.",
        bullets: [
          "Review any module you're unsure about using the tabs above",
          "Take your time — there is no time limit",
          "On passing, you'll receive your Harland onboarding certificate",
          "Your supervisor will be notified when you complete this training"
        ],
        tip: "Tip: Well done for making it this far. You're nearly ready to walk into your first Harland class with confidence."
      }
    ],
    questions: [
      {
        q: "A student cancels 1.5 hours before class. What type of cancellation is this, and what must you do in LINE?",
        options: [
          "Regular Cancellation — no action needed",
          "Late Cancellation — notify admin via email",
          "Missed Class — tag @admin in your Teacher LINE group",
          "Emergency Cancellation — call the school director"
        ],
        answer: 2,
        explanation: "Less than 3 hours = Missed Class. Tag @admin in your Teacher LINE group so the cancellation is recorded immediately."
      },
      {
        q: "You are about to teach a Flocabulary lesson. What is the first thing you do on the platform?",
        options: ["Start the video", "Open the Quiz", "Open the Vocab Cards", "Click Read & Respond"],
        answer: 2,
        explanation: "Always begin with Vocab Cards, then Video (press Discuss), then Vocab Game. Never start with the video directly."
      },
      {
        q: "After completing a class in Teachworks, what two things confirm the class is properly closed?",
        options: [
          "Change status to 'Completed' and send an email to HR",
          "Paste class notes into Shared Notes and check 'Email Shared Notes' before clicking Submit",
          "Mark the calendar and notify the parent on LINE",
          "Screenshot the calendar and log out"
        ],
        answer: 1,
        explanation: "You must paste your class notes into the Shared Notes field AND check the 'Email Shared Notes' box — then click Submit to close the class correctly."
      }
    ]
  }

];

// ─── STATE ────────────────────────────────────────────────────────────────────

let state = {
  currentModule: 0,
  currentQuestion: 0,
  selected: null,
  submitted: false,
  moduleProgress: modules.map(() => ({ scores: [], completed: false }))
};

// ─── DOM ──────────────────────────────────────────────────────────────────────

const moduleInfoPanel = document.getElementById('moduleInfoPanel');
const quizArea        = document.getElementById('quizArea');
const quizCounter     = document.getElementById('quizCounter');
const btnSubmit       = document.getElementById('btnSubmit');
const btnSkip         = document.getElementById('btnSkip');
const moduleTabs      = document.getElementById('moduleTabs');
const resultsSection  = document.getElementById('resultsSection');
const resultsGrid     = document.getElementById('resultsGrid');
const certBanner      = document.getElementById('certificateBanner');
const headerProgress  = document.getElementById('headerProgress');

// ─── RENDER ───────────────────────────────────────────────────────────────────

function render() {
  renderModuleInfo();
  renderQuestion();
  renderTabs();
  renderResults();
  updateHeaderProgress();
}

function renderModuleInfo() {
  const mod = modules[state.currentModule];
  let html = '';

  for (const item of mod.info) {
    let contentHtml = `<p>${item.body}</p>`;

    if (item.steps) {
      contentHtml += `<ol class="step-list">${item.steps.map((s, i) =>
        `<li><span class="step-num">${i + 1}</span>${s}</li>`
      ).join('')}</ol>`;
    }

    if (item.bullets) {
      contentHtml += `<ul class="info-list">${item.bullets.map(b =>
        `<li><span class="dot"></span>${b}</li>`
      ).join('')}</ul>`;
    }

    if (item.tip) {
      const parts = item.tip.split(':');
      contentHtml += `<div class="tip-box"><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</div>`;
    }

    html += `
      <div class="module-card">
        <div class="module-card-header">
          <div class="module-icon">${mod.icon}</div>
          <div>
            <div class="module-card-title">${item.heading}</div>
            <div class="module-card-subtitle">Module ${state.currentModule + 1} · ${mod.subtitle}</div>
          </div>
        </div>
        <div class="module-body">${contentHtml}</div>
      </div>
    `;
  }

  moduleInfoPanel.innerHTML = html;
}

function renderQuestion() {
  const mod = modules[state.currentModule];
  const q   = mod.questions[state.currentQuestion];

  quizCounter.textContent = `Question ${state.currentQuestion + 1} of ${mod.questions.length}`;

  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'option-btn';
    if (state.submitted) {
      if (i === q.answer) cls += ' correct';
      else if (i === state.selected) cls += ' incorrect';
    } else if (i === state.selected) {
      cls += ' selected';
    }
    return `<button class="${cls}" data-idx="${i}" ${state.submitted ? 'disabled' : ''}>${opt}</button>`;
  }).join('');

  let feedbackHtml = '';
  if (state.submitted) {
    const correct = state.selected === q.answer;
    feedbackHtml = `
      <div class="quiz-feedback ${correct ? 'correct-fb' : 'incorrect-fb'}">
        ${correct ? '✅ Correct! ' : '❌ Not quite. '} ${q.explanation}
      </div>`;
  }

  quizArea.innerHTML = `
    <p class="quiz-question">${q.q}</p>
    <div class="quiz-options">${optionsHtml}</div>
    ${feedbackHtml}
  `;

  quizArea.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.submitted) {
        state.selected = parseInt(btn.dataset.idx);
        renderQuestion();
      }
    });
  });

  const isLast = state.currentQuestion >= mod.questions.length - 1;
  btnSubmit.textContent = state.submitted ? (isLast ? 'Finish Module' : 'Next Question') : 'Check Answer';
}

function renderTabs() {
  moduleTabs.querySelectorAll('.tab-btn').forEach((tab, i) => {
    tab.classList.remove('active', 'completed');
    if (i === state.currentModule) tab.classList.add('active');
    else if (state.moduleProgress[i].completed) tab.classList.add('completed');
  });
}

function renderResults() {
  const anyCompleted = state.moduleProgress.some(p => p.completed);
  resultsSection.style.display = anyCompleted ? 'block' : 'none';

  let cardsHtml = '';
  for (let i = 0; i < modules.length; i++) {
    const prog = state.moduleProgress[i];
    const mod  = modules[i];
    if (!prog.completed && prog.scores.length === 0) continue;

    const correct = prog.scores.filter(Boolean).length;
    const total   = mod.questions.length;
    const pct     = prog.scores.length ? Math.round((correct / total) * 100) : 0;
    const passed  = pct >= 66;
    const cls     = prog.completed ? (passed ? 'passed' : 'failed') : 'pending';

    cardsHtml += `
      <div class="result-card ${cls}">
        <div class="rc-icon">${mod.icon}</div>
        <div class="rc-title">${mod.title}</div>
        <div class="rc-score">${prog.completed ? pct + '%' : '—'}</div>
        <div class="rc-status">${prog.completed ? (passed ? '✓ Passed' : '✗ Review') : 'In Progress'}</div>
      </div>`;
  }
  resultsGrid.innerHTML = cardsHtml;

  const allDone = state.moduleProgress.every(p => p.completed);
  certBanner.style.display = allDone ? 'flex' : 'none';
}

function updateHeaderProgress() {
  const done = state.moduleProgress.filter(p => p.completed).length;
  headerProgress.textContent = `Module ${state.currentModule + 1} of ${modules.length}${done > 0 ? ' · ' + done + ' complete' : ''}`;
}

// ─── ACTIONS ──────────────────────────────────────────────────────────────────

btnSubmit.addEventListener('click', () => {
  const mod    = modules[state.currentModule];
  const isLast = state.currentQuestion >= mod.questions.length - 1;

  if (!state.submitted) {
    if (state.selected === null) {
      const qEl = quizArea.querySelector('.quiz-question');
      qEl.style.color = '#c62828';
      setTimeout(() => { qEl.style.color = ''; }, 700);
      return;
    }
    state.submitted = true;
    const correct = state.selected === mod.questions[state.currentQuestion].answer;
    state.moduleProgress[state.currentModule].scores.push(correct);
    renderQuestion();
    renderResults();
  } else {
    if (isLast) {
      state.moduleProgress[state.currentModule].completed = true;
      const next = state.currentModule + 1;
      if (next < modules.length) {
        switchModule(next);
      } else {
        renderResults();
        renderTabs();
        updateHeaderProgress();
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      state.currentQuestion++;
      state.selected  = null;
      state.submitted = false;
      renderQuestion();
    }
  }
});

btnSkip.addEventListener('click', () => {
  const mod    = modules[state.currentModule];
  const isLast = state.currentQuestion >= mod.questions.length - 1;
  state.moduleProgress[state.currentModule].scores.push(false);
  if (isLast) {
    state.moduleProgress[state.currentModule].completed = true;
    const next = state.currentModule + 1;
    if (next < modules.length) {
      switchModule(next);
    } else {
      renderResults();
      renderTabs();
      updateHeaderProgress();
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    state.currentQuestion++;
    state.selected  = null;
    state.submitted = false;
    renderQuestion();
  }
});

moduleTabs.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchModule(parseInt(btn.dataset.module)));
});

function switchModule(idx) {
  state.currentModule   = idx;
  state.currentQuestion = 0;
  state.selected        = null;
  state.submitted       = false;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
render();
