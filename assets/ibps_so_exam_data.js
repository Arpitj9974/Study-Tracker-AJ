/* ============================================================================
 * ibps_so_exam_data.js — IBPS SO (Specialist Officer) module for Exam Hub
 * ============================================================================
 *
 * SCOPE FLAG (read first): "IBPS SO" is not one exam — it is SIX post-streams
 * that share aptitude sections but diverge on one whole section and an entire
 * Professional Knowledge paper. This module is built for the FOUR "aptitude"
 * posts that share a pattern: IT Officer, Agriculture Field Officer (AFO),
 * HR/Personnel Officer, Marketing Officer (Scale I).
 *   Law Officer and Rajbhasha Adhikari are DELIBERATELY EXCLUDED — see the
 *   do-not-re-add list and honesty note 3. They swap Quantitative Aptitude
 *   for General Awareness (Banking) and have a different Professional
 *   Knowledge domain; folding them in would corrupt the aptitude cards.
 *
 * POST SELECTED: IT OFFICER (Scale I). The Professional Knowledge card below
 *   is now the REAL IT Officer PK syllabus (13 chapters), weighted from a
 *   candidate-shared Mains mark breakdown — see honesty note 1. If you are
 *   NOT targeting IT Officer, this PK card is wrong for you: tell me the post
 *   and I'll rebuild it.
 *
 * ⚠ ONE SCOPE FLAG STILL LIVE:
 *   MARKETING OFFICER HAS ZERO VACANCIES in CRP SPL-XVI (was in the post
 *      list historically; 0 seats this cycle). If the student is targeting
 *      Marketing, this cycle has nothing to sit for — verify against the
 *      notification before building a plan around it.
 *
 * ⚠ DEADLINE (build date 16 Jul 2026): applications close 21 JULY 2026 —
 *   FIVE DAYS out — at ibps.in. Prelims 29 Aug 2026, Mains 1 Nov 2026. Only
 *   ONE post may be applied for; multiple applications = rejection. Surface
 *   the 21 July date in the UI, not just a comment.
 *
 * TARGET CYCLE: CRP SPL-XVI (IBPS SO 2026), for the 2027–28 recruitment year.
 *   Notification 30 Jun 2026 / detailed 1 Jul 2026. 745 Scale-I vacancies
 *   across 11 participating public sector banks (down from 949 last cycle).
 *
 * PATTERN (web-verified 16 Jul 2026 — NOTE: REVISED THIS CYCLE):
 *   Three stages: Prelims (qualifying) → Mains → Interview.
 *
 *   ── THE BIG CHANGE ── Professional Knowledge has been ADDED TO PRELIMS
 *      for the first time (CRP SPL-XVI). Old-scheme "3-section prelims" pages
 *      are now WRONG. See the do-not-re-add list.
 *
 *   PRELIMS — 100 questions / 125 marks / 80 minutes / 20 min PER SECTION.
 *     For IT / AFO / HR / Marketing (this module):
 *       English Language ........ 25 Qs / 25 marks   (qualifying)
 *       Reasoning Ability ....... 25 Qs / 25 marks   (qualifying, but see
 *                                                      note 4 — count vs mark)
 *       Quantitative Aptitude ... 25 Qs / 25 marks   (qualifying)
 *       Professional Knowledge .. 25 Qs / 50 marks   (2 marks/Q)
 *     Each section has its own sectional cut-off. Prelims score is
 *     QUALIFYING ONLY — it does NOT enter final merit.
 *
 *   MAINS — Objective Professional Knowledge (post-specific) + a Descriptive
 *     English paper. Only PK (and, for some posts, the descriptive) counts
 *     toward merit; the objective aptitude tests in Mains are qualifying.
 *
 *   MARKING: +1 per mark-unit correct; −0.25 (one-fourth) per wrong answer
 *     in every objective test, Prelims and Mains; 0 for unattempted.
 *     Normalization applies across shifts.
 *
 *   FINAL SELECTION: Mains : Interview = 80 : 20. Prelims contributes NOTHING
 *     beyond qualifying. This is the whole strategic story — see note 2.
 *
 * SYLLABUS BASIS: IBPS CRP SPL-XVI notification (1 Jul 2026). Aptitude
 *   syllabus is the standard IBPS bank-exam aptitude set. PK syllabus is
 *   post-specific and NOT reproduced here (note 1). Verify chapter names
 *   against the notification PDF at ibps.in. See honesty note 6.
 *
 *   DO-NOT-RE-ADD LIST:
 *     × A 3-SECTION PRELIMS (English + Reasoning + Quant only). That was the
 *       PRE-SPL-XVI pattern. Professional Knowledge is now in Prelims. Most
 *       "IBPS SO exam pattern" pages older than July 2026 still show 3
 *       sections / 150 questions — they describe the retired scheme.
 *     × A 150-QUESTION PRELIMS. Older cycles ran 150 Qs. CRP SPL-XVI Prelims
 *       is 100 Qs / 125 marks. (Some July-2026 pages STILL misquote 150 —
 *       source conflict, resolved in note 4.)
 *     × General Awareness / Banking Awareness as a section IN THIS MODULE.
 *       That section belongs to Law Officer and Rajbhasha Adhikari, who
 *       replace Quant with it. It is not part of the IT/AFO/HR/Marketing
 *       aptitude pattern. Adding a GA card here creates a dead card.
 *     × Law Officer and Rajbhasha Adhikari cards. Separate pattern (note 3).
 *
 * HONESTY NOTES (numbered):
 *   1. PROFESSIONAL KNOWLEDGE — IT OFFICER, now built (13 chapters). PK is
 *      the only merit-bearing subject. The topic list is web-verified across
 *      six sources (DBMS, Networking, OS, Data Structures, OOP, Software
 *      Engineering, Computer Organization & Microprocessors, plus emerging
 *      tech). The PER-CHAPTER MARK WEIGHTS come from a candidate-shared Mains
 *      breakdown (ex-Union-Bank IT Officer, 2024): DBMS 10, Networking 10,
 *      OOP 10, Software Engineering 6, Embedded/Microprocessors 5, OS 4,
 *      Data Structures 4, Computer Organization 4, Cloud/AI/ML/Big-Data ~7,
 *      out of a ~60-mark PK objective block. That is ONE candidate's recall,
 *      not an official blueprint — IBPS does not publish PK sub-weights — so
 *      treat the weights as a strong prior to re-tune from PYQs, not gospel.
 *      The old scribd source (60–70% DBMS+Networking) is from 2015 and
 *      almost certainly overstates those two now; I did NOT use it for
 *      weighting, only as corroboration that DBMS+Networking lead.
 *      Verify the topic list against the CRP SPL-XVI IT Officer notification
 *      syllabus at ibps.in.
 *   2. PRELIMS IS QUALIFYING; MERIT = 80% MAINS PK + 20% INTERVIEW. No field
 *      captures how lopsided this is. A candidate can top all three aptitude
 *      sections and still not be selected if PK is weak; the reverse is also
 *      true. The rational plan is: clear each Prelims section's cut-off with
 *      margin, then pour everything into PK. The aptitude cards below exist
 *      to get you PAST the gate, not to win — their priorities are set for
 *      "clear the sectional cut-off efficiently", not "maximise score".
 *   3. LAW OFFICER & RAJBHASHA EXCLUDED — and this is a real modeling call,
 *      not laziness. They swap Quantitative Aptitude for "General Awareness
 *      with special reference to the Banking Industry", and their PK domains
 *      (law; Hindi translation/official-language) are unrelated to the other
 *      four. One module covering all six would need either a dead Quant card
 *      for two posts or a dead GA card for four. They deserve their own
 *      module with examKey `ibps_so_law` / `ibps_so_rajbhasha` if wanted.
 *   4. SOURCE CONFLICT, resolved — Prelims size. pw.live and one adda247 page
 *      say "150 questions / 125 marks / 120 minutes". Six other sources,
 *      including practicemock's dedicated pattern page (2 days old) and
 *      careerpower/ixambee, say "100 questions / 125 marks / 80 minutes,
 *      20 min per section, PK added". Picked 100/125/80: it is the majority,
 *      it is the most recent, and the 125-marks-from-100-questions arithmetic
 *      only closes if PK's 25 questions carry 2 marks each (25+25+25+50=125).
 *      The "150/120min" pages are quoting the retired pattern. NOTE the
 *      internal tension I could NOT fully resolve: the 25-mark aptitude
 *      sections at 1 mark/Q = 25 Qs each is clean, but a couple of sources
 *      imply Reasoning may carry more questions than marks. Encoded 25/25;
 *      flagged. Verify: notification PDF, prelims composition table.
 *   5. `stage` = "Prelims" / "Mains" — real vocabulary; the two stages are
 *      genuinely different papers with different roles. This is one of the
 *      few hub exams where stage carries information.
 *   6. CHAPTER NAMES (aptitude) reconstructed from the standard IBPS
 *      aptitude syllabus, not read off the SPL-XVI PDF. High confidence
 *      (this syllabus is stable across IBPS PO/Clerk/SO) - still verify.
 *   7. `priority` / `days` are EDITORIAL, tuned for "clear the cut-off"
 *      (note 2), ~4 hrs/day, first-pass only. Selection comes from PK depth
 *      and mock volume — counters, not `days`.
 *   8. PREFIX SAFETY: `iso_*` here. The hub already has IBPS PO and IBPS
 *      Clerk (`iclk_*`) keys. Do NOT reuse either. localStorage keys are global.
 *   9. FORMATTING DEVIATION: one-line chapter objects, same six fields.
 *
 * CHANGELOG:
 *   v1.0 — 16 Jul 2026 — Initial module (IT/AFO/HR/Marketing aptitude posts).
 *          Pattern, dates, vacancies, PK-in-Prelims change web-verified.
 *          PK card shipped as a STUB pending post selection.
 *   v1.1 — 16 Jul 2026 — Post selected: IT OFFICER. PK stub replaced with the
 *          real 13-chapter IT Officer PK syllabus, weighted from a
 *          candidate-shared Mains mark breakdown (note 1). examName +
 *          totalChapters updated. Aptitude chapter names still UNVERIFIED
 *          against the SPL-XVI PDF (note 6).
 * ========================================================================= */

