/*
 * ============================================================
 *  CMAT EXAM DATA MODULE — Arpit's Exam Hub
 *  File: cmat_exam_data.js
 *  Version: 1.1 | Updated: 2026-07-16
 * ============================================================
 *  TARGET CYCLE: CMAT 2027 (for MBA/PGDM admissions 2027-28)
 */

const EXAM_CONFIG_CMAT = {
  examKey: "cmat",
  examName: "CMAT — Common Management Admission Test",
  targetYear: 2027,
  examDate: "2027-01-24",
  datesTentative: true,
  notificationDate:  "2026-10-15",
  registrationOpen:  "2026-10-15",
  registrationClose: "2026-11-24",

  examPattern: {
    conductedBy: "National Testing Agency (NTA)",
    mode: "CBT — Computer-Based Test, English only",
    stages: 1,
    totalQuestions: 100,
    totalMarks: 400,
    marking: "+4 correct / −1 wrong / 0 unattempted",
    marksPerCorrect: 4,
    marksPerWrong: -1,
    marksUnattempted: 0,
    durationMinutes: 180,
    sectionalTimeLimit: false,
    sections: [
      { name: "Quantitative Techniques & Data Interpretation", questions: 20, marks: 80 },
      { name: "Logical Reasoning",                             questions: 20, marks: 80 },
      { name: "Language Comprehension",                        questions: 20, marks: 80 },
      { name: "General Awareness",                             questions: 20, marks: 80 },
      { name: "Innovation & Entrepreneurship",                 questions: 20, marks: 80 }
    ],
    patternVerified: true
  },

  subjects: [
    { key: "cmat_qt", name: "Quantitative Techniques & DI",    icon: "📐", color: "#3B82F6", examStage: "CMAT", prefix: "cmat_qt_", totalChapters: 14 },
    { key: "cmat_lr", name: "Logical Reasoning",                icon: "🧩", color: "#8B5CF6", examStage: "CMAT", prefix: "cmat_lr_", totalChapters: 13 },
    { key: "cmat_lc", name: "Language Comprehension",           icon: "📖", color: "#10B981", examStage: "CMAT", prefix: "cmat_lc_", totalChapters: 9 },
    { key: "cmat_ga", name: "General Awareness",                icon: "🌐", color: "#F59E0B", examStage: "CMAT", prefix: "cmat_ga_", totalChapters: 10 },
    { key: "cmat_ie", name: "Innovation & Entrepreneurship",    icon: "🚀", color: "#EF4444", examStage: "CMAT", prefix: "cmat_ie_", totalChapters: 12 }
  ]
};

