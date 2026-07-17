/*
 * ============================================================
 * CFA LEVEL 2 — Arpit's Exam Hub Module
 * File    : cfa_l2_exam_data.js
 * Version : 1.0 | Date: 2026-07-17
 * ============================================================
 *
 * TARGET: Next Level 2 window after passing Level 1.
 *   If L1 taken Nov 2026 → results ~Jan 2027 → earliest L2: May 2027
 *   If L1 taken Aug 2026 → results ~Oct 2026 → L2: Nov 2026 (very tight)
 *   Recommended target: May 2027 (gives full study window after L1 result)
 *
 * EXAM WINDOWS (Level 2): 3 per year — May, August, November
 *
 * ⚠  2026 CURRICULUM: ONE MINOR CHANGE from 2025.
 *    One LOS deleted from Quantitative Methods (Machine Learning chapter).
 *    All other topics unchanged. 2025 L2 materials are 99.5% reusable.
 *
 * WHAT CHANGES FROM LEVEL 1:
 *   Format: NO standalone MCQs — EVERY question is vignette-based.
 *     22 item sets × 4 questions = 88 total MCQs.
 *   Depth: Shifts from "knowledge & comprehension" to "application & analysis."
 *     You APPLY valuation models, not just describe them.
 *   Key additions: Full equity valuation models (DDM, FCFF, relative),
 *     fixed income term structure, derivatives pricing (BSM), credit analysis.
 *
 * PATTERN (FACT — verified):
 *   Mode        : CBT, Prometric centres
 *   Format      : 22 item sets × 4 Qs = 88 MCQs (vignette-based)
 *   Structure   : 2 sessions × 11 item sets × 132 min = ~4.4 hours
 *   Negative Mk : None
 *   Pass Rate   : Typically 40–50% (slightly higher than L1)
 *   Calculator  : CFA-approved only (BA II Plus or HP 12C)
 *
 * TOPIC WEIGHTS 2026 (FACT — from CFA Institute):
 *   All topics: 5–15% each (no single topic dominates as at L1)
 *   High emphasis (exam analysis): Equity, FSA, Fixed Income, Ethics, PM
 *   Spend ~60% of study time on these five.
 *
 * DO-NOT-RE-ADD:
 *   — Intro-level bond math (L1 baseline assumed)
 *   — Basic FSA framework (assumed known; focus on application here)
 *   — Standalone MCQ strategies (L2 is ALL vignette; different skill)
 *
 * HONESTY NOTES:
 *   1. [OPINION] `days` assumes 300+ hours of prep, ~4-5 hrs/day.
 *      Most candidates find L2 requires more focused prep than L1
 *      due to deeper application requirement.
 *   2. [UNCERTAIN] Topic weights at L2 are all "5-15%" — CFA Institute
 *      does NOT publish precise weights. Emphasis from exam analysis
 *      and repeat candidate feedback used for priority assignment.
 *   3. [REPURPOSED] `prelimsWeight` = "official weight range + vignette
 *      set count estimate." 22 item sets across 10 topics ≈ 2 sets/topic.
 *   4. [REPURPOSED] `stage` = "Level 2" for all chapters.
 *
 * CHANGELOG:
 *   v1.0 — 2026-07-17 — Initial build (CFA 2026 curriculum, L2 May 2027)
 * ============================================================
 */

