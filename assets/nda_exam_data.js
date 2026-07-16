/*
 * ============================================================
 *  NDA EXAM DATA MODULE — Arpit's Exam Hub
 *  File: nda_exam_data.js
 *  Version: 1.0 | Created: 2026-07-16
 * ============================================================
 *
 *  TARGET CYCLE: NDA 2 2026 (Written exam: 13 September 2026)
 *  Why NDA 2 2026: NDA 1 2026 was conducted on 12 April 2026.
 *  Results are expected May 2026. That cycle is fully closed.
 *  NDA 2 2026 notification was released 20 May 2026; registration
 *  closed 11 June 2026 (extended from 9 June). Exam: 13 Sep 2026.
 *  This is the LIVE cycle. A student starting prep today targets it.
 *  NDA 1 2027 notification is expected December 2026.
 *
 * ============================================================
 *  PATTERN (verified from UPSC NDA 2 2026 official notification +
 *  Testbook, Careers360, NCA Academy, Prepp, Oswaal 2026 sources)
 * ============================================================
 *  Mode         : Offline — Pen & Paper (PBT)
 *                 Bilingual Hindi + English (except English section)
 *  Papers       : 2 (Mathematics + General Ability Test)
 *  Total marks  : 900 written | 900 SSB | 1800 grand total
 *
 *  Paper I — Mathematics:
 *    Questions : 120 MCQs
 *    Marks     : 300 (2.5 marks per correct answer)
 *    Negative  : −0.83 per wrong answer (= −1/3 of 2.5)
 *    Duration  : 2.5 hours (10:00 AM – 12:30 PM)
 *
 *  Paper II — General Ability Test (GAT):
 *    Questions : 150 MCQs
 *    Marks     : 600 (4 marks per correct answer)
 *    Negative  : −1.33 per wrong answer (= −1/3 of 4)
 *    Duration  : 2.5 hours (2:00 PM – 4:30 PM)
 *    Sub-parts : Part A English (200 marks, 50 Qs)
 *                Part B General Knowledge (400 marks, 100 Qs)
 *
 *  Sectional cut-off: 25% minimum in Mathematics (≥75 marks)
 *  SSB Interview    : 900 marks — excluded from this module
 *
 *  NDA vs CDS KEY DIFFERENCE: NDA is for Class 12 pass candidates
 *  (age 16.5–19.5); CDS is for graduates (age 19–25). NDA Maths
 *  is Class 11–12 level including Calculus, Vectors, Matrices —
 *  UNLIKE CDS Maths which is Class 10 only. Do not conflate.
 *
 *  PATTERN STABLE SINCE: No changes reported in 2022–2026.
 *  No changes expected for NDA 2 2026.
 *
 * ============================================================
 *  SYLLABUS BASIS
 * ============================================================
 *  UPSC publishes a broad topic list in the official notification.
 *  Chapter-level granularity is inferred from:
 *    (a) UPSC NDA 2 2026 official notification PDF (upsc.gov.in)
 *    (b) Alpha NDA Academy chapter-wise weightage analysis 2026
 *    (c) Testbook/Careers360/NCA Academy 5-year PYQ analysis
 *    (d) NCERT Class 11–12 (Maths) and Class 9–12 (GAT GK)
 *
 *  DO-NOT-RE-ADD LIST:
 *  - Calculus is IN the NDA Maths syllabus (Diff + Integral both).
 *    Do not remove it thinking "it's only Class 10" — NDA goes to
 *    Class 12. CDS does NOT have Calculus; NDA does. Never swap.
 *  - There is NO third paper. NDA has exactly 2 papers: Maths + GAT.
 *  - There is NO essay or descriptive section in the written exam.
 *  - There is NO online/CBT mode — NDA is pen-and-paper only.
 *  - "Naval Academy Course" (INAC) is a separate intake through the
 *    same exam — same papers, same pattern. Do not add a third card.
 *  - The English sub-section of GAT is NOT a standalone paper; it is
 *    Part A of the GAT paper. Do not create a separate subject card
 *    for English — it lives as chapters inside the GAT subject card.
 *  - NDA is NOT only for boys since April 2022 (Supreme Court order).
 *    Do not add any male-only eligibility note in comments.
 *  - No sectional timer between English and GK within the GAT paper;
 *    the full 2.5 hours is for the whole GAT paper.
 *
 * ============================================================
 *  HONESTY NOTES
 * ============================================================
 *  1. DUAL-CYCLE DESIGN: NDA runs twice a year (Apr + Sep). This
 *     module targets NDA 2 2026 (Sep 13, 2026) as the live cycle.
 *     A student who misses it sits NDA 1 2027 (~Apr 2027). Syllabus
 *     and pattern are identical across cycles. Only dates change.
 *     examDate = NDA 2 2026 date; datesTentative = false (confirmed).
 *
 *  2. GAT INTERNAL SPLIT (VERIFIED): GAT = 150 Qs / 600 marks.
 *     Part A English: 50 Qs / 200 marks.
 *     Part B GK: 100 Qs / 400 marks.
 *     Source: official notification + Testbook/Prepp 2026. The split
 *     is confirmed from multiple 2026 sources. Documented in
 *     examPattern.papersDetail. There is NO separate timer between
 *     Part A and Part B within the single 2.5-hour GAT paper.
 *
 *  3. MATHS TOPIC WEIGHTAGE (OPINION/ESTIMATE): UPSC does not publish
 *     chapter-level weightage for Maths. Figures in prelimsWeight
 *     are derived from Alpha NDA Academy + Testbook PYQ analysis
 *     (2020–2025 papers). Algebra ~22–28 Qs; Trig ~18–25 Qs;
 *     Calculus (Diff+Int combined) ~24–32 Qs; Geometry ~10–13 Qs;
 *     Matrices ~9–12 Qs; Vectors ~5–8 Qs; Stats/Prob ~8–12 Qs.
 *     Re-tune after student's own mock-test analysis.
 *
 *  4. GK TOPIC WEIGHTAGE (OPINION/ESTIMATE): Physics consistently
 *     highest (~25–30 Qs from GK 100 total). Verified from
 *     Testbook/NCA multi-year analyses. History/Geography/Science
 *     each ~10–20 Qs. Current Affairs ~10–15 Qs. These fluctuate.
 *
 *  5. FIELD REPURPOSING: NDA has no prelims/mains split. The field
 *     `prelimsWeight` = estimated question count from that chapter
 *     cluster per paper. Documented in examPattern.fieldNote.
 *
 *  6. DAYS ESTIMATES: Assume Class 12 student (~5 hrs/day study).
 *     NDA Maths is harder than CDS Maths — Calculus and Vectors
 *     require weeks of concept-building, not just formula drills.
 *     Days quoted = first-pass concept learning only. Speed and
 *     accuracy come from PYQ drilling afterward.
 *
 *  7. SSB INTERVIEW: Completely excluded from this tracker module.
 *     SSB is a 5-day personality/psychology assessment — not
 *     chapter-based. A separate module or external resource is
 *     appropriate. SSB carries 900 marks (equal to written).
 *
 * ============================================================
 *  CHANGELOG
 * ============================================================
 *  v1.0 — 2026-07-16 — Initial module. Targeting NDA 2 2026
 *          (Sep 13). Verified from UPSC official notification
 *          (upsc.gov.in), Testbook, Careers360, Prepp, NCA Academy,
 *          Alpha NDA Academy, Oswaal 2026.
 */

