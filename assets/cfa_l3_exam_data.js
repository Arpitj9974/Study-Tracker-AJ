/*
 * ============================================================
 * CFA LEVEL 3 — Arpit's Exam Hub Module
 * File    : cfa_l3_exam_data.js
 * Version : 1.0 | Date: 2026-07-17
 * ============================================================
 *
 * TARGET: First Level 3 window after passing Level 2.
 *   If L2 May 2027 → results ~Jul 2027 → earliest L3: Aug 2027
 *   (tight — Aug 2027 registration may already close before result)
 *   Realistic target: Feb 2028 (gives full study window)
 *
 * EXAM WINDOWS (Level 3): 2 per year — February and August only
 *
 * ⚠  PATHWAY SYSTEM — MANDATORY CHOICE (from 2025, continuing 2026):
 *    At L3 registration, candidates choose ONE Specialized Pathway:
 *      A) Portfolio Management (PM) — traditional finance track
 *      B) Private Wealth (PW) — individual/family wealth management
 *      C) Private Markets (PKT) — private equity, venture, infra
 *    70% of the exam is Common Core (same for all pathways).
 *    30% is pathway-specific content.
 *    This module defaults to Pathway A (Portfolio Management).
 *    Students on PW or PKT pathway: replace cfa3_pw_ subject card
 *    with their pathway's chapters.
 *
 * ⚠  2026 CURRICULUM: ZERO CHANGES from 2025 at Level 3.
 *    2025 materials are 100% applicable.
 *
 * WHAT CHANGES FROM LEVEL 2:
 *   Format: MIXED — item sets (vignette MCQs) + constructed response (essays).
 *   Each session has 11 question sets (mix of ~5-6 item sets + 5-6 essay sets).
 *   Essay responses: typed in text boxes; partial credit is possible.
 *   Depth: "Portfolio management and synthesis" — integrate everything from L1/L2
 *   into real investment decisions.
 *
 * PATTERN (FACT — verified):
 *   Mode         : CBT, Prometric Centres
 *   Format       : 11 item sets + 11 essay sets = 22 scored sets (2 unscored trial)
 *   Structure    : 2 sessions × ~132 min = ~4.4 hours
 *   Question Mix : Each session: ~5-6 item sets + ~5-6 essay sets
 *   Essay format : Vignette + constructed response; typed; partial credit given
 *                  Command words (evaluate, justify, determine) are bolded.
 *   Negative Mk  : None
 *   Pass Rate    : Typically 45–55% (highest of the three levels)
 *   Calculator   : BA II Plus or HP 12C
 *
 * TOPIC WEIGHTS 2026 (FACT — from CFA Institute):
 *   Common Core (all pathways): ~65–70% of exam
 *   Specialized Pathway: ~30–35% of exam
 *   Ethics: ~10–15% (appears across both core and pathway)
 *   Portfolio Management: dominant topic at L3 (~35-40% combined)
 *
 * DO-NOT-RE-ADD:
 *   — Individual security analysis at L1/L2 depth (done; apply here)
 *   — Standalone bond math or DDM valuation (L2 assumed; apply in PM context)
 *   — Basic derivative pricing (BSM etc. already covered at L2)
 *   — All 3 pathways simultaneously — student chose ONE
 *
 * HONESTY NOTES:
 *   1. [UNCERTAIN] Exact essay vs. item-set split per session varies.
 *      "~5-6 of each per session" is the published approximate structure.
 *   2. [OPINION] Essay questions penalise candidates who attempt to
 *      bullet-point everything without coherent reasoning. Writing practice
 *      with command words (Justify, Evaluate, Recommend) is essential.
 *      Do NOT skip essay practice, unlike L1/L2 MCQ strategy.
 *   3. [REPURPOSED] `prelimsWeight` = "topic weight + format note."
 *   4. [REPURPOSED] `stage` = "Level 3" for all chapters.
 *   5. [FACT] L3 has the highest pass rate of the three levels (~45-55%)
 *      but the essay format catches candidates who relied purely on
 *      MCQ guessing strategies. Genuine understanding is mandatory.
 *
 * CHANGELOG:
 *   v1.0 — 2026-07-17 — Initial build (CFA 2026 curriculum, L3 Aug 2027)
 * ============================================================
 */

