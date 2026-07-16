/*
 * ============================================================
 *  SSC MTS (Multi-Tasking Staff & Havaldar) — Exam Hub Module
 *  File: ssc_mts_exam_data.js
 * ============================================================
 */

const EXAM_CONFIG_MTS = {
  examKey: "ssc_mts",
  examName: "SSC MTS",
  fullName: "SSC Multi-Tasking (Non-Technical) Staff Examination",
  targetYear: 2026,
  eligibility: "10th pass; age 18–25 (MTS) / 18–27 (Havaldar)",
  examDate: "2026-09-01",
  datesTentative: true,

  examPattern: {
    stages: "Single Computer Based Examination (CBE) → PET/PST (Havaldar only)",
    cbe: {
      session1: "Numerical Ability (20Q / 60M) + Reasoning (20Q / 60M) | 45 Min | NO Negative Marking",
      session2: "General Awareness (25Q / 75M) + English (25Q / 75M) | 45 Min | −1 Mark per wrong",
      total: "90 Qs / 270 Marks / 90 Min"
    },
    pet: "Qualifying only for Havaldar: Male 1600m walk in 15 min; Female 1000m walk in 20 min",
    qualifyingMarks: "UR 30% · OBC/EWS 25% · SC/ST 20% (Session II)",
    patternVerified: true
  },

  sessionWeightLabel: "Questions in CBE",

  subjects: [
    { key: "mts_ga",     name: "General Awareness",           icon: "🌍", color: "#E67E22", examStage: "Session II (25Q)", prefix: "mts_ga_",     totalChapters: 12 },
    { key: "mts_eng",    name: "English Language",            icon: "📝", color: "#8E44AD", examStage: "Session II (25Q)", prefix: "mts_eng_",    totalChapters: 10 },
    { key: "mts_math",   name: "Numerical Ability",           icon: "🔢", color: "#27AE60", examStage: "Session I (20Q)",  prefix: "mts_math_",   totalChapters: 12 },
    { key: "mts_reason", name: "Reasoning & Problem Solving", icon: "🧠", color: "#2980B9", examStage: "Session I (20Q)",  prefix: "mts_reason_", totalChapters: 11 }
  ]
};

