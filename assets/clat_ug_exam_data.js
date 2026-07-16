/* ============================================================================
 * clat_ug_exam_data.js — CLAT UG module for Arpit's Exam Hub
 * ============================================================================
 *
 * SCOPE FLAG (read first): "CLAT" is TWO exams, not one.
 *   CLAT-UG (5-year integrated LLB, after Class 12) and CLAT-PG (LLM, after
 *   an LLB) are separate papers with separate syllabi and separate cohorts.
 *   You said "CLAT" without specifying. This module is UG ONLY — it is what
 *   "CLAT" defaults to and it is the vastly larger cohort.
 *   CLAT-PG is NOT built here, deliberately. What I verified about it:
 *     · Also 120 MCQs, also 120 minutes, also +1 / −0.25 — same numbers.
 *     · Reduced from 150 to 120 questions; the DESCRIPTIVE section and the
 *       minimum cut-off bar were both REMOVED.
 *     · Content is Constitutional Law and other core law subjects, tested
 *       through ~450-word passages with 4–5 MCQs each.
 *   That is not enough to build a chapter list I'd stand behind — a PG
 *   module needs the Consortium's PG syllabus PDF, not four sentences of
 *   aggregator prose. It is a separate module with a separate examKey, not a
 *   subject card bolted onto this file. Say the word and I'll build it once
 *   I can verify against the source.
 *
 * TARGET CYCLE: CLAT 2027 (for the 2027–28 academic session).
 *   Conducted by the Consortium of National Law Universities for admission
 *   to 27 participating NLUs. Expected Sunday 6 December 2026, 2:00–4:00 PM
 *   IST (verified: 6 Dec 2026 IS a Sunday). Notification expected July 2026;
 *   registration expected to open around 1 August 2026. ALL TENTATIVE — the
 *   Consortium had not announced dates as of the build date.
 *
 * ⚠ TIMING (build date 16 Jul 2026): the notification is expected THIS
 *   MONTH and registration in ~2 weeks. Watch consortiumofnlus.ac.in. But
 *   unlike Group D (18 days to the exam) there is no cliff here: the exam is
 *   ~5 months out and the registration window runs for months. This is a
 *   full-prep-cycle target, and the only one in the hub right now with
 *   enough runway to actually use a 48-chapter first pass.
 *
 * PATTERN (web-verified 16 Jul 2026):
 *   OFFLINE, pen-and-paper. 120 minutes. 120 MCQs / 120 marks.
 *   +1 correct, −0.25 wrong.
 *   PwD candidates: exam runs 2:00–4:40 PM (extra 40 minutes).
 *   Five sections, ALL PASSAGE-BASED — 450–500 word passages with 5–6
 *   questions each:
 *     Legal Reasoning ................... 28–32 Qs (25%)
 *     Current Affairs incl. GK .......... 28–32 Qs (25%)
 *     English Language .................. 22–26 Qs (20%)
 *     Logical Reasoning ................. 22–26 Qs (20%)
 *     Quantitative Techniques ........... 10–14 Qs (10%)
 *   (Percentages sum to 100. The Consortium publishes ranges, not fixed
 *   counts — see honesty note 2.)
 *   Difficulty: Class 12 standard, EXCEPT Quantitative Techniques, which is
 *   Class 10 standard.
 *   Last pattern change: questions cut from 150 → 120 (and marks 150 → 120),
 *   in effect since CLAT 2024. Duration stayed at 2 hours — so the exam got
 *   MORE time per question, not less. Unchanged for 2027 as far as reported.
 *
 *   THE STRUCTURAL FACT THAT SHOULD DRIVE THE WHOLE PLAN:
 *   CLAT is a READING TEST wearing five different hats. Every section is
 *   passage-based. 120 questions in 120 minutes across ~24 passages of
 *   450–500 words means roughly 12,000 words to read and act on in two
 *   hours. Reading speed and passage triage are not an "English" topic —
 *   they are the meta-skill the entire paper is built on. A student who
 *   "finishes the syllabus" and reads slowly will still lose.
 *
 * SYLLABUS BASIS: the Consortium of NLUs publishes an official CLAT syllabus
 *   PDF. The chapter lists below were reconstructed from its published
 *   section descriptions, NOT read off the PDF. Verify at
 *   consortiumofnlus.ac.in. See honesty note 4.
 *
 *   DO-NOT-RE-ADD LIST:
 *     × A 150-question or 200-question assumption. 120 since CLAT 2024.
 *       At least one page dated Dec 2025 still says "reducing the number of
 *       questions from 200 to 150" — that page is describing a change from
 *       two reforms ago.
 *     × A descriptive/subjective section. Removed from CLAT PG; CLAT UG
 *       never had one.
 *     × Prior legal knowledge as a prerequisite for Legal Reasoning. The
 *       Consortium's position is that the section supplies the principles in
 *       the passage and tests APPLICATION, not recall. Chapters 2–8 below
 *       are named for the domains whose principles recur — they are
 *       familiarity aids, NOT a law syllabus to memorise. Turning them into
 *       a bare-act memorisation plan is the classic CLAT prep error.
 *     × A separate "GK" card split from Current Affairs. It is ONE section.
 *
 * HONESTY NOTES (numbered):
 *   1. SOURCE CONFLICT, resolved — exam mode. acpdc.in says "CLAT 2027 exam
 *      will be conducted in the online mode." Five sources (shiksha,
 *      lawpreptutorial, toprankers, lawentrance, careers360) say OFFLINE
 *      pen-and-paper, which is also how every recent CLAT has run. The
 *      dissenting page ALSO says questions are being cut "from 200 to 150"
 *      — a claim two reforms stale — which is enough to discount the whole
 *      page. Picked OFFLINE. Do not "fix" this file to match it.
 *   2. prelimsWeight REPURPOSED: no prelims. Means "expected questions in
 *      the paper". Here the RANGES are OFFICIAL — the Consortium publishes
 *      section bands (22–26, 28–32, etc.) rather than fixed counts, which is
 *      unusual and worth preserving as a range rather than a false midpoint.
 *      Per-chapter figures inside those bands are EDITORIAL from PYQ trend.
 *   3. `datesTentative: true` — 6 Dec 2026 is a reported expectation, not a
 *      Consortium announcement. It IS a Sunday, and CLAT convention is the
 *      first Sunday of December, so the guess and the convention agree. That
 *      is a reason to ship the estimate, not a reason to call it confirmed.
 *      Verify: consortiumofnlus.ac.in.
 *   4. CHAPTER NAMES ARE UNVERIFIED at the name level. Pattern, mode, marks,
 *      marking, section bands, the 150→120 change and the difficulty
 *      standard were web-verified this session. Chapter lists were
 *      reconstructed from the Consortium's published section descriptions —
 *      not read off the syllabus PDF. Verify before a student relies on it.
 *   5. `stage` is uniform ("CLAT UG") — single-paper exam; counselling is not
 *      chapter-trackable. Kept for schema compatibility across the hub.
 *   6. QUANTITATIVE TECHNIQUES IS 10% AND EVERY HOUR OVER-INVESTED THERE IS
 *      STOLEN FROM LEGAL REASONING. 10–14 questions, Class 10 maths, and it
 *      is the section engineering-minded students over-prepare because it
 *      feels tractable. Its `days` are deliberately modest. Meanwhile Legal
 *      Reasoning + Current Affairs are 50% of the paper between them.
 *   7. THE READING META-SKILL IS MODELED, in clat_eng_8 and clat_eng_1. It
 *      is filed under English because it needs a home, but it is not an
 *      English topic — it is the whole paper. If the renderer can surface
 *      one strategy line per exam, make it the 12,000-words-in-120-minutes
 *      arithmetic above, not the countdown.
 *   8. `priority` and `days` are EDITORIAL. `days` assume ~4 hrs/day
 *      (Class 12 student or dropper) and FIRST-PASS learning only. Ranks
 *      come from mock volume and accuracy after the first pass — counters,
 *      not `days`. Re-tune from the student's own sectional mock scores.
 *   9. PREFIX SAFETY: `clat_*` here. A future CLAT-PG module must use a
 *      distinct prefix (e.g. `clatpg_*`) and a distinct examKey —
 *      localStorage keys are global across the hub.
 *  10. FORMATTING DEVIATION: one-line chapter objects, same six fields.
 *
 * CHANGELOG:
 *   v1.0 — 16 Jul 2026 — Initial module, UG only. Pattern, mode, marking,
 *          section bands web-verified. Dates TENTATIVE (note 3). Chapter
 *          lists UNVERIFIED (note 4). CLAT-PG deliberately not built.
 * ========================================================================= */

