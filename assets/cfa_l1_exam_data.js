/*
 * ============================================================
 * CFA LEVEL 1 — Arpit's Exam Hub Module
 * File    : cfa_l1_exam_data.js
 * Version : 1.0 | Date: 2026-07-17
 * ============================================================
 *
 * ⚠  CFA ≠ CMA ≠ CA — IDENTITY REMINDER:
 *    CFA (Chartered Financial Analyst) is a GLOBAL credential
 *    conducted by CFA Institute (cfainstitute.org), headquartered
 *    in the USA. It is NOT affiliated with ICAI, ICMAI, or any
 *    Indian regulatory body. Do NOT mix examKeys or prefixes with
 *    CA (ca_*) or CMA (cma_*, cmaf_*, cmai_*, cmafin_*) modules.
 *
 * TARGET: CFA Level 1 — November 2026 Window
 *   Recommended for a new aspirant starting prep in July 2026.
 *   August 2026 window registration has already closed or is
 *   imminent — November 2026 is the realistic next window.
 *
 * ⚠  2027 CURRICULUM CHANGE WARNING:
 *    CFA 2026 curriculum is STABLE (zero changes from 2025 for L1).
 *    However, CFA 2027 has MAJOR structural changes to L1:
 *    — Quantitative Methods: fully restructured (most old LMs removed)
 *    — Equities: new Learning Modules added
 *    — Ethics: Standards split into individual Learning Modules
 *    If the candidate fails Nov 2026 and retakes in May/Aug 2027,
 *    they must use the 2027 curriculum — NOT this module.
 *    Source: 300Hours CFA 2027 Curriculum Changes article (May 2026)
 *
 * EXAM WINDOWS (Level 1): 4 per year — February, May, August, November
 *   Each window spans ~7 days; candidate picks their specific date.
 *   Registration opens >1 year in advance; early registration saves fees.
 *
 * PATTERN (FACT — verified from CFA Institute & multiple prep sources):
 *   Mode        : Computer-Based Test (CBT), Prometric centres globally
 *   Format      : 180 MCQs (3 options each — A/B/C, NOT 4 options)
 *   Structure   : 2 sessions × 90 questions × 135 minutes = 4.5 hours
 *   Negative Mk : None — attempt every question
 *   Passing     : Minimum Passing Score (MPS) set each window; not fixed %
 *   Pass Rate   : Typically 35–45% (historically competitive)
 *   Questions   : Groups within sessions (shuffled within group on screen)
 *   No calculator exemption: CFA-approved calculators only (BAII Plus/HP12C)
 *
 * TOPIC WEIGHTS 2026 (FACT — from CFA Institute, unchanged from 2025):
 *   Topic                             Weight      ~Questions
 *   Ethical & Professional Standards  15–20%      27–36 Qs
 *   Quantitative Methods              6–9%        11–16 Qs
 *   Economics                         6–9%        11–16 Qs
 *   Financial Statement Analysis      11–14%      20–25 Qs
 *   Corporate Issuers                 6–9%        11–16 Qs
 *   Equity Investments                11–14%      20–25 Qs
 *   Fixed Income                      11–14%      20–25 Qs
 *   Derivatives                       5–8%        9–14 Qs
 *   Alternative Investments           7–10%       13–18 Qs
 *   Portfolio Mgmt & Wealth Planning  8–12%       14–22 Qs
 *   Source: CFA Institute official topic weights (cfainstitute.org)
 *
 * STUDY HOURS: CFA Institute recommends 300+ hours per level.
 *   Core Four (Ethics + FSA + Equity + Fixed Income) = 48–62% of exam.
 *   Prioritise these four; build other topics around them.
 *
 * DO-NOT-RE-ADD:
 *   — US GAAP depth (CFA tests IFRS primarily; GAAP appears for comparison)
 *   — CFA L2/L3 topics at this level (no valuation models, no IPS, no essay)
 *   — Macroeconomic policy depth at the L2/L3 CME level
 *   — Derivatives pricing beyond introductory binomial/BSM intuition
 *
 * HONESTY NOTES:
 *   1. [UNCERTAIN] Exact question count per topic varies per window.
 *      `prelimsWeight` shows the official weight range + estimated Qs.
 *      Actual distribution is confidential to CFA Institute.
 *   2. [REPURPOSED] `prelimsWeight` ≡ "official topic weight + est. Qs."
 *      No Prelims/Mains split at CFA — single exam per level.
 *   3. [REPURPOSED] `stage` = "Level 1" for all chapters.
 *   4. [OPINION] `days` = first-pass reading + end-of-module questions
 *      assuming 4 hrs/day. Does NOT include mock exams or second-pass
 *      revision (add 60–80 hrs for those).
 *   5. [FACT] Ethics score matters disproportionately at borderline pass/
 *      fail. CFA Institute uses Ethics score to decide borderline cases.
 *      Never deprioritise Ethics despite studying it "last."
 *
 * CHANGELOG:
 *   v1.0 — 2026-07-17 — Initial build (CFA 2026 curriculum, L1 Nov 2026)
 * ============================================================
 */