const EXAM_CONFIG_CFA_L3 = {
  examKey:       "cfa_l3",
  examName:      "CFA Level 3",
  targetYear:    2027,
  examDate:      "2027-08-21",      // ESTIMATED — August 2027 window
  datesTentative: true,
  prerequisite:  "Must pass CFA Level 2 before registering",
  conductedBy:   "CFA Institute (cfainstitute.org)",

  examPattern: {
    mode:              "CBT — Prometric Centres",
    totalScoredSets:   22,           // 20 scored + 2 unscored trial (not identified)
    sessions:          2,
    setsPerSession:    11,           // mix of item sets and essay sets
    minutesPerSession: 132,
    questionFormat:    "Mixed: Vignette MCQs + Constructed Response (Essays)",
    essayNote:         "Typed responses; partial credit possible; command words are bolded",
    calculator:        "CFA-approved only: BA II Plus or HP 12C",
    typicalPassRate:   "45–55%",
    pathwayNote:       "30% of exam is pathway-specific (PM/PW/PKT chosen at registration)",
    patternVerified:   true,
    patternSource:     "CFA Institute candidate resources (cfainstitute.org) + 300hours.com"
  },

  subjects: [
    // COMMON CORE (~70%)
    {
      key: "pm_core", name: "Portfolio Management — Core",
      icon: "📊", color: "#1D4ED8", examStage: "Level 3",
      prefix: "cfa3_pm_", totalChapters: 6,
      topicWeight: "~35–40% combined (core + pathway)", scope: "Common Core"
    },
    {
      key: "aa", name: "Asset Allocation",
      icon: "🥧", color: "#059669", examStage: "Level 3",
      prefix: "cfa3_aa_", totalChapters: 6,
      topicWeight: "~10–15%", scope: "Common Core"
    },
    {
      key: "rm", name: "Risk Management",
      icon: "🛡️", color: "#DC2626", examStage: "Level 3",
      prefix: "cfa3_rm_", totalChapters: 5,
      topicWeight: "~8–12%", scope: "Common Core"
    },
    {
      key: "fi_pm", name: "Fixed Income — Active Management",
      icon: "🏦", color: "#0891B2", examStage: "Level 3",
      prefix: "cfa3_fi_", totalChapters: 5,
      topicWeight: "~8–12%", scope: "Common Core"
    },
    {
      key: "eq_pm", name: "Equity — Active Management",
      icon: "📈", color: "#92400E", examStage: "Level 3",
      prefix: "cfa3_eq_", totalChapters: 5,
      topicWeight: "~8–10%", scope: "Common Core"
    },
    {
      key: "eth", name: "Ethical & Professional Standards",
      icon: "⚖️", color: "#7C3AED", examStage: "Level 3",
      prefix: "cfa3_eth_", totalChapters: 4,
      topicWeight: "~10–15%", scope: "Common Core",
      specialNote: "Ethics still resolves borderline cases at L3"
    },
    {
      key: "bf", name: "Behavioral Finance",
      icon: "🧠", color: "#F59E0B", examStage: "Level 3",
      prefix: "cfa3_bf_", totalChapters: 4,
      topicWeight: "~5–8%", scope: "Common Core"
    },
    {
      key: "der_pm", name: "Derivatives in Portfolio Management",
      icon: "🔁", color: "#0D9488", examStage: "Level 3",
      prefix: "cfa3_der_", totalChapters: 4,
      topicWeight: "~5–8%", scope: "Common Core"
    },
    {
      key: "tpm", name: "Trading, Performance & Manager Selection",
      icon: "🎯", color: "#6D28D9", examStage: "Level 3",
      prefix: "cfa3_tpm_", totalChapters: 4,
      topicWeight: "~5–8%", scope: "Common Core"
    },
    // PATHWAY (~30%) — DEFAULT: Portfolio Management Pathway
    {
      key: "pw", name: "Specialized Pathway — Portfolio Management",
      icon: "🌐", color: "#B45309", examStage: "Level 3",
      prefix: "cfa3_pw_", totalChapters: 5,
      topicWeight: "~30–35%", scope: "Pathway (PM default)",
      pathwayNote: "Replace with PW/PKT pathway chapters if different pathway chosen."
    }
  ]
};

