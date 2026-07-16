/* ============================================================================
 * ca_inter_exam_data.js — CA Intermediate module for Arpit's Exam Hub
 * ============================================================================
 */

const EXAM_CONFIG_CA_INTER = {
  examKey: "ca_inter_2026",
  examName: "CA Intermediate (ICAI)",
  targetYear: 2026,
  examDate: "2026-09-01",
  datesTentative: false,
  datesVerified: true,
  groupIDates:  ["2026-09-01", "2026-09-03", "2026-09-06"],
  groupIIDates: ["2026-09-08", "2026-09-10", "2026-09-12"],
  formWindowOpen: "2026-07-06",
  formDeadlineNoLateFee: "2026-07-19",
  formDeadlineWithLateFee: "2026-07-22",
  correctionWindow: "2026-07-23 to 2026-07-25",

  examPattern: {
    stages: "Two groups of 3 papers each. Attemptable together or separately; each group passes independently.",
    totalPapers: 6,
    totalMarks: 600,
    paperSplit: "70 marks descriptive + 30 marks case-study MCQs, in EVERY paper.",
    marking: "No negative marking on MCQs at Inter level.",
    passing: "40% in each paper AND 50% aggregate per group (150/300).",
    mode: "Offline, centre-based. English or Hindi medium.",
    frequency: "Thrice a year — January, May/June, September.",
    patternVerified: true
  },

  subjects: [
    { key: "acc",   name: "Advanced Accounting (P1)",         icon: "📗", color: "#B03A2E", examStage: "Group I",  prefix: "cain_acc_",   totalChapters: 15 },
    { key: "law",   name: "Corporate & Other Laws (P2)",       icon: "⚖️", color: "#117864", examStage: "Group I",  prefix: "cain_law_",   totalChapters: 15 },
    { key: "tax",   name: "Taxation (P3) — Income-tax & GST",  icon: "🧾", color: "#1F618D", examStage: "Group I",  prefix: "cain_tax_",   totalChapters: 26 },
    { key: "cost",  name: "Cost & Management Accounting (P4)", icon: "🏭", color: "#7D3C98", examStage: "Group II", prefix: "cain_cost_",  totalChapters: 15 },
    { key: "audit", name: "Auditing & Ethics (P5)",            icon: "🔍", color: "#196F3D", examStage: "Group II", prefix: "cain_audit_", totalChapters: 11 },
    { key: "fmsm",  name: "Financial Mgmt & Strategic Mgmt (P6)", icon: "📊", color: "#B9770E", examStage: "Group II", prefix: "cain_fmsm_", totalChapters: 14 }
  ]
};