const EXAM_CONFIG_NDA = {
  examKey: "nda",                           // unique across the hub
  examName: "NDA — National Defence Academy & Naval Academy Exam",
  targetYear: 2026,

  // NDA 2 2026 exam date CONFIRMED by UPSC official calendar.
  examDate: "2026-09-13",
  datesTentative: false,

  // NDA 2 2026 — confirmed dates from official UPSC notification.
  notificationDate:  "2026-05-20",
  registrationOpen:  "2026-05-20",
  registrationClose: "2026-06-11",          // extended from Jun 9 to Jun 11

  examPattern: {
    conductedBy: "Union Public Service Commission (UPSC)",
    mode: "Offline — Pen & Paper (PBT), Bilingual except English section",
    stages: 2,                              // Stage 1: Written | Stage 2: SSB
    writtenStageOnly: true,                 // this module covers Stage 1 only
    totalMarksWritten: 900,
    totalMarksSSB:     900,
    totalMarksGrand:   1800,
    marking: "+2.5 correct (Maths) / −0.83 wrong (Maths) / +4 correct (GAT) / −1.33 wrong (GAT) / 0 unattempted",
    marksPerCorrectMaths: 2.5,
    marksPerWrongMaths:  -0.83,
    marksPerCorrectGAT:  4.0,
    marksPerWrongGAT:   -1.33,
    marksUnattempted:    0,
    sectionalCutoff: "25% minimum in Mathematics (≥75 marks); UPSC does not publish exact cut-off for GAT",
    durationMinutes: 150,                  // per paper; 2 papers = 5 hours total on exam day
    sectionalTimeLimit: true,              // each paper has its own 2.5-hour window
    patternVerified: true,
    patternStableFrom: "No changes in 2022–2026",
    papersDetail: [
      {
        name:         "Mathematics",
        paper:        "Paper I",
        questions:    120,
        marks:        300,
        marksPerQ:    2.5,
        negativePerQ: -0.83,
        duration:     "10:00 AM – 12:30 PM",
        level:        "Class 11–12 (includes Calculus, Vectors, Matrices)"
      },
      {
        name:         "General Ability Test (GAT)",
        paper:        "Paper II",
        questions:    150,
        marks:        600,
        marksPerQ:    4.0,
        negativePerQ: -1.33,
        duration:     "2:00 PM – 4:30 PM",
        subParts: [
          { name: "Part A — English",          questions: 50,  marks: 200 },
          { name: "Part B — General Knowledge", questions: 100, marks: 400 }
        ],
        note: "No internal timer between Part A and Part B; 2.5 hrs for the full paper"
      }
    ],
    ssbInterview: {
      marks: 900,
      days:  5,
      note:  "Excluded from this tracker — not chapter-based preparation"
    },
    fieldNote: "prelimsWeight = estimated question count from that topic cluster " +
               "in the relevant paper (120-Q Maths or 150-Q GAT). " +
               "NDA has no prelims/mains split; single written stage."
  },

  subjects: [
    {
      // GAT first: 600 marks vs Maths 300. Higher per-question penalty (−1.33 vs −0.83).
      // GK prep is slow-burn — start early. English habit compounds daily.
      // Both sub-parts live under one subject card (Part A + Part B of same paper).
      key:           "nda_gat",
      name:          "General Ability Test (GAT)",
      icon:          "🌍",
      color:         "#F59E0B",    // amber — GAT is the biggest section
      examStage:     "NDA",
      prefix:        "nda_gat_",
      totalChapters: 14
    },
    {
      // Maths second: 300 marks, Class 11–12 level — needs longest runway.
      // Placed second so student starts GAT habits first, then builds Maths in parallel.
      key:           "nda_ma",
      name:          "Mathematics",
      icon:          "📐",
      color:         "#3B82F6",    // blue
      examStage:     "NDA",
      prefix:        "nda_ma_",
      totalChapters: 9
    }
  ]
};


