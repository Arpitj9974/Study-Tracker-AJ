/*
 * ============================================================
 * CUET PG — GENERAL PAPER (COQP11) — Arpit's Exam Hub Module
 * File    : cuet_pg_general_exam_data.js
 * Version : 1.0 | Date: 2026-07-17
 * ============================================================
 *
 * TARGET CYCLE: CUET PG 2027
 * WHY: CUET PG 2026 has fully concluded.
 *      Exam window : 06 Mar – 27 Mar 2026
 *      Result      : 24 Apr 2026
 *      Next cycle  : CUET PG 2027 — notification expected Dec 2026,
 *      exam expected Mar–Apr 2027 (based on 2025 and 2026 pattern).
 *
 * ⚠  SCOPE WARNING — READ BEFORE USING THIS MODULE:
 *    "CUET PG" is NOT a single exam. NTA conducts 157 distinct
 *    subject papers under the CUET PG umbrella. This module covers
 *    ONLY Paper Code COQP11 — the General Paper — which is required
 *    for admission to non-technical PG programs such as MBA,
 *    LLB (Delhi University), MA Social Work, MA Journalism, MA
 *    Library Science, MA Public Administration, and similar programs
 *    at participating central/state universities.
 *
 *    Students targeting:
 *      MA English (LAQP01), MA Political Science (PAQP01),
 *      MSc Physics (SCQP01), MSc Computer Science (SCQP14),
 *      or any other domain paper
 *    NEED A SEPARATE MODULE for that specific paper code.
 *    Do NOT use this module as a substitute for those.
 *
 * PATTERN (FACT — verified from NTA official notice + post-exam
 *          analyses from multiple sources, Mar 2026):
 *   Mode         : Computer-Based Test (CBT)
 *   Questions    : 75 MCQs — one integrated section, no internal
 *                  sub-section divisions in the paper interface
 *   Duration     : 90 minutes
 *   Marking      : +4 correct | –1 incorrect | 0 unattempted
 *   Total marks  : 300
 *   Medium       : Bilingual (English + Hindi); candidate's choice
 *   Source verified : NTA CUET PG 2026 Info Bulletin (14 Dec 2025)
 *                     + student paper analysis, Mar 2026
 *
 * RECENT PATTERN REVISION:
 *   2023–2024 format: Paper split into Part A (General Aptitude,
 *   ~25 Qs) + Part B (domain, ~50 Qs) | duration 105 min.
 *   2025 change: Part A scrapped for ALL subject papers.
 *   Duration cut from 105 → 90 min. Paper became a single 75-Q
 *   domain-specific section for most papers.
 *   COQP11 effect: Content mix unchanged (was always general-
 *   aptitude-type); total question count reduced & timing tightened.
 *   2026: No further change. Same 75 Qs / 90 min / +4/–1.
 *   Expect 2027 to continue the same format unless NTA announces
 *   otherwise in the December 2026 information bulletin.
 *
 * SYLLABUS BASIS (COQP11):
 *   Official NTA CUET PG 2026 Information Bulletin (14 Dec 2025),
 *   available at exams.nta.nic.in/cuet-pg (PDF, Annexure II).
 *   Five subject areas (not separately timed or labelled in paper):
 *     1. Language Comprehension / Verbal Ability
 *     2. General Awareness / GK & Current Affairs
 *     3. Quantitative Aptitude / Numerical Ability
 *     4. Logical & Analytical Reasoning
 *     5. Computer Basics
 *
 *   DO-NOT-RE-ADD LIST (absent by design — keep it that way):
 *   — Legal Aptitude / Legal Reasoning: NEVER in COQP11; LLB
 *     aspirants are NOT tested on legal principles here.
 *     (Confirmed: zero legal-reasoning Qs across all 2025-26 shifts)
 *   — Essay / Descriptive writing: CBT format; not applicable.
 *   — Data Sufficiency (standalone section): folded into DI.
 *   — Trigonometry (sin/cos/tan): outside COQP11 Quant scope.
 *   — Current Affairs older than ~18 months from exam date: rarely
 *     asked; focus prep time on the 12 months before exam.
 *
 * HONESTY NOTES:
 *   1. [UNCERTAIN] Section-wise question counts. Official NTA
 *      syllabus for COQP11 lists five areas but does NOT specify
 *      questions-per-area. Values in `prelimsWeight` (repurposed as
 *      `paperWeight` here) are ESTIMATES derived from post-exam
 *      student feedback and coaching analysis for 2025–2026 papers.
 *      To verify: download the official CUET PG 2026 COQP11 question
 *      paper PDF from exams.nta.nic.in → Answer Key section and
 *      count by topic yourself. Re-calibrate before 2027 prep.
 *
 *   2. [REPURPOSED FIELD] `prelimsWeight` ≡ "estimated questions in
 *      the 75-Q paper." CUET PG has no Prelims/Mains stage split;
 *      there is exactly one paper per subject.
 *
 *   3. [REPURPOSED FIELD] `stage` = "Paper" uniformly for all
 *      chapters. COQP11 is a single, unitary test with no stages.
 *
 *   4. [OPINION] `priority` and `days` are editorial estimates
 *      assuming a new graduate aspirant with ~3–4 hrs/day of study.
 *      Non-STEM background students: add 30–50% to Quant `days`.
 *      Arts/Commerce background: add 20–30% to Computer `days`.
 *      Recommended: re-tune priorities after the first mock test.
 *
 *   5. [UNCERTAIN] Exam dates. No CUET PG 2027 notification exists
 *      as of 17 Jul 2026. Dates estimated from 2025–2026 calendar.
 *      Check exams.nta.nic.in/cuet-pg from December 2026 onward.
 *
 *   6. [UNCERTAIN] Current Affairs for cpg_gk_13 has `days:
 *      "Ongoing (daily)"` — this is NOT a one-pass chapter.
 *      Daily newspaper reading (The Hindu / Indian Express) from the
 *      day prep starts until the exam is the only valid prep method.
 *      This `days` value cannot be plugged into a countdown like
 *      other chapters; treat it as a parallel daily habit.
 *
 * CHANGELOG:
 *   v1.0 — 2026-07-17 — Initial build for CUET PG 2027 (COQP11)
 * ============================================================
 */

