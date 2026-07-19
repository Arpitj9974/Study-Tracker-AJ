/* ============================================================================
 * ibps_so_it_officer_exam_data.js — IBPS SO IT Officer (Scale I) module
 * for Arpit's Exam Hub. DEDICATED, IT-ONLY build.
 * ============================================================================
 *
 * ⚠ THIS FILE REPLACES ibps_so_exam_data.js IN THE HUB. Load ONE, not both.
 *   It uses the SAME prefixes (iso_*) and the SAME examKey family, so loading
 *   both would collide localStorage keys and double-register the exam. Delete
 *   the generic ibps_so_exam_data.js when you add this. (The generic file was
 *   already IT-specific under the hood — this one just makes that explicit in
 *   the filename, examKey and name so nothing about it reads as multi-post.)
 *
 * SCOPE: IT Officer (Scale I) ONLY. The other five SO posts (AFO, HR,
 *   Marketing, Law, Rajbhasha) are NOT in this file — they have different
 *   Professional Knowledge and, for Law/Rajbhasha, a different Prelims
 *   section (GA-Banking instead of Quant). If you ever want those, they are
 *   separate modules with separate examKeys.
 *
 * ⚠ DEADLINE (build date 16 Jul 2026): applications close 21 JULY 2026 at
 *   ibps.in — FIVE DAYS out. One post only; multiple applications = rejection.
 *   Prelims 29 Aug 2026, Mains 1 Nov 2026. Surface the 21 Jul date in the UI.
 *
 * TARGET CYCLE: CRP SPL-XVI (IBPS SO 2026). 745 Scale-I vacancies across 11
 *   participating public sector banks. Notification 30 Jun / 1 Jul 2026.
 *   Age: 20–30 as on 01.07.2026 (born 02 Jul 1996 – 01 Jul 2006; usual
 *   category relaxations). Eligibility: 4-yr Engg (CS/IT/ECE) OR MCA/M.Sc(IT)
 *   type degree — verify exact list in the notification.
 *
 * ── NOTE FOR THIS STUDENT (BCA background) ──
 *   The PK-IT syllabus IS your BCA syllabus at greater depth: DBMS, OS, Data
 *   Structures, Computer Networks, Software Engineering, C/Java, HTML/CSS,
 *   Python basics — all core BCA subjects. You are NOT starting from zero on
 *   PK. The `days` on the PK card below are therefore sized for
 *   REVISION-TO-EXAM-DEPTH from a BCA base, not first-time learning. Where a
 *   topic goes beyond a typical BCA course (advanced networking, computer
 *   organization/microprocessors depth, cloud/AI/ML), the `days` are a bit
 *   longer and the chapter notes say so.
 *
 * PATTERN (web-verified 16 Jul 2026 — REVISED this cycle):
 *   Three stages: Prelims (qualifying) → Mains → Interview.
 *   ── THE BIG CHANGE ── Professional Knowledge was ADDED TO PRELIMS for the
 *      first time in CRP SPL-XVI. Old "3-section prelims" pages are stale.
 *
 *   PRELIMS — 100 Qs / 125 marks / 80 min / 20 min PER SECTION:
 *       English Language ........ 25 Qs / 25 marks   (qualifying)
 *       Reasoning Ability ....... 25 Qs / 25 marks   (qualifying)
 *       Quantitative Aptitude ... 25 Qs / 25 marks   (qualifying)
 *       Professional Knowledge .. 25 Qs / 50 marks   (2 marks/Q)
 *     Sectional cut-offs. Prelims is QUALIFYING ONLY — not in final merit.
 *
 *   MAINS — 225 marks / 155 min:
 *     Objective 150 Qs / 200 marks / 125 min:
 *       English Language ......... 30 Qs / 30 marks   (qualifying)
 *       Reasoning Ability ........ 40 Qs / 40 marks   (qualifying)
 *       Quantitative Aptitude .... 30 Qs / 30 marks   (qualifying)
 *       Professional Knowledge ... 50 Qs / 100 marks  (MERIT-BEARING)
 *     Descriptive English ........ 2 Qs / 25 marks / 30 min (evaluated sep.)
 *     For IT Officer the 3rd objective section is Quantitative Aptitude (NOT
 *     General Awareness — that swap is only for Law Officer & Rajbhasha).
 *
 *   MARKING: +1 per mark-unit correct; −0.25 per wrong answer in EVERY
 *     objective test (Prelims + Mains); 0 unattempted. Normalized across
 *     shifts. Descriptive is marked separately.
 *
 *   FINAL SELECTION: Mains : Interview = 80 : 20. ONLY Professional Knowledge
 *     (100 Mains marks) is merit-bearing; the three Mains aptitude objective
 *     tests are QUALIFYING. Prelims contributes nothing beyond qualifying.
 *     THIS IS THE WHOLE STRATEGIC STORY — see honesty note 2.
 *
 * SYLLABUS BASIS: IBPS CRP SPL-XVI notification (1 Jul 2026). Aptitude =
 *   standard IBPS bank-aptitude set (shared with PO/Clerk). PK-IT topic list
 *   web-verified across 6 sources; PER-CHAPTER MARK WEIGHTS from a
 *   candidate-shared Mains breakdown (see honesty note 1). Verify chapter
 *   names against the notification PDF at ibps.in.
 *
 *   DO-NOT-RE-ADD LIST:
 *     × A 3-SECTION PRELIMS. PK is now in Prelims.
 *     × A 150-QUESTION PRELIMS. SPL-XVI Prelims is 100 Qs / 125 marks.
 *     × A 60-QUESTION / single-paper MAINS. Old Mains was a 60-mark PK-only
 *       paper; new Mains is 5 papers (4 objective + descriptive), 225 marks.
 *     × General Awareness / Banking Awareness as an aptitude section. That
 *       swap is Law Officer & Rajbhasha only — not IT Officer.
 *
 * HONESTY NOTES (numbered):
 *   1. PK-IT MARK WEIGHTS come from a candidate-shared 2024 Mains breakdown
 *      (ex-Union-Bank IT Officer): DBMS 10, Networking 10, OOP 10, Software
 *      Engineering 6, Embedded/Microprocessors 5, OS 4, Data Structures 4,
 *      Computer Organization 4, Cloud/AI/ML/Big-Data ~7, out of ~60 objective
 *      marks. IBPS does NOT publish PK sub-weights, so this is ONE
 *      candidate's recall — a strong prior to re-tune from PYQs, not gospel.
 *      Two chapters that a typical "difficulty-star" topic list (like the one
 *      the student supplied) under-weights or omits, but that this breakdown
 *      keeps HIGH, on purpose:
 *        • OOP — the star list folds it into "Programming"; the breakdown
 *          gives it 10 marks, TIED for highest. Kept VERY HIGH. Dropping it
 *          to match a difficulty list would cost the most marks in the paper.
 *        • Embedded Systems & Microprocessors — the star list omits it; the
 *          breakdown gives it 5 marks. Kept. Omitting a real, tested chapter
 *          is the single most damaging defect possible; I will not do it to
 *          match a list that happens to leave it out.
 *      DIFFICULTY ≠ WEIGHT. The `difficulty` field below records the
 *      student's star rating (how HARD); `priority`/`prelimsWeight` record
 *      how much it's WORTH. A 4-star-hard, 4-mark topic (e.g. Data
 *      Structures) is high effort-per-mark — study it, but don't let its
 *      difficulty inflate its priority above the 10-mark blocks.
 *   2. PRELIMS IS QUALIFYING; MERIT = 80% MAINS PK + 20% INTERVIEW. You can
 *      top all aptitude sections and still not be selected on weak PK; the
 *      reverse is also true. The aptitude cards exist to CLEAR THE CUT-OFF
 *      efficiently, not to maximise score. Their priorities are tuned for
 *      "clear the sectional cut-off", then pour time into PK.
 *   3. `stage` = "Prelims + Mains" (PK, in both) or "Prelims" (aptitude,
 *      qualifying). Real vocabulary — the stages are genuinely different
 *      papers with different roles.
 *   4. APTITUDE CHAPTER NAMES reconstructed from the standard IBPS aptitude
 *      syllabus (stable across PO/Clerk/SO) — high confidence, still verify.
 *   5. `priority`/`days` are EDITORIAL. `days`: PK sized for revision from a
 *      BCA base (~4 hrs/day); aptitude sized for cut-off clearance. Ranks
 *      come from PK depth + mock volume — counters, not `days`.
 *   6. PREFIX SAFETY: `iso_*`. Hub also has IBPS PO and IBPS Clerk (`iclk_*`)
 *      and this file's predecessor ibps_so_exam_data.js (also `iso_*`) —
 *      DELETE that predecessor; do not run both.
 *   7. FORMATTING: one-line chapter objects. Same six required fields as the
 *      hub schema, PLUS an optional `difficulty` field on PK chapters (the
 *      student's star rating). The renderer can ignore `difficulty` safely;
 *      it does not replace `priority`.
 *
 * CHANGELOG:
 *   v1.0 — 16 Jul 2026 — Dedicated IT-only module. Split out from the generic
 *          ibps_so build. Pattern (Prelims + full Mains) web-verified.
 *          PK-IT reconciled against the student's difficulty-star list;
 *          `difficulty` field added; OOP and Embedded kept per the verified
 *          mark breakdown despite the star list under-weighting them.
 * ========================================================================= */

