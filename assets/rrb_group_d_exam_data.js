/* ============================================================================
 * rrb_group_d_exam_data.js — RRB Group D module for Arpit's Exam Hub
 * ============================================================================
 */

const EXAM_CONFIG_RRB_GROUP_D = {
  examKey: "rrb_group_d_2026",
  examName: "RRB Group D (Level 1) — CEN 09/2025",
  targetYear: 2026,
  examDate: "2026-08-03",            // CBT window 3–21 Aug 2026
  datesTentative: false,
  datesVerified: true,
  examWindow: "2026-08-03 to 2026-08-21",
  notificationDate: "2026-01-30",
  vacancies: 22195,
  cenNumber: "CEN 09/2025",

  examPattern: {
    stages: "Single CBT → PET (qualifying) → Document Verification → Medical → Empanelment.",
    cbt2Clause: "RRB reserves the right to hold a 2nd stage CBT and treat CBT-1 as qualifying.",
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    marking: "+1 correct; −1/3 wrong; 0 unattempted.",
    sections: [
      { name: "General Science",                    questions: 25 },
      { name: "Mathematics",                        questions: 25 },
      { name: "General Intelligence & Reasoning",   questions: 30 },
      { name: "General Awareness & Current Affairs", questions: 20 }
    ],
    sectionSplitCaveat: "RRB states the section-wise distribution is INDICATIVE; actual papers may vary.",
    normalization: "Percentile-method normalization across shifts. Merit uses normalized CBT score only.",
    qualifyingMarks: "UR 40% · EWS 40% · OBC-NCL 30% · SC 30% · ST 30%.",
    languages: "15 languages. English is default and prevails over the chosen language in any discrepancy.",
    pet: "Qualifying only, adds nothing to merit. ~3× vacancies called. Male: 35 kg / 100 m / 2 min, and 1000 m in 4:15. Female: 20 kg / 100 m / 2 min, and 1000 m in 5:40. One chance each.",
    dv: "~2× vacancies called after CBT+PET, per merit and post options.",
    tieBreak: "Older candidate ranks higher; then alphabetical order of name (A–Z).",
    lastPatternChange: "CBT-2 removed — single CBT now.",
    patternVerified: true
  },

  subjects: [
    { key: "reas", name: "General Intelligence & Reasoning", icon: "🧩", color: "#2E86C1", examStage: "CBT — 30 questions", prefix: "rrbd_reas_", totalChapters: 16 },
    { key: "sci",  name: "General Science",                  icon: "🔬", color: "#229954", examStage: "CBT — 25 questions", prefix: "rrbd_sci_",  totalChapters: 21 },
    { key: "math", name: "Mathematics",                      icon: "🔢", color: "#CA6F1E", examStage: "CBT — 25 questions", prefix: "rrbd_math_", totalChapters: 18 },
    { key: "ga",   name: "General Awareness & Current Affairs", icon: "🌏", color: "#7D3C98", examStage: "CBT — 20 questions", prefix: "rrbd_ga_",   totalChapters: 16 }
  ]
};

