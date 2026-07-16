/* ============================================================================
 * rrb_ntpc_exam_data.js — RRB NTPC module for Arpit's Exam Hub
 * ============================================================================
 */

const EXAM_CONFIG_RRB_NTPC = {
  examKey: "rrb_ntpc_next",
  examName: "RRB NTPC (Graduate & Undergraduate)",
  targetYear: 2027,
  examDate: "2027-03-01",
  datesTentative: true,
  notificationExpected: "2026-08-01",
  levels: "Two separate CENs: Graduate (Levels 5 & 6) and Undergraduate (Levels 2 & 3). Same structure, different difficulty standard and vacancies.",

  previousCycleStatus: {
    graduate:      "CEN 06/2025 — 5,810 posts. CBT 1 16–27 Mar 2026 (~28 lakh appeared). Result 11 Jun 2026, ~87–88k shortlisted. CBT 2 held 10 Jul 2026; answer key out. CBAT/Typing/DV pending.",
    undergraduate: "CEN 07/2025 — 3,058 vacancies. CBT 1 held May–Jun 2026. Answer key out; objection window closed 5 Jul 2026. CBT 1 result expected Aug 2026, then CBT 2. THIS COHORT CAN STILL USE THIS MODULE for CBT 2 prep.",
    note: "Both cycles are past their first-pass prep window. Neither is a valid target for a fresh study plan."
  },

  examPattern: {
    stages: "CBT 1 (qualifying) → CBT 2 (merit-deciding) → CBAT or Typing Skill Test (post-dependent) → Document Verification → Medical.",
    cbt1: {
      totalQuestions: 100, totalMarks: 100, durationMinutes: 90,
      sections: [
        { name: "General Awareness",                  questions: 40 },
        { name: "Mathematics",                        questions: 30 },
        { name: "General Intelligence & Reasoning",   questions: 30 }
      ],
      role: "QUALIFYING ONLY — marks do NOT enter the final merit list. Shortlist ≈ 20× vacancies on normalized score."
    },
    cbt2: {
      totalQuestions: 120, totalMarks: 120, durationMinutes: 90,
      sections: [
        { name: "General Awareness",                  questions: 50 },
        { name: "Mathematics",                        questions: 35 },
        { name: "General Intelligence & Reasoning",   questions: 35 }
      ],
      role: "MERIT-DECIDING — the final list is built from CBT 2 alone.",
      levelNote: "Structure identical for Graduate and UG; difficulty tracks the post's educational qualification."
    },
    marking: "+1 correct; −1/3 wrong; 0 unattempted. Both CBTs.",
    normalization: "Normalized across shifts. Normalized CBT 1 score shortlists for CBT 2; normalized CBT 2 score shortlists for Skill/Aptitude test.",
    qualifyingMarks: "UR 40% · EWS 40% · OBC-NCL 30% · SC 30% · ST 25%. (2% PwBD relaxation where reserved vacancies fall short.) NOTE: ST is 25% here vs 30% in Group D.",
    cbat: "Station Master & Traffic Assistant only. Psychometric batteries; minimum T-Score 42 in EACH, no category relaxation. English/Hindi only. NO negative marking. Merit for these posts = 70% CBT 2 + 30% CBAT.",
    typingTest: "Typist posts only (Sr Clerk cum Typist, Jr Accounts Assistant cum Typist). 30 wpm English or 25 wpm Hindi on a PC; no editing tools or spell-check. Qualifying only — merit still from CBT 2. ~8× vacancies called. PwBD exemptions apply with a Competent Medical Board certificate.",
    lastPatternChange: "None reported. RRB has held the NTPC CBT structure stable across recent cycles.",
    patternVerified: true
  },

  subjects: [
    { key: "ga",   name: "General Awareness",                icon: "🌏", color: "#6C3483", examStage: "CBT 1: 40 Qs · CBT 2: 50 Qs", prefix: "ntpc_ga_",   totalChapters: 23 },
    { key: "reas", name: "General Intelligence & Reasoning", icon: "🧩", color: "#1A5276", examStage: "CBT 1: 30 Qs · CBT 2: 35 Qs", prefix: "ntpc_reas_", totalChapters: 19 },
    { key: "math", name: "Mathematics",                      icon: "🔢", color: "#B9770E", examStage: "CBT 1: 30 Qs · CBT 2: 35 Qs", prefix: "ntpc_math_", totalChapters: 20 }
  ]
};

