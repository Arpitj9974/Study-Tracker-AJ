/*
 * ============================================================
 *  CDS EXAM DATA MODULE — Arpit's Exam Hub
 *  File: cds_exam_data.js
 *  Version: 1.0 | Created: 2026-07-16
 * ============================================================
 *  TARGET CYCLE: CDS 2 2026 (Written exam: 13 September 2026)
 */

const EXAM_CONFIG_CDS = {
  examKey: "cds",
  examName: "CDS — Combined Defence Services Examination",
  targetYear: 2026,
  examDate: "2026-09-13",
  datesTentative: false,
  notificationDate:  "2026-05-20",
  registrationOpen:  "2026-05-20",
  registrationClose: "2026-06-11",

  examPattern: {
    conductedBy: "Union Public Service Commission (UPSC)",
    mode: "Offline — Pen & Paper (PBT), Bilingual Hindi + English",
    stages: 2,
    writtenStageOnly: true,
    totalMarksWritten: 300,
    marking: "+0.83 correct (English/GK) / +1 correct (Maths) / −0.33 wrong / 0 unattempted",
    marksPerCorrectEnglishGK: 0.83,
    marksPerCorrectMaths: 1.0,
    marksPerWrong: -0.33,
    marksUnattempted: 0,
    durationMinutes: 120,
    sectionalTimeLimit: true,
    patternVerified: true,
    papersDetail: [
      { name: "English", code: "11", questions: 120, marks: 100, duration: "9:00 AM – 11:00 AM", academy: "IMA, INA, AFA, OTA" },
      { name: "General Knowledge", code: "12", questions: 120, marks: 100, duration: "12:30 PM – 2:30 PM", academy: "IMA, INA, AFA, OTA" },
      { name: "Elementary Mathematics", code: "13", questions: 100, marks: 100, duration: "4:00 PM – 6:00 PM", academy: "IMA, INA, AFA only (OTA excluded)" }
    ],
    ssbInterview: { marks: 300, otaMarks: 200, days: 5 },
    sectionalCutoff: "~20 marks minimum per paper (approx 20%)"
  },

  subjects: [
    { key: "cds_gk", name: "General Knowledge",       icon: "🌍", color: "#F59E0B", examStage: "CDS", prefix: "cds_gk_", totalChapters: 12, otaExcluded: false },
    { key: "cds_en", name: "English",                 icon: "📝", color: "#10B981", examStage: "CDS", prefix: "cds_en_", totalChapters: 8,  otaExcluded: false },
    { key: "cds_ma", name: "Elementary Mathematics", icon: "📐", color: "#3B82F6", examStage: "CDS", prefix: "cds_ma_", totalChapters: 10, otaExcluded: true }
  ]
};

