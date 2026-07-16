/*
 * ============================================================
 *  SSC CHSL (Combined Higher Secondary Level) — Exam Hub Module
 *  File: ssc_chsl_exam_data.js
 * ============================================================
 */

const EXAM_CONFIG_CHSL = {
  examKey: "ssc_chsl",
  examName: "SSC CHSL",
  fullName: "SSC Combined Higher Secondary Level (10+2) Examination",
  targetYear: 2026,
  eligibility: "12th pass; age 18–27 (post-wise)",
  posts: "LDC, JSA, DEO",
  examDate: "2026-07-01",
  datesTentative: true,

  examPattern: {
    stages: "Tier 1 (Shortlisting, 100 Qs / 200 Marks / 60 Min) → Tier 2 (Merit, Session I Objective + Session II Typing/Skill Test)",
    tier1: {
      totalQuestions: 100, totalMarks: 200, durationMinutes: 60,
      sections: [
        { name: "General Intelligence & Reasoning", questions: 25 },
        { name: "English Language", questions: 25 },
        { name: "Quantitative Aptitude", questions: 25 },
        { name: "General Awareness", questions: 25 }
      ],
      marking: "+2 correct; −0.50 wrong"
    },
    tier2: {
      session1: "Section 1 (Math 30Q + Reasoning 30Q) + Section 2 (English 40Q + GA 20Q) + Section 3 (Computer 15Q Qualifying)",
      session2: "Skill Test / Typing Test (Qualifying)",
      marking: "+3 correct; −1 wrong"
    },
    qualifyingMarks: "UR 30% · OBC/EWS 25% · SC/ST 20%",
    patternVerified: true
  },

  tier1WeightLabel: "Tier 1 Questions",

  subjects: [
    { key: "chsl_eng",      name: "English Language",        icon: "📝", color: "#8E44AD", examStage: "Tier 1 (25Q) + Tier 2 Sec 2", prefix: "chsl_eng_",    totalChapters: 11 },
    { key: "chsl_reason",   name: "Reasoning & Intelligence",icon: "🧠", color: "#2980B9", examStage: "Tier 1 (25Q) + Tier 2 Sec 1", prefix: "chsl_reason_", totalChapters: 12 },
    { key: "chsl_math",     name: "Quantitative Aptitude",   icon: "🔢", color: "#27AE60", examStage: "Tier 1 (25Q) + Tier 2 Sec 1", prefix: "chsl_math_",   totalChapters: 13 },
    { key: "chsl_ga",       name: "General Awareness",        icon: "🌍", color: "#E67E22", examStage: "Tier 1 (25Q) + Tier 2 Sec 2", prefix: "chsl_ga_",     totalChapters: 12 },
    { key: "chsl_computer", name: "Computer Knowledge",     icon: "💻", color: "#1ABC9C", examStage: "Tier 2 Sec 3 (Qualifying)",  prefix: "chsl_comp_",   totalChapters: 6 }
  ]
};