// ============================================================
//  GENERAL ABILITY TEST — GAT (nda_gat_1 … nda_gat_14)
//  150 Qs | 600 marks | 4 marks/Q | −1.33 per wrong
//  Part A: English  50 Qs / 200 marks (chapters nda_gat_1 to 5)
//  Part B: GK      100 Qs / 400 marks (chapters nda_gat_6 to 14)
//  ── Part B breakdown (5-year estimate) ──
//  Physics ~25–30 Qs | Chemistry ~15–20 Qs | History ~15–20 Qs
//  Geography ~15–20 Qs | General Science/Bio ~8–12 Qs
//  Current Affairs ~10–15 Qs | Misc/Defence ~3–5 Qs
// ============================================================
const NDA_PRIORITY_DATA = {

  // ── PART A: ENGLISH (nda_gat_1 to nda_gat_5) ──

  nda_gat_1: {
    name:           "Grammar — Tenses, Parts of Speech, Syntax",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "12–18 Qs",
    days:           "5 days",
    category:       "English — Grammar"
  },
  nda_gat_2: {
    name:           "Vocabulary — Synonyms, Antonyms, Usage",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–15 Qs",
    days:           "Ongoing",
    ongoingTask:    true,         // 15–20 words/day habit; no fixed completion date
    category:       "English — Vocabulary"
  },
  nda_gat_3: {
    name:           "Reading Comprehension — Passages & Inference",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–15 Qs",
    days:           "Ongoing",
    ongoingTask:    true,         // daily passage practice; compounds over time
    category:       "English — Grammar"  // RC grouped with Grammar — NDA RC heavily tests grammar rules and sentence structure; same WREN & MARTIN prep source
  },
  nda_gat_4: {
    name:           "Idioms, Phrases & One-Word Substitution",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "6–10 Qs",
    days:           "4 days",
    category:       "English — Vocabulary"
  },
  nda_gat_5: {
    name:           "Spotting Errors & Sentence Correction",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "6–10 Qs",
    days:           "4 days",
    category:       "English — Grammar"
  },

  // ── PART B: GENERAL KNOWLEDGE (nda_gat_6 to nda_gat_14) ──

  nda_gat_6: {
    name:           "Physics — Mechanics, Heat, Light, Electricity",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "25–30 Qs",
    days:           "8 days",
    category:       "GK — Science"
  },
  nda_gat_7: {
    name:           "Chemistry — Elements, Reactions, Materials",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "15–20 Qs",
    days:           "6 days",
    category:       "GK — Science"
  },
  nda_gat_8: {
    name:           "General Science — Biology & Human Body",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "8–12 Qs",
    days:           "5 days",
    category:       "GK — Science"
  },
  nda_gat_9: {
    name:           "Modern Indian History & Freedom Struggle",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–15 Qs",
    days:           "6 days",
    category:       "GK — History"
  },
  nda_gat_10: {
    name:           "Ancient, Medieval History & World History",
    priority:       "MEDIUM",
    stage:          "NDA",
    prelimsWeight:  "5–8 Qs",
    days:           "4 days",
    category:       "GK — History"
  },
  nda_gat_11: {
    name:           "Indian & World Geography",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "15–20 Qs",
    days:           "6 days",
    category:       "GK — Geography"
  },
  nda_gat_12: {
    name:           "Indian Polity, Economy & Constitution",
    priority:       "MEDIUM",
    stage:          "NDA",
    prelimsWeight:  "6–10 Qs",
    days:           "4 days",
    category:       "GK — History"   // Polity grouped with History — both NCERT Cls 9-12 static prep
  },
  nda_gat_13: {
    name:           "Current Affairs — National, International, Defence",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–15 Qs",
    days:           "Ongoing",
    ongoingTask:    true,         // daily newspaper + monthly defence digest; no fixed end date
    category:       "GK — Current Affairs"
  },
  nda_gat_14: {
    name:           "Environment, Technology & General Awareness",
    priority:       "LOW",
    stage:          "NDA",
    prelimsWeight:  "3–6 Qs",
    days:           "3 days",
    category:       "GK — Science"  // Environment grouped with Science — same NCERT sources, similar prep
  },


  // ============================================================
  //  MATHEMATICS (nda_ma_1 … nda_ma_9)
  //  120 Qs | 300 marks | 2.5 marks/Q | −0.83 per wrong
  //  Class 11–12 level — includes Calculus, Vectors, Matrices
  //  Algebra + Trig dominate (~50% of paper)
  //  Sectional cut-off: must score ≥75 marks (25%)
  // ============================================================

  nda_ma_1: {
    name:           "Algebra — Sets, Complex Numbers, Sequences",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "22–28 Qs",
    days:           "10 days",
    category:       "Maths — Algebra"
  },
  nda_ma_2: {
    name:           "Matrices & Determinants",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "9–12 Qs",
    days:           "5 days",
    category:       "Maths — Algebra"   // Matrices grouped with Algebra — algebraic operations; same NCERT chapter cluster
  },
  nda_ma_3: {
    name:           "Trigonometry — Identities, Equations, Heights",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "18–25 Qs",
    days:           "8 days",
    category:       "Maths — Trigonometry"
  },
  nda_ma_4: {
    name:           "Analytical Geometry 2D — Lines, Circles, Conics",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–13 Qs",
    days:           "6 days",
    category:       "Maths — Geometry"
  },
  nda_ma_5: {
    name:           "Analytical Geometry 3D — Lines, Planes, Sphere",
    priority:       "MEDIUM",
    stage:          "NDA",
    prelimsWeight:  "5–8 Qs",
    days:           "5 days",
    category:       "Maths — Geometry"
  },
  nda_ma_6: {
    name:           "Differential Calculus — Limits, Derivatives, Maxima",
    priority:       "VERY HIGH",
    stage:          "NDA",
    prelimsWeight:  "14–18 Qs",
    days:           "8 days",
    category:       "Maths — Calculus"
  },
  nda_ma_7: {
    name:           "Integral Calculus & Differential Equations",
    priority:       "HIGH",
    stage:          "NDA",
    prelimsWeight:  "10–14 Qs",
    days:           "7 days",
    category:       "Maths — Calculus"
  },
  nda_ma_8: {
    name:           "Vector Algebra",
    priority:       "MEDIUM",
    stage:          "NDA",
    prelimsWeight:  "5–8 Qs",
    days:           "4 days",
    category:       "Maths — Trigonometry"  // Vectors grouped with Trigonometry — dot/cross products use trig identities; studied in same sprint
  },
  nda_ma_9: {
    name:           "Statistics & Probability",
    priority:       "MEDIUM",
    stage:          "NDA",
    prelimsWeight:  "8–12 Qs",
    days:           "5 days",
    category:       "Maths — Statistics"
  }

};

/*
 * ============================================================
 *  STORAGE PATTERN
 * ============================================================
 *  ONE JSON blob per subject (never one key per chapter):
 *
 *  EXAM_CONFIG_NDA.subjects.forEach(subject => {
 *    const progressKey = subject.prefix + "progress";
 *    const progressObj = buildProgressObject(subject);
 *    localStorage.setItem(progressKey, JSON.stringify(progressObj));
 *  });
 *
 *  Keys:
 *    "nda_gat_progress" → GAT (14 chapters: 5 English + 9 GK)
 *    "nda_ma_progress"  → Mathematics  (9 chapters)
 *
 *  Note: GAT English and GAT GK chapters are stored in the same
 *  blob under nda_gat_progress. The renderer can group by category
 *  prefix ("English —" vs "GK —") for display if needed.
 * ============================================================
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_NDA, NDA_PRIORITY_DATA };
}