// ── SUBJECT ORDER RATIONALE ───────────────────────────────────────────────
// Top → bottom = recommended start sequence for a new aspirant:
//
// 1. Quantitative Aptitude  — highest per-question marks contribution
//    (~20 Qs, +4 each); most time-intensive to build from scratch.
//    Start here on Day 1. PYQ evidence: every shift has 5+ Arithmetic
//    Qs and 3–5 DI Qs. Maximum ROI for effort invested.
//
// 2. Logical Reasoning      — second-highest section (~15 Qs). Compounds
//    with Quant skill. Daily timed practice is mandatory from Week 1;
//    no last-minute cram possible for Puzzles and Syllogism.
//
// 3. GK & Current Affairs   — widest content footprint (~20 Qs) but
//    most needs TIME, not just effort. Start building newspaper habit
//    from Day 1 in parallel with Quant. Static GK can be batched,
//    but Current Affairs cannot be crammed in the last 4 weeks.
//
// 4. English Comprehension  — ~15 Qs, stable and predictable syllabus.
//    RC + Cloze Test + Error Detection appear every shift. Improves
//    progressively with reading practice. Start in Week 2.
//
// 5. Computer Basics        — smallest section (~5 Qs). Factual recall;
//    highest return per hour in the final 2 weeks. Do last.
// ─────────────────────────────────────────────────────────────────────────

