/**
 * ============================================================
 * ARPIT'S EXAM HUB — IBPS PO MODULE DATA
 * File: ibps_po_exam_data.js | Version: 1.0 | Date: 15 Jul 2026
 * ============================================================
 * Exam: IBPS PO/MT — CRP PO/MT-XVI (2026 cycle, vacancies for 2027-28)
 * Pattern basis: the REVISED 2026 pattern from the 30 Jun 2026 notification.
 */

const EXAM_CONFIG_IBPS_PO = {
  examKey: "ibps_po",
  examName: "IBPS PO / MT (CRP PO/MT-XVI)",
  targetYear: 2026,
  notificationDate: "2026-06-30",
  applicationDeadline: "2026-07-21",
  prelimsDate: "2026-08-22",
  mainsDate: "2026-10-04",
  examPattern: {
    stages: ["Prelims (qualifying)", "Mains (Objective + Descriptive)", "Personality Test (mandatory, no marks in merit)", "Interview (100 marks)"],
    finalMerit: "Mains : Interview = 80 : 20 (Prelims marks not counted)",
    negativeMarking: "1/4th of the marks assigned to the question",
    prelims: {
      totalQuestions: 100, totalMarks: 100, durationMin: 60, sectionalTiming: true,
      sections: [
        { name: "English Language",      questions: 30, marks: 30, timeMin: 20 },
        { name: "Quantitative Aptitude", questions: 35, marks: 30, timeMin: 20 },
        { name: "Reasoning Ability",     questions: 35, marks: 40, timeMin: 20 }
      ]
    },
    mains: {
      objective: { totalQuestions: 170, totalMarks: 200, durationMin: 160, sectionalTiming: true,
        sections: ["Reasoning (60 marks)", "Data Analysis & Interpretation (60 marks)", "General/Economy/Banking, Digital & Financial Awareness incl. RBI Circulars (60 marks)", "English Language (20 marks)"]
      },
      descriptive: { marks: 25, durationMin: 30, format: "Essay + Comprehension (Letter Writing removed in 2026)" },
      totalMarks: 225
    }
  },
  subjects: [
    { key: "ibps_qnt",           name: "Quantitative Aptitude",                          icon: "🔢", color: "#B7791F", examStage: "Prelims + Mains", prefix: "ibps_qnt_", totalChapters: 16 },
    { key: "ibps_rea",           name: "Reasoning Ability",                              icon: "🧩", color: "#5F5AA2", examStage: "Prelims + Mains", prefix: "ibps_rea_", totalChapters: 15 },
    { key: "ibps_eng",           name: "English Language",                               icon: "📖", color: "#B04A2F", examStage: "Prelims + Mains", prefix: "ibps_eng_", totalChapters: 12 },
    { key: "ibps_dia", name: "Data Analysis & Interpretation",                 icon: "📊", color: "#2C7A9E", examStage: "Prelims + Mains", prefix: "ibps_dia_", totalChapters: 8 },
    { key: "ibps_gab",   name: "General, Economy & Banking Awareness (incl. Digital/Financial)", icon: "🏦", color: "#2B8A6E", examStage: "Mains Only", prefix: "ibps_gab_", totalChapters: 13 },
    { key: "ibps_dsc",         name: "Descriptive English (Essay + Comprehension)",    icon: "✍️", color: "#A64D9C", examStage: "Mains Only",      prefix: "ibps_dsc_", totalChapters: 4 }
  ]
};