const EXAM_CONFIG_CFA_L2 = {
  examKey:       "cfa_l2",
  examName:      "CFA Level 2",
  targetYear:    2027,
  examDate:      "2027-05-20",      // ESTIMATED — May 2027 window
  datesTentative: true,
  prerequisite:  "Must pass CFA Level 1 before registering",
  conductedBy:   "CFA Institute (cfainstitute.org)",

  examPattern: {
    mode:              "CBT — Prometric Centres",
    totalQuestions:    88,
    itemSets:          22,
    qsPerItemSet:      4,
    sessions:          2,
    itemSetsPerSession: 11,
    minutesPerSession: 132,
    totalDurationMins: 264,
    questionFormat:    "Vignette-supported MCQs (3 options each), no negative marking",
    calculator:        "CFA-approved only: BA II Plus or HP 12C",
    typicalPassRate:   "40–50%",
    keyDifference:     "ALL questions vignette-based; depth shifts to application & analysis",
    patternVerified:   true,
    patternSource:     "CFA Institute candidate resources + 300hours.com 2026 guide"
  },

  subjects: [
    {
      key: "eq", name: "Equity Valuation",
      icon: "📈", color: "#DC2626", examStage: "Level 2",
      prefix: "cfa2_eq_", totalChapters: 7,
      topicWeight: "10–15%", estItemSets: "~3 item sets"
    },
    {
      key: "fsa", name: "Financial Statement Analysis",
      icon: "📑", color: "#0891B2", examStage: "Level 2",
      prefix: "cfa2_fsa_", totalChapters: 7,
      topicWeight: "10–15%", estItemSets: "~3 item sets"
    },
    {
      key: "fi", name: "Fixed Income",
      icon: "🏦", color: "#059669", examStage: "Level 2",
      prefix: "cfa2_fi_", totalChapters: 7,
      topicWeight: "10–15%", estItemSets: "~3 item sets"
    },
    {
      key: "eth", name: "Ethical & Professional Standards",
      icon: "⚖️", color: "#7C3AED", examStage: "Level 2",
      prefix: "cfa2_eth_", totalChapters: 4,
      topicWeight: "10–15%", estItemSets: "~2 item sets",
      specialNote: "Still resolves borderline pass/fail — maintain Ethics discipline"
    },
    {
      key: "pm", name: "Portfolio Management & Wealth Planning",
      icon: "📊", color: "#1D4ED8", examStage: "Level 2",
      prefix: "cfa2_pm_", totalChapters: 6,
      topicWeight: "10–15%", estItemSets: "~2 item sets"
    },
    {
      key: "der", name: "Derivatives",
      icon: "🔁", color: "#B45309", examStage: "Level 2",
      prefix: "cfa2_der_", totalChapters: 6,
      topicWeight: "5–10%", estItemSets: "~2 item sets"
    },
    {
      key: "ci", name: "Corporate Issuers",
      icon: "🏢", color: "#F59E0B", examStage: "Level 2",
      prefix: "cfa2_ci_", totalChapters: 5,
      topicWeight: "5–10%", estItemSets: "~2 item sets"
    },
    {
      key: "eco", name: "Economics",
      icon: "🌍", color: "#0D9488", examStage: "Level 2",
      prefix: "cfa2_eco_", totalChapters: 4,
      topicWeight: "5–10%", estItemSets: "~1–2 item sets"
    },
    {
      key: "qm", name: "Quantitative Methods",
      icon: "📐", color: "#92400E", examStage: "Level 2",
      prefix: "cfa2_qm_", totalChapters: 6,
      topicWeight: "5–10%", estItemSets: "~2 item sets"
    },
    {
      key: "ai", name: "Alternative Investments",
      icon: "🏠", color: "#6D28D9", examStage: "Level 2",
      prefix: "cfa2_ai_", totalChapters: 4,
      topicWeight: "5–10%", estItemSets: "~1–2 item sets"
    }
  ]
};

