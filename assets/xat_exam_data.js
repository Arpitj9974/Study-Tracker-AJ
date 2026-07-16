/* ============================================================================
 * xat_exam_data.js — XAT (Xavier Aptitude Test) module for Arpit's Exam Hub
 * ============================================================================
 *
 * TARGET CYCLE: XAT 2027.
 *   Conducted by XLRI Jamshedpur on behalf of XAMI. Expected Sunday
 *   3 January 2027, 2:00–5:00 PM IST. (Verified: 3 Jan 2027 IS a Sunday, and
 *   XAT convention is the first Sunday of January — the reported date and the
 *   convention agree, which is the only reason I'm shipping it as a date at
 *   all. Still TENTATIVE until XLRI's notification. See honesty note 1.)
 *   Scores accepted by 11 XAMI member institutes, 83 associate institutes and
 *   600+ B-schools. ~90,000 test-takers annually.
 *
 * ⚠ TIMING (build date 16 Jul 2026): XAT registration for the Jan cycle
 *   opens around mid-July and stays open until early-to-mid December — the
 *   last cycle's window opened 10 July. So registration is likely OPEN NOW
 *   at xatonline.in. Unlike Group D or CA, there is no cliff here: the window
 *   is ~5 months. Don't manufacture urgency the exam doesn't have. The real
 *   deadline pressure is that CAT 2026 (29 Nov 2026) sits ~5 weeks before
 *   XAT — see the subject-order comment.
 *
 * PATTERN (web-verified 16 Jul 2026, from the XAT 2025/2026 papers):
 *   Computer-based, English only, 180 minutes total, ~109 test cities.
 *   ~95 MCQs in two parts. No sectional time limits in Part 1 — free
 *   movement between its three sections.
 *     PART 1 — 170 minutes, 75 questions:
 *       Verbal & Logical Ability (VALR) ......... 26
 *       Decision Making (DM) .................... 21
 *       Quantitative Ability & Data Interp. ..... 28
 *     [~5-minute mock keyboard test between parts, NOT counted in the 180.]
 *     PART 2 — 10 minutes, 20 questions:
 *       General Knowledge ....................... 20 (12 current + 8 static)
 *   MARKING — the thing that makes XAT XAT:
 *     +1 correct.
 *     −0.25 per WRONG answer (Part 1 only).
 *     −0.10 per UNATTEMPTED question BEYOND THE FIRST 8 (Part 1 only).
 *       ↑ This is the rule nobody else has. You get 8 free skips. The 9th
 *         skip costs you. It means XAT punishes both reckless attempting AND
 *         over-cautious skipping — there is no safe passive strategy.
 *     GK (Part 2): NO negative marking, and NOT counted in the percentile.
 *       GK is used at the GD-PI/final-selection stage by XLRI and others.
 *   PwD candidates: +20 minutes per hour.
 *   Last pattern change: Analytical Essay Writing (AEW) REMOVED from the
 *   paper in XAT 2025 — moved into the GD/PI stage. Stayed removed in XAT
 *   2026 and is expected to stay removed for 2027. Total question count has
 *   drifted across cycles (75–101; currently ~95, previously 100).
 *
 * SYLLABUS BASIS: XLRI publishes NO detailed syllabus. The chapter lists
 *   below are derived from PYQ trend (XAT 2020–2026) and standard prep-book
 *   topic lists. Verify against the official XAT mock at xatonline.in once
 *   it is released, and against actual PYQs. See honesty note 5.
 *
 *   DO-NOT-RE-ADD LIST:
 *     × Analytical Essay Writing as a section or subject card. Removed from
 *       the paper in XAT 2025. Pages dated 2024 and earlier still list it;
 *       so does at least one page dated 2026 (see honesty note 3). It is a
 *       GD-PI-stage activity now, not chapter-trackable.
 *     × Sectional time limits. XAT has none in Part 1.
 *     × A 100-question or 101-question assumption. Currently ~95.
 *   INVERSE TRAP — things the CAT module correctly EXCLUDES that XAT
 *   correctly INCLUDES. If you clone cat_exam_data.js, you will delete these
 *   and be wrong:
 *     ✓ Vocabulary, grammar and sentence-correction questions. CAT dropped
 *       standalone verbal-ability-of-this-kind years ago; XAT still asks it.
 *     ✓ Poem-based and unconventional-format RC passages. A genuine XAT
 *       signature; CAT does not do this.
 *     ✓ Decision Making — no analogue anywhere else in Indian MBA testing.
 *
 * HONESTY NOTES (numbered):
 *   1. DATE IS TENTATIVE (datesTentative: true) despite one source stating
 *      "3 January 2027" flatly. Others say only "early January 2027, likely
 *      the first Sunday". Those agree — 3 Jan 2027 is the first Sunday — but
 *      agreement between a guess and a convention is not an announcement.
 *      Verify: xatonline.in.
 *   2. prelimsWeight REPURPOSED: XAT has no prelims. Means "expected
 *      questions in the paper". SECTION totals are near-official (stable
 *      across 2025 and 2026 and reported consistently by six sources).
 *      Per-chapter figures are EDITORIAL from PYQ trend. XLRI publishes no
 *      chapter-level weightage — nobody's "weightage table" is official.
 *   3. SOURCE CONFLICT, resolved — the essay, and the structure. toprankers'
 *      marking-scheme page says XAT 2027 has "three parts: A, B, C. Part A
 *      ... (175 minutes), Part B a 5-minute mock keyboard test, Part C ...
 *      GK section AND A SHORT ESSAY TOPIC (30 minutes)", and separately
 *      mangles the skip rule into "if you answer more than 8 CONSECUTIVE
 *      questions incorrectly, 0.10 marks will be deducted". Both are wrong.
 *      Seven other sources — including toprankers' OWN exam-pattern page —
 *      say 170 + 10, no essay, and the penalty is for UNATTEMPTED questions
 *      beyond 8. Picked the majority. Note the same site contradicts itself
 *      across two pages: aggregator agreement is not evidence of accuracy,
 *      it is often evidence of copying.
 *   4. GK IS NOT IN THE PERCENTILE, AND NO FIELD SHOUTS THAT LOUDLY ENOUGH.
 *      20 questions in 10 minutes, zero effect on the score that decides
 *      whether you're called. It matters only once you're already in the
 *      GD-PI room. Every hour spent on XAT GK is an hour not spent on the
 *      three sections that actually gate you. Its `days` values are
 *      deliberately modest and its priorities deliberately capped — if the
 *      renderer surfaces a completion bar per subject, this card will look
 *      "behind" and that is CORRECT. If there's room for one strategy line
 *      per exam, make it this one, or the 8-skip rule.
 *   5. CHAPTER NAMES ARE UNVERIFIED and there is no authority to verify them
 *      against — XLRI publishes no syllabus. Unlike CA (where an ICAI PDF
 *      exists and I simply didn't read it), here the ONLY ground truth is
 *      PYQs and the official mock. Treat every chapter below as an
 *      inference from past papers, not a syllabus entry.
 *   6. `stage` is uniform ("XAT") — single-sitting exam; GD-PI is not
 *      chapter-trackable. Kept for schema compatibility across the hub.
 *   7. DECISION MAKING HAS NO SYLLABUS AT ALL, not even a PYQ-derived topic
 *      list in the normal sense. The 8 entries below are a SKILL/CASE-TYPE
 *      taxonomy, not topics. `days` there measure practice blocks. This is
 *      the section that separates XAT percentiles and the one that cannot be
 *      studied from a book — it is PYQ volume and calibration to XLRI's
 *      answer style. Do not let a "DM: 100%" completion state mean anything.
 *   8. `priority` and `days` are EDITORIAL. `days` assume ~3 hrs/day and
 *      FIRST-PASS learning only, from a CAT-prepared base (see subject
 *      order). Percentiles come from mock volume after the first pass —
 *      counters, not `days`.
 *   9. PREFIX SAFETY: `xat_*` here, `cat_*` in the CAT module. The QA&DI
 *      chapter lists overlap heavily with CAT's. Do NOT share prefixes or
 *      dedupe — different marking scheme, different attempt strategy,
 *      different progress state.
 *  10. FORMATTING DEVIATION: one-line chapter objects, same six fields.
 *
 * CHANGELOG:
 *   v1.0 — 16 Jul 2026 — Initial module. Pattern, marking, section splits,
 *          essay removal web-verified. Date TENTATIVE (note 1). Chapter
 *          lists UNVERIFIED and unverifiable-by-syllabus (note 5).
 * ========================================================================= */