const IBPS_PO_PRIORITY_DATA = {

  // 1. QUANTITATIVE APTITUDE (16)
  ibps_qnt_1:  { name: "Speed Math Toolkit — Tables to 30, Squares, Cubes, % ⇄ Fraction Conversions", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "Foundation for all Qs", days: "3 days + ongoing", category: "Speed Calculation" },
  ibps_qnt_2:  { name: "Simplification & Approximation",                       priority: "VERY HIGH", stage: "Prelims Only",    prelimsWeight: "5-10 Qs", days: "3 days", category: "Speed Calculation" },
  ibps_qnt_3:  { name: "Number Series — Missing & Wrong Term",                 priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",    days: "3 days", category: "Speed Calculation" },
  ibps_qnt_4:  { name: "Quadratic Equations & Quantity Comparison (Q1 vs Q2)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",    days: "2 days", category: "Algebra" },
  ibps_qnt_5:  { name: "Percentages",                                          priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs + base for arithmetic", days: "2 days", category: "Arithmetic" },
  ibps_qnt_6:  { name: "Ratio, Proportion & Partnership",                      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_7:  { name: "Averages & Problems on Ages",                          priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_8:  { name: "Profit, Loss & Discount",                              priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_9:  { name: "Simple & Compound Interest",                           priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_10: { name: "Time & Work + Pipes & Cisterns",                       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_11: { name: "Time, Speed & Distance (Trains, Boats & Streams)",     priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Arithmetic" },
  ibps_qnt_12: { name: "Mixtures & Alligation",                                priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "1 day",  category: "Arithmetic" },
  ibps_qnt_13: { name: "Mensuration (2D & 3D)",                                priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "0-1 Q",  days: "2 days", category: "Geometry" },
  ibps_qnt_14: { name: "Permutation, Combination & Probability",               priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Advanced" },
  ibps_qnt_15: { name: "Arithmetic Word-Problem Caselets (multi-concept)",     priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "2-3 Qs (rising trend)", days: "2 days", category: "Advanced" },
  ibps_qnt_16: { name: "Data Sufficiency (Quant)",                             priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "1 day", category: "Advanced" },

  // 2. REASONING ABILITY (15)
  ibps_rea_1:  { name: "Inequalities — Direct & Coded",                        priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "3-5 Qs", days: "2 days", category: "Core Logic" },
  ibps_rea_2:  { name: "Syllogisms (incl. 'Only a few' type)",                 priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "3-5 Qs", days: "2 days", category: "Core Logic" },
  ibps_rea_3:  { name: "Coding-Decoding (incl. Chinese/New Pattern)",          priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "3-5 Qs", days: "2 days", category: "Core Logic" },
  ibps_rea_4:  { name: "Blood Relations",                                      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "1 day",  category: "Core Logic" },
  ibps_rea_5:  { name: "Direction & Distance",                                 priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "1 day",  category: "Core Logic" },
  ibps_rea_6:  { name: "Order, Ranking & Alphanumeric Series",                 priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "3-5 Qs", days: "1 day",  category: "Core Logic" },
  ibps_rea_7:  { name: "Seating Arrangement — Linear (single & double row)",   priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",   days: "3 days", category: "Puzzles & Seating" },
  ibps_rea_8:  { name: "Seating Arrangement — Circular, Square & Mixed-facing", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",  days: "3 days", category: "Puzzles & Seating" },
  ibps_rea_9:  { name: "Puzzles — Floor & Box Based",                          priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",   days: "3 days", category: "Puzzles & Seating" },
  ibps_rea_10: { name: "Puzzles — Scheduling (Day / Month / Year)",            priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",   days: "3 days", category: "Puzzles & Seating" },
  ibps_rea_11: { name: "Puzzles — Category, Comparison & Uncertain-count",     priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs",   days: "3 days", category: "Puzzles & Seating" },
  ibps_rea_12: { name: "Input-Output (Machine) & Data Sufficiency",            priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Mains Level" },
  ibps_rea_13: { name: "Logical Reasoning — Statement-Assumption, Inference, Course of Action", priority: "HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Mains Level" },
  ibps_rea_14: { name: "Flowchart & Computer-Logic Questions",                 priority: "LOW",       stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Mains Level" },
  ibps_rea_15: { name: "Puzzle Stamina Drills — 4-puzzle sets under 20 min",   priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "Score decider", days: "Ongoing", category: "Puzzles & Seating" },

  // 3. ENGLISH LANGUAGE (12)
  ibps_eng_1:  { name: "Reading Comprehension (Economy/Banking-flavoured passages)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "8-10 Qs", days: "4 days + ongoing", category: "Comprehension" },
  ibps_eng_2:  { name: "Grammar Foundation — Tenses, SVA, Articles, Prepositions", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "Base for 10+ Qs", days: "4 days", category: "Grammar" },
  ibps_eng_3:  { name: "Error Spotting & Sentence Correction",                 priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "4-5 Qs", days: "3 days", category: "Grammar" },
  ibps_eng_4:  { name: "Cloze Test",                                           priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "5-6 Qs", days: "2 days", category: "Contextual Usage" },
  ibps_eng_5:  { name: "Para Jumbles & Sentence Rearrangement",                priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "4-5 Qs", days: "2 days", category: "Contextual Usage" },
  ibps_eng_6:  { name: "Fillers — Single & Double Blank",                      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "3-5 Qs", days: "2 days", category: "Contextual Usage" },
  ibps_eng_7:  { name: "Vocabulary — Synonyms, Antonyms, Idioms & Phrases",    priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "3-4 Qs", days: "2 days + ongoing", category: "Vocabulary" },
  ibps_eng_8:  { name: "Sentence Improvement & Word Swap/Usage",               priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "2 days", category: "Grammar" },
  ibps_eng_9:  { name: "Para Completion & Odd Sentence Out",                   priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "1 day",  category: "Contextual Usage" },
  ibps_eng_10: { name: "Connectors & Sentence Starters",                       priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "1 day",  category: "Contextual Usage" },
  ibps_eng_11: { name: "New-Pattern Sets — Match the Column, Inference-based", priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "1 day",  category: "New Pattern" },
  ibps_eng_12: { name: "Mains-Level RC & Vocab-in-Context",                       priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Mains Level" },

  // 4. DATA ANALYSIS & INTERPRETATION (8)
  ibps_dia_1:  { name: "Table-Based DI",                                       priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs (within Quant)", days: "2 days", category: "Standard Charts" },
  ibps_dia_2:  { name: "Bar & Line Graph DI",                                  priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "5 Qs (within Quant)", days: "2 days", category: "Standard Charts" },
  ibps_dia_3:  { name: "Pie Chart DI (single & double)",                       priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "5 Qs (within Quant)", days: "2 days", category: "Standard Charts" },
  ibps_dia_4:  { name: "Caselet DI (paragraph-based)",                         priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "3-5 Qs", days: "3 days", category: "Advanced DI" },
  ibps_dia_5:  { name: "Mixed & Double-Diagram DI",                            priority: "HIGH",      stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Advanced DI" },
  ibps_dia_6:  { name: "Uncommon Charts — Radar, Funnel, Scatter, Arrow",      priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Advanced DI" },
  ibps_dia_7:  { name: "Data Sufficiency & Quantity-Based DI (Mains)",         priority: "HIGH",      stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Advanced DI" },
  ibps_dia_8:  { name: "DI Calculation-Speed Drills — %, fractions, averages", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "Accuracy multiplier", days: "2 days + ongoing", category: "Speed" },

  // 5. GENERAL / ECONOMY / BANKING AWARENESS (13)
  ibps_gab_1:  { name: "Banking in India — History, Structure, Types of Banks", priority: "HIGH",     stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Banking Static" },
  ibps_gab_2:  { name: "RBI — Functions, Monetary Policy Tools (Repo, CRR, SLR, MPC)", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Banking Static" },
  ibps_gab_3:  { name: "Banking Acts & Regulation — RBI Act, BR Act, NI Act, SARFAESI", priority: "HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Banking Static" },
  ibps_gab_4:  { name: "Accounts, Deposits & Negotiable Instruments (Cheques, Bills)", priority: "HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Banking Static" },
  ibps_gab_5:  { name: "Loans, Priority Sector Lending, NPAs & Basel Norms",   priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Banking Static" },
  ibps_gab_6:  { name: "Payment Systems & Digital Banking — UPI, NEFT/RTGS, CBDC, Wallets", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Digital & Financial" },
  ibps_gab_7:  { name: "RBI Circulars & Regulatory Updates (Live Tracker)",    priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "Ongoing (weekly slot)", category: "Digital & Financial" },
  ibps_gab_8:  { name: "Financial Markets & Instruments — Money/Capital Markets, SEBI", priority: "HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Economy" },
  ibps_gab_9:  { name: "Insurance, NBFCs & Regulators — IRDAI, PFRDA, NABARD, SIDBI", priority: "MEDIUM", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Economy" },
  ibps_gab_10: { name: "Government Schemes — Financial Inclusion (PMJDY, MUDRA)", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days + ongoing", category: "Schemes" },
  ibps_gab_11: { name: "Union Budget & Economic Survey (Current Year)",        priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days", category: "Economy" },
  ibps_gab_12: { name: "Current Affairs — Banking, Economy & Financial (last 6 months)", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "Ongoing (daily 30 min)", category: "Current Affairs" },
  ibps_gab_13: { name: "Static GK — Capitals, Currencies, HQs, Important Days, Awards", priority: "MEDIUM", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days + ongoing", category: "Static GK" },

  // 6. DESCRIPTIVE ENGLISH (4)
  ibps_dsc_1:  { name: "Essay Writing — Banking, Economy & Fintech Themes",    priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "3 days + weekly practice", category: "Essay" },
  ibps_dsc_2:  { name: "Essay Writing — Social & Current-Affairs Themes",      priority: "HIGH",      stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days + weekly practice", category: "Essay" },
  ibps_dsc_3:  { name: "Comprehension-Based Descriptive Answers (2026 format)", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days + weekly practice", category: "Comprehension" },
  ibps_dsc_4:  { name: "Typing Speed & Answer Structuring Drills",             priority: "HIGH",      stage: "Mains Only", prelimsWeight: "— (Mains)", days: "Ongoing (15 min/day)", category: "Skill Building" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_IBPS_PO, IBPS_PO_PRIORITY_DATA };
}