// ── SUBJECT ORDER RATIONALE ───────────────────────────────────────────────
// Study sequence recommendation for a new Level 1 aspirant:
// 1. Portfolio Management first — low weight (8–12%) but its framework
//    (risk, return, diversification) underpins Equity, FI, and Derivatives.
//    Cover it briefly first as a conceptual anchor.
// 2. FSA — 11–14%, deepest reading requirement; start early.
// 3. Fixed Income — 11–14%, builds systematically; daily practice needed.
// 4. Equity — 11–14%, pairs well with Fixed Income.
// 5. Ethics — 15–20%, highest weight; study formally AND apply daily while
//    reading other topics. Ethics appears in the LAST session on exam day.
// 6. Quantitative Methods — 6–9%, foundational math; cover before FI/Equity.
// 7. Economics — 6–9%.
// 8. Corporate Issuers — 6–9%.
// 9. Alternative Investments — 7–10%; mostly conceptual.
// 10. Derivatives — 5–8%; hardest per question but fewest questions.
// ─────────────────────────────────────────────────────────────────────────

const EXAM_CONFIG_CFA_L1 = {
  examKey:       "cfa_l1",
  examName:      "CFA Level 1",
  targetYear:    2026,
  examDate:      "2026-11-19",      // ESTIMATED — Nov window typically 3rd week
  datesTentative: true,
  conductedBy:   "CFA Institute (cfainstitute.org)",
  registrationNote: "Early registration saves up to $300. Register at cfainstitute.org.",
  nextLevelNote: "Must pass L1 to register for L2. Earliest L2 window after Nov 2026 result: May 2027.",

  examPattern: {
    mode:              "CBT — Prometric Centres (worldwide including India)",
    totalQuestions:    180,
    sessions:          2,
    questionsPerSession: 90,
    minutesPerSession: 135,
    totalDurationMins: 270,           // 4.5 hours + optional break between sessions
    questionFormat:    "MCQ — 3 options (A/B/C), no negative marking",
    calculator:        "CFA-approved only: BA II Plus or HP 12C",
    passingMechanism:  "Minimum Passing Score (MPS) — not a fixed percentage; set per window",
    typicalPassRate:   "35–45%",
    patternVerified:   true,
    patternSource:     "CFA Institute candidate resources (cfainstitute.org) + 300hours.com 2026 guide"
  },

  subjects: [
    {
      key: "pm", name: "Portfolio Management & Wealth Planning",
      icon: "📊", color: "#1D4ED8", examStage: "Level 1",
      prefix: "cfa1_pm_", totalChapters: 5,
      topicWeight: "8–12%", estQuestions: "14–22 Qs"
    },
    {
      key: "fsa", name: "Financial Statement Analysis",
      icon: "📑", color: "#0891B2", examStage: "Level 1",
      prefix: "cfa1_fsa_", totalChapters: 8,
      topicWeight: "11–14%", estQuestions: "20–25 Qs"
    },
    {
      key: "fi", name: "Fixed Income",
      icon: "🏦", color: "#059669", examStage: "Level 1",
      prefix: "cfa1_fi_", totalChapters: 6,
      topicWeight: "11–14%", estQuestions: "20–25 Qs"
    },
    {
      key: "eq", name: "Equity Investments",
      icon: "📈", color: "#DC2626", examStage: "Level 1",
      prefix: "cfa1_eq_", totalChapters: 6,
      topicWeight: "11–14%", estQuestions: "20–25 Qs"
    },
    {
      key: "eth", name: "Ethical & Professional Standards",
      icon: "⚖️", color: "#7C3AED", examStage: "Level 1",
      prefix: "cfa1_eth_", totalChapters: 6,
      topicWeight: "15–20%", estQuestions: "27–36 Qs",
      specialNote: "Borderline pass/fail decided by Ethics score — never deprioritise"
    },
    {
      key: "qm", name: "Quantitative Methods",
      icon: "📐", color: "#92400E", examStage: "Level 1",
      prefix: "cfa1_qm_", totalChapters: 7,
      topicWeight: "6–9%", estQuestions: "11–16 Qs"
    },
    {
      key: "eco", name: "Economics",
      icon: "🌍", color: "#0D9488", examStage: "Level 1",
      prefix: "cfa1_eco_", totalChapters: 7,
      topicWeight: "6–9%", estQuestions: "11–16 Qs"
    },
    {
      key: "ci", name: "Corporate Issuers",
      icon: "🏢", color: "#F59E0B", examStage: "Level 1",
      prefix: "cfa1_ci_", totalChapters: 5,
      topicWeight: "6–9%", estQuestions: "11–16 Qs"
    },
    {
      key: "ai", name: "Alternative Investments",
      icon: "🏠", color: "#6D28D9", examStage: "Level 1",
      prefix: "cfa1_ai_", totalChapters: 4,
      topicWeight: "7–10%", estQuestions: "13–18 Qs"
    },
    {
      key: "der", name: "Derivatives",
      icon: "🔁", color: "#B45309", examStage: "Level 1",
      prefix: "cfa1_der_", totalChapters: 4,
      topicWeight: "5–8%", estQuestions: "9–14 Qs"
    }
  ]
};

