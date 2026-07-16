/* ============================================================================
 * cat_exam_data.js — CAT (Common Admission Test) module for Arpit's Exam Hub
 * ============================================================================
 * TARGET CYCLE: CAT 2026.
 */

const EXAM_CONFIG_CAT = {
  examKey: "cat_2026",
  examName: "CAT (Common Admission Test)",
  targetYear: 2026,
  examDate: "2026-11-29",
  datesTentative: true,
  notificationDate: "2026-07-26",
  registrationWindow: "2026-08-01 to 2026-09-20",

  examPattern: {
    stages: "Single stage: one 120-minute CBT.",
    totalQuestions: 68,
    totalMarks: 204,
    durationMinutes: 120,
    sectionalTimeMinutes: 40,
    sectionOrder: "Fixed: VARC → DILR → QA.",
    marking: "+3 per correct; −1 per wrong MCQ; NO negative marking on TITA",
    sections: [
      { name: "VARC", questions: 24, marks: 72 },
      { name: "DILR", questions: 22, marks: 66 },
      { name: "QA",   questions: 22, marks: 66 }
    ],
    mode: "CBT, English only, 3 slots in one day"
  },

  subjects: [
    { key: "qa",   name: "Quantitative Ability",                   icon: "🔢", color: "#E67E22", examStage: "CAT", prefix: "cat_qa_",   totalChapters: 25 },
    { key: "dilr", name: "Data Interpretation & Logical Reasoning", icon: "🧩", color: "#27AE60", examStage: "CAT", prefix: "cat_dilr_", totalChapters: 10 },
    { key: "varc", name: "Verbal Ability & Reading Comprehension",  icon: "📖", color: "#2E86C1", examStage: "CAT", prefix: "cat_varc_", totalChapters: 7 }
  ]
};