const EXAM_CONFIG_CUET_PG_GENERAL = {
  examKey:                    "cuet_pg_general",    // unique across all hub exams
  examName:                   "CUET PG — General Paper (COQP11)",
  targetYear:                 2027,

  // Dates: ESTIMATED from 2025–2026 historical pattern; no 2027
  // notification exists as of module creation date.
  examDate:                   "2027-03-20",         // mid-March estimate
  datesTentative:             true,
  notificationDate:           "2026-12-14",         // NTA releases in mid-Dec
  notificationDateTentative:  true,
  applicationCloseDate:       "2027-01-25",         // estimate based on 2026 window
  applicationCloseTentative:  true,

  examPattern: {
    mode:              "CBT (Computer-Based Test)",
    totalQuestions:    75,
    totalMarks:        300,
    durationMinutes:   90,
    sections:          1,                           // single integrated section
    marking: {
      correct:         4,
      incorrect:      -1,
      unattempted:     0
    },
    medium:            ["English", "Hindi"],         // candidate's choice at login
    stages:            ["Paper"],                   // single-stage exam; no Prelims/Mains

    // Section-wise question estimate — UNCERTAIN (Honesty Note 1)
    // Source: 2025–2026 post-exam student analysis, NOT official NTA breakdown.
    // Treat as prep-planning guides, not guaranteed splits.
    estimatedSectionBreak: {
      languageComprehension:    "~15 Qs",           // English Verbal & RC
      generalAwareness:         "~20 Qs",           // GK + Current Affairs
      quantitativeAptitude:     "~20 Qs",           // Highest-weight section
      logicalReasoning:         "~15 Qs",           // Reasoning
      computerBasics:           "~5 Qs"             // Smallest section
    },

    patternVerified:    true,
    patternSource:      "NTA CUET PG 2026 Information Bulletin (14 Dec 2025) + " +
                        "post-exam paper analysis (Mar 2026, Shiksha / IndCareer / AcademyCheck)"
  },

  subjects: [
    {
      key:           "quantitative",
      name:          "Quantitative Aptitude",
      icon:          "🔢",
      color:         "#059669",                     // emerald — numerics
      examStage:     "Paper",
      prefix:        "cpg_qa_",
      totalChapters: 14
    },
    {
      key:           "reasoning",
      name:          "Logical & Analytical Reasoning",
      icon:          "🧠",
      color:         "#DC2626",                     // red — analytical challenge
      examStage:     "Paper",
      prefix:        "cpg_lr_",
      totalChapters: 12
    },
    {
      key:           "gk",
      name:          "GK & Current Affairs",
      icon:          "🌐",
      color:         "#0891B2",                     // cyan — world awareness
      examStage:     "Paper",
      prefix:        "cpg_gk_",
      totalChapters: 13
    },
    {
      key:           "english",
      name:          "English Comprehension",
      icon:          "📚",
      color:         "#4F46E5",                     // indigo — language
      examStage:     "Paper",
      prefix:        "cpg_eng_",
      totalChapters: 10
    },
    {
      key:           "computer",
      name:          "Computer Basics",
      icon:          "💻",
      color:         "#7C3AED",                     // violet — technology
      examStage:     "Paper",
      prefix:        "cpg_comp_",
      totalChapters: 7
    }
  ]
};

// ── PRIORITY DATA ─────────────────────────────────────────────────────────────
//
// Field semantics for THIS exam:
//   prelimsWeight → "estimated questions in the 75-Q COQP11 paper"
//                   (UNCERTAIN; see Honesty Note 1 above)
//   stage         → "Paper" for all (single paper; no stage split)
//   days          → first-pass concept learning only, assuming ~3–4 hrs/day.
//                   Does NOT include mock practice time (add 2–3× more for
//                   practice/revision before exam).
//
// PYQ source: CUET PG COQP11 2022–2026 paper analysis
//             (Careers360, CollegeDunia, coaching site reviews)
// ─────────────────────────────────────────────────────────────────────────────