const RRB_GROUP_D_PRIORITY_DATA = {
  /* ---- GENERAL INTELLIGENCE & REASONING (rrbd_reas_, 16) ----- */
  rrbd_reas_1:  { name: "Analogies",                                priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–4 Qs",  days: "2 days", category: "Series, Analogy & Classification" },
  rrbd_reas_2:  { name: "Alphabetical and Number Series",           priority: "VERY HIGH", stage: "CBT", prelimsWeight: "3–5 Qs",  days: "3 days", category: "Series, Analogy & Classification" },
  rrbd_reas_3:  { name: "Coding and Decoding",                      priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–4 Qs",  days: "3 days", category: "Series, Analogy & Classification" },
  rrbd_reas_4:  { name: "Similarities and Differences",             priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs",  days: "1 days", category: "Series, Analogy & Classification" },
  rrbd_reas_5:  { name: "Classification (Odd One Out)",             priority: "HIGH",      stage: "CBT", prelimsWeight: "1–3 Qs",  days: "1 days", category: "Series, Analogy & Classification" },
  rrbd_reas_6:  { name: "Mathematical Operations",                  priority: "HIGH",      stage: "CBT", prelimsWeight: "2–3 Qs",  days: "2 days", category: "Data & Operations" },
  rrbd_reas_7:  { name: "Data Interpretation and Sufficiency",      priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Data & Operations" },
  rrbd_reas_8:  { name: "Relationships (Blood Relations)",          priority: "HIGH",      stage: "CBT", prelimsWeight: "1–3 Qs",  days: "2 days", category: "Relations & Direction" },
  rrbd_reas_9:  { name: "Directions and Distance",                  priority: "HIGH",      stage: "CBT", prelimsWeight: "1–3 Qs",  days: "2 days", category: "Relations & Direction" },
  rrbd_reas_10: { name: "Syllogism",                                priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–4 Qs; near-guaranteed marks", days: "3 days", category: "Logical Deduction" },
  rrbd_reas_11: { name: "Venn Diagrams",                            priority: "HIGH",      stage: "CBT", prelimsWeight: "1–3 Qs",  days: "2 days", category: "Logical Deduction" },
  rrbd_reas_12: { name: "Statement — Conclusions & Decision Making", priority: "MEDIUM",   stage: "CBT", prelimsWeight: "1–3 Qs",  days: "2 days", category: "Logical Deduction" },
  rrbd_reas_13: { name: "Statement — Arguments and Assumptions",    priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Logical Deduction" },
  rrbd_reas_14: { name: "Jumbling",                                 priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs",  days: "1 days", category: "Arrangement & Puzzles" },
  rrbd_reas_15: { name: "Puzzles and Seating Arrangement",          priority: "HIGH",      stage: "CBT", prelimsWeight: "2–4 Qs",  days: "4 days", category: "Arrangement & Puzzles" },
  rrbd_reas_16: { name: "Analytical Reasoning",                     priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Arrangement & Puzzles" },

  /* ---- GENERAL SCIENCE (rrbd_sci_, 21) ----- */
  rrbd_sci_1:  { name: "Motion, Force and Laws of Motion",          priority: "HIGH",      stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "3 days", category: "Physics" },
  rrbd_sci_2:  { name: "Work, Energy and Power",                    priority: "HIGH",      stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "2 days", category: "Physics" },
  rrbd_sci_3:  { name: "Gravitation, Pressure and Floatation",      priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "2 days", category: "Physics" },
  rrbd_sci_4:  { name: "Light — Reflection and Refraction",         priority: "VERY HIGH", stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "3 days", category: "Physics" },
  rrbd_sci_5:  { name: "Sound",                                     priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "2 days", category: "Physics" },
  rrbd_sci_6:  { name: "Electricity & Magnetic Effects of Current", priority: "VERY HIGH", stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "3 days", category: "Physics" },
  rrbd_sci_7:  { name: "Sources of Energy",                         priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Physics block: 8–9 Qs", days: "1 days", category: "Physics" },
  rrbd_sci_8:  { name: "Matter — Nature and Behaviour",             priority: "HIGH",      stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "2 days", category: "Chemistry" },
  rrbd_sci_9:  { name: "Atoms, Molecules and Structure of the Atom", priority: "HIGH",     stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "3 days", category: "Chemistry" },
  rrbd_sci_10: { name: "Chemical Reactions and Equations",          priority: "HIGH",      stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "2 days", category: "Chemistry" },
  rrbd_sci_11: { name: "Acids, Bases and Salts",                    priority: "VERY HIGH", stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "2 days", category: "Chemistry" },
  rrbd_sci_12: { name: "Metals and Non-Metals",                     priority: "VERY HIGH", stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "3 days", category: "Chemistry" },
  rrbd_sci_13: { name: "Carbon and its Compounds",                  priority: "HIGH",      stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "2 days", category: "Chemistry" },
  rrbd_sci_14: { name: "Periodic Classification of Elements",       priority: "HIGH",      stage: "CBT", prelimsWeight: "Chemistry block: 8–9 Qs", days: "2 days", category: "Chemistry" },
  rrbd_sci_15: { name: "Cell — Structure, Functions and Tissues",   priority: "HIGH",      stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "2 days", category: "Life Science" },
  rrbd_sci_16: { name: "Life Processes — Nutrition, Respiration, Transport", priority: "VERY HIGH", stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "3 days", category: "Life Science" },
  rrbd_sci_17: { name: "Control and Coordination",                  priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "2 days", category: "Life Science" },
  rrbd_sci_18: { name: "Reproduction, Heredity and Evolution",      priority: "HIGH",      stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "3 days", category: "Life Science" },
  rrbd_sci_19: { name: "Diversity in Living Organisms",             priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "2 days", category: "Life Science" },
  rrbd_sci_20: { name: "Our Environment and Natural Resources",     priority: "MEDIUM",    stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "2 days", category: "Life Science" },
  rrbd_sci_21: { name: "Human Health and Diseases",                 priority: "HIGH",      stage: "CBT", prelimsWeight: "Life Science block: 8–9 Qs", days: "2 days", category: "Life Science" },

  /* ---- MATHEMATICS (rrbd_math_, 18) ----- */
  rrbd_math_1:  { name: "Number System",                            priority: "HIGH",      stage: "CBT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Arithmetic Basics" },
  rrbd_math_2:  { name: "BODMAS and Simplification",                priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–3 Qs; fastest marks in the section", days: "2 days", category: "Arithmetic Basics" },
  rrbd_math_3:  { name: "Decimals and Fractions",                   priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Arithmetic Basics" },
  rrbd_math_4:  { name: "LCM and HCF",                              priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Arithmetic Basics" },
  rrbd_math_5:  { name: "Ratio and Proportion",                     priority: "VERY HIGH", stage: "CBT", prelimsWeight: "1–3 Qs; underpins half the section", days: "3 days", category: "Ratio & Percentage Family" },
  rrbd_math_6:  { name: "Percentages",                              priority: "VERY HIGH", stage: "CBT", prelimsWeight: "1–3 Qs; underpins half the section", days: "3 days", category: "Ratio & Percentage Family" },
  rrbd_math_7:  { name: "Profit and Loss",                          priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–3 Qs",  days: "3 days", category: "Ratio & Percentage Family" },
  rrbd_math_8:  { name: "Simple Interest",                          priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Interest & Average" },
  rrbd_math_9:  { name: "Compound Interest",                        priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Interest & Average" },
  rrbd_math_10: { name: "Averages",                                 priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Interest & Average" },
  rrbd_math_11: { name: "Time and Work",                            priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–3 Qs",  days: "3 days", category: "Application Arithmetic" },
  rrbd_math_12: { name: "Time, Speed and Distance",                 priority: "VERY HIGH", stage: "CBT", prelimsWeight: "2–3 Qs",  days: "3 days", category: "Application Arithmetic" },
  rrbd_math_13: { name: "Pipes and Cistern",                        priority: "MEDIUM",    stage: "CBT", prelimsWeight: "0–2 Qs",  days: "1 days", category: "Application Arithmetic" },
  rrbd_math_14: { name: "Age Calculations",                         priority: "MEDIUM",    stage: "CBT", prelimsWeight: "0–2 Qs",  days: "1 days", category: "Application Arithmetic" },
  rrbd_math_15: { name: "Mensuration (2D and 3D)",                  priority: "HIGH",      stage: "CBT", prelimsWeight: "2–3 Qs",  days: "4 days", category: "Geometry & Mensuration" },
  rrbd_math_16: { name: "Geometry and Trigonometry",                priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–3 Qs",  days: "4 days", category: "Geometry & Mensuration" },
  rrbd_math_17: { name: "Elementary Algebra",                       priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–3 Qs",  days: "3 days", category: "Algebra & Miscellaneous" },
  rrbd_math_18: { name: "Calendar and Clock",                       priority: "LOW",       stage: "CBT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "Algebra & Miscellaneous" },

  /* ---- GENERAL AWARENESS & CURRENT AFFAIRS (rrbd_ga_, 16) ----- */
  rrbd_ga_1:  { name: "Current Events of National & International Importance", priority: "VERY HIGH", stage: "CBT", prelimsWeight: "4–6 Qs; the largest GA block", days: "10 days", category: "Current Affairs & Personalities" },
  rrbd_ga_2:  { name: "Games and Sports",                           priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Current Affairs & Personalities" },
  rrbd_ga_3:  { name: "Famous Personalities of India and the World", priority: "MEDIUM",   stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Current Affairs & Personalities" },
  rrbd_ga_4:  { name: "Flagship Government Programmes",             priority: "HIGH",      stage: "CBT", prelimsWeight: "1–2 Qs",  days: "2 days", category: "Current Affairs & Personalities" },
  rrbd_ga_5:  { name: "Art, Culture and Literature of India",        priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "History & Culture" },
  rrbd_ga_6:  { name: "Monuments and Places of India",              priority: "MEDIUM",    stage: "CBT", prelimsWeight: "0–2 Qs",  days: "2 days", category: "History & Culture" },
  rrbd_ga_7:  { name: "History of India and Freedom Struggle",      priority: "HIGH",      stage: "CBT", prelimsWeight: "2–3 Qs",  days: "5 days", category: "History & Culture" },
  rrbd_ga_8:  { name: "Physical, Social & Economic Geography of India", priority: "HIGH",  stage: "CBT", prelimsWeight: "2–3 Qs",  days: "4 days", category: "Geography & Environment" },
  rrbd_ga_9:  { name: "Environmental Issues, Flora and Fauna of India", priority: "MEDIUM", stage: "CBT", prelimsWeight: "1–2 Qs", days: "2 days", category: "Geography & Environment" },
  rrbd_ga_10: { name: "Transport Systems in India (incl. Indian Railways)", priority: "HIGH", stage: "CBT", prelimsWeight: "1–2 Qs; free marks — it's their own org", days: "2 days", category: "Geography & Environment" },
  rrbd_ga_11: { name: "Indian Agriculture",                         priority: "LOW",       stage: "CBT", prelimsWeight: "0–1 Qs",  days: "1 days", category: "Geography & Environment" },
  rrbd_ga_12: { name: "Indian Polity and Constitution",             priority: "HIGH",      stage: "CBT", prelimsWeight: "2–3 Qs",  days: "4 days", category: "Polity & Economy" },
  rrbd_ga_13: { name: "Indian Economy",                             priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs",  days: "3 days", category: "Polity & Economy" },
  rrbd_ga_14: { name: "Important Government & Public Sector Bodies", priority: "LOW",      stage: "CBT", prelimsWeight: "0–1 Qs",  days: "1 days", category: "Polity & Economy" },
  rrbd_ga_15: { name: "Computers and Their Applications",           priority: "MEDIUM",    stage: "CBT", prelimsWeight: "1–2 Qs; a GA topic, NOT a section", days: "2 days", category: "Static & Miscellaneous" },
  rrbd_ga_16: { name: "Common Abbreviations",                       priority: "LOW",       stage: "CBT", prelimsWeight: "0–1 Qs",  days: "1 days", category: "Static & Miscellaneous" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_RRB_GROUP_D, RRB_GROUP_D_PRIORITY_DATA };
}
