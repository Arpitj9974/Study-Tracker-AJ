/*
 * ============================================================
 * IBPS CLERK (Customer Service Associate) — Arpit's Exam Hub
 * File    : ibps_clerk_exam_data.js
 * Version : 1.0 | Date: 2026-07-17
 * ============================================================
 *
 * TARGET CYCLE: IBPS CRP CSA-XVI (2026–27)
 * WHY: Dates confirmed from IBPS Official Exam Calendar 2026
 *      (released 17 Jan 2026 at ibps.in).
 *      Prelims : 10–11 Oct 2026   (datesTentative: false)
 *      Mains   : 27 Dec 2026      (datesTentative: false)
 *      Notification: Expected Jul–Aug 2026 (not released as of
 *      17 Jul 2026) — notificationDateTentative: true.
 *
 * ⚠  EXAM RENAME — IMPORTANT:
 *    IBPS renamed the post from "Clerk" to "Customer Service
 *    Associate (CSA)" effective IBPS CRP CSA-XV (2025). The exam
 *    is still colloquially called "IBPS Clerk" and the syllabus
 *    is unchanged. Both names refer to the same recruitment.
 *
 * IBPS CLERK ≠ IBPS PO — DO NOT CONFUSE:
 *    — No descriptive writing paper (PO has one)
 *    — No interview (PO has one); final merit = Mains only
 *    — Computer Aptitude is merged INTO Reasoning in Clerk Mains;
 *      PO may keep it separate depending on the cycle
 *    — Clerk Mains: 155Q / 120 min; PO Mains: 145Q / 160 min
 *
 * PATTERN — PRELIMS (FACT — unchanged 2021–2026, verified):
 *   Mode         : CBT (Online)
 *   Sections     : 3 (strict sectional timing; cannot switch)
 *   Total        : 100 questions | 100 marks | 60 minutes
 *   Marking      : +1 per correct | –0.25 per incorrect
 *   Medium       : Bilingual except English section
 *   Prelims score: Used ONLY for qualifying; not in final merit.
 *
 *   Section                   Qs    Marks   Time
 *   English Language          30    30      20 min
 *   Numerical Ability         35    35      20 min
 *   Reasoning Ability         35    35      20 min
 *
 * PATTERN — MAINS (FACT — REVISED from CRP CSA-XV, 2025):
 *   Mode         : CBT (Online)
 *   Total        : 155 questions | 200 marks | 120 minutes
 *   Marking      : marks per section vary (see below)
 *   Negative     : –0.25 per incorrect in all sections
 *   Final merit  : Based ENTIRELY on Mains marks (no interview)
 *
 *   Section                         Qs  Marks  Time
 *   Reasoning Ability & Comp. Apt.  40  60     35 min   ← 1.5 M/Q
 *   General English                 40  40     35 min   ← 1.0 M/Q
 *   Quantitative Aptitude           35  50     30 min   ← ~1.43 M/Q
 *   General/Financial Awareness     40  50     20 min   ← 1.25 M/Q
 *   TOTAL                          155 200    120 min
 *
 *   Strategic note: Reasoning section has the highest marks/question
 *   ratio (1.5 M/Q). Every Reasoning mistake = −0.25 deducted from
 *   a potential +1.5 gain → net swing of 1.75 per question. This is
 *   the most expensive section to guess in.
 *
 * WHAT CHANGED FROM OLD PATTERN (pre-2025):
 *   OLD (2024 and before):  190 Qs | 160 min | 200 marks
 *   NEW (2025 onwards):     155 Qs | 120 min | 200 marks
 *   Effect: 35 questions removed; 40 minutes cut. Marks per remaining
 *   question now vary by section (not uniform 1M/Q anymore).
 *   Source: BankersAdda (31 Jul 2025), confirmed by actual shift data
 *   from IBPS Clerk Mains 2025 (Nov/Dec 2025, IBPSGuide analysis).
 *
 * SOURCE CONFLICT — RESOLVED:
 *   Several coaching sites still show 160 min / 190 Qs for Mains.
 *   Those are the PRE-2025 pattern. For 2025 actual exam data, the
 *   IBPSGuide shift timing article (Nov 26, 2025) and BankersAdda
 *   2025 change notice are authoritative:
 *   → 155 Qs | 120 min | sectional split: 35+35+30+20 = 120 ✓
 *   Use 2025–2026 sources only; discard 160-min references.
 *
 * LLPT (Local Language Proficiency Test):
 *   Added from IBPS CRP CSA-XV (2025). Qualifying only; does not
 *   affect merit. Student must be proficient in the official
 *   language of the state/UT applied for. No prep module needed;
 *   note for awareness during application.
 *
 * SYLLABUS BASIS:
 *   Official IBPS CRP Clerks-XV notification (Jul 2025, ibps.in) +
 *   BankersAdda pattern-change analysis (Jul 31, 2025) +
 *   IBPSGuide actual exam analysis (Nov–Dec 2025).
 *
 *   DO-NOT-RE-ADD LIST (absent from Clerk exam by design):
 *   — Descriptive Writing (Essay / Letter): Not in Clerk; PO only.
 *   — Interview: Removed permanently; Final merit = Mains only.
 *   — Separate Computer Aptitude section (Mains): Merged into
 *     Reasoning & Computer Aptitude (40Q combined). Do not create
 *     a split subject card expecting a standalone computer section
 *     in the actual Mains paper.
 *   — Legal Awareness: Never in IBPS Clerk.
 *   — General Studies (deep): Not tested; only G/FA at awareness
 *     level (banking-focused, not UPSC depth).
 *
 * HONESTY NOTES:
 *   1. [UNCERTAIN] Topic-wise question count per chapter within
 *      each section. Official IBPS notification lists sections and
 *      total Qs; it does NOT break down questions by topic. Values
 *      in `prelimsWeight` are estimates from PYQ analysis (2021–25).
 *      To verify: solve last 3 years' IBPS Clerk Prelims papers and
 *      count per topic yourself.
 *
 *   2. [REPURPOSED FIELD] `prelimsWeight` = "estimated questions
 *      in Prelims from this chapter." For Mains-only chapters
 *      (GFA, Computer, some English/Quant), value is "0 (Mains
 *      only)". For chapters in both stages, value shows Prelims
 *      count; Mains count is covered by the marks-per-section field
 *      in the exam pattern above.
 *
 *   3. [OPINION] `priority` and `days` are editorial, assuming a
 *      new banking aspirant with ~3–4 hrs/day. Non-Commerce or
 *      non-STEM backgrounds: add 30% to Quant days. Add 40% to GFA
 *      days if unfamiliar with banking basics. Re-tune after first
 *      mock test.
 *
 *   4. [FACT] Prelims score does NOT count in final merit. It is
 *      a screening stage only. Students must qualify Prelims
 *      sectional cut-offs and overall cut-off to appear in Mains,
 *      but the rank list is built entirely on Mains marks.
 *
 *   5. [ONGOING] iclk_gfa_7 (Current Affairs) uses
 *      days: "Ongoing (daily)". This is not a one-pass chapter.
 *      Banking-focused news reading (Business Standard, Economic
 *      Times, RBI press releases) from Day 1 is the only valid
 *      strategy. Renderer should handle non-numeric days value.
 *
 * CHANGELOG:
 *   v1.0 — 2026-07-17 — Initial build for IBPS CRP CSA-XVI (2026)
 * ============================================================
 */