const CDS_PRIORITY_DATA = {

  // 1. GENERAL KNOWLEDGE (cds_gk_1 … 12)
  cds_gk_1:  { name: "Physics — Mechanics, Heat, Light, Sound",        priority: "VERY HIGH", stage: "CDS", prelimsWeight: "9–12 Qs", days: "6 days", category: "Science" },
  cds_gk_2:  { name: "Chemistry — Elements, Reactions, Everyday",      priority: "HIGH",      stage: "CDS", prelimsWeight: "8–10 Qs", days: "5 days", category: "Science" },
  cds_gk_3:  { name: "Biology — Human Body, Plants, Diseases",         priority: "HIGH",      stage: "CDS", prelimsWeight: "8–10 Qs", days: "5 days", category: "Science" },
  cds_gk_4:  { name: "Indian Geography — Physical, Resources, Maps", priority: "VERY HIGH", stage: "CDS", prelimsWeight: "8–10 Qs", days: "5 days", category: "Geography" },
  cds_gk_5:  { name: "World Geography — Continents, Oceans, Climate",  priority: "HIGH",      stage: "CDS", prelimsWeight: "6–8 Qs",  days: "4 days", category: "Geography" },
  cds_gk_6:  { name: "Modern Indian History — 1857 to Independence", priority: "VERY HIGH", stage: "CDS", prelimsWeight: "8–12 Qs", days: "6 days", category: "History" },
  cds_gk_7:  { name: "Ancient & Medieval Indian History",             priority: "MEDIUM",    stage: "CDS", prelimsWeight: "5–8 Qs",  days: "5 days", category: "History" },
  cds_gk_8:  { name: "Indian Polity & Constitution",                  priority: "HIGH",      stage: "CDS", prelimsWeight: "10–15 Qs",days: "5 days", category: "History" },
  cds_gk_9:  { name: "Indian Economy — Budget, Banking, Schemes",      priority: "MEDIUM",    stage: "CDS", prelimsWeight: "6–10 Qs", days: "4 days", category: "Geography" },
  cds_gk_10: { name: "Defence, Armed Forces & National Security",      priority: "HIGH",      stage: "CDS", prelimsWeight: "5–8 Qs",  days: "3 days", category: "Current Affairs" },
  cds_gk_11: { name: "Environment, Ecology & Climate Change",         priority: "MEDIUM",    stage: "CDS", prelimsWeight: "4–6 Qs",  days: "3 days", category: "Science" },
  cds_gk_12: { name: "Current Affairs — National, International, Sports", priority: "HIGH", stage: "CDS", prelimsWeight: "8–12 Qs", days: "Ongoing", ongoingTask: true, category: "Current Affairs" },

  // 2. ENGLISH (cds_en_1 … 8)
  cds_en_1:  { name: "Reading Comprehension — Passages",              priority: "VERY HIGH", stage: "CDS", prelimsWeight: "10–15 Qs", days: "Ongoing", ongoingTask: true, category: "Comprehension" },
  cds_en_2:  { name: "Spotting Errors — Grammar & Syntax",            priority: "VERY HIGH", stage: "CDS", prelimsWeight: "15–20 Qs", days: "5 days", category: "Grammar" },
  cds_en_3:  { name: "Synonyms & Antonyms",                           priority: "VERY HIGH", stage: "CDS", prelimsWeight: "15–20 Qs", days: "Ongoing", ongoingTask: true, category: "Vocabulary" },
  cds_en_4:  { name: "Sentence Improvement & Correction",             priority: "HIGH",      stage: "CDS", prelimsWeight: "10–15 Qs", days: "4 days", category: "Grammar" },
  cds_en_5:  { name: "Idioms, Phrases & One-Word Substitution",        priority: "HIGH",      stage: "CDS", prelimsWeight: "8–12 Qs",  days: "4 days", category: "Vocabulary" },
  cds_en_6:  { name: "Fill in the Blanks — Grammar & Vocabulary",      priority: "HIGH",      stage: "CDS", prelimsWeight: "8–12 Qs",  days: "3 days", category: "Grammar" },
  cds_en_7:  { name: "Ordering of Sentences & Para Jumbles",          priority: "MEDIUM",    stage: "CDS", prelimsWeight: "8–10 Qs",  days: "3 days", category: "Comprehension" },
  cds_en_8:  { name: "Ordering of Words in a Sentence",                priority: "MEDIUM",    stage: "CDS", prelimsWeight: "6–8 Qs",   days: "2 days", category: "Grammar" },

  // 3. ELEMENTARY MATHEMATICS (cds_ma_1 … 10) — IMA/INA/AFA only
  cds_ma_1:  { name: "Arithmetic — Number System & Operations",       priority: "VERY HIGH", stage: "CDS", prelimsWeight: "8–12 Qs", days: "4 days", category: "Arithmetic" },
  cds_ma_2:  { name: "Arithmetic — Ratio, Percentage, Profit & Loss", priority: "VERY HIGH", stage: "CDS", prelimsWeight: "8–12 Qs", days: "4 days", category: "Arithmetic" },
  cds_ma_3:  { name: "Arithmetic — Time, Work, Speed & Distance",     priority: "HIGH",      stage: "CDS", prelimsWeight: "6–10 Qs", days: "3 days", category: "Arithmetic" },
  cds_ma_4:  { name: "Arithmetic — SI, CI, Averages & Mixtures",      priority: "HIGH",      stage: "CDS", prelimsWeight: "5–8 Qs",  days: "3 days", category: "Arithmetic" },
  cds_ma_5:  { name: "Algebra — Basic Operations & Linear Equations", priority: "HIGH",      stage: "CDS", prelimsWeight: "8–12 Qs", days: "4 days", category: "Algebra" },
  cds_ma_6:  { name: "Geometry — Lines, Angles, Triangles, Circles",   priority: "HIGH",      stage: "CDS", prelimsWeight: "8–12 Qs", days: "5 days", category: "Geometry" },
  cds_ma_7:  { name: "Mensuration — 2D & 3D Shapes",                  priority: "HIGH",      stage: "CDS", prelimsWeight: "6–8 Qs",  days: "4 days", category: "Geometry" },
  cds_ma_8:  { name: "Trigonometry — Heights, Distances, Identities", priority: "HIGH",      stage: "CDS", prelimsWeight: "8–12 Qs", days: "5 days", category: "Geometry" },
  cds_ma_9:  { name: "Statistics — Mean, Median, Mode, Graphs",        priority: "MEDIUM",    stage: "CDS", prelimsWeight: "5–8 Qs",  days: "3 days", category: "Arithmetic" },
  cds_ma_10: { name: "Set Theory & Logical Venn Diagrams",            priority: "LOW",       stage: "CDS", prelimsWeight: "2–4 Qs",  days: "2 days", category: "Algebra" }

};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CDS, CDS_PRIORITY_DATA };
}