const EXAM_CONFIG_XAT = {
  examKey: "xat_2027",
  examName: "XAT (Xavier Aptitude Test)",
  targetYear: 2027,

  examDate: "2027-01-03",            // expected; first Sunday of Jan, 2–5 PM IST
  datesTentative: true,              // XLRI notification not confirmed as of build date
  conductingBody: "XLRI Jamshedpur, on behalf of XAMI",
  registrationOpens: "2026-07-10",   // approximate — last cycle's window opened 10 Jul
  registrationCloses: "2026-12-10",  // approximate — early-to-mid December
  accepted: "11 XAMI member institutes, 83 associate institutes, 600+ B-schools.",

  examPattern: {
    stages: "Single CBT → GD / Personal Interview (institute-wise). Analytical Essay Writing now happens at the GD-PI stage, not in the paper.",
    totalQuestions: 95,
    durationMinutes: 180,
    language: "English only.",
    sectionalTimeLimits: "NONE in Part 1 — free movement between its three sections.",
    parts: [
      {
        part: 1, durationMinutes: 170, questions: 75,
        sections: [
          { name: "Verbal & Logical Ability",              questions: 26 },
          { name: "Decision Making",                       questions: 21 },
          { name: "Quantitative Ability & Data Interpretation", questions: 28 }
        ],
        marking: "+1 correct; −0.25 wrong; −0.10 per unattempted question BEYOND the first 8."
      },
      {
        part: 2, durationMinutes: 10, questions: 20,
        sections: [{ name: "General Knowledge", questions: 20, split: "12 current affairs + 8 static" }],
        marking: "+1 correct; NO negative marking.",
        scoring: "NOT counted in the XAT percentile. Used at the GD-PI / final-selection stage only."
      }
    ],
    keyboardTest: "~5-minute mock keyboard test between Part 1 and Part 2. NOT counted in the 180 minutes.",
    skipPenaltyRule: "8 free skips in Part 1. The 9th unattempted question onward costs 0.10 each. XAT is the only major Indian MBA exam that penalises skipping — there is no safe passive strategy.",
    pwd: "+20 minutes per hour.",
    lastPatternChange: "XAT 2025: Analytical Essay Writing removed from the paper (moved to GD-PI). Unchanged in 2026; expected unchanged for 2027. Question count has drifted 75–101 across cycles; currently ~95 (was 100).",
    // Verified 16 Jul 2026 across 8 sources reporting the XAT 2025/2026
    // papers. What would change it: XLRI's XAT 2027 notification / official
    // mock.
    patternVerified: true
  },

  // Subject order = recommended study sequence, and it assumes something the
  // other modules don't: that this student is ALSO taking CAT (29 Nov 2026),
  // which is true of nearly every XAT taker. That makes XAT prep a ~5-week
  // DELTA on top of CAT prep, not a ground-up build.
  // Decision Making FIRST and by a wide margin: it is the only section with
  // no CAT analogue, it is where XAT percentiles are actually made or lost,
  // and it needs the longest calibration runway. VALR second — mostly shared
  // with CAT, but the vocabulary/grammar/poem-RC delta is real and CAT prep
  // will NOT have covered it. QA&DI third: ~90% shared with CAT; a CAT-ready
  // student needs revision here, not learning. GK last and capped — it does
  // not enter the percentile (honesty note 4).
  subjects: [
    { key: "dm",   name: "Decision Making",                icon: "⚖️", color: "#943126", examStage: "XAT — Part 1, 21 questions", prefix: "xat_dm_",   totalChapters: 8 },
    { key: "valr", name: "Verbal & Logical Ability",       icon: "📖", color: "#1F618D", examStage: "XAT — Part 1, 26 questions", prefix: "xat_valr_", totalChapters: 10 },
    { key: "qadi", name: "Quantitative Ability & DI",      icon: "🔢", color: "#B9770E", examStage: "XAT — Part 1, 28 questions", prefix: "xat_qadi_", totalChapters: 24 },
    { key: "gk",   name: "General Knowledge (not in percentile)", icon: "🌏", color: "#5D6D7E", examStage: "XAT — Part 2, 20 questions", prefix: "xat_gk_", totalChapters: 10 }
  ]
};

