/* ============================================================================
 * cma_foundation_exam_data.js — CMA Foundation module for Arpit's Exam Hub
 * ============================================================================
 */

const EXAM_CONFIG_CMA_FOUNDATION = {
  examKey: "cma_foundation",
  examName: "CMA Foundation (ICMAI)",
  targetYear: 2026,
  examDate: "2026-07-28",
  datesTentative: false,
  datesVerified: true,
  allExamDates: ["2026-07-28"],
  formWindowOpen: "2026-04-10",
  formDeadlineNoLateFee: "2026-05-15",
  formDeadlineWithLateFee: "2026-05-20",
  correctionWindow: "2026-05-22 to 2026-05-25",

  examPattern: {
    stages: "Single level, 4 papers, MCQ-based exam.",
    totalPapers: 4,
    totalMarks: 400,
    papers: [
      { no: 1, name: "Fundamentals of Business Laws and Business Communication (FBLC)", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "None" },
      { no: 2, name: "Fundamentals of Financial and Cost Accounting (FFCA)", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "None" },
      { no: 3, name: "Fundamentals of Business Mathematics and Statistics (FBMS)", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "None" },
      { no: 4, name: "Fundamentals of Business Economics and Management (FBEM)", marks: 100, type: "Objective (100 MCQs)", durationHours: 2, negativeMarking: "None" }
    ],
    marking: "+1 per correct MCQ; No negative marking.",
    passing: "40% in each paper AND 50% aggregate (200/400).",
    mode: "Online, Home-proctored or Centre-based MCQ.",
    frequency: "Twice a year — June & December.",
    patternVerified: true
  },

  subjects: [
    { key: "law",  name: "Business Laws & Communication (Paper 1)", icon: "⚖️", color: "#16A085", examStage: "Foundation — Paper 1 (Objective)", prefix: "cma_fnd_law_",  totalChapters: 15 },
    { key: "acc",  name: "Financial & Cost Accounting (Paper 2)",    icon: "📒", color: "#C0392B", examStage: "Foundation — Paper 2 (Objective)", prefix: "cma_fnd_acc_",  totalChapters: 15 },
    { key: "math", name: "Business Math & Statistics (Paper 3)",    icon: "🔢", color: "#8E44AD", examStage: "Foundation — Paper 3 (Objective)", prefix: "cma_fnd_math_", totalChapters: 15 },
    { key: "eco",  name: "Business Economics & Mgmt (Paper 4)",    icon: "📈", color: "#D68910", examStage: "Foundation — Paper 4 (Objective)", prefix: "cma_fnd_eco_",  totalChapters: 15 }
  ]
};