const EXAM_CONFIG_IBPS_SO_IT = {
  examKey: "ibps_so_it_2026",
  examName: "IBPS SO IT Officer (Scale I) — CRP SPL-XVI",
  targetYear: 2026,

  examDate: "2026-08-29",            // Prelims
  datesTentative: false,
  datesVerified: true,               // verified 16 Jul 2026 vs IBPS Calendar 2026 + CRP SPL-XVI notification
  prelimsDate: "2026-08-29",
  mainsDate: "2026-11-01",
  notificationDate: "2026-07-01",
  applicationCloses: "2026-07-21",   // ⚠ 5 days after build date
  vacancies: 745,
  cycle: "CRP SPL-XVI",
  post: "IT Officer (Scale I)",
  replaces: "ibps_so_exam_data.js — delete that file; do not load both (shared iso_* prefixes).",

  examPattern: {
    stages: "Prelims (qualifying) → Mains (150-Q objective + 2-Q descriptive English, 225 marks, 155 min) → Interview. One post only.",
    revisedThisCycle: "Professional Knowledge ADDED to Prelims for the first time in CRP SPL-XVI. Mains expanded to 5 papers, 225 marks.",
    prelims: {
      totalQuestions: 100, totalMarks: 125, durationMinutes: 80,
      sectionalTime: "20 minutes per section.",
      sections: [
        { name: "English Language",       questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Reasoning Ability",      questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Quantitative Aptitude",  questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Professional Knowledge (IT)", questions: 25, marks: 50, role: "IT-specific; 2 marks/Q" }
      ],
      role: "QUALIFYING ONLY — Prelims score does NOT enter final merit."
    },
    mains: {
      totalMarks: 225, durationMinutes: 155,
      objective: {
        totalQuestions: 150, totalMarks: 200, durationMinutes: 125,
        sections: [
          { name: "English Language",            questions: 30, marks: 30,  role: "qualifying" },
          { name: "Reasoning Ability",           questions: 40, marks: 40,  role: "qualifying" },
          { name: "Quantitative Aptitude",       questions: 30, marks: 30,  role: "qualifying" },
          { name: "Professional Knowledge (IT)", questions: 50, marks: 100, role: "MERIT-BEARING; ~40 min sectional" }
        ]
      },
      descriptive: { name: "Descriptive English (letter + essay)", questions: 2, marks: 25, durationMinutes: 30, role: "evaluated separately" },
      role: "MERIT-BEARING. Only Professional Knowledge (100 marks) decides Mains merit; the 3 aptitude objective tests are QUALIFYING. Descriptive marked separately.",
      note: "For IT Officer the 3rd objective section is Quantitative Aptitude (NOT General Awareness)."
    },
    marking: "+1 per mark-unit correct; −0.25 per wrong answer (all objective tests, Prelims + Mains); 0 unattempted. Normalized across shifts.",
    finalSelection: "Mains : Interview = 80 : 20. Prelims contributes nothing beyond qualifying.",
    // Verified 16 Jul 2026 across 8+ sources reporting CRP SPL-XVI. What
    // would change it: an IBPS corrigendum or a differing notification table.
    patternVerified: true
  },

  // Subject order = study sequence, NOT paper order. PK first and by a mile —
  // it is 100% of merit (80% Mains PK + 20% interview, which also probes PK)
  // and now also 50 Prelims marks. For a BCA grad it is familiar ground, so
  // "first" here means "start the revision-to-depth pass early", not "hardest
  // from scratch". Aptitude follows, ordered by cut-off risk: Quant (most
  // often traps candidates on the 20-min sectional clock), then Reasoning
  // (highest accuracy ceiling), then English (cheapest cut-off to clear).
  subjects: [
    { key: "iso_pk",   name: "Professional Knowledge — IT Officer",    icon: "💻", color: "#1F618D", examStage: "Prelims + Mains — decides merit", prefix: "iso_pk_",   totalChapters: 13 },
    { key: "iso_qa",   name: "Quantitative Aptitude",                  icon: "🔢", color: "#B9770E", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_qa_",   totalChapters: 14 },
    { key: "iso_reas", name: "Reasoning Ability",                      icon: "🧩", color: "#6C3483", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_reas_", totalChapters: 14 },
    { key: "iso_eng",  name: "English Language",                       icon: "📖", color: "#117A65", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_eng_",  totalChapters: 10 }
  ]
};

const IBPS_SO_IT_PRIORITY_DATA = {

  /* ---- PROFESSIONAL KNOWLEDGE — IT OFFICER (iso_pk_, 13) --------------
   * THE ONLY MERIT-BEARING SUBJECT (80% Mains + 20% interview) and 50 marks
   * in Prelims. Order = study priority by MARK WEIGHT (honesty note 1).
   * `difficulty` = the student's star rating (how hard); it does NOT set
   * priority. BCA base assumed — `days` are revision, not first-learning.
   * ------------------------------------------------------------------- */
  iso_pk_1:  { name: "DBMS — SQL, Normalisation, Transactions, Indexing",        priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; joint-highest weight", difficulty: "⭐⭐⭐⭐", days: "7 days", category: "Core — Data, DB & Systems" },
  iso_pk_2:  { name: "Computer Networks — Protocols, OSI/TCP-IP, Routing",       priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; joint-highest weight", difficulty: "⭐⭐⭐⭐", days: "8 days", category: "Core — Networks & Security" },
  iso_pk_3:  { name: "OOP & Programming (C / Java / Python basics)",             priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; TIED highest — star lists under-rate this", difficulty: "⭐⭐⭐", days: "7 days", category: "Core — Programming" },
  iso_pk_4:  { name: "Data Structures — Linear, Non-linear, Searching, Sorting", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks but 4★ hard — high effort-per-mark", difficulty: "⭐⭐⭐⭐", days: "6 days", category: "Core — Programming" },
  iso_pk_5:  { name: "Operating Systems — Processes, Scheduling, Memory, Files",  priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks; conceptually dense", difficulty: "⭐⭐⭐", days: "5 days", category: "Core — Data, DB & Systems" },
  iso_pk_6:  { name: "Software Engineering — SDLC, Models, Testing",              priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~6 Mains marks; scoring, low difficulty", difficulty: "⭐⭐⭐", days: "3 days", category: "Systems & Engineering" },
  iso_pk_7:  { name: "Computer Organization & Architecture, Digital Logic",       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks", difficulty: "⭐⭐⭐", days: "4 days", category: "Systems & Engineering" },
  iso_pk_8:  { name: "Embedded Systems & Microprocessors",                       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~5 Mains marks; star lists OMIT it — do not skip", difficulty: "⭐⭐⭐", days: "4 days", category: "Systems & Engineering" },
  iso_pk_9:  { name: "Cyber & Network Security Fundamentals",                    priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "shares networking/security block; rising in recency", difficulty: "⭐⭐⭐", days: "3 days", category: "Core — Networks & Security" },
  iso_pk_10: { name: "Cloud, AI, ML & Big Data (basics)",                        priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~7 Mains marks combined; fast-growing share", difficulty: "⭐⭐", days: "4 days", category: "Emerging & Applied" },
  iso_pk_11: { name: "Web Technologies (HTML/CSS, Internet basics)",             priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1–3 Qs; easy marks for a BCA grad", difficulty: "⭐⭐", days: "2 days", category: "Emerging & Applied" },
  iso_pk_12: { name: "Computer Fundamentals & Basics",                          priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1–3 Qs; cheap marks", difficulty: "⭐⭐", days: "2 days", category: "Core — Programming" },
  iso_pk_13: { name: "Banking Technology & Digital Banking Concepts",            priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "IT-in-banking angle; also key for the 20% interview", difficulty: "⭐⭐", days: "4 days", category: "Emerging & Applied" },

  /* ---- QUANTITATIVE APTITUDE (iso_qa_, 14) — Prelims 25 Qs, qualifying
   * Ordered for cut-off survival under a 20-min sectional clock. DI first.
   * ------------------------------------------------------------------- */
  iso_qa_1:  { name: "Data Interpretation — Tables, Bar, Line, Pie",     priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "8–12 Qs; the section's centre of gravity", days: "6 days", category: "Data Interpretation" },
  iso_qa_2:  { name: "Data Interpretation — Caselet & Missing DI",       priority: "HIGH",      stage: "Prelims", prelimsWeight: "2–4 Qs", days: "3 days", category: "Data Interpretation" },
  iso_qa_3:  { name: "Simplification and Approximation",                 priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "2–4 Qs; fastest cut-off insurance", days: "2 days", category: "Calculation Speed" },
  iso_qa_4:  { name: "Number Series (Missing & Wrong)",                  priority: "HIGH",      stage: "Prelims", prelimsWeight: "2–4 Qs", days: "3 days", category: "Calculation Speed" },
  iso_qa_5:  { name: "Quadratic Equations and Inequalities",             priority: "HIGH",      stage: "Prelims", prelimsWeight: "2–4 Qs", days: "3 days", category: "Calculation Speed" },
  iso_qa_6:  { name: "Percentages",                                      priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–2 Qs; underpins DI", days: "2 days", category: "Arithmetic" },
  iso_qa_7:  { name: "Ratio, Proportion and Partnership",                priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–2 Qs", days: "2 days", category: "Arithmetic" },
  iso_qa_8:  { name: "Profit, Loss and Discount",                        priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "2 days", category: "Arithmetic" },
  iso_qa_9:  { name: "Averages, Ages and Mixtures",                      priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "3 days", category: "Arithmetic" },
  iso_qa_10: { name: "Simple and Compound Interest",                     priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "2 days", category: "Arithmetic" },
  iso_qa_11: { name: "Time, Speed, Distance and Work",                   priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–3 Qs", days: "3 days", category: "Arithmetic" },
  iso_qa_12: { name: "Mensuration",                                      priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "2 days", category: "Advanced Arithmetic" },
  iso_qa_13: { name: "Permutation, Combination and Probability",         priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "3 days", category: "Advanced Arithmetic" },
  iso_qa_14: { name: "Data Sufficiency",                                 priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–2 Qs", days: "2 days", category: "Advanced Arithmetic" },

  /* ---- REASONING ABILITY (iso_reas_, 14) — Prelims 25 Qs, qualifying - */
  iso_reas_1:  { name: "Puzzles — Floor, Box, Category",                 priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "5–8 Qs; largest reasoning block", days: "6 days", category: "Puzzles & Seating" },
  iso_reas_2:  { name: "Seating Arrangement — Linear & Circular",        priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "5–8 Qs", days: "6 days", category: "Puzzles & Seating" },
  iso_reas_3:  { name: "Scheduling and Day/Month Puzzles",               priority: "HIGH",      stage: "Prelims", prelimsWeight: "0–5 Qs", days: "3 days", category: "Puzzles & Seating" },
  iso_reas_4:  { name: "Syllogism",                                      priority: "HIGH",      stage: "Prelims", prelimsWeight: "2–3 Qs; near-guaranteed marks", days: "3 days", category: "Logical Reasoning" },
  iso_reas_5:  { name: "Blood Relations",                               priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–3 Qs", days: "2 days", category: "Logical Reasoning" },
  iso_reas_6:  { name: "Direction and Distance",                         priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–3 Qs", days: "2 days", category: "Logical Reasoning" },
  iso_reas_7:  { name: "Order, Ranking and Comparison",                  priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–2 Qs", days: "2 days", category: "Logical Reasoning" },
  iso_reas_8:  { name: "Coding-Decoding",                                priority: "HIGH",      stage: "Prelims", prelimsWeight: "1–3 Qs", days: "3 days", category: "Series & Coding" },
  iso_reas_9:  { name: "Alphanumeric and Symbol Series",                priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–3 Qs", days: "2 days", category: "Series & Coding" },
  iso_reas_10: { name: "Inequality (Coded and Direct)",                  priority: "HIGH",      stage: "Prelims", prelimsWeight: "2–3 Qs; cheap marks", days: "2 days", category: "Series & Coding" },
  iso_reas_11: { name: "Data Sufficiency (Reasoning)",                   priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–2 Qs", days: "2 days", category: "Analytical & Critical" },
  iso_reas_12: { name: "Input-Output (Machine)",                         priority: "LOW",       stage: "Prelims", prelimsWeight: "0–3 Qs; rarer in prelims", days: "3 days", category: "Analytical & Critical" },
  iso_reas_13: { name: "Logical Reasoning — Statement & Assumption",     priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "1–3 Qs", days: "3 days", category: "Analytical & Critical" },
  iso_reas_14: { name: "Verbal Reasoning — Cause-Effect & Course of Action", priority: "LOW",   stage: "Prelims", prelimsWeight: "0–2 Qs", days: "2 days", category: "Analytical & Critical" },

  /* ---- ENGLISH LANGUAGE (iso_eng_, 10) — Prelims 25 Qs, qualifying --- */
  iso_eng_1:  { name: "Reading Comprehension",                           priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "7–10 Qs; largest English block", days: "5 days", category: "Reading & Vocabulary" },
  iso_eng_2:  { name: "Vocabulary — Synonyms, Antonyms, Usage",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "in-RC and standalone", days: "3 days", category: "Reading & Vocabulary" },
  iso_eng_3:  { name: "Cloze Test",                                      priority: "HIGH",      stage: "Prelims", prelimsWeight: "0–5 Qs", days: "2 days", category: "Reading & Vocabulary" },
  iso_eng_4:  { name: "Error Spotting and Sentence Correction",          priority: "HIGH",      stage: "Prelims", prelimsWeight: "3–5 Qs", days: "3 days", category: "Grammar" },
  iso_eng_5:  { name: "Sentence Improvement",                            priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Grammar" },
  iso_eng_6:  { name: "Fill in the Blanks (Single & Double)",            priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Grammar" },
  iso_eng_7:  { name: "Para Jumbles",                                    priority: "HIGH",      stage: "Prelims", prelimsWeight: "0–5 Qs", days: "3 days", category: "Verbal Ability" },
  iso_eng_8:  { name: "Sentence Rearrangement and Connectors",           priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" },
  iso_eng_9:  { name: "Para Completion and Sentence Placement",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" },
  iso_eng_10: { name: "Word Swap and Word Usage (new pattern)",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" }
};

/* ============================================================================
 * STORAGE PATTERN — ONE JSON blob per subject, never one key per chapter:
 *   localStorage.setItem(subject.prefix + "progress", JSON.stringify(progressObj));
 * Chapter keys = subject.prefix + integer, so key.slice(prefix.length) is
 * always all-digits. `iso_*` must not collide with IBPS PO / IBPS Clerk
 * (`iclk_*`). DELETE ibps_so_exam_data.js — this file replaces it.
 * ========================================================================= */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_IBPS_SO_IT, IBPS_SO_IT_PRIORITY_DATA };
}