const XAT_PRIORITY_DATA = {

  /* ---- DECISION MAKING (xat_dm_, 8) — 21 Qs -------------------------
   * No syllabus exists. This is a CASE-TYPE and SKILL taxonomy. `days` are
   * practice blocks, not learning. See honesty note 7.
   * ------------------------------------------------------------------- */
  xat_dm_1: { name: "Ethical Dilemmas and Moral Judgement Cases",      priority: "VERY HIGH", stage: "XAT", prelimsWeight: "5–8 Qs; the archetypal XAT DM case", days: "8 days",  category: "Judgement & Ethics Cases" },
  xat_dm_2: { name: "Business and Managerial Situation Cases",         priority: "VERY HIGH", stage: "XAT", prelimsWeight: "5–8 Qs",  days: "8 days",  category: "Judgement & Ethics Cases" },
  xat_dm_3: { name: "Stakeholder Analysis and Conflict Resolution",    priority: "HIGH",      stage: "XAT", prelimsWeight: "3–5 Qs",  days: "5 days",  category: "Judgement & Ethics Cases" },
  xat_dm_4: { name: "Condition and Data-Based Decision Sets",          priority: "HIGH",      stage: "XAT", prelimsWeight: "3–5 Qs; the only DM type with a provable answer", days: "5 days", category: "Analytical & Resource Cases" },
  xat_dm_5: { name: "Financial and Resource Allocation Cases",         priority: "MEDIUM",    stage: "XAT", prelimsWeight: "2–4 Qs",  days: "4 days",  category: "Analytical & Resource Cases" },
  xat_dm_6: { name: "Option Elimination and Answer-Style Calibration", priority: "VERY HIGH", stage: "XAT", prelimsWeight: "Skill — DM options are deliberately close", days: "10 days", category: "Technique" },
  xat_dm_7: { name: "Caselet Reading Under Time Pressure",             priority: "HIGH",      stage: "XAT", prelimsWeight: "Skill — DM caselets are long and unsignposted", days: "5 days", category: "Technique" },
  xat_dm_8: { name: "PYQ Pattern Mining — Last 10 Years of DM",        priority: "VERY HIGH", stage: "XAT", prelimsWeight: "Skill — the only real DM 'syllabus' that exists", days: "12 days", category: "Technique" },

  /* ---- VERBAL & LOGICAL ABILITY (xat_valr_, 10) — 26 Qs -------------
   * Chapters 3, 7, 8, 9, 10 are the CAT DELTA: things CAT stopped asking
   * and XAT still asks. A CAT-prepped student has a real gap here.
   * ------------------------------------------------------------------- */
  xat_valr_1:  { name: "RC — Core Reading Skill and Speed",             priority: "VERY HIGH", stage: "XAT", prelimsWeight: "RC block: 10–14 Qs (shared skill layer)", days: "7 days", category: "Reading & Critical Reasoning" },
  xat_valr_2:  { name: "RC — Inference, Tone and Author's Viewpoint",   priority: "VERY HIGH", stage: "XAT", prelimsWeight: "RC block: 10–14 Qs (shared skill layer)", days: "5 days", category: "Reading & Critical Reasoning" },
  xat_valr_3:  { name: "RC — Poem and Abstract Passage Handling",       priority: "HIGH",      stage: "XAT", prelimsWeight: "1–3 Qs; XAT-only — CAT never does this", days: "5 days", category: "Reading & Critical Reasoning" },
  xat_valr_4:  { name: "Critical Reasoning — Assumption, Strengthen, Weaken", priority: "VERY HIGH", stage: "XAT", prelimsWeight: "5–8 Qs; heavier in XAT than CAT", days: "6 days", category: "Reading & Critical Reasoning" },
  xat_valr_5:  { name: "Para Jumbles",                                  priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Para-based Verbal" },
  xat_valr_6:  { name: "Para Completion and Sentence Placement",        priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Para-based Verbal" },
  xat_valr_7:  { name: "Vocabulary in Context",                         priority: "HIGH",      stage: "XAT", prelimsWeight: "2–4 Qs; XAT-only vs CAT", days: "6 days", category: "Vocabulary & Grammar" },
  xat_valr_8:  { name: "Grammar and Sentence Correction",               priority: "HIGH",      stage: "XAT", prelimsWeight: "2–4 Qs; XAT-only vs CAT", days: "5 days", category: "Vocabulary & Grammar" },
  xat_valr_9:  { name: "Analogies and Word Usage",                      priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–3 Qs; XAT-only vs CAT", days: "3 days", category: "Vocabulary & Grammar" },
  xat_valr_10: { name: "Fill in the Blanks and Cloze",                  priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–3 Qs; XAT-only vs CAT", days: "2 days", category: "Vocabulary & Grammar" },

  /* ---- QUANTITATIVE ABILITY & DATA INTERPRETATION (xat_qadi_, 24) ----
   * 28 Qs — the largest Part 1 section. ~90% shared with CAT QA; a
   * CAT-ready student is revising here, not learning. XAT leans harder on
   * Geometry and Number System than CAT does.
   * ------------------------------------------------------------------- */
  xat_qadi_1:  { name: "Percentages",                                   priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs; underpins DI",  days: "3 days", category: "Arithmetic" },
  xat_qadi_2:  { name: "Ratio and Proportion",                          priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs; underpins DI",  days: "3 days", category: "Arithmetic" },
  xat_qadi_3:  { name: "Profit, Loss and Discount",                     priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Arithmetic" },
  xat_qadi_4:  { name: "Averages and Mixtures",                         priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Arithmetic" },
  xat_qadi_5:  { name: "Time, Speed and Distance",                      priority: "HIGH",      stage: "XAT", prelimsWeight: "1–3 Qs",  days: "4 days", category: "Arithmetic" },
  xat_qadi_6:  { name: "Time and Work",                                 priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Arithmetic" },
  xat_qadi_7:  { name: "Simple and Compound Interest",                  priority: "MEDIUM",    stage: "XAT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Arithmetic" },
  xat_qadi_8:  { name: "Linear and Quadratic Equations",                priority: "HIGH",      stage: "XAT", prelimsWeight: "2–3 Qs",  days: "4 days", category: "Algebra" },
  xat_qadi_9:  { name: "Inequalities and Modulus",                      priority: "MEDIUM",    stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Algebra" },
  xat_qadi_10: { name: "Functions and Graphs",                          priority: "HIGH",      stage: "XAT", prelimsWeight: "1–3 Qs",  days: "4 days", category: "Algebra" },
  xat_qadi_11: { name: "Logarithms, Surds and Indices",                 priority: "MEDIUM",    stage: "XAT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Algebra" },
  xat_qadi_12: { name: "Progressions and Series",                       priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Algebra" },
  xat_qadi_13: { name: "Number Properties, Divisibility and Remainders", priority: "VERY HIGH", stage: "XAT", prelimsWeight: "2–4 Qs; heavier in XAT than CAT", days: "5 days", category: "Number System & Modern Math" },
  xat_qadi_14: { name: "Permutations and Combinations",                 priority: "HIGH",      stage: "XAT", prelimsWeight: "1–3 Qs",  days: "4 days", category: "Number System & Modern Math" },
  xat_qadi_15: { name: "Probability",                                   priority: "HIGH",      stage: "XAT", prelimsWeight: "1–3 Qs; an XAT favourite", days: "3 days", category: "Number System & Modern Math" },
  xat_qadi_16: { name: "Set Theory and Venn Diagrams",                  priority: "MEDIUM",    stage: "XAT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Number System & Modern Math" },
  xat_qadi_17: { name: "Lines, Angles and Triangles",                   priority: "VERY HIGH", stage: "XAT", prelimsWeight: "2–3 Qs; Geometry is heavier in XAT than CAT", days: "5 days", category: "Geometry & Mensuration" },
  xat_qadi_18: { name: "Circles",                                       priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Geometry & Mensuration" },
  xat_qadi_19: { name: "Quadrilaterals and Polygons",                   priority: "MEDIUM",    stage: "XAT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Geometry & Mensuration" },
  xat_qadi_20: { name: "Coordinate Geometry",                           priority: "MEDIUM",    stage: "XAT", prelimsWeight: "0–2 Qs",  days: "3 days", category: "Geometry & Mensuration" },
  xat_qadi_21: { name: "Mensuration (2D and 3D)",                       priority: "HIGH",      stage: "XAT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Geometry & Mensuration" },
  xat_qadi_22: { name: "Trigonometry",                                  priority: "LOW",       stage: "XAT", prelimsWeight: "0–1 Qs",  days: "2 days", category: "Geometry & Mensuration" },
  xat_qadi_23: { name: "DI — Tables, Graphs and Charts",                priority: "VERY HIGH", stage: "XAT", prelimsWeight: "4–8 Qs across DI sets", days: "5 days", category: "Data Interpretation" },
  xat_qadi_24: { name: "DI — Caselet and Data-Heavy Sets",              priority: "HIGH",      stage: "XAT", prelimsWeight: "2–5 Qs across DI sets", days: "4 days", category: "Data Interpretation" },

  /* ---- GENERAL KNOWLEDGE (xat_gk_, 10) — 20 Qs, 10 min --------------
   * ⚠ NOT COUNTED IN THE PERCENTILE. Used at GD-PI only. Priorities and
   * `days` here are DELIBERATELY CAPPED. This card looking "behind" the
   * others is the correct state, not a gap to close. See honesty note 4.
   * ------------------------------------------------------------------- */
  xat_gk_1:  { name: "Current Affairs — National (last 12 months)",     priority: "MEDIUM", stage: "XAT", prelimsWeight: "Current block: 12 Qs; 0 percentile impact", days: "5 days", category: "Current Affairs" },
  xat_gk_2:  { name: "Current Affairs — International",                 priority: "MEDIUM", stage: "XAT", prelimsWeight: "Current block: 12 Qs; 0 percentile impact", days: "4 days", category: "Current Affairs" },
  xat_gk_3:  { name: "Business and Corporate Affairs",                  priority: "MEDIUM", stage: "XAT", prelimsWeight: "Current block: 12 Qs; XAT's strongest GK lean", days: "4 days", category: "Current Affairs" },
  xat_gk_4:  { name: "Economics and Economic Policy",                   priority: "MEDIUM", stage: "XAT", prelimsWeight: "Current block: 12 Qs; 0 percentile impact", days: "3 days", category: "Current Affairs" },
  xat_gk_5:  { name: "Static GK — Awards, Books and Authors",           priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "2 days", category: "Static GK" },
  xat_gk_6:  { name: "Static GK — Geography, Capitals and Currencies",  priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "2 days", category: "Static GK" },
  xat_gk_7:  { name: "Static GK — History, Polity and Constitution",    priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "2 days", category: "Static GK" },
  xat_gk_8:  { name: "Static GK — Science, Technology and Space",       priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "2 days", category: "Static GK" },
  xat_gk_9:  { name: "Static GK — Sports",                              priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "1 days", category: "Static GK" },
  xat_gk_10: { name: "Static GK — Art, Culture and Personalities",      priority: "LOW",    stage: "XAT", prelimsWeight: "Static block: 8 Qs; 0 percentile impact", days: "2 days", category: "Static GK" }
};

/* ============================================================================
 * STORAGE PATTERN — ONE JSON blob per subject, never one key per chapter:
 *   localStorage.setItem(subject.prefix + "progress", JSON.stringify(progressObj));
 * Chapter keys = subject.prefix + integer, so key.slice(prefix.length) is
 * always all-digits. `xat_*` must not collide with `cat_*` despite the heavy
 * QA overlap — different marking, different strategy, different progress.
 * ========================================================================= */

if (typeof window !== "undefined") {
  window.EXAM_CONFIG_XAT = EXAM_CONFIG_XAT;
  window.XAT_PRIORITY_DATA = XAT_PRIORITY_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_XAT, XAT_PRIORITY_DATA };
}