const CAT_PRIORITY_DATA = {

  // 1. QUANTITATIVE ABILITY (cat_qa_, 25)
  cat_qa_1:  { name: "Percentages", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Arithmetic" },
  cat_qa_2:  { name: "Ratio & Proportion", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Arithmetic" },
  cat_qa_3:  { name: "Profit, Loss & Discount", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Arithmetic" },
  cat_qa_4:  { name: "Averages", priority: "HIGH", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Arithmetic" },
  cat_qa_5:  { name: "Mixtures & Alligation", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Arithmetic" },
  cat_qa_6:  { name: "Time, Speed & Distance", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "4 days", category: "Arithmetic" },
  cat_qa_7:  { name: "Time & Work (incl. Pipes & Cisterns)", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Arithmetic" },
  cat_qa_8:  { name: "Simple & Compound Interest", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Arithmetic" },
  cat_qa_9:  { name: "Number Properties, Divisibility, HCF & LCM", priority: "MEDIUM", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Number System" },
  cat_qa_10: { name: "Remainders, Cyclicity & Base Systems", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "3 days", category: "Number System" },
  cat_qa_11: { name: "Linear Equations", priority: "HIGH", stage: "CAT", prelimsWeight: "1 Q", days: "2 days", category: "Algebra" },
  cat_qa_12: { name: "Quadratic Equations & Polynomials", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Algebra" },
  cat_qa_13: { name: "Inequalities & Modulus", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "3 days", category: "Algebra" },
  cat_qa_14: { name: "Functions & Graphs", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "4 days", category: "Algebra" },
  cat_qa_15: { name: "Logarithms, Surds & Indices", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Algebra" },
  cat_qa_16: { name: "Progressions & Series", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Algebra" },
  cat_qa_17: { name: "Lines, Angles & Triangles", priority: "HIGH", stage: "CAT", prelimsWeight: "1–2 Qs", days: "4 days", category: "Geometry & Mensuration" },
  cat_qa_18: { name: "Circles", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "3 days", category: "Geometry & Mensuration" },
  cat_qa_19: { name: "Quadrilaterals & Polygons", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Geometry & Mensuration" },
  cat_qa_20: { name: "Coordinate Geometry", priority: "LOW", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Geometry & Mensuration" },
  cat_qa_21: { name: "Mensuration (2D & 3D)", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "3 days", category: "Geometry & Mensuration" },
  cat_qa_22: { name: "Trigonometry", priority: "LOW", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Geometry & Mensuration" },
  cat_qa_23: { name: "Permutations & Combinations", priority: "MEDIUM", stage: "CAT", prelimsWeight: "1 Q", days: "4 days", category: "Modern Math" },
  cat_qa_24: { name: "Probability", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "3 days", category: "Modern Math" },
  cat_qa_25: { name: "Set Theory & Maxima-Minima of Sets", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 Qs", days: "2 days", category: "Modern Math" },

  // 2. DATA INTERPRETATION & LOGICAL REASONING (cat_dilr_, 10)
  cat_dilr_1:  { name: "Tables, Graphs & Charts (Core DI)", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "1–2 sets", days: "5 days", category: "Data Interpretation" },
  cat_dilr_2:  { name: "Caselets & Data-Heavy Word Sets", priority: "HIGH", stage: "CAT", prelimsWeight: "0–1 set", days: "3 days", category: "Data Interpretation" },
  cat_dilr_3:  { name: "Venn Diagrams & Set-Based DI", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 set", days: "3 days", category: "Data Interpretation" },
  cat_dilr_4:  { name: "Unconventional DI (Radar, Bubble, Mixed)", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 set", days: "3 days", category: "Data Interpretation" },
  cat_dilr_5:  { name: "Linear & Circular Arrangements", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "1 set", days: "4 days", category: "Logical Reasoning" },
  cat_dilr_6:  { name: "Grid Puzzles, Matching & Distribution", priority: "HIGH", stage: "CAT", prelimsWeight: "1 set", days: "4 days", category: "Logical Reasoning" },
  cat_dilr_7:  { name: "Games, Tournaments & Scoring", priority: "HIGH", stage: "CAT", prelimsWeight: "0–1 set", days: "4 days", category: "Logical Reasoning" },
  cat_dilr_8:  { name: "Routes, Networks & Optimization", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 set", days: "3 days", category: "Logical Reasoning" },
  cat_dilr_9:  { name: "Scheduling & Selection Constraints", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–1 set", days: "3 days", category: "Logical Reasoning" },
  cat_dilr_10: { name: "Binary Logic & Truth-Teller Sets", priority: "LOW", stage: "CAT", prelimsWeight: "0–1 set", days: "2 days", category: "Logical Reasoning" },

  // 3. VERBAL ABILITY & READING COMPREHENSION (cat_varc_, 7)
  cat_varc_1: { name: "RC — Reading Skills, Speed & Active Reading", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "~16 Qs (shared)", days: "7 days", category: "Reading Comprehension" },
  cat_varc_2: { name: "RC — Question Types & Option Elimination", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "~16 Qs (shared)", days: "5 days", category: "Reading Comprehension" },
  cat_varc_3: { name: "RC — Genre Familiarity (Philosophy, Science, Eco)", priority: "VERY HIGH", stage: "CAT", prelimsWeight: "~16 Qs (shared)", days: "10 days", category: "Reading Comprehension" },
  cat_varc_4: { name: "Para Jumbles (TITA)", priority: "HIGH", stage: "CAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Verbal Ability" },
  cat_varc_5: { name: "Para Summary", priority: "HIGH", stage: "CAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Verbal Ability" },
  cat_varc_6: { name: "Odd Sentence Out (TITA)", priority: "MEDIUM", stage: "CAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Verbal Ability" },
  cat_varc_7: { name: "Para Completion & Sentence Placement", priority: "MEDIUM", stage: "CAT", prelimsWeight: "0–2 Qs", days: "2 days", category: "Verbal Ability" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CAT, CAT_PRIORITY_DATA };
}