const EXAM_CONFIG_CLAT_UG = {
  examKey: "clat_ug_2027",
  examName: "CLAT UG (Common Law Admission Test)",
  targetYear: 2027,

  examDate: "2026-12-06",            // expected; first Sunday of Dec, 2–4 PM IST
  datesTentative: true,              // Consortium had not announced as of build date
  conductingBody: "Consortium of National Law Universities",
  participatingNLUs: 27,
  notificationExpected: "2026-07-01",
  registrationExpected: "2026-08-01",
  companionExam: "CLAT-PG (LLM) — separate paper, separate cohort. NOT modeled here; needs its own module. See header.",

  examPattern: {
    stages: "Single paper → NLU counselling. No interview stage.",
    mode: "OFFLINE — pen and paper. (One aggregator claims online; it is wrong. See honesty note 1.)",
    totalQuestions: 120,
    totalMarks: 120,
    durationMinutes: 120,
    marking: "+1 correct; −0.25 wrong; 0 unattempted.",
    pwd: "Exam runs 2:00–4:40 PM (extra 40 minutes).",
    format: "ALL five sections are passage-based: 450–500 word passages with 5–6 questions each.",
    readingLoad: "~24 passages × ~450–500 words ≈ 12,000 words to read and act on in 120 minutes. Reading speed and passage triage are the meta-skill of the whole paper.",
    difficulty: "Class 12 standard, EXCEPT Quantitative Techniques which is Class 10 standard.",
    sections: [
      { name: "Legal Reasoning",              questions: "28–32", share: "25%" },
      { name: "Current Affairs including GK", questions: "28–32", share: "25%" },
      { name: "English Language",             questions: "22–26", share: "20%" },
      { name: "Logical Reasoning",            questions: "22–26", share: "20%" },
      { name: "Quantitative Techniques",      questions: "10–14", share: "10%" }
    ],
    sectionBandCaveat: "The Consortium publishes RANGES, not fixed counts. Shares sum to 100%.",
    legalReasoningNote: "No prior legal knowledge required. Principles are supplied in the passage; the section tests APPLICATION, not recall.",
    lastPatternChange: "CLAT 2024: questions cut 150 → 120 and marks 150 → 120. Duration held at 2 hours — so time per question INCREASED. Reported unchanged for 2027.",
    // Verified 16 Jul 2026 across 7 sources. What would change it: the
    // Consortium's CLAT 2027 notification / official syllabus PDF.
    patternVerified: true
  },

  // Subject order = recommended study sequence, NOT paper order.
  // Legal Reasoning first: 25% of the paper, the only section with zero
  // school-syllabus overlap, and the longest calibration ramp — principle-fact
  // application is a genuinely new mode of thinking for a Class-12 student.
  // Current Affairs second: also 25%, but it is a DRIP, not a sprint — start
  // it early and run it daily for five months rather than cramming it.
  // English third: 20%, and it carries the reading meta-skill the whole paper
  // depends on (honesty note 7) — which is why it is not last despite being
  // the section students feel most comfortable in.
  // Logical Reasoning fourth: 20%, heavily shared with English's critical
  // reasoning; doing it after English is a deliberate compounding.
  // Quantitative Techniques LAST and capped: 10%, Class 10 level (honesty
  // note 6). This ordering is by weight × ramp, not by comfort.
  subjects: [
    { key: "legal", name: "Legal Reasoning",              icon: "⚖️", color: "#7B241C", examStage: "CLAT UG — 28–32 Qs (25%)", prefix: "clat_legal_", totalChapters: 10 },
    { key: "ca",    name: "Current Affairs including GK", icon: "📰", color: "#1A5276", examStage: "CLAT UG — 28–32 Qs (25%)", prefix: "clat_ca_",    totalChapters: 10 },
    { key: "eng",   name: "English Language",             icon: "📖", color: "#117A65", examStage: "CLAT UG — 22–26 Qs (20%)", prefix: "clat_eng_",   totalChapters: 8 },
    { key: "lr",    name: "Logical Reasoning",            icon: "🧩", color: "#6C3483", examStage: "CLAT UG — 22–26 Qs (20%)", prefix: "clat_lr_",    totalChapters: 10 },
    { key: "qt",    name: "Quantitative Techniques",      icon: "🔢", color: "#B9770E", examStage: "CLAT UG — 10–14 Qs (10%)", prefix: "clat_qt_",    totalChapters: 10 }
  ]
};