const CMAT_PRIORITY_DATA = {

  // 1. QUANTITATIVE TECHNIQUES & DATA INTERPRETATION (cmat_qt_1 … 14)
  cmat_qt_1:  { name: "Percentages, Profit & Loss, Discount",          priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3–4 Qs", days: "4 days", category: "Arithmetic" },
  cmat_qt_2:  { name: "Ratio, Proportion & Mixtures",                 priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Arithmetic" },
  cmat_qt_3:  { name: "Time, Speed & Distance",                        priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Arithmetic" },
  cmat_qt_4:  { name: "Time & Work, Pipes & Cisterns",                 priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Arithmetic" },
  cmat_qt_5:  { name: "Simple Interest & Compound Interest",          priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Arithmetic" },
  cmat_qt_6:  { name: "Averages & Weighted Averages",                 priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Arithmetic" },
  cmat_qt_7:  { name: "Number System",                                 priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Arithmetic" },
  cmat_qt_8:  { name: "Linear & Quadratic Equations",                  priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Algebra" },
  cmat_qt_9:  { name: "Inequalities & Logarithms",                     priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "2 days", category: "Algebra" },
  cmat_qt_10: { name: "Geometry — Lines, Angles, Triangles",           priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Geometry" },
  cmat_qt_11: { name: "Mensuration — 2D & 3D Shapes",                  priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Geometry" },
  cmat_qt_12: { name: "Permutations, Combinations & Probability",     priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Modern Math" },
  cmat_qt_13: { name: "Set Theory & Venn Diagrams",                    priority: "LOW",       stage: "CMAT", prelimsWeight: "1 Q",    days: "2 days", category: "Modern Math" },
  cmat_qt_14: { name: "Data Interpretation — Tables, Charts, Graphs",  priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3–5 Qs", days: "4 days", category: "Modern Math" },

  // 2. LOGICAL REASONING (cmat_lr_1 … 13)
  cmat_lr_1:  { name: "Linear & Circular Arrangements",                priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3–4 Qs", days: "4 days", category: "Analytical Reasoning" },
  cmat_lr_2:  { name: "Puzzles & Complex Arrangements",               priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "4 days", category: "Analytical Reasoning" },
  cmat_lr_3:  { name: "Coding & Decoding",                             priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Analytical Reasoning" },
  cmat_lr_4:  { name: "Blood Relations & Family Trees",                priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Analytical Reasoning" },
  cmat_lr_5:  { name: "Directions & Distance",                         priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Analytical Reasoning" },
  cmat_lr_6:  { name: "Series — Number, Letter, Alpha-Numeric",         priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Analytical Reasoning" },
  cmat_lr_7:  { name: "Analogy & Classification",                      priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Analytical Reasoning" },
  cmat_lr_8:  { name: "Syllogisms & Venn Diagram Logic",               priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Verbal Reasoning" },
  cmat_lr_9:  { name: "Statement — Assumption & Conclusion",           priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Verbal Reasoning" },
  cmat_lr_10: { name: "Strong & Weak Arguments",                      priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "1 day",  category: "Verbal Reasoning" },
  cmat_lr_11: { name: "Cause & Effect, Course of Action",              priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "1 day",  category: "Verbal Reasoning" },
  cmat_lr_12: { name: "Visual Reasoning — Cubes, Figures, Counting",     priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Analytical Reasoning" },
  cmat_lr_13: { name: "Order & Ranking, Input-Output",                 priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Analytical Reasoning" },

  // 3. LANGUAGE COMPREHENSION (cmat_lc_1 … 9)
  cmat_lc_1:  { name: "Reading Comprehension — Passages",              priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "4–6 Qs", days: "Ongoing", ongoingTask: true, category: "Reading Comprehension" },
  cmat_lc_2:  { name: "Vocabulary — Synonyms, Antonyms, Usage",        priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3–4 Qs", days: "Ongoing", ongoingTask: true, category: "Vocabulary" },
  cmat_lc_3:  { name: "Idioms & Phrases",                              priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Vocabulary" },
  cmat_lc_4:  { name: "One-Word Substitution",                         priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Vocabulary" },
  cmat_lc_5:  { name: "Grammar — Tenses, Parts of Speech",             priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Grammar" },
  cmat_lc_6:  { name: "Sentence Correction & Error Spotting",          priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Grammar" },
  cmat_lc_7:  { name: "Para-Jumbles & Sentence Ordering",              priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Verbal Ability" },
  cmat_lc_8:  { name: "Fill in the Blanks — Grammar & Vocab",          priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Verbal Ability" },
  cmat_lc_9:  { name: "Inference & Tone from Passages",               priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Reading Comprehension" },

  // 4. GENERAL AWARENESS (cmat_ga_1 … 10)
  cmat_ga_1:  { name: "Indian History & Culture",                      priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "4 days", category: "Static GK" },
  cmat_ga_2:  { name: "Indian Polity & Constitution",                  priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "3 days", category: "Static GK" },
  cmat_ga_3:  { name: "Indian & World Geography",                      priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Static GK" },
  cmat_ga_4:  { name: "Economy & Financial Institutions",              priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Static GK" },
  cmat_ga_5:  { name: "Science & Technology — Key Concepts",           priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Static GK" },
  cmat_ga_6:  { name: "Awards, Honours & Personalities",               priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "Ongoing", ongoingTask: true, category: "Current Affairs" },
  cmat_ga_7:  { name: "Business, Management & Brands GK",              priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "2–3 Qs", days: "Ongoing", ongoingTask: true, category: "Business GK" },
  cmat_ga_8:  { name: "National & International Affairs",              priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "Ongoing", ongoingTask: true, category: "Current Affairs" },
  cmat_ga_9:  { name: "Sports — National & International Events",       priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "Ongoing", ongoingTask: true, category: "Current Affairs" },
  cmat_ga_10: { name: "Books, Authors & Government Schemes",           priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "3 days", category: "Static GK" },

  // 5. INNOVATION & ENTREPRENEURSHIP (cmat_ie_1 … 12)
  cmat_ie_1:  { name: "Entrepreneurship — Concepts, Types, Traits",    priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3–4 Qs", days: "4 days", category: "Entrepreneurship Fundamentals" },
  cmat_ie_2:  { name: "Startup Lifecycle & Business Models",          priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3 Qs",   days: "3 days", category: "Entrepreneurship Fundamentals" },
  cmat_ie_3:  { name: "Startup Funding — Angel, VC, Bootstrapping",   priority: "VERY HIGH", stage: "CMAT", prelimsWeight: "3 Qs",   days: "3 days", category: "Entrepreneurship Fundamentals" },
  cmat_ie_4:  { name: "Innovation — Types, Models, Disruptive Theory", priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Innovation Concepts" },
  cmat_ie_5:  { name: "Business Planning & Feasibility Analysis",      priority: "HIGH",      stage: "CMAT", prelimsWeight: "2 Qs",   days: "2 days", category: "Business Planning" },
  cmat_ie_6:  { name: "IPR — Patents, Trademarks, Copyrights",         priority: "HIGH",      stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Business Planning" },
  cmat_ie_7:  { name: "Government Schemes for Startups & MSMEs",        priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "3 days", category: "Business GK" },
  cmat_ie_8:  { name: "Design Thinking & Problem-Solving Frameworks",  priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Innovation Concepts" },
  cmat_ie_9:  { name: "Social & Women Entrepreneurship",              priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "2 days", category: "Entrepreneurship Fundamentals" },
  cmat_ie_10: { name: "Corporate Entrepreneurship & Intrapreneurship", priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1 Q",    days: "2 days", category: "Entrepreneurship Fundamentals" },
  cmat_ie_11: { name: "Market Research & Growth Strategies",          priority: "MEDIUM",    stage: "CMAT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Business Planning" },
  cmat_ie_12: { name: "Business GK — Startups, Brands, Leaders",       priority: "HIGH",      stage: "CMAT", prelimsWeight: "2–3 Qs", days: "Ongoing", ongoingTask: true, category: "Business GK" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CMAT, CMAT_PRIORITY_DATA };
}