const CA_INTER_PRIORITY_DATA = {
  // PAPER 1: ADVANCED ACCOUNTING
  cain_acc_1:  { name: "Introduction to Accounting Standards",             priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days",  category: "AS Framework" },
  cain_acc_2:  { name: "Framework for Preparation & Presentation of FS",   priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days",  category: "AS Framework" },
  cain_acc_3:  { name: "Applicability of Accounting Standards",            priority: "LOW",       stage: "Group I", prelimsWeight: "2–4 marks",  days: "1 days",  category: "AS Framework" },
  cain_acc_4:  { name: "Presentation & Disclosure AS (1,3,17,18,20,24,25)", priority: "VERY HIGH", stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "12 days", category: "Accounting Standards" },
  cain_acc_5:  { name: "Assets Based AS (units incl. AS 2, 10, 13, 16)",   priority: "VERY HIGH", stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "10 days", category: "Accounting Standards" },
  cain_acc_6:  { name: "Liabilities Based AS (units incl. AS 15, 29)",     priority: "HIGH",      stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "5 days",  category: "Accounting Standards" },
  cain_acc_7:  { name: "AS Based on Items Impacting Financial Statements", priority: "HIGH",      stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "6 days",  category: "Accounting Standards" },
  cain_acc_8:  { name: "Revenue Based AS (units incl. AS 7, 9)",           priority: "HIGH",      stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "4 days",  category: "Accounting Standards" },
  cain_acc_9:  { name: "Other Accounting Standards",                       priority: "MEDIUM",    stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "5 days",  category: "Accounting Standards" },
  cain_acc_10: { name: "AS for Consolidated Financial Statements",         priority: "HIGH",      stage: "Group I", prelimsWeight: "AS block: 40–45m", days: "6 days",  category: "Accounting Standards" },
  cain_acc_11: { name: "Financial Statements of Companies (Schedule III)", priority: "VERY HIGH", stage: "Group I", prelimsWeight: "12–16 marks", days: "7 days",  category: "Company & Branch Accounts" },
  cain_acc_12: { name: "Buy Back of Securities",                           priority: "MEDIUM",    stage: "Group I", prelimsWeight: "5–8 marks",   days: "3 days",  category: "Company & Branch Accounts" },
  cain_acc_13: { name: "Amalgamation of Companies",                        priority: "VERY HIGH", stage: "Group I", prelimsWeight: "10–14 marks", days: "6 days",  category: "Company & Branch Accounts" },
  cain_acc_14: { name: "Accounting for Reconstruction of Companies",       priority: "HIGH",      stage: "Group I", prelimsWeight: "8–12 marks",  days: "5 days",  category: "Company & Branch Accounts" },
  cain_acc_15: { name: "Accounting for Branches including Foreign Branches", priority: "HIGH",    stage: "Group I", prelimsWeight: "8–12 marks",  days: "5 days",  category: "Company & Branch Accounts" },

  // PAPER 2: CORPORATE & OTHER LAWS
  cain_law_1:  { name: "Companies Act — Preliminary & Definitions",        priority: "HIGH",      stage: "Group I", prelimsWeight: "4–6 marks",   days: "2 days", category: "Company & LLP Law" },
  cain_law_2:  { name: "Incorporation of Company & Matters Incidental",    priority: "VERY HIGH", stage: "Group I", prelimsWeight: "8–10 marks",  days: "4 days", category: "Company & LLP Law" },
  cain_law_3:  { name: "Prospectus and Allotment of Securities",           priority: "HIGH",      stage: "Group I", prelimsWeight: "6–8 marks",   days: "3 days", category: "Company & LLP Law" },
  cain_law_4:  { name: "Share Capital and Debentures",                     priority: "VERY HIGH", stage: "Group I", prelimsWeight: "8–10 marks",  days: "4 days", category: "Company & LLP Law" },
  cain_law_5:  { name: "Acceptance of Deposits by Companies",              priority: "MEDIUM",    stage: "Group I", prelimsWeight: "4–6 marks",   days: "2 days", category: "Company & LLP Law" },
  cain_law_6:  { name: "Registration of Charges",                          priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",   days: "2 days", category: "Company & LLP Law" },
  cain_law_7:  { name: "Management and Administration",                    priority: "HIGH",      stage: "Group I", prelimsWeight: "6–8 marks",   days: "4 days", category: "Company & LLP Law" },
  cain_law_8:  { name: "Declaration and Payment of Dividend",              priority: "MEDIUM",    stage: "Group I", prelimsWeight: "4–6 marks",   days: "2 days", category: "Company & LLP Law" },
  cain_law_9:  { name: "Accounts of Companies",                            priority: "HIGH",      stage: "Group I", prelimsWeight: "6–8 marks",   days: "3 days", category: "Company & LLP Law" },
  cain_law_10: { name: "Audit and Auditors",                               priority: "HIGH",      stage: "Group I", prelimsWeight: "6–8 marks",   days: "3 days", category: "Company & LLP Law" },
  cain_law_11: { name: "Companies Incorporated Outside India",             priority: "LOW",       stage: "Group I", prelimsWeight: "2–4 marks",   days: "1 days", category: "Company & LLP Law" },
  cain_law_12: { name: "The Limited Liability Partnership Act, 2008",      priority: "MEDIUM",    stage: "Group I", prelimsWeight: "4–6 marks",   days: "2 days", category: "Company & LLP Law" },
  cain_law_13: { name: "The General Clauses Act, 1897",                    priority: "MEDIUM",    stage: "Group I", prelimsWeight: "8–10 marks",  days: "3 days", category: "Other Laws" },
  cain_law_14: { name: "Interpretation of Statutes",                       priority: "MEDIUM",    stage: "Group I", prelimsWeight: "8–10 marks",  days: "3 days", category: "Other Laws" },
  cain_law_15: { name: "The Foreign Exchange Management Act, 1999",        priority: "HIGH",      stage: "Group I", prelimsWeight: "10–12 marks", days: "4 days", category: "Other Laws" },

  // PAPER 3: TAXATION
  cain_tax_1:  { name: "Basic Concepts of Income-tax",                     priority: "VERY HIGH", stage: "Group I", prelimsWeight: "4–6 marks",   days: "3 days", category: "Income-tax — Basics" },
  cain_tax_2:  { name: "Residence and Scope of Total Income",              priority: "HIGH",      stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "Income-tax — Basics" },
  cain_tax_3:  { name: "Salaries",                                         priority: "VERY HIGH", stage: "Group I", prelimsWeight: "25–30m heads block", days: "6 days", category: "Income-tax — Heads of Income" },
  cain_tax_4:  { name: "Income from House Property",                       priority: "HIGH",      stage: "Group I", prelimsWeight: "25–30m heads block", days: "3 days", category: "Income-tax — Heads of Income" },
  cain_tax_5:  { name: "Profits and Gains of Business or Profession",      priority: "VERY HIGH", stage: "Group I", prelimsWeight: "25–30m heads block", days: "8 days", category: "Income-tax — Heads of Income" },
  cain_tax_6:  { name: "Capital Gains",                                    priority: "VERY HIGH", stage: "Group I", prelimsWeight: "25–30m heads block", days: "7 days", category: "Income-tax — Heads of Income" },
  cain_tax_7:  { name: "Income from Other Sources",                        priority: "HIGH",      stage: "Group I", prelimsWeight: "25–30m heads block", days: "3 days", category: "Income-tax — Heads of Income" },
  cain_tax_8:  { name: "Clubbing — Income of Other Persons in Total Income", priority: "MEDIUM",  stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_9:  { name: "Aggregation, Set-off and Carry Forward of Losses",  priority: "HIGH",      stage: "Group I", prelimsWeight: "4–6 marks",  days: "3 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_10: { name: "Deductions from Gross Total Income",               priority: "VERY HIGH", stage: "Group I", prelimsWeight: "5–8 marks",  days: "4 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_11: { name: "Advance Tax, TDS and TCS",                         priority: "HIGH",      stage: "Group I", prelimsWeight: "5–8 marks",  days: "4 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_12: { name: "Filing Return of Income and Self-Assessment",      priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_13: { name: "Income-tax Liability — Computation & Optimisation", priority: "VERY HIGH", stage: "Group I", prelimsWeight: "8–12 marks", days: "4 days", category: "Income-tax — Computation & Compliance" },
  cain_tax_14: { name: "GST in India — An Introduction",                   priority: "LOW",       stage: "Group I", prelimsWeight: "2–3 marks",  days: "1 days", category: "GST — Basics & Levy" },
  cain_tax_15: { name: "Supply under GST",                                 priority: "VERY HIGH", stage: "Group I", prelimsWeight: "5–8 marks",  days: "4 days", category: "GST — Basics & Levy" },
  cain_tax_16: { name: "Charge of GST (incl. Reverse Charge & Composition)", priority: "VERY HIGH", stage: "Group I", prelimsWeight: "5–8 marks", days: "4 days", category: "GST — Basics & Levy" },
  cain_tax_17: { name: "Place of Supply",                                  priority: "HIGH",      stage: "Group I", prelimsWeight: "4–6 marks",  days: "3 days", category: "GST — Basics & Levy" },
  cain_tax_18: { name: "Exemptions from GST",                              priority: "HIGH",      stage: "Group I", prelimsWeight: "4–6 marks",  days: "3 days", category: "GST — Basics & Levy" },
  cain_tax_19: { name: "Time of Supply",                                   priority: "HIGH",      stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "GST — Supply Mechanics" },
  cain_tax_20: { name: "Value of Supply",                                  priority: "HIGH",      stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "GST — Supply Mechanics" },
  cain_tax_21: { name: "Input Tax Credit",                                 priority: "VERY HIGH", stage: "Group I", prelimsWeight: "6–9 marks",  days: "5 days", category: "GST — Supply Mechanics" },
  cain_tax_22: { name: "Registration",                                     priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "GST — Procedures & Compliance" },
  cain_tax_23: { name: "Tax Invoice, Credit and Debit Notes; E-Way Bill",   priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "3 days", category: "GST — Procedures & Compliance" },
  cain_tax_24: { name: "Accounts and Records",                             priority: "LOW",       stage: "Group I", prelimsWeight: "2–3 marks",  days: "1 days", category: "GST — Procedures & Compliance" },
  cain_tax_25: { name: "Payment of Tax",                                   priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "GST — Procedures & Compliance" },
  cain_tax_26: { name: "Returns under GST",                                priority: "MEDIUM",    stage: "Group I", prelimsWeight: "3–5 marks",  days: "2 days", category: "GST — Procedures & Compliance" },

  // PAPER 4: COST & MANAGEMENT ACCOUNTING
  cain_cost_1:  { name: "Introduction to Cost and Management Accounting",  priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "Cost Ascertainment" },
  cain_cost_2:  { name: "Material Cost",                                   priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–10 marks",  days: "4 days", category: "Cost Elements" },
  cain_cost_3:  { name: "Employee Cost and Direct Expenses",               priority: "HIGH",      stage: "Group II", prelimsWeight: "6–8 marks",   days: "3 days", category: "Cost Elements" },
  cain_cost_4:  { name: "Overheads — Absorption Costing Method",           priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–10 marks",  days: "5 days", category: "Cost Elements" },
  cain_cost_5:  { name: "Activity Based Costing",                          priority: "HIGH",      stage: "Group II", prelimsWeight: "5–8 marks",   days: "3 days", category: "Cost Elements" },
  cain_cost_6:  { name: "Cost Sheet",                                      priority: "VERY HIGH", stage: "Group II", prelimsWeight: "6–8 marks",   days: "3 days", category: "Cost Ascertainment" },
  cain_cost_7:  { name: "Cost Accounting Systems",                         priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "3 days", category: "Cost Ascertainment" },
  cain_cost_8:  { name: "Unit & Batch Costing",                            priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "Costing Methods" },
  cain_cost_9:  { name: "Job Costing and Contract Costing",                priority: "HIGH",      stage: "Group II", prelimsWeight: "6–8 marks",   days: "4 days", category: "Costing Methods" },
  cain_cost_10: { name: "Process & Operation Costing",                     priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–10 marks",  days: "5 days", category: "Costing Methods" },
  cain_cost_11: { name: "Joint Products and By Products",                  priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "Costing Methods" },
  cain_cost_12: { name: "Service Costing",                                 priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "3 days", category: "Costing Methods" },
  cain_cost_13: { name: "Standard Costing",                                priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–12 marks",  days: "5 days", category: "Cost Control & Decision Making" },
  cain_cost_14: { name: "Marginal Costing",                                priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–12 marks",  days: "5 days", category: "Cost Control & Decision Making" },
  cain_cost_15: { name: "Budget and Budgetary Control",                    priority: "HIGH",      stage: "Group II", prelimsWeight: "6–8 marks",   days: "4 days", category: "Cost Control & Decision Making" },

  // PAPER 5: AUDITING & ETHICS
  cain_audit_1:  { name: "Nature, Objective and Scope of Audit",           priority: "HIGH",      stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "Audit Framework, Ethics & Planning" },
  cain_audit_2:  { name: "Audit Strategy, Audit Planning and Audit Programme", priority: "HIGH",  stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "Audit Framework, Ethics & Planning" },
  cain_audit_3:  { name: "Risk Assessment and Internal Control",           priority: "VERY HIGH", stage: "Group II", prelimsWeight: "10–14 marks", days: "5 days", category: "Audit Framework, Ethics & Planning" },
  cain_audit_4:  { name: "Audit Evidence",                                 priority: "VERY HIGH", stage: "Group II", prelimsWeight: "10–14 marks", days: "5 days", category: "Evidence & Execution" },
  cain_audit_5:  { name: "Audit of Items of Financial Statements",         priority: "VERY HIGH", stage: "Group II", prelimsWeight: "12–16 marks", days: "6 days", category: "Evidence & Execution" },
  cain_audit_6:  { name: "Audit Documentation",                            priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "Evidence & Execution" },
  cain_audit_7:  { name: "Completion and Review",                          priority: "MEDIUM",    stage: "Group II", prelimsWeight: "5–8 marks",   days: "3 days", category: "Reporting & Review" },
  cain_audit_8:  { name: "Audit Report",                                   priority: "HIGH",      stage: "Group II", prelimsWeight: "8–12 marks",  days: "4 days", category: "Reporting & Review" },
  cain_audit_9:  { name: "Special Features of Audit of Different Entities", priority: "MEDIUM",   stage: "Group II", prelimsWeight: "5–8 marks",   days: "3 days", category: "Specialised Audits" },
  cain_audit_10: { name: "Audit of Banks",                                 priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "Specialised Audits" },
  cain_audit_11: { name: "Ethics and Terms of Audit Engagements",          priority: "HIGH",      stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "Audit Framework, Ethics & Planning" },

  // PAPER 6: FINANCIAL MANAGEMENT & STRATEGIC MANAGEMENT
  cain_fmsm_1:  { name: "Scope and Objectives of Financial Management",    priority: "MEDIUM",    stage: "Group II", prelimsWeight: "3–5 marks",   days: "2 days", category: "FM — Foundations" },
  cain_fmsm_2:  { name: "Types of Financing",                              priority: "MEDIUM",    stage: "Group II", prelimsWeight: "3–5 marks",   days: "2 days", category: "FM — Foundations" },
  cain_fmsm_3:  { name: "Financial Analysis and Planning — Ratio Analysis", priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–10 marks", days: "5 days", category: "FM — Foundations" },
  cain_fmsm_4:  { name: "Cost of Capital",                                 priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–10 marks",  days: "4 days", category: "FM — Financing Decisions" },
  cain_fmsm_5:  { name: "Financing Decisions — Capital Structure",         priority: "HIGH",      stage: "Group II", prelimsWeight: "6–8 marks",   days: "4 days", category: "FM — Financing Decisions" },
  cain_fmsm_6:  { name: "Financing Decisions — Leverages",                 priority: "HIGH",      stage: "Group II", prelimsWeight: "5–8 marks",   days: "3 days", category: "FM — Financing Decisions" },
  cain_fmsm_7:  { name: "Investment Decisions — Capital Budgeting",        priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–12 marks",  days: "5 days", category: "FM — Investment, Dividend & Working Capital" },
  cain_fmsm_8:  { name: "Dividend Decision",                               priority: "MEDIUM",    stage: "Group II", prelimsWeight: "4–6 marks",   days: "2 days", category: "FM — Investment, Dividend & Working Capital" },
  cain_fmsm_9:  { name: "Management of Working Capital",                   priority: "VERY HIGH", stage: "Group II", prelimsWeight: "8–12 marks",  days: "6 days", category: "FM — Investment, Dividend & Working Capital" },
  cain_fmsm_10: { name: "Introduction to Strategic Management",            priority: "HIGH",      stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "SM — Analysis" },
  cain_fmsm_11: { name: "Strategic Analysis — External Environment",       priority: "HIGH",      stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "SM — Analysis" },
  cain_fmsm_12: { name: "Strategic Analysis — Internal Environment",       priority: "HIGH",      stage: "Group II", prelimsWeight: "8–10 marks",  days: "3 days", category: "SM — Analysis" },
  cain_fmsm_13: { name: "Strategic Choices",                              priority: "HIGH",      stage: "Group II", prelimsWeight: "10–14 marks", days: "4 days", category: "SM — Choice & Implementation" },
  cain_fmsm_14: { name: "Strategy Implementation and Evaluation",          priority: "HIGH",      stage: "Group II", prelimsWeight: "10–14 marks", days: "4 days", category: "SM — Choice & Implementation" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CA_INTER, CA_INTER_PRIORITY_DATA };
}
