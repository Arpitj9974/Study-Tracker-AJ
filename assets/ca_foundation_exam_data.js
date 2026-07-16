/* ============================================================================
 * ca_foundation_exam_data.js — CA Foundation module for Arpit's Exam Hub
 * ============================================================================
 */

const EXAM_CONFIG_CA_FOUNDATION = {
  examKey: "ca_foundation_2026",
  examName: "CA Foundation (ICAI)",
  targetYear: 2026,
  examDate: "2026-09-02",
  datesTentative: false,
  datesVerified: true,
  allExamDates: ["2026-09-02", "2026-09-05", "2026-09-07", "2026-09-09"],
  formWindowOpen: "2026-07-06",
  formDeadlineNoLateFee: "2026-07-19",
  formDeadlineWithLateFee: "2026-07-22",
  correctionWindow: "2026-07-23 to 2026-07-25",

  examPattern: {
    stages: "Single level, single sitting. No groups — all 4 papers together.",
    totalPapers: 4,
    totalMarks: 400,
    papers: [
      { no: 1, name: "Accounting", marks: 100, type: "Subjective", durationHours: 3, negativeMarking: "None" },
      { no: 2, name: "Business Laws", marks: 100, type: "Subjective", durationHours: 3, negativeMarking: "None" },
      { no: 3, name: "Quantitative Aptitude", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "0.25 per wrong answer" },
      { no: 4, name: "Business Economics", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "0.25 per wrong answer" }
    ],
    marking: "+1 per correct MCQ; −0.25 per wrong MCQ (Papers 3 & 4 only). Papers 1 & 2 descriptive.",
    passing: "40% in each paper AND 50% aggregate (200/400).",
    mode: "Offline, centre-based. English or Hindi medium.",
    frequency: "Thrice a year — January, May/June, September.",
    patternVerified: true
  },

  subjects: [
    { key: "acc",  name: "Accounting (Paper 1)",            icon: "📒", color: "#C0392B", examStage: "Foundation — Paper 1 (Subjective)", prefix: "cafnd_acc_",  totalChapters: 15 },
    { key: "law",  name: "Business Laws (Paper 2)",         icon: "⚖️", color: "#16A085", examStage: "Foundation — Paper 2 (Subjective)", prefix: "cafnd_law_",  totalChapters: 15 },
    { key: "qa",   name: "Quantitative Aptitude (Paper 3)", icon: "🔢", color: "#8E44AD", examStage: "Foundation — Paper 3 (Objective)",  prefix: "cafnd_qa_",   totalChapters: 19 },
    { key: "eco",  name: "Business Economics (Paper 4)",    icon: "📈", color: "#D68910", examStage: "Foundation — Paper 4 (Objective)",  prefix: "cafnd_eco_",  totalChapters: 10 }
  ]
};