const CMA_FOUNDATION_PRIORITY_DATA = {
  // PAPER 1: BUSINESS LAWS & COMMUNICATION
  cma_fnd_law_1:  { name: "Indian Contract Act, 1872 — Essentials of Contract", priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "3 days", category: "Commercial Laws" },
  cma_fnd_law_2:  { name: "Offer and Acceptance, Consideration",                priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "3 days", category: "Commercial Laws" },
  cma_fnd_law_3:  { name: "Capacity of Parties, Free Consent",                  priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_4:  { name: "Void Agreements, Discharge of Contract",             priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_5:  { name: "Quasi Contracts & Contingent Contracts",             priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4 marks",  days: "1 day",  category: "Commercial Laws" },
  cma_fnd_law_6:  { name: "Sale of Goods Act, 1930 — Formation of Contract",     priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_7:  { name: "Conditions and Warranties",                          priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_8:  { name: "Transfer of Ownership & Unpaid Seller",              priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_9:  { name: "Negotiable Instruments Act, 1881 — Overview",         priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Commercial Laws" },
  cma_fnd_law_10: { name: "Ethics and Business — Introduction & Value",         priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Ethics" },
  cma_fnd_law_11: { name: "Communication — Concepts and Process",               priority: "HIGH",      stage: "Foundation", prelimsWeight: "5 marks",  days: "1 day",  category: "Business Communication" },
  cma_fnd_law_12: { name: "Types and Channels of Communication",                priority: "HIGH",      stage: "Foundation", prelimsWeight: "5 marks",  days: "1 day",  category: "Business Communication" },
  cma_fnd_law_13: { name: "Barriers to Communication",                          priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "4 marks",  days: "1 day",  category: "Business Communication" },
  cma_fnd_law_14: { name: "Commercial Correspondence & Drafts",                 priority: "LOW",       stage: "Foundation", prelimsWeight: "3 marks",  days: "1 day",  category: "Business Communication" },
  cma_fnd_law_15: { name: "Vocabulary & Basic English Grammar",                 priority: "LOW",       stage: "Foundation", prelimsWeight: "3 marks",  days: "1 day",  category: "Business Communication" },

  // PAPER 2: FINANCIAL & COST ACCOUNTING
  cma_fnd_acc_1:  { name: "Accounting Principles, Concepts and Conventions",     priority: "HIGH",      stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Financial Accounting" },
  cma_fnd_acc_2:  { name: "Capital & Revenue Transactions",                      priority: "HIGH",      stage: "Foundation", prelimsWeight: "6 marks",  days: "1 day",  category: "Financial Accounting" },
  cma_fnd_acc_3:  { name: "Journal, Ledger and Trial Balance",                   priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "3 days", category: "Financial Accounting" },
  cma_fnd_acc_4:  { name: "Depreciation Accounting & BRS",                       priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Financial Accounting" },
  cma_fnd_acc_5:  { name: "Rectification of Errors",                             priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Financial Accounting" },
  cma_fnd_acc_6:  { name: "Bill of Exchange & Consignment Accounts",             priority: "HIGH",      stage: "Foundation", prelimsWeight: "10 marks", days: "3 days", category: "Financial Accounting" },
  cma_fnd_acc_7:  { name: "Joint Venture Accounts",                             priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Financial Accounting" },
  cma_fnd_acc_8:  { name: "Preparation of Final Accounts (Sole Proprietorship)", priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "14 marks", days: "4 days", category: "Financial Accounting" },
  cma_fnd_acc_9:  { name: "Accounting for NPO (Not-for-Profit Organisations)",  priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Financial Accounting" },
  cma_fnd_acc_10: { name: "Cost Accounting — Concepts, Classifications & Terms",priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "3 days", category: "Cost Accounting" },
  cma_fnd_acc_11: { name: "Elements of Cost & Preparation of Cost Sheets",       priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Cost Accounting" },
  cma_fnd_acc_12: { name: "Material Costing — Valuation and Control",             priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Cost Accounting" },
  cma_fnd_acc_13: { name: "Labor Costing — Time Keeping and Methods",            priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Cost Accounting" },
  cma_fnd_acc_14: { name: "Overhead Costing — Allocation & Absorption",          priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Cost Accounting" },
  cma_fnd_acc_15: { name: "Role of Cost Accounting in Decision Making",          priority: "LOW",       stage: "Foundation", prelimsWeight: "4 marks",  days: "1 day",  category: "Cost Accounting" },

  // PAPER 3: BUSINESS MATH & STATISTICS
  cma_fnd_math_1:  { name: "Ratio, Proportion and Variation",                     priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Mathematics" },
  cma_fnd_math_2:  { name: "Simple and Compound Interest & Annuity",             priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "2 days", category: "Mathematics" },
  cma_fnd_math_3:  { name: "Arithmetic Progression (AP) & Geometric (GP)",       priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Mathematics" },
  cma_fnd_math_4:  { name: "Indices, Logarithms and Permutations",               priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Mathematics" },
  cma_fnd_math_5:  { name: "Combinations and Quadratic Equations",               priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Mathematics" },
  cma_fnd_math_6:  { name: "Statistics — Presentation of Data",                  priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Statistics Fundamentals" },
  cma_fnd_math_7:  { name: "Measures of Central Tendency — Mean, Median, Mode",  priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Statistics Analysis" },
  cma_fnd_math_8:  { name: "Measures of Dispersion — SD, QD, MD & Variance",     priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Statistics Analysis" },
  cma_fnd_math_9:  { name: "Skewness, Kurtosis & Moments",                       priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Statistics Analysis" },
  cma_fnd_math_10: { name: "Correlation Analysis — Pearson & Spearman",          priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Statistics Relationships" },
  cma_fnd_math_11: { name: "Regression Analysis — Lines of Regression",          priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Statistics Relationships" },
  cma_fnd_math_12: { name: "Index Numbers — Methods and Utility",                priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Time Series & Index" },
  cma_fnd_math_13: { name: "Time Series Analysis — Trend & Variation",           priority: "LOW",       stage: "Foundation", prelimsWeight: "4 marks",  days: "1 day",  category: "Time Series & Index" },
  cma_fnd_math_14: { name: "Probability — Basic Concepts & Addition Theorem",     priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Probability" },
  cma_fnd_math_15: { name: "Probability — Conditional Probability & Bayes",       priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Probability" },

  // PAPER 4: BUSINESS ECONOMICS & MANAGEMENT
  cma_fnd_eco_1:  { name: "Introduction to Economics — Basic Concepts",          priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "5 marks",  days: "1 day",  category: "Economics" },
  cma_fnd_eco_2:  { name: "Theory of Demand and Supply",                         priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Economics" },
  cma_fnd_eco_3:  { name: "Elasticity of Demand & Consumer Behaviour",           priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "2 days", category: "Economics" },
  cma_fnd_eco_4:  { name: "Theory of Production and Cost",                       priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Economics" },
  cma_fnd_eco_5:  { name: "Market Forms — Perfect, Monopoly, Monopolistic",       priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "12 marks", days: "3 days", category: "Economics" },
  cma_fnd_eco_6:  { name: "Money and Banking — Functions of Money & RBI",        priority: "HIGH",      stage: "Foundation", prelimsWeight: "10 marks", days: "2 days", category: "Money & Banking" },
  cma_fnd_eco_7:  { name: "Commercial Banks and Financial Institutions",         priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Money & Banking" },
  cma_fnd_eco_8:  { name: "National Income — Concepts and Measurement",          priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Macroeconomics" },
  cma_fnd_eco_9:  { name: "Management Process — Concepts and Evolution",         priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Management" },
  cma_fnd_eco_10: { name: "Planning & Decision Making",                          priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Management" },
  cma_fnd_eco_11: { name: "Organizing & Staffing Functions",                     priority: "HIGH",      stage: "Foundation", prelimsWeight: "8 marks",  days: "2 days", category: "Management" },
  cma_fnd_eco_12: { name: "Leading and Motivation Theories",                      priority: "VERY HIGH", stage: "Foundation", prelimsWeight: "10 marks", days: "2 days", category: "Management" },
  cma_fnd_eco_13: { name: "Communication and Coordination",                      priority: "MEDIUM",    stage: "Foundation", prelimsWeight: "5 marks",  days: "1 day",  category: "Management" },
  cma_fnd_eco_14: { name: "Controlling Techniques and Process",                  priority: "HIGH",      stage: "Foundation", prelimsWeight: "6 marks",  days: "2 days", category: "Management" },
  cma_fnd_eco_15: { name: "Social Responsibility and Business Ethics",           priority: "LOW",       stage: "Foundation", prelimsWeight: "4 marks",  days: "1 day",  category: "Management" }
};