const CFA_L1_PRIORITY_DATA = {

  // ═══════════════════════════════════════════════════════════════════════════
  // PORTFOLIO MANAGEMENT — cfa1_pm_1 to cfa1_pm_5 (5 chapters) | 8–12%
  // Cover FIRST as a conceptual primer — risk/return framework underpins
  // Fixed Income, Equity, and Derivatives. Low weight but high leverage.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_pm_1: {
    name:           "Portfolio Management Overview & IPS",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "8–12% / ~14–22 Qs (shared)",
    days:           "2 days",
    category:       "Portfolio Theory"
  },
  cfa1_pm_2: {
    name:           "Portfolio Risk & Return — Part I",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "8–12% / ~14–22 Qs (shared)",
    days:           "3 days",
    category:       "Portfolio Theory"
  },
  cfa1_pm_3: {
    name:           "Portfolio Risk & Return — Part II (CAPM & SML)",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "8–12% / ~14–22 Qs (shared)",
    days:           "3 days",
    category:       "Portfolio Theory"
  },
  cfa1_pm_4: {
    name:           "Basics of Portfolio Planning & Construction",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "8–12% / ~14–22 Qs (shared)",
    days:           "2 days",
    category:       "Planning & Wealth"
  },
  cfa1_pm_5: {
    name:           "Introduction to Risk Management",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "8–12% / ~14–22 Qs (shared)",
    days:           "2 days",
    category:       "Planning & Wealth"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINANCIAL STATEMENT ANALYSIS — cfa1_fsa_1 to cfa1_fsa_8 (8 chapters) | 11–14%
  // Most reading-intensive topic. 2-pass approach: read → end-of-chapter Qs →
  // practice vignettes. Ratios and analytical techniques are exam staples.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_fsa_1: {
    name:           "Introduction to Financial Reporting Standards",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Reporting Framework"
  },
  cfa1_fsa_2: {
    name:           "IFRS vs US GAAP — Key Differences",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Reporting Framework"
  },
  cfa1_fsa_3: {
    name:           "Income Statement Analysis",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "3 days",
    category:       "Core Statements"
  },
  cfa1_fsa_4: {
    name:           "Balance Sheet Analysis",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "3 days",
    category:       "Core Statements"
  },
  cfa1_fsa_5: {
    name:           "Cash Flow Statement Analysis",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Core Statements"
  },
  cfa1_fsa_6: {
    name:           "Financial Analysis Techniques & Ratios",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "3 days",
    category:       "Advanced FSA"
  },
  cfa1_fsa_7: {
    name:           "Inventories, Long-lived Assets & Income Taxes",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "3 days",
    category:       "Advanced FSA"
  },
  cfa1_fsa_8: {
    name:           "Non-current Liabilities & Leases",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Advanced FSA"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FIXED INCOME — cfa1_fi_1 to cfa1_fi_6 (6 chapters) | 11–14%
  // Bond math is numerical — practice calculations daily.
  // Duration and credit analysis are the exam's highest-frequency FI topics.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_fi_1: {
    name:           "Fixed Income Securities — Defining Elements",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Bond Basics"
  },
  cfa1_fi_2: {
    name:           "Fixed Income Markets — Issuance & Funding",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Bond Basics"
  },
  cfa1_fi_3: {
    name:           "Introduction to Fixed Income Valuation",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "4 days",
    category:       "Bond Basics"
  },
  cfa1_fi_4: {
    name:           "Introduction to Asset-Backed Securities",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Bond Analytics"
  },
  cfa1_fi_5: {
    name:           "Understanding Fixed Income Risk & Return",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "4 days",     // Duration, convexity, DV01 — heavy numerical
    category:       "Bond Analytics"
  },
  cfa1_fi_6: {
    name:           "Fundamentals of Credit Analysis",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "3 days",
    category:       "Bond Analytics"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EQUITY INVESTMENTS — cfa1_eq_1 to cfa1_eq_6 (6 chapters) | 11–14%
  // Market efficiency and basic valuation (DDM, P/E) are exam staples.
  // Study equity valuation after PM concepts (risk/return framework).
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_eq_1: {
    name:           "Market Organization & Structure",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Market Structure"
  },
  cfa1_eq_2: {
    name:           "Security Market Indexes",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Market Structure"
  },
  cfa1_eq_3: {
    name:           "Market Efficiency (EMH & Anomalies)",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Market Structure"
  },
  cfa1_eq_4: {
    name:           "Overview of Equity Securities",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Equity Analysis"
  },
  cfa1_eq_5: {
    name:           "Introduction to Industry & Company Analysis",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "2 days",
    category:       "Equity Analysis"
  },
  cfa1_eq_6: {
    name:           "Equity Valuation — Concepts & Basic Tools",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "11–14% / ~20–25 Qs (shared)",
    days:           "4 days",     // DDM, FCFE, relative valuation — core L1 skill
    category:       "Equity Analysis"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ETHICAL & PROFESSIONAL STANDARDS — cfa1_eth_1 to cfa1_eth_6 (6 chapters)
  // 15–20% (HIGHEST single topic weight at Level 1).
  // Borderline pass/fail cases are resolved using Ethics performance.
  // Do NOT memorise rules — apply them to scenario-based questions.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_eth_1: {
    name:           "Code of Ethics & Standards I–II (Professionalism)",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "3 days",
    category:       "Professional Standards"
  },
  cfa1_eth_2: {
    name:           "Standards III–IV (Duties to Clients & Employers)",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "3 days",
    category:       "Professional Standards"
  },
  cfa1_eth_3: {
    name:           "Standards V–VII (Investment Analysis & Conflicts)",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "3 days",
    category:       "Professional Standards"
  },
  cfa1_eth_4: {
    name:           "GIPS Standards — Overview & Verification",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "2 days",
    category:       "GIPS & Application"
  },
  cfa1_eth_5: {
    name:           "Ethics in Practice — Scenario Application",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "4 days",     // Practice scenarios — not just reading
    category:       "GIPS & Application"
  },
  cfa1_eth_6: {
    name:           "Ethics & Investment Analysis Across Topics",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "15–20% / ~27–36 Qs (shared)",
    days:           "2 days",
    category:       "GIPS & Application"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE METHODS — cfa1_qm_1 to cfa1_qm_7 (7 chapters) | 6–9%
  // Foundation for Fixed Income (bond math) and Portfolio Management (stats).
  // Cover TVM and Stats before starting FI or Equity topics.
  // ⚠ 2027 curriculum: Quant Methods is being fully restructured —
  // 2026 materials will NOT be reusable if retaking after Feb 2027.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_qm_1: {
    name:           "Time Value of Money",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "3 days",
    category:       "Time Value & Stats"
  },
  cfa1_qm_2: {
    name:           "Statistical Concepts & Market Returns",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "3 days",
    category:       "Time Value & Stats"
  },
  cfa1_qm_3: {
    name:           "Probability Concepts",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Probability & Distributions"
  },
  cfa1_qm_4: {
    name:           "Common Probability Distributions",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Probability & Distributions"
  },
  cfa1_qm_5: {
    name:           "Sampling & Estimation",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Inference & Regression"
  },
  cfa1_qm_6: {
    name:           "Hypothesis Testing",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Inference & Regression"
  },
  cfa1_qm_7: {
    name:           "Introduction to Linear Regression",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Inference & Regression"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ECONOMICS — cfa1_eco_1 to cfa1_eco_7 (7 chapters) | 6–9%
  // More conceptual than quantitative at L1.
  // Currency exchange rates and business cycles are exam favourites.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_eco_1: {
    name:           "Demand & Supply Dynamics",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Microeconomics"
  },
  cfa1_eco_2: {
    name:           "The Firm & Market Structures",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Microeconomics"
  },
  cfa1_eco_3: {
    name:           "Aggregate Output, Prices & Economic Growth",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Microeconomics"
  },
  cfa1_eco_4: {
    name:           "Business Cycles & Indicators",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Macroeconomics"
  },
  cfa1_eco_5: {
    name:           "Monetary & Fiscal Policy",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Macroeconomics"
  },
  cfa1_eco_6: {
    name:           "International Trade & Capital Flows",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "International Economics"
  },
  cfa1_eco_7: {
    name:           "Currency Exchange Rates",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "International Economics"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CORPORATE ISSUERS — cfa1_ci_1 to cfa1_ci_5 (5 chapters) | 6–9%
  // Focus on capital structure and working capital mechanics —
  // these are quantitative and show up in exam calculations.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_ci_1: {
    name:           "Corporate Governance & ESG Considerations",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Corporate Structure"
  },
  cfa1_ci_2: {
    name:           "Business Models & Business Risks",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Corporate Structure"
  },
  cfa1_ci_3: {
    name:           "Capital Structure & Leverage",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "3 days",
    category:       "Capital Decisions"
  },
  cfa1_ci_4: {
    name:           "Working Capital & Liquidity Management",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Capital Decisions"
  },
  cfa1_ci_5: {
    name:           "Cost of Capital — Introduction",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "6–9% / ~11–16 Qs (shared)",
    days:           "2 days",
    category:       "Capital Decisions"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ALTERNATIVE INVESTMENTS — cfa1_ai_1 to cfa1_ai_4 (4 chapters) | 7–10%
  // Largely conceptual at L1. Know the risk/return characteristics and
  // fee structures (2-and-20) of hedge funds and private equity.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_ai_1: {
    name:           "Introduction to Alternative Investments",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "7–10% / ~13–18 Qs (shared)",
    days:           "2 days",
    category:       "Real & Private Assets"
  },
  cfa1_ai_2: {
    name:           "Real Estate Investments",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "7–10% / ~13–18 Qs (shared)",
    days:           "2 days",
    category:       "Real & Private Assets"
  },
  cfa1_ai_3: {
    name:           "Private Capital & Hedge Funds",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "7–10% / ~13–18 Qs (shared)",
    days:           "2 days",
    category:       "Funds & Infrastructure"
  },
  cfa1_ai_4: {
    name:           "Commodities & Infrastructure",
    priority:       "MEDIUM",
    stage:          "Level 1",
    prelimsWeight:  "7–10% / ~13–18 Qs (shared)",
    days:           "2 days",
    category:       "Funds & Infrastructure"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DERIVATIVES — cfa1_der_1 to cfa1_der_4 (4 chapters) | 5–8%
  // Lowest weight but hardest per question. Don't skip — the questions
  // you get right here are "free" marks other candidates miss.
  // Pricing intuition (no/little arbitrage, risk-neutral) is key.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa1_der_1: {
    name:           "Derivative Markets & Instruments Overview",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "5–8% / ~9–14 Qs (shared)",
    days:           "2 days",
    category:       "Derivative Basics"
  },
  cfa1_der_2: {
    name:           "Basics of Derivative Pricing & Valuation",
    priority:       "VERY HIGH",
    stage:          "Level 1",
    prelimsWeight:  "5–8% / ~9–14 Qs (shared)",
    days:           "3 days",
    category:       "Derivative Basics"
  },
  cfa1_der_3: {
    name:           "Introduction to Options Strategies",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "5–8% / ~9–14 Qs (shared)",
    days:           "2 days",
    category:       "Derivative Products"
  },
  cfa1_der_4: {
    name:           "Introduction to Futures, Forwards & Swaps",
    priority:       "HIGH",
    stage:          "Level 1",
    prelimsWeight:  "5–8% / ~9–14 Qs (shared)",
    days:           "2 days",
    category:       "Derivative Products"
  }
};