const MTS_PRIORITY_DATA = {
  /* ---- GENERAL AWARENESS (mts_ga_, 12) ----- */
  mts_ga_1:  { name: "Indian History (Ancient, Medieval, Modern)",          priority: "VERY HIGH", stage: "Session II", prelimsWeight: "3–4 questions", days: "5 days", category: "General Awareness" },
  mts_ga_2:  { name: "Indian Polity & Constitution",                       priority: "VERY HIGH", stage: "Session II", prelimsWeight: "3–4 questions", days: "4 days", category: "General Awareness" },
  mts_ga_3:  { name: "Geography of India & World",                         priority: "HIGH",      stage: "Session II", prelimsWeight: "3–4 questions", days: "4 days", category: "General Awareness" },
  mts_ga_4:  { name: "Current Affairs (National & International)",           priority: "VERY HIGH", stage: "Session II", prelimsWeight: "4–5 questions", days: "Daily reading", category: "General Awareness" },
  mts_ga_5:  { name: "General Science — Physics & Chemistry (10th CBSE)",  priority: "HIGH",      stage: "Session II", prelimsWeight: "2–3 questions", days: "3 days", category: "General Awareness" },
  mts_ga_6:  { name: "General Science — Biology (10th CBSE)",              priority: "HIGH",      stage: "Session II", prelimsWeight: "2–3 questions", days: "3 days", category: "General Awareness" },
  mts_ga_7:  { name: "Indian Economy & Schemes",                           priority: "MEDIUM",    stage: "Session II", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  mts_ga_8:  { name: "Art, Culture, Festivals & Dances of India",          priority: "MEDIUM",    stage: "Session II", prelimsWeight: "2–3 questions", days: "2 days", category: "General Awareness" },
  mts_ga_9:  { name: "Sports, Trophies & Famous Personalities",            priority: "MEDIUM",    stage: "Session II", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  mts_ga_10: { name: "Books, Authors, Awards & Honours",                    priority: "MEDIUM",    stage: "Session II", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  mts_ga_11: { name: "Environment & Ecology Basics",                       priority: "LOW",       stage: "Session II", prelimsWeight: "1 question",     days: "1 day",  category: "General Awareness" },
  mts_ga_12: { name: "Important Days, Dates & Organizations",              priority: "LOW",       stage: "Session II", prelimsWeight: "1 question",     days: "1 day",  category: "General Awareness" },

  /* ---- ENGLISH LANGUAGE (mts_eng_, 10) ----- */
  mts_eng_1:  { name: "Reading Comprehension Passages",                     priority: "VERY HIGH", stage: "Session II", prelimsWeight: "5 questions",   days: "5 days", category: "English Language" },
  mts_eng_2:  { name: "Spotting Errors in Sentences",                       priority: "VERY HIGH", stage: "Session II", prelimsWeight: "3–4 questions", days: "3 days", category: "English Language" },
  mts_eng_3:  { name: "Fill in the Blanks",                                 priority: "HIGH",      stage: "Session II", prelimsWeight: "3–4 questions", days: "2 days", category: "English Language" },
  mts_eng_4:  { name: "Synonyms & Antonyms",                                priority: "HIGH",      stage: "Session II", prelimsWeight: "3–4 questions", days: "3 days", category: "English Language" },
  mts_eng_5:  { name: "One Word Substitutions",                             priority: "HIGH",      stage: "Session II", prelimsWeight: "2–3 questions", days: "2 days", category: "English Language" },
  mts_eng_6:  { name: "Idioms & Phrases",                                   priority: "HIGH",      stage: "Session II", prelimsWeight: "2–3 questions", days: "2 days", category: "English Language" },
  mts_eng_7:  { name: "Spelling Correction",                                 priority: "MEDIUM",    stage: "Session II", prelimsWeight: "1–2 questions", days: "1 day",  category: "English Language" },
  mts_eng_8:  { name: "Cloze Test",                                          priority: "MEDIUM",    stage: "Session II", prelimsWeight: "2–3 questions", days: "2 days", category: "English Language" },
  mts_eng_9:  { name: "Sentence Improvement / Phrase Replacement",          priority: "MEDIUM",    stage: "Session II", prelimsWeight: "1–2 questions", days: "2 days", category: "English Language" },
  mts_eng_10: { name: "Basic Grammar Rules — Tenses, Prepositions",         priority: "MEDIUM",    stage: "Session II", prelimsWeight: "2–3 questions", days: "3 days", category: "English Language" },

  /* ---- NUMERICAL ABILITY (mts_math_, 12) ----- */
  mts_math_1:  { name: "Number System, LCM & HCF",                          priority: "HIGH",      stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_2:  { name: "BODMAS & Simplification",                           priority: "VERY HIGH", stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_3:  { name: "Decimals and Fractions",                            priority: "HIGH",      stage: "Session I", prelimsWeight: "1–2 questions", days: "1 day",  category: "Numerical Ability" },
  mts_math_4:  { name: "Percentage",                                        priority: "VERY HIGH", stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_5:  { name: "Ratio and Proportion",                              priority: "VERY HIGH", stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_6:  { name: "Profit and Loss & Discount",                        priority: "VERY HIGH", stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_7:  { name: "Simple & Compound Interest",                        priority: "HIGH",      stage: "Session I", prelimsWeight: "1–2 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_8:  { name: "Time and Distance (Speed, Train, Stream)",           priority: "HIGH",      stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_9:  { name: "Time and Work",                                     priority: "HIGH",      stage: "Session I", prelimsWeight: "1–2 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_10: { name: "Averages",                                          priority: "HIGH",      stage: "Session I", prelimsWeight: "1–2 questions", days: "1 day",  category: "Numerical Ability" },
  mts_math_11: { name: "Mensuration — Area & Perimeter (2D/3D)",            priority: "MEDIUM",    stage: "Session I", prelimsWeight: "1–2 questions", days: "2 days", category: "Numerical Ability" },
  mts_math_12: { name: "Lines & Angles Basics",                             priority: "LOW",       stage: "Session I", prelimsWeight: "1 question",     days: "1 day",  category: "Numerical Ability" },

  /* ---- REASONING & PROBLEM SOLVING (mts_reason_, 11) ----- */
  mts_reason_1:  { name: "Alpha-Numeric & Number Series",                    priority: "VERY HIGH", stage: "Session I", prelimsWeight: "3–4 questions", days: "2 days", category: "Reasoning" },
  mts_reason_2:  { name: "Coding and Decoding",                             priority: "VERY HIGH", stage: "Session I", prelimsWeight: "3–4 questions", days: "2 days", category: "Reasoning" },
  mts_reason_3:  { name: "Analogies",                                       priority: "HIGH",      stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Reasoning" },
  mts_reason_4:  { name: "Classification & Odd One Out",                    priority: "HIGH",      stage: "Session I", prelimsWeight: "2–3 questions", days: "1 day",  category: "Reasoning" },
  mts_reason_5:  { name: "Mathematical Operations",                         priority: "HIGH",      stage: "Session I", prelimsWeight: "2 questions",   days: "1 day",  category: "Reasoning" },
  mts_reason_6:  { name: "Direction & Distance",                            priority: "MEDIUM",    stage: "Session I", prelimsWeight: "1–2 questions", days: "1 day",  category: "Reasoning" },
  mts_reason_7:  { name: "Blood Relations",                                 priority: "MEDIUM",    stage: "Session I", prelimsWeight: "1–2 questions", days: "1 day",  category: "Reasoning" },
  mts_reason_8:  { name: "Syllogism Basics",                                priority: "MEDIUM",    stage: "Session I", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" },
  mts_reason_9:  { name: "Non-Verbal Reasoning (Paper folding, Mirror)",    priority: "MEDIUM",    stage: "Session I", prelimsWeight: "2–3 questions", days: "2 days", category: "Reasoning" },
  mts_reason_10: { name: "Matrix & Word Order",                             priority: "LOW",       stage: "Session I", prelimsWeight: "1 question",     days: "1 day",  category: "Reasoning" },
  mts_reason_11: { name: "Simple Seating Arrangement",                      priority: "MEDIUM",    stage: "Session I", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_MTS, MTS_PRIORITY_DATA };
}