const EXAM_CONFIG_IBPS_SO = {
  examKey: "ibps_so_2026",
  examName: "IBPS SO (CRP SPL-XVI)",
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
  postsCovered: "IT Officer, Agriculture Field Officer, HR/Personnel Officer, Marketing Officer (Scale I). Law Officer & Rajbhasha Adhikari excluded — different pattern.",
  postsExcluded: "Law Officer, Rajbhasha Adhikari (swap Quant for GA-Banking; separate PK domain).",

  examPattern: {
    stages: "Prelims (qualifying) → Mains (objective PK + descriptive English) → Interview. Only one post may be applied for.",
    revisedThisCycle: "Professional Knowledge ADDED to Prelims for the first time in CRP SPL-XVI. 3-section-prelims pages are stale.",
    prelims: {
      totalQuestions: 100, totalMarks: 125, durationMinutes: 80,
      sectionalTime: "20 minutes per section.",
      sections: [
        { name: "English Language",       questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Reasoning Ability",      questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Quantitative Aptitude",  questions: 25, marks: 25, role: "qualifying (sectional cut-off)" },
        { name: "Professional Knowledge", questions: 25, marks: 50, role: "post-specific; 2 marks/Q" }
      ],
      role: "QUALIFYING ONLY — Prelims score does NOT enter final merit."
    },
    mains: {
      composition: "Objective Professional Knowledge (post-specific) + Descriptive English paper. Objective aptitude tests in Mains are qualifying; PK (and descriptive where applicable) is merit-bearing.",
      role: "MERIT-BEARING."
    },
    marking: "+1 per mark-unit correct; −0.25 per wrong answer (all objective tests, Prelims + Mains); 0 unattempted. Normalized across shifts.",
    finalSelection: "Mains : Interview = 80 : 20. Prelims contributes nothing beyond qualifying.",
    // Verified 16 Jul 2026 across 8 sources reporting CRP SPL-XVI. What would
    // change it: an IBPS corrigendum, or a per-post composition table in the
    // notification differing from the 25/25/25/25(×2) split.
    patternVerified: true
  },

  // Subject order = recommended study sequence, NOT paper order, and it
  // encodes note 2: aptitude exists to CLEAR THE GATE, PK exists to WIN.
  // Professional Knowledge FIRST and by a mile — it is 100% of merit weight
  // (80% Mains PK + 20% interview, which itself probes PK), it is now also in
  // Prelims, and it has the longest ramp because it is a whole domain. The
  // three aptitude sections follow, ordered by cut-off risk: Quant first (the
  // section that most often traps non-engineering aptitude candidates on
  // sectional cut-off under a 20-min clock), then Reasoning (highest accuracy
  // ceiling), then English (most candidates clear its cut-off with least
  // work). This is a "protect the weakest cut-off, then maximise PK" order.
  subjects: [
    { key: "iso_pk",   name: "Professional Knowledge",                 icon: "💻", color: "#1F618D", examStage: "Prelims + Mains — decides merit", prefix: "iso_pk_",   totalChapters: 13 },
    { key: "iso_qa",   name: "Quantitative Aptitude",                  icon: "🔢", color: "#B9770E", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_qa_",   totalChapters: 14 },
    { key: "iso_reas", name: "Reasoning Ability",                      icon: "🧩", color: "#6C3483", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_reas_", totalChapters: 14 },
    { key: "iso_eng",  name: "English Language",                       icon: "📖", color: "#117A65", examStage: "Prelims — qualifying (25 Qs)",     prefix: "iso_eng_",  totalChapters: 10 }
  ]
};

const IBPS_SO_PRIORITY_DATA = {

  /* ---- PROFESSIONAL KNOWLEDGE — IT OFFICER (iso_pk_, 13) --------------
   * ⚠ THE ONLY MERIT-BEARING SUBJECT (80% Mains + 20% interview) and now
   * also 50 marks in Prelims. Chapter order = study priority by mark weight
   * from the candidate-shared Mains breakdown (honesty note 1). DBMS,
   * Networking and OOP are ~10 marks each and lead everything; OS, DS and
   * Computer Organization are ~4 each. `days` are sized for a CS/IT graduate
   * doing a focused revision-to-depth pass, NOT ground-up learning — the
   * post requires a technical degree, so this is your home turf. Depth of
   * PYQ practice after the first pass is what actually separates ranks.
   * ------------------------------------------------------------------- */
  iso_pk_1:  { name: "DBMS — SQL, Normalisation, Transactions, Indexing",        priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; joint-highest weight", days: "8 days", category: "Core — Data, DB & Systems" },
  iso_pk_2:  { name: "Data Communication & Networking — Protocols, OSI/TCP-IP",   priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; joint-highest weight", days: "8 days", category: "Core — Networks & Security" },
  iso_pk_3:  { name: "Object-Oriented Programming — Concepts & Language",         priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "~10 Mains marks; joint-highest weight", days: "7 days", category: "Core — Programming" },
  iso_pk_4:  { name: "Software Engineering — SDLC, Models, Testing",              priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~6 Mains marks", days: "4 days", category: "Systems & Engineering" },
  iso_pk_5:  { name: "Embedded Systems & Microprocessors",                       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~5 Mains marks; higher than most expect", days: "4 days", category: "Systems & Engineering" },
  iso_pk_6:  { name: "Operating Systems — Processes, Scheduling, Memory, Files",  priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks; conceptually dense for its weight", days: "5 days", category: "Core — Data, DB & Systems" },
  iso_pk_7:  { name: "Data Structures — Linear, Non-linear, Searching, Sorting", priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks; MCQ-tested, no coding", days: "5 days", category: "Core — Programming" },
  iso_pk_8:  { name: "Computer Organization & Architecture, Digital Logic",       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~4 Mains marks", days: "4 days", category: "Systems & Engineering" },
  iso_pk_9:  { name: "Emerging Tech — Cloud, AI, ML, Big Data",                   priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "~7 Mains marks combined; fast-growing share", days: "4 days", category: "Emerging & Applied" },
  iso_pk_10: { name: "Network & Cyber Security Fundamentals",                     priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "shares the networking/security block; rising", days: "3 days", category: "Core — Networks & Security" },
  iso_pk_11: { name: "Web Technologies and Internet Basics",                     priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1–3 Qs typical", days: "3 days", category: "Emerging & Applied" },
  iso_pk_12: { name: "Computer Fundamentals and Programming Basics",             priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1–3 Qs; cheap marks for a graduate", days: "2 days", category: "Core — Programming" },
  iso_pk_13: { name: "Banking Technology & Digital Banking Concepts",            priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "the IT-in-banking angle; also key for the interview", days: "4 days", category: "Emerging & Applied" },

  /* ---- QUANTITATIVE APTITUDE (iso_qa_, 14) — 25 Qs, qualifying -------
   * Ordered for cut-off survival under a 20-min sectional clock. DI is the
   * make-or-break block in bank aptitude; arithmetic word problems next.
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

  /* ---- REASONING ABILITY (iso_reas_, 14) — 25 Qs, qualifying --------
   * Puzzles and seating dominate modern IBPS reasoning; they are the
   * highest-yield, highest-accuracy cut-off protection.
   * ------------------------------------------------------------------- */
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

  /* ---- ENGLISH LANGUAGE (iso_eng_, 10) — 25 Qs, qualifying ----------
   * Usually the cheapest cut-off to clear; RC dominates. Priorities set to
   * clear efficiently, not to over-invest.
   * ------------------------------------------------------------------- */
  iso_eng_1:  { name: "Reading Comprehension",                           priority: "VERY HIGH", stage: "Prelims", prelimsWeight: "7–10 Qs; largest English block", days: "5 days", category: "Reading & Vocabulary" },
  iso_eng_2:  { name: "Vocabulary — Synonyms, Antonyms, Usage",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "in-RC and standalone", days: "3 days", category: "Reading & Vocabulary" },
  iso_eng_3:  { name: "Cloze Test",                                      priority: "HIGH",      stage: "Prelims", prelimsWeight: "0–5 Qs", days: "2 days", category: "Reading & Vocabulary" },
  iso_eng_4:  { name: "Error Spotting and Sentence Correction",          priority: "HIGH",      stage: "Prelims", prelimsWeight: "3–5 Qs", days: "3 days", category: "Grammar" },
  iso_eng_5:  { name: "Sentence Improvement",                            priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Grammar" },
  iso_eng_6:  { name: "Fill in the Blanks (Single & Double)",            priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Grammar" },
  iso_eng_7:  { name: "Para Jumbles",                                    priority: "HIGH",      stage: "Prelims", prelimsWeight: "0–5 Qs", days: "3 days", category: "Verbal Ability" },
  iso_eng_8:  { name: "Sentence Rearrangement and Connectors",           priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" },
  iso_eng_9:  { name: "Para Completion and Sentence Placement",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" },
  iso_eng_10: { name: "Word Swap and Word Usage (new pattern)",          priority: "MEDIUM",    stage: "Prelims", prelimsWeight: "0–3 Qs", days: "2 days", category: "Verbal Ability" },

  /* NOTE: no General Awareness / Banking Awareness card here by design —
   * that section belongs to Law Officer & Rajbhasha Adhikari, who are not
   * modeled in this file. See honesty note 3. */
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_IBPS_SO, IBPS_SO_PRIORITY_DATA };
}