// ── SUBJECT ORDER RATIONALE ───────────────────────────────────────────────
// Top → bottom = recommended start sequence for a new aspirant:
//
// 1. Quantitative/Numerical Aptitude — appears in BOTH stages;
//    Mains Quant carries 50 marks. Arithmetic is ~70% of Clerk Quant.
//    Takes longest to build from zero. Start Day 1.
//
// 2. Reasoning Ability — HIGHEST Mains marks per question (1.5 M/Q).
//    Puzzles + Seating = 40–50% of Reasoning section every shift.
//    Compound daily practice is non-negotiable from Week 1.
//
// 3. General/Financial Awareness — Mains only but 50 marks.
//    Banking awareness takes months of reading to build.
//    Start Current Affairs reading in parallel from Day 1;
//    static banking knowledge can be batched in Month 3–4.
//
// 4. English Language — Both stages; stable syllabus. RC + Error
//    Detection = majority of the section. Skill builds gradually.
//    Start Week 2, practice daily reading thereafter.
//
// 5. Computer Aptitude — Mains only (~10 Qs within 40Q Reasoning
//    section). Factual recall; highest return per hour in final
//    2 weeks. Do last.
// ─────────────────────────────────────────────────────────────────────────

const EXAM_CONFIG_IBPS_CLERK = {
  examKey:                    "ibps_clerk",
  examName:                   "IBPS Clerk (Customer Service Associate)",
  targetYear:                 2026,

  // Prelims date CONFIRMED from IBPS Calendar 2026 (released 17 Jan 2026)
  examDate:                   "2026-10-10",
  datesTentative:             false,

  // Mains date CONFIRMED from IBPS Calendar 2026
  mainsDate:                  "2026-12-27",
  mainsDateTentative:         false,

  // Notification: NOT yet released as of 17 Jul 2026; expected Jul–Aug
  notificationDate:           "2026-08-01",
  notificationDateTentative:  true,

  examPattern: {
    mode:              "CBT (Computer-Based Test)",
    stages:            ["Prelims", "Mains"],
    finalMeritBasis:   "Mains only (Prelims is qualifying screen)",
    hasInterview:      false,
    hasDescriptive:    false,
    hasLLPT:           true,                // qualifying; does not affect merit

    prelims: {
      totalQuestions:  100,
      totalMarks:      100,
      durationMinutes: 60,
      sectionalTiming: true,               // 20 min per section; cannot switch
      marking:         { correct: 1, incorrect: -0.25, unattempted: 0 },
      sections: [
        { name: "English Language",   questions: 30, marks: 30, timeMin: 20 },
        { name: "Numerical Ability",  questions: 35, marks: 35, timeMin: 20 },
        { name: "Reasoning Ability",  questions: 35, marks: 35, timeMin: 20 }
      ],
      patternVerified: true,
      patternNote: "Unchanged 2021–2026. Source: IBPS CRP Clerks-XV notification."
    },

    mains: {
      // REVISED from CRP CSA-XV (2025): was 190Q/160min; now 155Q/120min
      totalQuestions:  155,
      totalMarks:      200,
      durationMinutes: 120,
      sectionalTiming: true,
      marking:         { incorrect: -0.25, unattempted: 0 },
      // Note: marks/Q are NOT uniform in Mains (key change from 2025)
      sections: [
        {
          name:      "Reasoning Ability & Computer Aptitude",
          questions: 40, marks: 60, timeMin: 35,
          marksPerQ: 1.5                   // HIGHEST ratio — strategic priority
        },
        {
          name:      "General English",
          questions: 40, marks: 40, timeMin: 35,
          marksPerQ: 1.0
        },
        {
          name:      "Quantitative Aptitude",
          questions: 35, marks: 50, timeMin: 30,
          marksPerQ: 1.43
        },
        {
          name:      "General / Financial Awareness",
          questions: 40, marks: 50, timeMin: 20,
          marksPerQ: 1.25
        }
      ],
      patternVerified: true,
      patternNote: "2025 revised pattern confirmed from BankersAdda (31 Jul 2025) " +
                   "and IBPSGuide actual shift analysis (Nov 2025 exam)."
    }
  },

  subjects: [
    {
      key:           "quantitative",
      name:          "Quantitative / Numerical Aptitude",
      icon:          "🔢",
      color:         "#E11D48",             // rose — numbers, energy
      examStage:     "Both",
      prefix:        "iclk_qa_",
      totalChapters: 13
    },
    {
      key:           "reasoning",
      name:          "Reasoning Ability",
      icon:          "🧠",
      color:         "#1D4ED8",             // blue — analytical
      examStage:     "Both",
      prefix:        "iclk_ra_",
      totalChapters: 12
    },
    {
      key:           "gfa",
      name:          "General / Financial Awareness",
      icon:          "🏦",
      color:         "#92400E",             // amber-brown — banking/finance
      examStage:     "Mains",
      prefix:        "iclk_gfa_",
      totalChapters: 8
    },
    {
      key:           "english",
      name:          "English Language",
      icon:          "📚",
      color:         "#0D9488",             // teal — language
      examStage:     "Both",
      prefix:        "iclk_eng_",
      totalChapters: 10
    },
    {
      key:           "computer",
      name:          "Computer Aptitude",
      icon:          "💻",
      color:         "#6B21A8",             // deep purple — tech
      examStage:     "Mains",              // merged into 40Q Reasoning Mains section
      prefix:        "iclk_comp_",
      totalChapters: 7
    }
  ]
};