const CLAT_UG_PRIORITY_DATA = {

  /* ---- LEGAL REASONING (clat_legal_, 10) — 28–32 Qs (25%) ------------
   * ⚠ Chapters 2–7 are FAMILIARITY AIDS, not a law syllabus. Principles are
   * given in the passage. Memorising bare acts is the classic CLAT error —
   * the section rewards application speed, not recall. See do-not-re-add.
   * ------------------------------------------------------------------- */
  clat_legal_1:  { name: "Principle-Fact Application — The Core Method",  priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "Skill — gates all 28–32 Qs", days: "10 days", category: "Method & Terminology" },
  clat_legal_2:  { name: "Law of Contracts — Recurring Principles",       priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–7 Qs; most-used domain", days: "6 days", category: "Core Law Domains" },
  clat_legal_3:  { name: "Law of Torts — Recurring Principles",           priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–7 Qs; most-used domain", days: "6 days", category: "Core Law Domains" },
  clat_legal_4:  { name: "Criminal Law — Recurring Principles",           priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–6 Qs",  days: "6 days", category: "Core Law Domains" },
  clat_legal_5:  { name: "Constitutional Law — Recurring Principles",     priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–7 Qs; overlaps Current Affairs", days: "7 days", category: "Core Law Domains" },
  clat_legal_6:  { name: "Family Law and Personal Laws",                  priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Other Law Domains" },
  clat_legal_7:  { name: "Intellectual Property and Consumer Law",        priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Other Law Domains" },
  clat_legal_8:  { name: "International Law and Public Policy Passages",  priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Legal Current Affairs & Policy" },
  clat_legal_9:  { name: "Legal Maxims and Terminology",                  priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "1–3 Qs; cheap marks, small list", days: "3 days", category: "Method & Terminology" },
  clat_legal_10: { name: "Current Legal and Moral Issues in the News",    priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "2–4 Qs; passages are drawn from live debates", days: "8 days", category: "Legal Current Affairs & Policy" },

  /* ---- CURRENT AFFAIRS INCLUDING GK (clat_ca_, 10) — 28–32 Qs (25%) --
   * ONE section — do not split GK out into its own card. Also passage-based,
   * which is why it is NOT the rote-list section students expect. This is a
   * five-month DRIP: 8 days of `days` here means 8 days of setup, then daily
   * newspaper habit that no chapter tick can represent.
   * ------------------------------------------------------------------- */
  clat_ca_1:  { name: "Contemporary Events of Significance — India",      priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "8–12 Qs; largest block", days: "12 days", category: "Contemporary Events — India" },
  clat_ca_2:  { name: "Contemporary Events of Significance — World",      priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "5–8 Qs",  days: "8 days", category: "International Affairs" },
  clat_ca_3:  { name: "International Affairs and World Organizations",    priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs",  days: "5 days", category: "International Affairs" },
  clat_ca_4:  { name: "Indian Polity and Constitution in the News",       priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–6 Qs; compounds with Legal Reasoning", days: "7 days", category: "Contemporary Events — India" },
  clat_ca_5:  { name: "Economy and Business in the News",                 priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs",  days: "5 days", category: "Contemporary Events — India" },
  clat_ca_6:  { name: "Science, Technology and Environment in the News",  priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "2–4 Qs",  days: "4 days", category: "Contemporary Events — India" },
  clat_ca_7:  { name: "Arts and Culture",                                 priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "2–4 Qs; an official syllabus head", days: "4 days", category: "Static & Enduring" },
  clat_ca_8:  { name: "Historical Events of Continuing Significance",     priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs; an official syllabus head", days: "6 days", category: "Static & Enduring" },
  clat_ca_9:  { name: "Awards, Honours, Books and Personalities",         priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Static & Enduring" },
  clat_ca_10: { name: "Sports",                                           priority: "LOW",       stage: "CLAT UG", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Static & Enduring" },

  /* ---- ENGLISH LANGUAGE (clat_eng_, 8) — 22–26 Qs (20%) --------------
   * Carries the reading meta-skill for the WHOLE paper (honesty note 7).
   * clat_eng_8 is filed here for want of a better home; it is not an
   * English topic, it is the exam.
   * ------------------------------------------------------------------- */
  clat_eng_1: { name: "RC — Core Reading Skill on 450–500 Word Passages", priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "Underpins all 120 Qs, not just these 22–26", days: "10 days", category: "Reading Comprehension" },
  clat_eng_2: { name: "RC — Inference and Conclusion Questions",          priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "5–8 Qs",  days: "5 days", category: "Reading Comprehension" },
  clat_eng_3: { name: "RC — Main Idea, Summary and Author's Viewpoint",   priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "4–6 Qs",  days: "4 days", category: "Reading Comprehension" },
  clat_eng_4: { name: "RC — Comparison, Contrast and Argument Spotting",  priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs; compounds with Logical Reasoning", days: "4 days", category: "Reading Comprehension" },
  clat_eng_5: { name: "Vocabulary in Context",                            priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs; in-passage, not standalone lists", days: "5 days", category: "Language in Context" },
  clat_eng_6: { name: "Grammar in Context",                               priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "2–4 Qs; in-passage, not standalone", days: "4 days", category: "Language in Context" },
  clat_eng_7: { name: "Passage Genre Familiarity — Fiction & Non-fiction", priority: "MEDIUM",   stage: "CLAT UG", prelimsWeight: "Skill — contemporary and historically significant writing", days: "6 days", category: "Technique & Genre" },
  clat_eng_8: { name: "Reading Speed and Passage Triage (whole paper)",   priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "Skill — ~12,000 words in 120 min across all 5 sections", days: "8 days", category: "Technique & Genre" },

  /* ---- LOGICAL REASONING (clat_lr_, 10) — 22–26 Qs (20%) -------------
   * Passage-based CRITICAL reasoning dominates. Classic puzzle-style
   * reasoning (series, arrangements) is the MINORITY here — the opposite of
   * SSC/RRB reasoning. Do not import an SSC reasoning plan.
   * ------------------------------------------------------------------- */
  clat_lr_1:  { name: "Critical Reasoning — Argument Structure",          priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "5–8 Qs; the section's core", days: "6 days", category: "Critical Reasoning" },
  clat_lr_2:  { name: "Premises, Conclusions and Assumptions",            priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–7 Qs",  days: "5 days", category: "Critical Reasoning" },
  clat_lr_3:  { name: "Strengthen, Weaken and Identify the Flaw",         priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "4–7 Qs",  days: "5 days", category: "Critical Reasoning" },
  clat_lr_4:  { name: "Inference and Conclusion Drawing",                 priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "3–5 Qs",  days: "4 days", category: "Critical Reasoning" },
  clat_lr_5:  { name: "Analogies and Relationships",                      priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "2 days", category: "Analytical Reasoning" },
  clat_lr_6:  { name: "Syllogisms",                                       priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Analytical Reasoning" },
  clat_lr_7:  { name: "Ranking and Ordering",                             priority: "LOW",       stage: "CLAT UG", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Analytical Reasoning" },
  clat_lr_8:  { name: "Number and Letter Series",                         priority: "LOW",       stage: "CLAT UG", prelimsWeight: "0–2 Qs; minor in CLAT, unlike SSC/RRB", days: "2 days", category: "Puzzles & Arrangement" },
  clat_lr_9:  { name: "Blood Relations and Direction Sense",              priority: "LOW",       stage: "CLAT UG", prelimsWeight: "0–2 Qs; minor in CLAT, unlike SSC/RRB", days: "2 days", category: "Puzzles & Arrangement" },
  clat_lr_10: { name: "Seating Arrangement and Puzzles",                  priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Puzzles & Arrangement" },

  /* ---- QUANTITATIVE TECHNIQUES (clat_qt_, 10) — 10–14 Qs (10%) -------
   * ⚠ SMALLEST SECTION, Class 10 level, and the one most over-prepared.
   * The format is DATA-BASED: numerical passages/graphs with derived
   * questions, not standalone sums. `days` deliberately capped — see
   * honesty note 6.
   * ------------------------------------------------------------------- */
  clat_qt_1:  { name: "DI — Numerical Passages, Tables, Graphs & Charts", priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "Most of the 10–14 Qs arrive in this format", days: "5 days", category: "Data Interpretation & Statistics" },
  clat_qt_2:  { name: "Percentages",                                      priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "2–4 Qs; the single most-used tool here", days: "3 days", category: "Ratio & Percentage Family" },
  clat_qt_3:  { name: "Ratio and Proportion",                             priority: "VERY HIGH", stage: "CLAT UG", prelimsWeight: "2–3 Qs",  days: "3 days", category: "Ratio & Percentage Family" },
  clat_qt_4:  { name: "Profit, Loss and Discount",                        priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Ratio & Percentage Family" },
  clat_qt_5:  { name: "Averages",                                         priority: "HIGH",      stage: "CLAT UG", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Averages, Interest & Applications" },
  clat_qt_6:  { name: "Time, Speed, Distance and Work",                   priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Averages, Interest & Applications" },
  clat_qt_7:  { name: "Simple and Compound Interest",                     priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Averages, Interest & Applications" },
  clat_qt_8:  { name: "Number System and Simplification",                 priority: "MEDIUM",    stage: "CLAT UG", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Number, Geometry & Mensuration" },
  clat_qt_9:  { name: "Mensuration and Basic Geometry",                   priority: "LOW",       stage: "CLAT UG", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Number, Geometry & Mensuration" },
  clat_qt_10: { name: "Probability and Basic Statistics",                 priority: "LOW",       stage: "CLAT UG", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Data Interpretation & Statistics" }
};

/* ============================================================================
 * STORAGE PATTERN — ONE JSON blob per subject, never one key per chapter:
 *   localStorage.setItem(subject.prefix + "progress", JSON.stringify(progressObj));
 * Chapter keys = subject.prefix + integer, so key.slice(prefix.length) is
 * always all-digits. A future CLAT-PG module must use a distinct prefix
 * (e.g. `clatpg_*`) and examKey — localStorage keys are global.
 * ========================================================================= */

if (typeof window !== "undefined") {
  window.EXAM_CONFIG_CLAT_UG = EXAM_CONFIG_CLAT_UG;
  window.CLAT_UG_PRIORITY_DATA = CLAT_UG_PRIORITY_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CLAT_UG, CLAT_UG_PRIORITY_DATA };
}