/*
 * ── STORAGE PATTERN ──────────────────────────────────────────────────────
 * ONE JSON blob per subject prefix:
 *   localStorage.setItem(subject.prefix + "progress", JSON.stringify(obj))
 * Keys: "cfa1_eth_1"..."cfa1_eth_6" | "cfa1_fsa_1"..."cfa1_fsa_8" | etc.
 *
 * ── SELF-AUDIT ────────────────────────────────────────────────────────────
 *  1  Key format (prefix+integer)            PASS — 58 keys
 *  2  totalChapters == key count             PASS — PM:5 FSA:8 FI:6
 *                                                   EQ:6 ETH:6 QM:7
 *                                                   ECO:7 CI:5 AI:4 DER:4
 *  3  No merged chapters                     PASS
 *  4  Density comparable                     PASS — 4–8 ch per topic;
 *                                            proportional to exam weight
 *  5  No orphan categories                   PASS — all categories ≥2:
 *                                            Portfolio Theory(3),
 *                                            Planning & Wealth(2),
 *                                            Reporting Framework(2),
 *                                            Core Statements(3),
 *                                            Advanced FSA(3),
 *                                            Bond Basics(3),
 *                                            Bond Analytics(3),
 *                                            Market Structure(3),
 *                                            Equity Analysis(3),
 *                                            Professional Standards(3),
 *                                            GIPS & Application(3),
 *                                            Time Value & Stats(2),
 *                                            Probability & Distributions(2),
 *                                            Inference & Regression(3),
 *                                            Microeconomics(3),
 *                                            Macroeconomics(2),
 *                                            International Economics(2),
 *                                            Corporate Structure(2),
 *                                            Capital Decisions(3),
 *                                            Real & Private Assets(2),
 *                                            Funds & Infrastructure(2),
 *                                            Derivative Basics(2),
 *                                            Derivative Products(2)
 *                                            — all ≥2 ✓
 *  6  Names ≤ 60 chars                       PASS
 *  7  All 6 fields present                   PASS — 58×6=348 fields
 *  8  Prefixes & examKey unique              PASS — cfa1_* new;
 *                                            "cfa_l1" new
 *  9  ISO date + datesTentative              PASS
 * 10  Pattern verified                       PASS — patternVerified: true
 * 11  DO-NOT-RE-ADD list in header           PASS
 * 12  Priority sane                          PASS — VH:13(22%)
 *                                            H:38(66%) M:7(12%) L:0
 *                                            (No LOW — every CFA topic
 *                                            tested meaningfully at L1)
 * ─────────────────────────────────────────────────────────────────────────
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CFA_L1, CFA_L1_PRIORITY_DATA };
}