const CHSL_PRIORITY_DATA = {
  /* ---- ENGLISH LANGUAGE (chsl_eng_, 11) ----- */
  chsl_eng_1:  { name: "Reading Comprehension (RC Passages)",                 priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "5–7 questions", days: "7 days", category: "English Language" },
  chsl_eng_2:  { name: "Error Spotting & Sentence Correction",               priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "4 days", category: "English Language" },
  chsl_eng_3:  { name: "Fill in the Blanks (Grammar)",                        priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "3 days", category: "English Language" },
  chsl_eng_4:  { name: "Synonyms & Antonyms",                                priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "4 days", category: "English Language" },
  chsl_eng_5:  { name: "Idioms & Phrases",                                   priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "3 days", category: "English Language" },
  chsl_eng_6:  { name: "Parts of Speech — Tenses, Subject-Verb Agreement",   priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "4 days", category: "English Language" },
  chsl_eng_7:  { name: "One Word Substitution",                               priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "English Language" },
  chsl_eng_8:  { name: "Spelling Correction",                                 priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "English Language" },
  chsl_eng_9:  { name: "Sentence Rearrangement (Para-jumbles)",               priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "English Language" },
  chsl_eng_10: { name: "Cloze Test",                                          priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "English Language" },
  chsl_eng_11: { name: "Active / Passive Voice & Direct / Indirect Speech",  priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "English Language" },

  /* ---- REASONING & GENERAL INTELLIGENCE (chsl_reason_, 12) ----- */
  chsl_reason_1:  { name: "Analogy — Verbal, Symbolic, Figural",             priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "3 days", category: "Reasoning" },
  chsl_reason_2:  { name: "Series — Number, Alphabetical, Figural",          priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "3 days", category: "Reasoning" },
  chsl_reason_3:  { name: "Classification / Odd One Out",                    priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_4:  { name: "Coding & Decoding",                               priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "3 days", category: "Reasoning" },
  chsl_reason_5:  { name: "Matrix & Word Formation",                         priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_6:  { name: "Venn Diagrams",                                   priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_7:  { name: "Direction Sense & Distance",                      priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_8:  { name: "Blood Relations",                                 priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_9:  { name: "Syllogism",                                       priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_10: { name: "Seating Arrangement & Puzzle",                    priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "3 days", category: "Reasoning" },
  chsl_reason_11: { name: "Paper Folding, Cutting & Embedded Figures",       priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Reasoning" },
  chsl_reason_12: { name: "Space Orientation & Figural Completion",          priority: "LOW",       stage: "Tier 1 & Tier 2", prelimsWeight: "1 question",     days: "1 day",  category: "Reasoning" },

  /* ---- QUANTITATIVE APTITUDE (chsl_math_, 13) ----- */
  chsl_math_1:  { name: "Number System & HCF / LCM",                         priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "3 days", category: "Quantitative Aptitude" },
  chsl_math_2:  { name: "Percentage",                                        priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_3:  { name: "Ratio, Proportion & Partnership",                    priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_4:  { name: "Profit, Loss & Discount",                           priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_5:  { name: "Simple & Compound Interest",                        priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_6:  { name: "Time, Speed & Distance",                            priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_7:  { name: "Time & Work (Pipes & Cisterns)",                    priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_8:  { name: "Average, Mean & Weighted Average",                  priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_9:  { name: "Mixture & Alligation",                              priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "Quantitative Aptitude" },
  chsl_math_10: { name: "Geometry — Triangles, Circles, Angles",             priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "4 days", category: "Quantitative Aptitude" },
  chsl_math_11: { name: "Mensuration — 2D & 3D",                              priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "3 days", category: "Quantitative Aptitude" },
  chsl_math_12: { name: "Trigonometry & Height / Distance",                    priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "3 days", category: "Quantitative Aptitude" },
  chsl_math_13: { name: "Data Interpretation — Tables, Bar, Pie, Line Charts",priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "3–5 questions", days: "4 days", category: "Quantitative Aptitude" },

  /* ---- GENERAL AWARENESS (chsl_ga_, 12) ----- */
  chsl_ga_1:  { name: "Indian History (Ancient, Medieval, Modern)",          priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "6 days", category: "General Awareness" },
  chsl_ga_2:  { name: "Indian Polity & Constitution",                       priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "5 days", category: "General Awareness" },
  chsl_ga_3:  { name: "Indian & World Geography",                            priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "3–4 questions", days: "5 days", category: "General Awareness" },
  chsl_ga_4:  { name: "Current Affairs (Last 6 months)",                    priority: "VERY HIGH", stage: "Tier 1 & Tier 2", prelimsWeight: "4–5 questions", days: "Daily reading", category: "General Awareness" },
  chsl_ga_5:  { name: "General Science — Physics & Chemistry",               priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "4 days", category: "General Awareness" },
  chsl_ga_6:  { name: "General Science — Biology",                           priority: "HIGH",      stage: "Tier 1 & Tier 2", prelimsWeight: "2–3 questions", days: "3 days", category: "General Awareness" },
  chsl_ga_7:  { name: "Indian Economy — Budget, GDP, Schemes",              priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "3 days", category: "General Awareness" },
  chsl_ga_8:  { name: "Environment, Climate & Ecology",                     priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  chsl_ga_9:  { name: "Sports, Awards & Honours (National + International)", priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  chsl_ga_10: { name: "Art, Culture & Indian Heritage",                      priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  chsl_ga_11: { name: "International Bodies — UN, WTO, IMF, WHO",          priority: "MEDIUM",    stage: "Tier 1 & Tier 2", prelimsWeight: "1–2 questions", days: "2 days", category: "General Awareness" },
  chsl_ga_12: { name: "Static GK — Books, Capitals, Symbols, Inventions",    priority: "LOW",       stage: "Tier 1 & Tier 2", prelimsWeight: "1 question",     days: "2 days", category: "General Awareness" },

  /* ---- COMPUTER KNOWLEDGE (chsl_comp_, 6) ----- */
  chsl_comp_1: { name: "Computer Fundamentals & Operating Systems",          priority: "HIGH",      stage: "Tier 2 Section 3", prelimsWeight: "3–5 questions", days: "2 days", category: "Computer Knowledge" },
  chsl_comp_2: { name: "MS Office — Word, Excel, PowerPoint Basics",          priority: "HIGH",      stage: "Tier 2 Section 3", prelimsWeight: "4–6 questions", days: "2 days", category: "Computer Knowledge" },
  chsl_comp_3: { name: "Internet, Email & Networking Basics",                 priority: "MEDIUM",    stage: "Tier 2 Section 3", prelimsWeight: "2–3 questions", days: "1 day",  category: "Computer Knowledge" },
  chsl_comp_4: { name: "Memory, Storage & Hardware",                         priority: "MEDIUM",    stage: "Tier 2 Section 3", prelimsWeight: "2–3 questions", days: "1 day",  category: "Computer Knowledge" },
  chsl_comp_5: { name: "Cyber Security & Threats (Virus, Malware, Phishing)",priority: "MEDIUM",    stage: "Tier 2 Section 3", prelimsWeight: "1–2 questions", days: "1 day",  category: "Computer Knowledge" },
  chsl_comp_6: { name: "Keyboard Shortcuts & Database Basics",                priority: "LOW",       stage: "Tier 2 Section 3", prelimsWeight: "1–2 questions", days: "1 day",  category: "Computer Knowledge" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CHSL, CHSL_PRIORITY_DATA };
}