const RRB_NTPC_PRIORITY_DATA = {
  /* ---- GENERAL AWARENESS (ntpc_ga_, 23) ----- */
  ntpc_ga_1:  { name: "Current Events of National & International Importance", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 8–12 Qs / CBT2 10–15 Qs; largest block", days: "20 days", category: "Current Affairs & Personalities" },
  ntpc_ga_2:  { name: "Games and Sports",                          priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs",  days: "3 days", category: "Current Affairs & Personalities" },
  ntpc_ga_3:  { name: "Famous Personalities of India and the World", priority: "MEDIUM",   stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 2–3 Qs",  days: "3 days", category: "Current Affairs & Personalities" },
  ntpc_ga_4:  { name: "Flagship Government Programmes",            priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs",  days: "3 days", category: "Current Affairs & Personalities" },
  ntpc_ga_5:  { name: "Art and Culture of India",                   priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 2–3 Qs",  days: "4 days", category: "Art, Culture & Literature" },
  ntpc_ga_6:  { name: "Indian Literature",                          priority: "LOW",       stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–1 Qs / CBT2 1–2 Qs",  days: "2 days", category: "Art, Culture & Literature" },
  ntpc_ga_7:  { name: "Monuments and Places of India",              priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs",  days: "2 days", category: "Art, Culture & Literature" },
  ntpc_ga_8:  { name: "General Science — Physics (up to 10th CBSE)", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "Science block: CBT1 8–10 Qs / CBT2 10–13 Qs", days: "8 days", category: "General Science (a GA topic, not a section)" },
  ntpc_ga_9:  { name: "General Science — Chemistry (up to 10th CBSE)", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "Science block: CBT1 8–10 Qs / CBT2 10–13 Qs", days: "8 days", category: "General Science (a GA topic, not a section)" },
  ntpc_ga_10: { name: "General Science — Life Science (up to 10th CBSE)", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "Science block: CBT1 8–10 Qs / CBT2 10–13 Qs", days: "8 days", category: "General Science (a GA topic, not a section)" },
  ntpc_ga_11: { name: "Scientific & Technological Developments",    priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "Science block: CBT1 8–10 Qs / CBT2 10–13 Qs", days: "4 days", category: "General Science (a GA topic, not a section)" },
  ntpc_ga_12: { name: "History of India and Freedom Struggle",      priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 4–6 Qs / CBT2 5–7 Qs",  days: "10 days", category: "History & Polity" },
  ntpc_ga_13: { name: "Indian Polity, Governance and Constitution", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 4–6 Qs / CBT2 5–7 Qs",  days: "8 days", category: "History & Polity" },
  ntpc_ga_14: { name: "Physical, Social & Economic Geography of India", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 3–5 Qs / CBT2 4–6 Qs", days: "7 days", category: "Geography & Environment" },
  ntpc_ga_15: { name: "Physical, Social & Economic Geography — World", priority: "MEDIUM",  stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 2–3 Qs",  days: "4 days", category: "Geography & Environment" },
  ntpc_ga_16: { name: "Environmental Issues Concerning India & World", priority: "MEDIUM",  stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs",  days: "3 days", category: "Geography & Environment" },
  ntpc_ga_17: { name: "Flora and Fauna of India",                   priority: "LOW",       stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–1 Qs / CBT2 1–2 Qs",  days: "2 days", category: "Geography & Environment" },
  ntpc_ga_18: { name: "Indian Economy",                             priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 3–4 Qs",  days: "5 days", category: "Economy & Institutions" },
  ntpc_ga_19: { name: "UN and Other Important World Organizations",  priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs",  days: "2 days", category: "Economy & Institutions" },
  ntpc_ga_20: { name: "Transport Systems in India",                 priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 2–3 Qs; free marks — it's their own org", days: "3 days", category: "Economy & Institutions" },
  ntpc_ga_21: { name: "Important Government & Public Sector Bodies", priority: "LOW",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–1 Qs / CBT2 1–2 Qs",  days: "2 days", category: "Economy & Institutions" },
  ntpc_ga_22: { name: "Basics of Computers and Computer Applications", priority: "HIGH",   stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 3–4 Qs; a GA topic, NOT a section", days: "4 days", category: "Computers & Static" },
  ntpc_ga_23: { name: "Common Abbreviations",                       priority: "LOW",       stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–1 Qs / CBT2 1–2 Qs",  days: "1 days", category: "Computers & Static" },

  /* ---- GENERAL INTELLIGENCE & REASONING (ntpc_reas_, 19) ------------- */
  ntpc_reas_1:  { name: "Analogies",                               priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–4 Qs / CBT2 3–4 Qs", days: "2 days", category: "Series, Analogy & Coding" },
  ntpc_reas_2:  { name: "Completion of Number and Alphabetical Series", priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 3–5 Qs / CBT2 3–5 Qs", days: "3 days", category: "Series, Analogy & Coding" },
  ntpc_reas_3:  { name: "Coding and Decoding",                     priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–4 Qs / CBT2 3–4 Qs", days: "3 days", category: "Series, Analogy & Coding" },
  ntpc_reas_4:  { name: "Similarities and Differences",            priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "1 days", category: "Series, Analogy & Coding" },
  ntpc_reas_5:  { name: "Mathematical Operations",                 priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–3 Qs", days: "2 days", category: "Data & Operations" },
  ntpc_reas_6:  { name: "Analytical Reasoning",                    priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–4 Qs", days: "3 days", category: "Data & Operations" },
  ntpc_reas_7:  { name: "Data Sufficiency",                        priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs", days: "2 days", category: "Data & Operations" },
  ntpc_reas_8:  { name: "Relationships (Blood Relations)",         priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "2 days", category: "Relations & Direction" },
  ntpc_reas_9:  { name: "Directions and Distance",                 priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "2 days", category: "Relations & Direction" },
  ntpc_reas_10: { name: "Syllogism",                               priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–4 Qs / CBT2 3–4 Qs; near-guaranteed marks", days: "3 days", category: "Logical Deduction" },
  ntpc_reas_11: { name: "Venn Diagrams",                           priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "2 days", category: "Logical Deduction" },
  ntpc_reas_12: { name: "Statement — Conclusion",                  priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "2 days", category: "Logical Deduction" },
  ntpc_reas_13: { name: "Statement — Courses of Action",           priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "2 days", category: "Logical Deduction" },
  ntpc_reas_14: { name: "Decision Making",                         priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "2 days", category: "Logical Deduction" },
  ntpc_reas_15: { name: "Jumbling",                                priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "1 days", category: "Arrangement & Puzzles" },
  ntpc_reas_16: { name: "Puzzles",                                 priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–4 Qs / CBT2 3–5 Qs", days: "4 days", category: "Arrangement & Puzzles" },
  ntpc_reas_17: { name: "Seating Arrangement",                     priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs", days: "4 days", category: "Arrangement & Puzzles" },
  ntpc_reas_18: { name: "Maps",                                    priority: "LOW",       stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–1 Qs / CBT2 0–2 Qs", days: "1 days", category: "Maps & Graphs" },
  ntpc_reas_19: { name: "Interpretation of Graphs",                priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs", days: "2 days", category: "Maps & Graphs" },

  /* ---- MATHEMATICS (ntpc_math_, 20) -------- */
  ntpc_math_1:  { name: "Number System",                           priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs", days: "3 days", category: "Arithmetic Basics" },
  ntpc_math_2:  { name: "Simplification and BODMAS",               priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs; fastest marks", days: "2 days", category: "Arithmetic Basics" },
  ntpc_math_3:  { name: "Decimals and Fractions",                  priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs", days: "2 days", category: "Arithmetic Basics" },
  ntpc_math_4:  { name: "LCM and HCF",                             priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "2 days", category: "Arithmetic Basics" },
  ntpc_math_5:  { name: "Ratio and Proportion",                    priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs; underpins the section", days: "3 days", category: "Ratio & Percentage Family" },
  ntpc_math_6:  { name: "Percentages",                             priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs; underpins the section", days: "3 days", category: "Ratio & Percentage Family" },
  ntpc_math_7:  { name: "Profit and Loss",                         priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 3–4 Qs", days: "3 days", category: "Ratio & Percentage Family" },
  ntpc_math_8:  { name: "Simple Interest",                         priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "2 days", category: "Interest & Average" },
  ntpc_math_9:  { name: "Compound Interest",                       priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–2 Qs", days: "2 days", category: "Interest & Average" },
  ntpc_math_10: { name: "Averages",                                priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs", days: "2 days", category: "Interest & Average" },
  ntpc_math_11: { name: "Time and Work",                           priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs", days: "3 days", category: "Application Arithmetic" },
  ntpc_math_12: { name: "Time and Distance",                       priority: "VERY HIGH", stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs", days: "3 days", category: "Application Arithmetic" },
  ntpc_math_13: { name: "Pipes and Cistern",                       priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–2 Qs / CBT2 1–2 Qs", days: "1 days", category: "Application Arithmetic" },
  ntpc_math_14: { name: "Age Calculations",                        priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–2 Qs / CBT2 1–2 Qs", days: "1 days", category: "Application Arithmetic" },
  ntpc_math_15: { name: "Mensuration",                             priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 2–3 Qs / CBT2 2–4 Qs", days: "4 days", category: "Geometry & Mensuration" },
  ntpc_math_16: { name: "Geometry",                                priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "4 days", category: "Geometry & Mensuration" },
  ntpc_math_17: { name: "Trigonometry",                            priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs", days: "3 days", category: "Geometry & Mensuration" },
  ntpc_math_18: { name: "Elementary Algebra",                      priority: "HIGH",      stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–3 Qs / CBT2 2–3 Qs", days: "3 days", category: "Algebra & Statistics" },
  ntpc_math_19: { name: "Elementary Statistics",                   priority: "MEDIUM",    stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 1–2 Qs / CBT2 1–3 Qs; NTPC-only vs Group D", days: "3 days", category: "Algebra & Statistics" },
  ntpc_math_20: { name: "Calendar and Clock",                      priority: "LOW",       stage: "CBT 1 & CBT 2", prelimsWeight: "CBT1 0–2 Qs / CBT2 0–2 Qs", days: "2 days", category: "Algebra & Statistics" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_RRB_NTPC, RRB_NTPC_PRIORITY_DATA };
}