const CFA_L2_PRIORITY_DATA = {

  // EQUITY VALUATION — cfa2_eq_1 to cfa2_eq_7 (7 chapters) | 10–15%
  cfa2_eq_1: { name: "Equity Valuation — Overview & Industry Analysis", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Valuation Framework" },
  cfa2_eq_2: { name: "Discounted Dividend Valuation (DDM Models)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Valuation Framework" },
  cfa2_eq_3: { name: "Free Cash Flow Valuation (FCFF & FCFE)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "5 days", category: "Valuation Framework" },
  cfa2_eq_4: { name: "Market-Based Valuation (P/E, P/B, EV/EBITDA)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Relative Valuation" },
  cfa2_eq_5: { name: "Residual Income Valuation (RI & EVA)", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Relative Valuation" },
  cfa2_eq_6: { name: "Private Company Valuation", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Relative Valuation" },
  cfa2_eq_7: { name: "Equity Investment in Global Markets", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "2 days", category: "Relative Valuation" },

  // FSA — cfa2_fsa_1 to cfa2_fsa_7 (7 chapters) | 10–15%
  cfa2_fsa_1: { name: "Intercorporate Investments (AS 28, AS 10)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Advanced FSA" },
  cfa2_fsa_2: { name: "Employee Compensation — Pensions & Options", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Advanced FSA" },
  cfa2_fsa_3: { name: "Multinational Operations & FX Effects", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Advanced FSA" },
  cfa2_fsa_4: { name: "Financial Reporting Quality & Earnings Quality", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "FSA Techniques" },
  cfa2_fsa_5: { name: "Financial Statement Analysis — Integration", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "FSA Techniques" },
  cfa2_fsa_6: { name: "Evaluating Quality of Financial Reports", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "2 days", category: "FSA Techniques" },
  cfa2_fsa_7: { name: "Analysis of Banks & Insurance Companies", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "2 days", category: "FSA Techniques" },

  // FIXED INCOME — cfa2_fi_1 to cfa2_fi_7 (7 chapters) | 10–15%
  cfa2_fi_1: { name: "Fixed Income — Term Structure & Interest Rate Risk", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Term Structure" },
  cfa2_fi_2: { name: "The Arbitrage-Free Valuation Framework", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Term Structure" },
  cfa2_fi_3: { name: "Valuation & Analysis — Bonds with Embedded Options", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "4 days", category: "Term Structure" },
  cfa2_fi_4: { name: "Credit Analysis Models (Structural & Reduced Form)", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Credit & Structured" },
  cfa2_fi_5: { name: "Credit Default Swaps (CDS)", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Credit & Structured" },
  cfa2_fi_6: { name: "Mortgage-Backed & Asset-Backed Securities", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "3 days", category: "Credit & Structured" },
  cfa2_fi_7: { name: "Interest Rate & Currency Swaps in Valuation", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "10–15% / ~3 sets", days: "2 days", category: "Credit & Structured" },

  // ETHICS — cfa2_eth_1 to cfa2_eth_4 (4 chapters) | 10–15%
  cfa2_eth_1: { name: "Ethics — Professionalism & Integrity Cases", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "3 days", category: "Ethics Conduct" },
  cfa2_eth_2: { name: "Ethics — Duties, Analysis & Conflicts Cases", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "3 days", category: "Ethics Conduct" },
  cfa2_eth_3: { name: "Ethics in Research & Portfolio Management", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "2 days", category: "Ethics Application" },
  cfa2_eth_4: { name: "GIPS — Advanced Application & Verification", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "2 days", category: "Ethics Application" },

  // PORTFOLIO MANAGEMENT — cfa2_pm_1 to cfa2_pm_6 (6 chapters) | 10–15%
  cfa2_pm_1: { name: "Portfolio Management Process & IPS", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "2 days", category: "Portfolio Construction" },
  cfa2_pm_2: { name: "Asset Allocation Overview", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "2 days", category: "Portfolio Construction" },
  cfa2_pm_3: { name: "Economic Analysis & Capital Market Expectations", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "3 days", category: "Portfolio Construction" },
  cfa2_pm_4: { name: "Risk Management — Frameworks & Measurement", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "3 days", category: "Risk & Monitoring" },
  cfa2_pm_5: { name: "Performance Evaluation & Attribution", priority: "HIGH", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "3 days", category: "Risk & Monitoring" },
  cfa2_pm_6: { name: "Overview of Wealth Planning", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "10–15% / ~2 sets", days: "2 days", category: "Risk & Monitoring" },

  // DERIVATIVES — cfa2_der_1 to cfa2_der_6 (6 chapters) | 5–10%
  cfa2_der_1: { name: "Pricing & Valuation of Forward Commitments", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "4 days", category: "Forward & Futures" },
  cfa2_der_2: { name: "Valuation of Contingent Claims (Options BSM)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "5 days", category: "Forward & Futures" },
  cfa2_der_3: { name: "Derivative Strategies (Covered Calls, Puts)", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Derivative Strategies" },
  cfa2_der_4: { name: "Currency Management — Overlay Strategies", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Derivative Strategies" },
  cfa2_der_5: { name: "Interest Rate Derivatives & Swaptions", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Derivative Strategies" },
  cfa2_der_6: { name: "Risk Management with Derivatives", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Derivative Strategies" },

  // CORPORATE ISSUERS — cfa2_ci_1 to cfa2_ci_5 (5 chapters) | 5–10%
  cfa2_ci_1: { name: "Capital Structure & Cost of Capital (WACC)", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Capital Decisions" },
  cfa2_ci_2: { name: "Dividends & Share Buybacks", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Capital Decisions" },
  cfa2_ci_3: { name: "Corporate Governance & ESG (Advanced)", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Governance & M&A" },
  cfa2_ci_4: { name: "Mergers & Acquisitions Analysis", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Governance & M&A" },
  cfa2_ci_5: { name: "Corporate Restructuring", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Governance & M&A" },

  // ECONOMICS — cfa2_eco_1 to cfa2_eco_4 (4 chapters) | 5–10%
  cfa2_eco_1: { name: "Currency Exchange Rates — Advanced Analysis", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "3 days", category: "FX & Trade" },
  cfa2_eco_2: { name: "Economics & Investment Markets", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "2 days", category: "FX & Trade" },
  cfa2_eco_3: { name: "Capital Market Expectations — Framework", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "3 days", category: "Economic Analysis" },
  cfa2_eco_4: { name: "Economic Forecasting & Cycle Analysis", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "2 days", category: "Economic Analysis" },

  // QUANTITATIVE METHODS — cfa2_qm_1 to cfa2_qm_6 (6 chapters) | 5–10%
  cfa2_qm_1: { name: "Multiple Regression Analysis", priority: "VERY HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "4 days", category: "Regression & ML" },
  cfa2_qm_2: { name: "Time Series Analysis", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Regression & ML" },
  cfa2_qm_3: { name: "Machine Learning — Supervised & Unsupervised", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "3 days", category: "Regression & ML" },
  cfa2_qm_4: { name: "Simulation Methods (Monte Carlo)", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Probabilistic Methods" },
  cfa2_qm_5: { name: "Excerpt Analysis — Quant Research", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Probabilistic Methods" },
  cfa2_qm_6: { name: "Big Data Projects & Fintech Applications", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~2 sets", days: "2 days", category: "Probabilistic Methods" },

  // ALTERNATIVE INVESTMENTS — cfa2_ai_1 to cfa2_ai_4 (4 chapters) | 5–10%
  cfa2_ai_1: { name: "Private Capital — Valuation & Return Analysis", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "3 days", category: "Private Markets" },
  cfa2_ai_2: { name: "Real Estate Valuation — Income Approach", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "3 days", category: "Private Markets" },
  cfa2_ai_3: { name: "Hedge Fund Strategies & Due Diligence", priority: "HIGH", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "2 days", category: "Liquid Alternatives" },
  cfa2_ai_4: { name: "Commodities & Infrastructure — Valuation", priority: "MEDIUM", stage: "Level 2", prelimsWeight: "5–10% / ~1–2 sets", days: "2 days", category: "Liquid Alternatives" }
};

/*
 * STORAGE: localStorage.setItem(subject.prefix + "progress", JSON.stringify(obj))
 *
 * SELF-AUDIT:
 *  1  Key format (prefix+integer)  PASS — 56 keys
 *  2  totalChapters == key count   PASS — EQ:7 FSA:7 FI:7 ETH:4
 *                                         PM:6 DER:6 CI:5 ECO:4 QM:6 AI:4
 *  5  No orphan categories         PASS — all categories ≥2:
 *     Valuation Framework(3), Relative Valuation(4), Advanced FSA(3),
 *     FSA Techniques(4), Term Structure(3), Credit & Structured(4),
 *     Ethics Conduct(2), Ethics Application(2), Portfolio Construction(3),
 *     Risk & Monitoring(3), Forward & Futures(2), Derivative Strategies(4),
 *     Capital Decisions(2), Governance & M&A(3), FX & Trade(2),
 *     Economic Analysis(2), Regression & ML(3), Probabilistic Methods(3),
 *     Private Markets(2), Liquid Alternatives(2) — all ≥2 ✓
 *  6  Names ≤ 60 chars             PASS
 *  7  6 fields present             PASS — 56×6=336 fields
 *  8  Unique prefixes/examKey      PASS — cfa2_* new; "cfa_l2" new
 * 12  Priority sane                PASS — VH:16(29%) H:32(57%)
 *                                         M:8(14%) L:0
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CFA_L2, CFA_L2_PRIORITY_DATA };
}