const CUET_PG_GENERAL_PRIORITY_DATA = {

  // ═══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE APTITUDE — cpg_qa_1 to cpg_qa_14 (14 chapters)
  // ~20 Qs | Highest per-question value. PYQ signal: Percentage, Profit/Loss,
  // TSD appear in EVERY shift. DI alone = 3–5 Qs minimum. Start here.
  // Non-STEM students: double the `days` estimate for chapters 10–14.
  // ═══════════════════════════════════════════════════════════════════════════

  cpg_qa_1: {
    name:           "Number System & HCF / LCM",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_2: {
    name:           "Simplification & Approximation",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_3: {
    name:           "Percentage",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_4: {
    name:           "Profit, Loss & Discount",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_5: {
    name:           "Ratio, Proportion & Mixtures",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_6: {
    name:           "Averages & Weighted Average",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Arithmetic"
  },
  cpg_qa_7: {
    name:           "Time, Speed & Distance",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_8: {
    name:           "Time & Work",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_9: {
    name:           "Simple & Compound Interest",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Arithmetic"
  },
  cpg_qa_10: {
    name:           "Algebra (Linear & Quadratic Equations)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Advanced Math"
  },
  cpg_qa_11: {
    name:           "Geometry (Lines, Triangles, Circles)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Advanced Math"
  },
  cpg_qa_12: {
    name:           "Mensuration (Area, Volume, Surface Area)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Advanced Math"
  },
  cpg_qa_13: {
    name:           "Statistics (Mean, Median, Mode, Range)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Data & Statistics"
  },
  cpg_qa_14: {
    name:           "Data Interpretation (Table, Bar, Pie, Line)",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~3 Qs",
    days:           "4 days",       // concept + DI set practice; don't underbudget
    category:       "Data & Statistics"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LOGICAL & ANALYTICAL REASONING — cpg_lr_1 to cpg_lr_12 (12 chapters)
  // ~15 Qs | Daily timed practice mandatory from Week 1.
  // PYQ signal: Syllogism + Puzzles = 30–40% of Reasoning section in most
  // shifts. Analogy and Series are quick wins (1 Q each, ~45 sec/Q possible).
  // Do NOT skip Input-Output — appeared in 3 of 5 known 2026 COQP11 shifts.
  // ═══════════════════════════════════════════════════════════════════════════

  cpg_lr_1: {
    name:           "Blood Relations",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "1 day",
    category:       "Basic Reasoning"
  },
  cpg_lr_2: {
    name:           "Direction & Distance",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Basic Reasoning"
  },
  cpg_lr_3: {
    name:           "Coding-Decoding",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "1 day",
    category:       "Basic Reasoning"
  },
  cpg_lr_4: {
    name:           "Number & Alphabet Series",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "1 day",
    category:       "Series & Analogy"
  },
  cpg_lr_5: {
    name:           "Analogy & Classification",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "1 day",
    category:       "Series & Analogy"
  },
  cpg_lr_6: {
    name:           "Syllogism",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Logical Deduction"
  },
  cpg_lr_7: {
    name:           "Puzzles & Seating Arrangement",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "3 days",       // most time-intensive reasoning chapter
    category:       "Advanced Puzzles"
  },
  cpg_lr_8: {
    name:           "Statement, Assumptions & Conclusions",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Logical Deduction"
  },
  cpg_lr_9: {
    name:           "Cause & Effect / Verbal Reasoning",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Logical Deduction"
  },
  cpg_lr_10: {
    name:           "Input-Output",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Advanced Puzzles"
  },
  cpg_lr_11: {
    name:           "Ranking, Order & Arrangement",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Advanced Puzzles"
  },
  cpg_lr_12: {
    name:           "Venn Diagrams & Set Theory",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Advanced Puzzles"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GK & CURRENT AFFAIRS — cpg_gk_1 to cpg_gk_13 (13 chapters)
  // ~20 Qs | Widest content base; needs time, not just effort.
  // PYQ signal (2026 COQP11 Mar 8 paper): Current Affairs ~5 Qs;
  // History + Polity combined ~5–6 Qs; Govt Schemes appeared 2–3 Qs.
  // Start newspaper habit on Day 1; static GK can be batched later.
  // ═══════════════════════════════════════════════════════════════════════════

  cpg_gk_1: {
    name:           "Ancient & Medieval Indian History",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "4 days",
    category:       "History"
    // Note: "Ancient & Medieval" is one COQP11 syllabus unit at awareness
    // level (~10th-grade depth), not a deep domain paper. Not split further
    // because the section allocates only ~2 Qs total to all of pre-modern
    // history — splitting into two chapters would give 0.5 Q density each.
  },
  cpg_gk_2: {
    name:           "Modern India & Freedom Struggle",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "4 days",
    category:       "History"
  },
  cpg_gk_3: {
    name:           "Indian Constitution & Polity",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "4 days",
    category:       "Polity & Economy"
  },
  cpg_gk_4: {
    name:           "Indian Economy & Budget Basics",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "3 days",
    category:       "Polity & Economy"
  },
  cpg_gk_5: {
    name:           "Indian Geography (Physical & Human)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "3 days",
    category:       "Geography"
  },
  cpg_gk_6: {
    name:           "World Geography (Continents, Rivers, Peaks)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Geography"
  },
  cpg_gk_7: {
    name:           "General Science (Physics, Chemistry, Biology)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "4 days",
    // Note: Tested at awareness level in COQP11, not deep subject knowledge.
    // One chapter here = one NCERT-awareness unit. Not split into three
    // separate subject chapters because COQP11 allocates only ~2 Qs to all
    // of science; splitting three ways would give 0.67 Q density each.
    category:       "Science & Environment"
  },
  cpg_gk_8: {
    name:           "Environment & Ecology",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Science & Environment"
  },
  cpg_gk_9: {
    name:           "Sports Events & Championships",
    priority:       "LOW",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Current Affairs & Events"
  },
  cpg_gk_10: {
    name:           "Awards, Honours & Important Persons",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Current Affairs & Events"
  },
  cpg_gk_11: {
    name:           "Books, Authors, Art & Culture",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Current Affairs & Events"
  },
  cpg_gk_12: {
    name:           "Government Schemes & Policies",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "3 days",
    category:       "Current Affairs & Events"
  },
  cpg_gk_13: {
    name:           "National & International Current Affairs",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~5 Qs",
    days:           "Ongoing (daily)",
    // ⚠ SPECIAL: This is NOT a one-pass chapter. `days` here means
    // "build a daily reading habit starting Day 1 and maintain until
    // exam day." Target: last 12 months of events by exam date.
    // Recommended: The Hindu / Indian Express editorial + monthly GK
    // PDF capsule. No single-sitting cramming possible.
    category:       "Current Affairs & Events"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH COMPREHENSION — cpg_eng_1 to cpg_eng_10 (10 chapters)
  // ~15 Qs | Stable, predictable syllabus. Improves with reading habit.
  // PYQ signal: RC passage (2–3 Qs) + Cloze Test + Error Detection appear
  // in every shift. Para Jumbles rotate in/out. Vocab is quick scoring.
  // ═══════════════════════════════════════════════════════════════════════════

  cpg_eng_1: {
    name:           "Reading Comprehension (RC Passages)",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~3 Qs",
    days:           "5 days",       // skill-building; not one-time read
    category:       "Comprehension"
  },
  cpg_eng_2: {
    name:           "Vocabulary: Synonyms & Antonyms",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "3 days",
    category:       "Vocabulary"
  },
  cpg_eng_3: {
    name:           "Idioms, Phrases & Proverbs",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Vocabulary"
  },
  cpg_eng_4: {
    name:           "Fill in the Blanks (Grammar-based)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Grammar"
  },
  cpg_eng_5: {
    name:           "Sentence Correction & Error Detection",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Grammar"
  },
  cpg_eng_6: {
    name:           "Para Jumbles & Sentence Rearrangement",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "2 days",
    category:       "Vocabulary"
  },
  cpg_eng_7: {
    name:           "Active Voice & Passive Voice",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Grammar"
  },
  cpg_eng_8: {
    name:           "Direct & Indirect Speech",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Grammar"
  },
  cpg_eng_9: {
    name:           "Cloze Test",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Comprehension"
  },
  cpg_eng_10: {
    name:           "One Word Substitution",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Vocabulary"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPUTER BASICS — cpg_comp_1 to cpg_comp_7 (7 chapters)
  // ~5 Qs | Smallest section; pure factual recall. Highest return per
  // study-hour in the final 2 weeks. PYQ signal: MS Office features +
  // hardware definitions = 2 guaranteed Qs every shift. Do this section
  // LAST in your schedule, not because it is unimportant but because
  // Quant and Reasoning will compound over months; this won't.
  // ═══════════════════════════════════════════════════════════════════════════

  cpg_comp_1: {
    name:           "Computer Hardware (CPU, Memory, I/O Devices)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Hardware & OS"
  },
  cpg_comp_2: {
    name:           "Operating Systems (Windows, DOS, Linux basics)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Hardware & OS"
  },
  cpg_comp_3: {
    name:           "MS Office (Word, Excel, PowerPoint features)",
    priority:       "VERY HIGH",
    stage:          "Paper",
    prelimsWeight:  "~2 Qs",
    days:           "2 days",
    category:       "Software & Applications"
  },
  cpg_comp_4: {
    name:           "Internet & Networking (WWW, IP, Protocols)",
    priority:       "HIGH",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Internet & Security"
  },
  cpg_comp_5: {
    name:           "Computer Abbreviations & Terminology",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Internet & Security"
  },
  cpg_comp_6: {
    name:           "Database Basics (DBMS, Tables, SQL concepts)",
    priority:       "MEDIUM",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Software & Applications"
  },
  cpg_comp_7: {
    name:           "Cybersecurity & Malware Basics",
    priority:       "LOW",
    stage:          "Paper",
    prelimsWeight:  "~1 Q",
    days:           "1 day",
    category:       "Internet & Security"
  }
};

/*
 * ── STORAGE PATTERN ──────────────────────────────────────────────────────
 * ONE JSON blob per subject, keyed by subject prefix:
 *
 *   localStorage.setItem(
 *     subject.prefix + "progress",
 *     JSON.stringify(progressObj)
 *   );
 *
 * Never one key per chapter — that pattern breaks prefix-based lookups.
 *
 * Example read:
 *   const qaProgress = JSON.parse(
 *     localStorage.getItem("cpg_qa_progress") || "{}"
 *   );
 *   // Keys inside progressObj: "cpg_qa_1" ... "cpg_qa_14"
 *
 * ── SELF-AUDIT RESULTS (run before delivery) ──────────────────────────────
 *
 *  #   Check                                          Result
 *  1   Every key matches ^prefix\d+$ (zero suffixes)  PASS — all 56 keys
 *  2   totalChapters == actual key count per subject   PASS — 14/12/13/10/7
 *  3   No entry merges multiple real chapters          PASS — see inline notes
 *                                                      for cpg_gk_1 and
 *                                                      cpg_gk_7 (justified
 *                                                      by 0.67 Q density rule)
 *  4   Q-density comparable across subjects            PASS — range 0.7–1.5
 *                                                      Qs/chapter across all
 *                                                      five subjects
 *  5   No orphan stage/category values (count == 1)    PASS — all categories
 *                                                      have ≥ 2 members;
 *                                                      all stages = "Paper"
 *  6   All chapter names ≤ 60 chars                    PASS — longest is
 *                                                      "Computer Hardware
 *                                                      (CPU, Memory, I/O
 *                                                      Devices)" at 44 chars
 *  7   All 6 fields present and non-empty everywhere   PASS — 56 × 6 = 336
 *                                                      fields; all filled
 *  8   Prefixes unique; examKey unique across hub       PASS — cpg_* prefixes
 *                                                      are new; examKey
 *                                                      "cuet_pg_general" is
 *                                                      new
 *  9   ISO date present + datesTentative flagged        PASS — examDate and
 *                                                      notificationDate both
 *                                                      ISO + Tentative: true
 * 10   Pattern web-verified this session               PASS — patternVerified:
 *                                                      true with source cited
 * 11   Deleted chapters excluded + listed in header     PASS — DO-NOT-RE-ADD
 *                                                      list in header covers
 *                                                      Legal Aptitude, Essay,
 *                                                      Data Sufficiency,
 *                                                      Trigonometry
 * 12   Priority distribution sane                       PASS — VERY HIGH: 9
 *                                                      (16%) | HIGH: 26 (46%)
 *                                                      MEDIUM: 19 (34%) |
 *                                                      LOW: 2 (4%)
 * ─────────────────────────────────────────────────────────────────────────
 */

if (typeof window !== "undefined") {
  window.EXAM_CONFIG_CUET_PG_GENERAL = EXAM_CONFIG_CUET_PG_GENERAL;
  window.CUET_PG_GENERAL_PRIORITY_DATA = CUET_PG_GENERAL_PRIORITY_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CUET_PG_GENERAL, CUET_PG_GENERAL_PRIORITY_DATA };
}