const CA_FOUNDATION_PRIORITY_DATA = {
  // PAPER 1: ACCOUNTING
  cafnd_acc_1:  { name: "Theoretical Framework of Accounting",              priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "5–8 marks",   days: "2 days", category: "Accounting Fundamentals" },
  cafnd_acc_2:  { name: "Accounting Process — Journal, Ledger, Trial Balance", priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "8–12 marks", days: "5 days", category: "Accounting Fundamentals" },
  cafnd_acc_3:  { name: "Subsidiary Books & Rectification of Errors",       priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–8 marks",   days: "4 days", category: "Accounting Fundamentals" },
  cafnd_acc_4:  { name: "Bank Reconciliation Statement",                    priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–8 marks",   days: "2 days", category: "Accounting Fundamentals" },
  cafnd_acc_5:  { name: "Inventories",                                      priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–8 marks",   days: "3 days", category: "Asset & Transaction Accounting" },
  cafnd_acc_6:  { name: "Depreciation and Amortisation",                    priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–8 marks",   days: "3 days", category: "Asset & Transaction Accounting" },
  cafnd_acc_7:  { name: "Bills of Exchange and Promissory Notes",           priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",   days: "3 days", category: "Asset & Transaction Accounting" },
  cafnd_acc_8:  { name: "Final Accounts of Sole Proprietors",               priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10–15 marks", days: "5 days", category: "Final Accounts" },
  cafnd_acc_9:  { name: "Financial Statements of Not-for-Profit Organisations", priority: "HIGH",  stage: "Foundation", prelimsWeight: "5–8 marks",   days: "3 days", category: "Final Accounts" },
  cafnd_acc_10: { name: "Accounts from Incomplete Records",                 priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",   days: "3 days", category: "Final Accounts" },
  cafnd_acc_11: { name: "Partnership — Admission, Retirement & Death",      priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10–14 marks", days: "6 days", category: "Partnership & LLP" },
  cafnd_acc_12: { name: "Partnership & LLP — Dissolution of Firms",         priority: "HIGH",      stage: "Foundation", prelimsWeight: "6–10 marks",  days: "4 days", category: "Partnership & LLP" },
  cafnd_acc_13: { name: "Company Accounts — Shares: Issue, Forfeiture & Reissue", priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "8–12 marks", days: "5 days", category: "Company Accounts" },
  cafnd_acc_14: { name: "Company Accounts — Issue & Redemption of Debentures", priority: "HIGH",   stage: "Foundation", prelimsWeight: "5–8 marks",   days: "4 days", category: "Company Accounts" },
  cafnd_acc_15: { name: "Financial Statements of Companies",                priority: "HIGH",      stage: "Foundation", prelimsWeight: "6–10 marks",  days: "4 days", category: "Company Accounts" },

  // PAPER 2: BUSINESS LAWS
  cafnd_law_1:  { name: "Indian Regulatory Framework",                      priority: "LOW",       stage: "Foundation", prelimsWeight: "2–4 marks",  days: "1 days", category: "Framework & Other Acts" },
  cafnd_law_2:  { name: "Contract Act — Nature of Contracts, Offer & Acceptance", priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "30–35 marks block", days: "3 days", category: "Contract & Sale Laws" },
  cafnd_law_3:  { name: "Contract Act — Consideration",                     priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "30–35 marks block", days: "2 days", category: "Contract & Sale Laws" },
  cafnd_law_4:  { name: "Contract Act — Other Essential Elements",          priority: "HIGH",      stage: "Foundation", prelimsWeight: "30–35 marks block", days: "3 days", category: "Contract & Sale Laws" },
  cafnd_law_5:  { name: "Contract Act — Performance of Contract",           priority: "HIGH",      stage: "Foundation", prelimsWeight: "30–35 marks block", days: "3 days", category: "Contract & Sale Laws" },
  cafnd_law_6:  { name: "Contract Act — Breach of Contract & Remedies",     priority: "HIGH",      stage: "Foundation", prelimsWeight: "30–35 marks block", days: "2 days", category: "Contract & Sale Laws" },
  cafnd_law_7:  { name: "Contract Act — Contingent & Quasi Contracts",      priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "30–35 marks block", days: "2 days", category: "Contract & Sale Laws" },
  cafnd_law_8:  { name: "Contract Act — Contracts of Indemnity & Guarantee", priority: "HIGH",     stage: "Foundation", prelimsWeight: "30–35 marks block", days: "3 days", category: "Contract & Sale Laws" },
  cafnd_law_9:  { name: "Contract Act — Bailment & Pledge",                 priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "30–35 marks block", days: "2 days", category: "Contract & Sale Laws" },
  cafnd_law_10: { name: "Contract Act — Agency",                            priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "30–35 marks block", days: "2 days", category: "Contract & Sale Laws" },
  cafnd_law_11: { name: "The Sale of Goods Act, 1930",                      priority: "HIGH",      stage: "Foundation", prelimsWeight: "12–15 marks", days: "4 days", category: "Contract & Sale Laws" },
  cafnd_law_12: { name: "The Indian Partnership Act, 1932",                 priority: "HIGH",      stage: "Foundation", prelimsWeight: "12–15 marks", days: "4 days", category: "Entity Laws" },
  cafnd_law_13: { name: "The Limited Liability Partnership Act, 2008",      priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "5–8 marks",   days: "2 days", category: "Entity Laws" },
  cafnd_law_14: { name: "The Companies Act, 2013 (Foundation scope)",       priority: "HIGH",      stage: "Foundation", prelimsWeight: "10–12 marks", days: "4 days", category: "Entity Laws" },
  cafnd_law_15: { name: "The Negotiable Instruments Act, 1881",             priority: "HIGH",      stage: "Foundation", prelimsWeight: "10–12 marks", days: "4 days", category: "Framework & Other Acts" },

  // PAPER 3: QUANTITATIVE APTITUDE
  cafnd_qa_1:  { name: "Ratio, Proportion, Indices & Logarithms",         priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "3 days", category: "Business Mathematics" },
  cafnd_qa_2:  { name: "Equations — Linear, Quadratic & Cubic",           priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "3 days", category: "Business Mathematics" },
  cafnd_qa_3:  { name: "Linear Inequalities",                             priority: "LOW",       stage: "Foundation", prelimsWeight: "1–3 marks",  days: "1 days", category: "Business Mathematics" },
  cafnd_qa_4:  { name: "Time Value of Money — Interest, Annuities, NPV",   priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "6–9 marks",  days: "5 days", category: "Business Mathematics" },
  cafnd_qa_5:  { name: "Permutations and Combinations",                   priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",  days: "4 days", category: "Business Mathematics" },
  cafnd_qa_6:  { name: "Sequence and Series — AP and GP",                 priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",  days: "3 days", category: "Business Mathematics" },
  cafnd_qa_7:  { name: "Sets, Relations and Functions",                   priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "3–5 marks",  days: "3 days", category: "Business Mathematics" },
  cafnd_qa_8:  { name: "Basic Calculus — Differentiation & Integration",   priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",  days: "4 days", category: "Business Mathematics" },
  cafnd_qa_9:  { name: "Number Series, Coding-Decoding & Odd Man Out",     priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "2 days", category: "Logical Reasoning" },
  cafnd_qa_10: { name: "Direction Tests",                                 priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "3–5 marks",  days: "1 days", category: "Logical Reasoning" },
  cafnd_qa_11: { name: "Seating Arrangements",                            priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "3 days", category: "Logical Reasoning" },
  cafnd_qa_12: { name: "Blood Relations",                                 priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "3–5 marks",  days: "1 days", category: "Logical Reasoning" },
  cafnd_qa_13: { name: "Statistical Representation of Data",              priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",  days: "2 days", category: "Statistics" },
  cafnd_qa_14: { name: "Sampling",                                        priority: "LOW",       stage: "Foundation", prelimsWeight: "2–4 marks",  days: "2 days", category: "Statistics" },
  cafnd_qa_15: { name: "Measures of Central Tendency and Dispersion",     priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "8–10 marks", days: "5 days", category: "Statistics" },
  cafnd_qa_16: { name: "Probability",                                     priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "4 days", category: "Statistics" },
  cafnd_qa_17: { name: "Theoretical Distributions",                       priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "4 days", category: "Statistics" },
  cafnd_qa_18: { name: "Correlation and Regression",                      priority: "HIGH",      stage: "Foundation", prelimsWeight: "5–7 marks",  days: "4 days", category: "Statistics" },
  cafnd_qa_19: { name: "Index Numbers",                                   priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",  days: "2 days", category: "Statistics" },

  // PAPER 4: BUSINESS ECONOMICS
  cafnd_eco_1:  { name: "Nature & Scope of Business Economics",             priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "5–8 marks",   days: "2 days", category: "Microeconomics" },
  cafnd_eco_2:  { name: "Theory of Demand and Supply",                      priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "14–18 marks", days: "5 days", category: "Microeconomics" },
  cafnd_eco_3:  { name: "Theory of Production and Cost",                    priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12–16 marks", days: "5 days", category: "Microeconomics" },
  cafnd_eco_4:  { name: "Price Determination in Different Markets",         priority: "HIGH",      stage: "Foundation", prelimsWeight: "12–15 marks", days: "5 days", category: "Microeconomics" },
  cafnd_eco_5:  { name: "Determination of National Income",                 priority: "HIGH",      stage: "Foundation", prelimsWeight: "10–12 marks", days: "4 days", category: "Macroeconomics" },
  cafnd_eco_6:  { name: "Business Cycles",                                  priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4–6 marks",   days: "2 days", category: "Macroeconomics" },
  cafnd_eco_7:  { name: "Public Finance",                                   priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "8–10 marks",  days: "3 days", category: "Macroeconomics" },
  cafnd_eco_8:  { name: "Money Market",                                     priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "8–10 marks",  days: "3 days", category: "Macroeconomics" },
  cafnd_eco_9:  { name: "International Trade",                              priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "8–10 marks",  days: "3 days", category: "International & Indian Economy" },
  cafnd_eco_10: { name: "Indian Economy",                                   priority: "LOW",       stage: "Foundation", prelimsWeight: "4–6 marks",   days: "2 days", category: "International & Indian Economy" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CA_FOUNDATION, CA_FOUNDATION_PRIORITY_DATA };
}