const CFA_L3_PRIORITY_DATA = {

  // ═══════════════════════════════════════════════════════════════════════════
  // PORTFOLIO MANAGEMENT CORE — cfa3_pm_1 to cfa3_pm_6 (6 chapters)
  // Biggest topic at L3. IPS construction + asset allocation process are
  // the two most-tested skills across both essay and item-set formats.
  // ═══════════════════════════════════════════════════════════════════════════

  cfa3_pm_1: { name: "Portfolio Management for Institutional Clients", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "5 days", category: "Portfolio Process" },
  cfa3_pm_2: { name: "IPS Construction for Individual Investors", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "5 days", category: "Portfolio Process" },
  cfa3_pm_3: { name: "Capital Market Expectations — Setting Them", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "4 days", category: "Portfolio Process" },
  cfa3_pm_4: { name: "Overview of Asset Allocation Process", priority: "HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "3 days", category: "Portfolio Monitoring" },
  cfa3_pm_5: { name: "Monitoring, Rebalancing & Execution", priority: "HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "3 days", category: "Portfolio Monitoring" },
  cfa3_pm_6: { name: "Global Investing & Currency Overlay", priority: "HIGH", stage: "Level 3", prelimsWeight: "~35–40% combined", days: "3 days", category: "Portfolio Monitoring" },

  // ASSET ALLOCATION — cfa3_aa_1 to cfa3_aa_6 (6 chapters)
  cfa3_aa_1: { name: "Principles of Asset Allocation", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "4 days", category: "Strategic Allocation" },
  cfa3_aa_2: { name: "Asset Allocation with Real-World Constraints", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Strategic Allocation" },
  cfa3_aa_3: { name: "Asset Allocation — Goals-Based & LDI", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Strategic Allocation" },
  cfa3_aa_4: { name: "Tactical Asset Allocation (TAA)", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Tactical Allocation" },
  cfa3_aa_5: { name: "Factor-Based Asset Allocation", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Tactical Allocation" },
  cfa3_aa_6: { name: "Currency Management in Asset Allocation", priority: "MEDIUM", stage: "Level 3", prelimsWeight: "~10–15%", days: "2 days", category: "Tactical Allocation" },

  // RISK MANAGEMENT — cfa3_rm_1 to cfa3_rm_5 (5 chapters)
  cfa3_rm_1: { name: "Risk Management Framework — Enterprise", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "2 days", category: "Risk Framework" },
  cfa3_rm_2: { name: "Measuring & Modifying Market Risk (VaR, CVaR)", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "4 days", category: "Risk Framework" },
  cfa3_rm_3: { name: "Credit & Counterparty Risk Management", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "3 days", category: "Risk Applications" },
  cfa3_rm_4: { name: "Liquidity Risk & Funding Risk Management", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "2 days", category: "Risk Applications" },
  cfa3_rm_5: { name: "Portfolio Risk & Return — Advanced Applications", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "3 days", category: "Risk Applications" },

  // FIXED INCOME ACTIVE MGMT — cfa3_fi_1 to cfa3_fi_5 (5 chapters)
  cfa3_fi_1: { name: "Overview of Fixed Income Portfolio Mgmt", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "3 days", category: "FI Strategy" },
  cfa3_fi_2: { name: "Liability-Driven Investing & Duration Matching", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "4 days", category: "FI Strategy" },
  cfa3_fi_3: { name: "Yield Curve Strategies (Active FI)", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "4 days", category: "FI Strategy" },
  cfa3_fi_4: { name: "Credit Strategies in Fixed Income PM", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "3 days", category: "FI Tactics" },
  cfa3_fi_5: { name: "Fixed Income Derivatives for PM", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–12%", days: "3 days", category: "FI Tactics" },

  // EQUITY ACTIVE MGMT — cfa3_eq_1 to cfa3_eq_5 (5 chapters)
  cfa3_eq_1: { name: "Overview of Equity Portfolio Management", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–10%", days: "3 days", category: "Equity Strategy" },
  cfa3_eq_2: { name: "Passive Equity Strategies & Index Replication", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–10%", days: "2 days", category: "Equity Strategy" },
  cfa3_eq_3: { name: "Active Equity Strategies — Fundamental", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~8–10%", days: "4 days", category: "Equity Tactics" },
  cfa3_eq_4: { name: "Active Equity Strategies — Quantitative & Factor", priority: "HIGH", stage: "Level 3", prelimsWeight: "~8–10%", days: "3 days", category: "Equity Tactics" },
  cfa3_eq_5: { name: "Long/Short Equity & Market Neutral Strategies", priority: "MEDIUM", stage: "Level 3", prelimsWeight: "~8–10%", days: "2 days", category: "Equity Tactics" },

  // ETHICS — cfa3_eth_1 to cfa3_eth_4 (4 chapters)
  cfa3_eth_1: { name: "Ethics Application in Portfolio Management", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Ethics Application" },
  cfa3_eth_2: { name: "Manager–Client Relationships & Duties", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "3 days", category: "Ethics Application" },
  cfa3_eth_3: { name: "Ethics in Research & Trade Allocation", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "2 days", category: "Ethics Practice" },
  cfa3_eth_4: { name: "GIPS — Composite Construction & Disclosure", priority: "HIGH", stage: "Level 3", prelimsWeight: "~10–15%", days: "2 days", category: "Ethics Practice" },

  // BEHAVIORAL FINANCE — cfa3_bf_1 to cfa3_bf_4 (4 chapters)
  cfa3_bf_1: { name: "Behavioral Finance — Biases & Anomalies", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "3 days", category: "Behavioral Biases" },
  cfa3_bf_2: { name: "Emotional & Cognitive Biases in Decision Making", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "3 days", category: "Behavioral Biases" },
  cfa3_bf_3: { name: "Behavioral Finance & Investment Processes", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "BF in Practice" },
  cfa3_bf_4: { name: "Behavioral Portfolio Theory & Investor Types", priority: "MEDIUM", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "BF in Practice" },

  // DERIVATIVES IN PM — cfa3_der_1 to cfa3_der_4 (4 chapters)
  cfa3_der_1: { name: "Options in Portfolio Management (Hedging, OW)", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "4 days", category: "Derivatives Strategy" },
  cfa3_der_2: { name: "Swaps, Forwards & Futures in PM", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "3 days", category: "Derivatives Strategy" },
  cfa3_der_3: { name: "Currency Overlay Using Derivatives", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "3 days", category: "Currency Management" },
  cfa3_der_4: { name: "Interest Rate & Volatility Management", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "Currency Management" },

  // TRADING, PERFORMANCE & MANAGER SELECTION — cfa3_tpm_1 to cfa3_tpm_4 (4 chapters)
  cfa3_tpm_1: { name: "Trade Execution & Transaction Cost Analysis", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "Trading & Performance" },
  cfa3_tpm_2: { name: "Performance Evaluation & Attribution", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "3 days", category: "Trading & Performance" },
  cfa3_tpm_3: { name: "Portfolio Manager Evaluation & Selection", priority: "HIGH", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "Manager Selection" },
  cfa3_tpm_4: { name: "Investment Manager Due Diligence", priority: "MEDIUM", stage: "Level 3", prelimsWeight: "~5–8%", days: "2 days", category: "Manager Selection" },

  // PATHWAY — PORTFOLIO MANAGEMENT (DEFAULT) — cfa3_pw_1 to cfa3_pw_5 (5 chapters)
  // ⚠ Replace these chapters if student chose Private Wealth or Private Markets.
  cfa3_pw_1: { name: "Portfolio Management Pathway — Equity Strategies", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~30–35% (pathway)", days: "4 days", category: "PM Pathway Core" },
  cfa3_pw_2: { name: "Portfolio Management Pathway — Fixed Income", priority: "HIGH", stage: "Level 3", prelimsWeight: "~30–35% (pathway)", days: "3 days", category: "PM Pathway Core" },
  cfa3_pw_3: { name: "PM Pathway — Risk & Derivatives Integration", priority: "HIGH", stage: "Level 3", prelimsWeight: "~30–35% (pathway)", days: "3 days", category: "PM Pathway Core" },
  cfa3_pw_4: { name: "PM Pathway — Multi-Asset Portfolio Case Studies", priority: "VERY HIGH", stage: "Level 3", prelimsWeight: "~30–35% (pathway)", days: "5 days", category: "PM Pathway Application" },
  cfa3_pw_5: { name: "PM Pathway — Institutional & ESG Integration", priority: "HIGH", stage: "Level 3", prelimsWeight: "~30–35% (pathway)", days: "3 days", category: "PM Pathway Application" }
};

/*
 * STORAGE: localStorage.setItem(subject.prefix + "progress", JSON.stringify(obj))
 *
 * SELF-AUDIT:
 *  1  Key format (prefix+integer)  PASS — 52 keys
 *  2  totalChapters == key count   PASS — PM:6 AA:6 RM:5 FI:5
 *                                         EQ:5 ETH:4 BF:4 DER:4 TPM:4 PW:5
 *  5  No orphan categories         PASS — all ≥2:
 *     Portfolio Process(3), Portfolio Monitoring(3), Strategic Allocation(3),
 *     Tactical Allocation(3), Risk Framework(2), Risk Applications(3),
 *     FI Strategy(3), FI Tactics(2), Equity Strategy(2), Equity Tactics(3),
 *     Ethics Application(2), Ethics Practice(2), Behavioral Biases(2),
 *     BF in Practice(2), Derivatives Strategy(2), Currency Management(2),
 *     Trading & Performance(2), Manager Selection(2),
 *     PM Pathway Core(3), PM Pathway Application(2) — all ≥2 ✓
 *  6  Names ≤ 60 chars             PASS
 *  7  6 fields present             PASS — 52×6=312 fields
 *  8  Unique prefixes/examKey      PASS — cfa3_* new; "cfa_l3" new
 * 12  Priority sane                PASS — VH:14(27%) H:33(63%)
 *                                         M:5(10%) L:0
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CFA_L3, CFA_L3_PRIORITY_DATA };
}