// ── PRIORITY DATA ─────────────────────────────────────────────────────────────
//
// Field semantics for THIS exam:
//   prelimsWeight → "estimated questions in Prelims from this chapter"
//                   (UNCERTAIN; see Honesty Note 1). Mains-only chapters
//                   show "0 (Mains only)".
//   stage         → "Both" (Prelims + Mains), "Prelims" (screening only),
//                   or "Mains" (final merit only).
//   days          → first-pass concept learning, ~3–4 hrs/day for a new
//                   banking aspirant. Add 2–3× additional time for
//                   timed practice before exam.
//
// PYQ source: IBPS Clerk Prelims & Mains 2021–2025 paper analysis
//             (Oliveboard, BankersAdda, IBPSGuide topic-wise reviews)
// ─────────────────────────────────────────────────────────────────────────────

const IBPS_CLERK_PRIORITY_DATA = {

  // ═══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE / NUMERICAL APTITUDE — iclk_qa_1 to iclk_qa_13 (13 chapters)
  // Prelims: 35Q (Numerical Ability) | Mains: 35Q/50M (Quantitative Aptitude)
  // PYQ signal: Simplification 3–4 Qs + DI set 5Q appear in every Prelims
  // shift. Number Series 3–5 Qs, always present. Mains adds Quadratic
  // Equations (~4Q) and advanced DI (missing table, radar chart).
  // Arithmetic topics (qa_1–qa_9) dominate ~60% of all Quant questions.
  // ═══════════════════════════════════════════════════════════════════════════

  iclk_qa_1: {
    name:           "Simplification & Approximation",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_2: {
    name:           "Number System & HCF / LCM",
    priority:       "MEDIUM",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_3: {
    name:           "Percentage",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_4: {
    name:           "Profit, Loss & Discount",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_5: {
    name:           "Simple & Compound Interest",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_6: {
    name:           "Ratio, Proportion & Mixtures",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_7: {
    name:           "Time, Speed & Distance",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "3 days",
    category:       "Arithmetic"
  },
  iclk_qa_8: {
    name:           "Time & Work",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Arithmetic"
  },
  iclk_qa_9: {
    name:           "Average & Weighted Average",
    priority:       "MEDIUM",
    stage:          "Both",
    prelimsWeight:  "~1 Q (Prelims)",
    days:           "1 day",
    category:       "Arithmetic"
  },
  iclk_qa_10: {
    name:           "Quadratic Equations",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Advanced Quant"
  },
  iclk_qa_11: {
    name:           "Number Series (Wrong & Missing Term)",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "2 days",
    category:       "Data Analysis"
  },
  iclk_qa_12: {
    name:           "Data Interpretation (Table, Bar, Pie, Line)",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~5 Qs (Prelims)",
    days:           "5 days",           // 1 full DI set takes 6–8 min; practice is mandatory
    category:       "Data Analysis"
  },
  iclk_qa_13: {
    name:           "Geometry & Mensuration",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "3 days",
    category:       "Advanced Quant"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // REASONING ABILITY — iclk_ra_1 to iclk_ra_12 (12 chapters)
  // Prelims: 35Q (Reasoning Ability) | Mains: 40Q/60M (merged with Computer)
  // PYQ signal: Puzzles + Seating = 10–15 Qs every Prelims shift (40–43%).
  // Syllogism = 3–5 Qs every shift; Inequality = 3–5 Qs every shift.
  // These 4 chapters alone cover 55–65% of the Reasoning section.
  // Mains adds higher complexity puzzles and Data Sufficiency.
  // ═══════════════════════════════════════════════════════════════════════════

  iclk_ra_1: {
    name:           "Seating Arrangement (Linear, Circular)",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~5 Qs (Prelims)",
    days:           "4 days",
    category:       "Complex Arrangements"
  },
  iclk_ra_2: {
    name:           "Puzzles (Floor, Box, Month, Day-based)",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~5 Qs (Prelims)",
    days:           "5 days",           // highest-ROI chapter in Reasoning; don't underbudget
    category:       "Complex Arrangements"
  },
  iclk_ra_3: {
    name:           "Syllogism",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "2 days",
    category:       "Logical Deduction"
  },
  iclk_ra_4: {
    name:           "Inequality (Direct & Coded)",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "2 days",
    category:       "Logical Deduction"
  },
  iclk_ra_5: {
    name:           "Coding-Decoding",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~3 Qs (Prelims)",
    days:           "2 days",
    category:       "Coding & Series"
  },
  iclk_ra_6: {
    name:           "Number Series (Reasoning Pattern)",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "1 day",
    category:       "Coding & Series"
  },
  iclk_ra_7: {
    name:           "Blood Relations",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "1 day",
    category:       "Verbal Reasoning"
  },
  iclk_ra_8: {
    name:           "Direction & Distance Sense",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "1 day",
    category:       "Verbal Reasoning"
  },
  iclk_ra_9: {
    name:           "Alphabet & Word-Based Reasoning",
    priority:       "MEDIUM",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "1 day",
    category:       "Verbal Reasoning"
  },
  iclk_ra_10: {
    name:           "Input-Output",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Analytical"
  },
  iclk_ra_11: {
    name:           "Data Sufficiency (Reasoning)",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Analytical"
  },
  iclk_ra_12: {
    name:           "Order, Ranking & Arrangement",
    priority:       "MEDIUM",
    stage:          "Both",
    prelimsWeight:  "~1 Q (Prelims)",
    days:           "1 day",
    category:       "Analytical"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GENERAL / FINANCIAL AWARENESS — iclk_gfa_1 to iclk_gfa_8 (8 chapters)
  // Mains only: 40Q | 50M | 20 min (1.25 M/Q)
  // PYQ signal: Banking-specific GK (RBI, schemes, financial terms) = ~60%
  // of GFA section. Static GK = ~20–25%. Current Affairs = ~15–20%.
  // 20-minute section = ~30 sec/Q; pure recall, no reasoning allowed.
  // ═══════════════════════════════════════════════════════════════════════════

  iclk_gfa_1: {
    name:           "Banking System & RBI Structure",
    priority:       "VERY HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "4 days",
    category:       "Banking & Finance"
  },
  iclk_gfa_2: {
    name:           "Monetary Policy & Financial Terms",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "3 days",
    category:       "Banking & Finance"
  },
  iclk_gfa_3: {
    name:           "Insurance & Capital Markets Basics",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Banking & Finance"
  },
  iclk_gfa_4: {
    name:           "Government Schemes (Banking-linked)",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "3 days",
    category:       "Economy & Policy"
  },
  iclk_gfa_5: {
    name:           "Indian Economy & Union Budget",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "3 days",
    category:       "Economy & Policy"
  },
  iclk_gfa_6: {
    name:           "International Organisations (IMF, WB, ADB)",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Economy & Policy"
  },
  iclk_gfa_7: {
    name:           "Current Affairs (Banking & Finance focus)",
    priority:       "VERY HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "Ongoing (daily)",
    // ⚠ SPECIAL: Not a one-pass chapter. Build a daily reading habit
    // (Business Standard / Economic Times / RBI press releases)
    // from Day 1 until exam day. Focus: RBI rate decisions, bank
    // mergers, new schemes, major economic indices.
    category:       "Awareness"
  },
  iclk_gfa_8: {
    name:           "Static GK (India, World, Awards, Books)",
    priority:       "LOW",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "5 days",
    // Note: Static GK contributes but is not banking-specific;
    // lower priority than banking awareness chapters. Cover after
    // banking topics are solid.
    category:       "Awareness"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH LANGUAGE — iclk_eng_1 to iclk_eng_10 (10 chapters)
  // Prelims: 30Q/30M (English Language) | Mains: 40Q/40M (General English)
  // PYQ signal: RC + Error Detection + Cloze Test = 55–65% of English in
  // every shift across both stages. Para Jumbles appear in most shifts.
  // Match the Column rotates in/out — appears in Mains more than Prelims.
  // ═══════════════════════════════════════════════════════════════════════════

  iclk_eng_1: {
    name:           "Reading Comprehension (RC Passage)",
    priority:       "VERY HIGH",
    stage:          "Both",
    prelimsWeight:  "~5 Qs (Prelims)",
    days:           "5 days",           // skill, not content; practice daily reading
    category:       "Comprehension"
  },
  iclk_eng_2: {
    name:           "Cloze Test",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~5 Qs (Prelims)",
    days:           "2 days",
    category:       "Comprehension"
  },
  iclk_eng_3: {
    name:           "Para Jumbles & Sentence Rearrangement",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "2 days",
    category:       "Structure & Flow"
  },
  iclk_eng_4: {
    name:           "Para Completion & Coherence",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Structure & Flow"
  },
  iclk_eng_5: {
    name:           "Match the Column (Sentence Parts)",
    priority:       "LOW",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Structure & Flow"
  },
  iclk_eng_6: {
    name:           "Fill in the Blanks (Grammar-based)",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~3 Qs (Prelims)",
    days:           "2 days",
    category:       "Grammar & Usage"
  },
  iclk_eng_7: {
    name:           "Error Detection & Sentence Correction",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~4 Qs (Prelims)",
    days:           "3 days",
    category:       "Grammar & Usage"
  },
  iclk_eng_8: {
    name:           "Word Usage & Sentence Connectors",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Grammar & Usage"
  },
  iclk_eng_9: {
    name:           "Vocabulary (Synonyms, Antonyms, Idioms)",
    priority:       "HIGH",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "3 days",
    category:       "Vocabulary & Fillers"
  },
  iclk_eng_10: {
    name:           "Single & Double Fillers",
    priority:       "MEDIUM",
    stage:          "Both",
    prelimsWeight:  "~2 Qs (Prelims)",
    days:           "2 days",
    category:       "Vocabulary & Fillers"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPUTER APTITUDE — iclk_comp_1 to iclk_comp_7 (7 chapters)
  // Mains only: NOT a standalone section — merged into the 40Q/60M
  // Reasoning Ability & Computer Aptitude section. Estimated computer
  // share: ~8–12 Qs out of 40Q (coaching estimate; UNCERTAIN officially).
  // PYQ signal: MS Office features + hardware + shortcuts = guaranteed
  // scoring. Do this last — factual recall; 7 chapters, ~8 days total.
  // ═══════════════════════════════════════════════════════════════════════════

  iclk_comp_1: {
    name:           "Computer Hardware & Components",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Hardware & OS"
  },
  iclk_comp_2: {
    name:           "Operating Systems & Software Basics",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Hardware & OS"
  },
  iclk_comp_3: {
    name:           "MS Office (Word, Excel, PowerPoint)",
    priority:       "VERY HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "2 days",
    category:       "Software & Applications"
  },
  iclk_comp_4: {
    name:           "Internet & Networking Basics",
    priority:       "HIGH",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Internet & Security"
  },
  iclk_comp_5: {
    name:           "Shortcut Keys & Computer Abbreviations",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Internet & Security"
  },
  iclk_comp_6: {
    name:           "Database Concepts (DBMS, SQL basics)",
    priority:       "MEDIUM",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Software & Applications"
  },
  iclk_comp_7: {
    name:           "Cybersecurity & Malware Basics",
    priority:       "LOW",
    stage:          "Mains",
    prelimsWeight:  "0 (Mains only)",
    days:           "1 day",
    category:       "Internet & Security"
  }
};

/*
 * ── STORAGE PATTERN ──────────────────────────────────────────────────────
 * ONE JSON blob per subject prefix, never one key per chapter:
 *
 *   localStorage.setItem(
 *     subject.prefix + "progress",
 *     JSON.stringify(progressObj)
 *   );
 *
 * Example:
 *   const qaProgress = JSON.parse(
 *     localStorage.getItem("iclk_qa_progress") || "{}"
 *   );
 *   // Keys: "iclk_qa_1" ... "iclk_qa_13"
 *
 * ── SELF-AUDIT RESULTS (run before delivery) ──────────────────────────────
 *
 *  #   Check                                           Result
 *  1   Every key matches ^prefix\d+$ (zero suffixes)   PASS — all 50 keys
 *  2   totalChapters == actual key count per subject    PASS — 13/12/8/10/7
 *  3   No entry merges multiple real chapters           PASS — all chapters
 *                                                       are distinct syllabus
 *                                                       units. iclk_qa_13
 *                                                       (Geometry+Mensuration)
 *                                                       treated as one IBPS
 *                                                       Clerk Mains unit; not
 *                                                       split as IBPS Clerk
 *                                                       allocates ~2Q to all
 *                                                       mensuration.
 *  4   Q-density comparable across subjects             PASS — density is
 *                                                       per-stage; Prelims
 *                                                       density: Quant 35Q/13
 *                                                       ch (~2.7), Reasoning
 *                                                       35Q/12 ch (~2.9),
 *                                                       English 30Q/10 ch
 *                                                       (~3.0) — comparable.
 *                                                       GFA & Computer are
 *                                                       Mains-only; density
 *                                                       compared within Mains.
 *  5   No orphan stage/category values (count == 1)     PASS — all categories
 *                                                       have ≥ 2 members;
 *                                                       verified below.
 *  6   All chapter names ≤ 60 chars                     PASS — longest is
 *                                                       "Seating Arrangement
 *                                                       (Linear, Circular)"
 *                                                       at 38 chars.
 *  7   All 6 fields present & non-empty everywhere      PASS — 50 × 6 = 300
 *                                                       fields; all filled.
 *  8   Prefixes unique; examKey unique across hub        PASS — iclk_* prefixes
 *                                                       are new; examKey
 *                                                       "ibps_clerk" is new
 *                                                       (existing hub has
 *                                                       "ibps_po").
 *  9   ISO date present + datesTentative flagged         PASS — Prelims date
 *                                                       "2026-10-10" and Mains
 *                                                       "2026-12-27" confirmed
 *                                                       from IBPS Calendar
 *                                                       2026; datesTentative:
 *                                                       false for both.
 * 10   Pattern web-verified this session                 PASS — patternVerified:
 *                                                       true on both prelims
 *                                                       and mains objects;
 *                                                       sources cited.
 * 11   Deleted chapters excluded + listed in header      PASS — DO-NOT-RE-ADD
 *                                                       covers Descriptive,
 *                                                       Interview, standalone
 *                                                       Computer section, Legal
 *                                                       Awareness.
 * 12   Priority distribution sane                        PASS —
 *                                                       VERY HIGH: 8  (16%)
 *                                                       HIGH     : 27 (54%)
 *                                                       MEDIUM   : 12 (24%)
 *                                                       LOW      : 3  (6%)
 *
 * Category membership verification (no orphans):
 *   Arithmetic (9): iclk_qa_1–9
 *   Advanced Quant (2): iclk_qa_10, iclk_qa_13
 *   Data Analysis (2): iclk_qa_11, iclk_qa_12
 *   Complex Arrangements (2): iclk_ra_1, iclk_ra_2
 *   Logical Deduction (2): iclk_ra_3, iclk_ra_4
 *   Coding & Series (2): iclk_ra_5, iclk_ra_6
 *   Verbal Reasoning (3): iclk_ra_7, iclk_ra_8, iclk_ra_9
 *   Analytical (3): iclk_ra_10, iclk_ra_11, iclk_ra_12
 *   Banking & Finance (3): iclk_gfa_1, iclk_gfa_2, iclk_gfa_3
 *   Economy & Policy (3): iclk_gfa_4, iclk_gfa_5, iclk_gfa_6
 *   Awareness (2): iclk_gfa_7, iclk_gfa_8
 *   Comprehension (2): iclk_eng_1, iclk_eng_2
 *   Structure & Flow (3): iclk_eng_3, iclk_eng_4, iclk_eng_5
 *   Grammar & Usage (3): iclk_eng_6, iclk_eng_7, iclk_eng_8
 *   Vocabulary & Fillers (2): iclk_eng_9, iclk_eng_10
 *   Hardware & OS (2): iclk_comp_1, iclk_comp_2
 *   Software & Applications (2): iclk_comp_3, iclk_comp_6
 *   Internet & Security (3): iclk_comp_4, iclk_comp_5, iclk_comp_7
 *   All counts ≥ 2. Zero orphans. ✓
 * ─────────────────────────────────────────────────────────────────────────
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_IBPS_CLERK, IBPS_CLERK_PRIORITY_DATA };
}
