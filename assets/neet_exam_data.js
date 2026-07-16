/**
 * ============================================================
 * ARPIT'S EXAM HUB — NEET UG MODULE DATA
 * File: neet_exam_data.js | Version: 1.1 | Date: 15 Jul 2026
 * ============================================================
 * Target cycle: NEET UG 2027 (~first Sunday of May 2027).
 */

const EXAM_CONFIG_NEET = {
  examKey: "neet_ug",
  examName: "NEET UG (Medical Entrance)",
  targetYear: 2027,
  examDate: "2027-05-02",
  applicationWindow: "Feb–Mar 2027 (TBA)",
  notificationWindow: "Feb 2027 (TBA)",
  datesTentative: true,
  examPattern: {
    mode: "Offline, pen-and-paper, OMR, single shift, 180 minutes",
    totalQuestions: 180, totalMarks: 720,
    marking: "+4 correct / −1 wrong / 0 unattempted",
    sectionalTiming: "None — 180 min shared across all subjects",
    sections: [
      { name: "Physics",   questions: 45, marks: 180 },
      { name: "Chemistry", questions: 45, marks: 180 },
      { name: "Botany",    questions: 45, marks: 180 },
      { name: "Zoology",   questions: 45, marks: 180 }
    ],
    note: "Biology (Botany+Zoology) = 90 Qs / 360 marks = 50% of paper."
  },
  subjects: [
    { key: "botany",    name: "Biology — Botany",   icon: "🌱", color: "#4C9A3F", examStage: "NEET", prefix: "neet_bot_", totalChapters: 16 },
    { key: "zoology",   name: "Biology — Zoology",  icon: "🧬", color: "#B04A2F", examStage: "NEET", prefix: "neet_zoo_", totalChapters: 15 },
    { key: "chemistry", name: "Chemistry",          icon: "🧪", color: "#7C3AED", examStage: "NEET", prefix: "neet_che_", totalChapters: 20 },
    { key: "physics",   name: "Physics",            icon: "⚛️", color: "#3B5BDB", examStage: "NEET", prefix: "neet_phy_", totalChapters: 19 }
  ]
};

const NEET_PRIORITY_DATA = {

  // 1. BOTANY (16)
  neet_bot_1:  { name: "The Living World & Biological Classification",        priority: "HIGH",      stage: "Class XI", prelimsWeight: "2-3 Qs", days: "3 days", category: "Diversity (XI)" },
  neet_bot_2:  { name: "Plant Kingdom",                                       priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "4 days", category: "Diversity (XI)" },
  neet_bot_3:  { name: "Morphology of Flowering Plants",                      priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "4 days", category: "Structural Botany (XI)" },
  neet_bot_4:  { name: "Anatomy of Flowering Plants",                         priority: "HIGH",      stage: "Class XI", prelimsWeight: "2 Qs",   days: "3 days", category: "Structural Botany (XI)" },
  neet_bot_5:  { name: "Cell: The Unit of Life",                              priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "3 Qs",   days: "4 days", category: "Cell Biology (XI)" },
  neet_bot_6:  { name: "Cell Cycle & Cell Division",                          priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "3 days", category: "Cell Biology (XI)" },
  neet_bot_7:  { name: "Photosynthesis in Higher Plants",                     priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "4 days", category: "Plant Physiology (XI)" },
  neet_bot_8:  { name: "Respiration in Plants",                               priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Plant Physiology (XI)" },
  neet_bot_9:  { name: "Plant Growth & Development",                          priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Plant Physiology (XI)" },
  neet_bot_10: { name: "Sexual Reproduction in Flowering Plants",             priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3-4 Qs", days: "4 days", category: "Reproduction (XII)" },
  neet_bot_11: { name: "Principles of Inheritance & Variation",               priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3-4 Qs", days: "4 days", category: "Genetics (XII)" },
  neet_bot_12: { name: "Molecular Basis of Inheritance",                      priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3-4 Qs", days: "4 days", category: "Genetics (XII)" },
  neet_bot_13: { name: "Microbes in Human Welfare",                           priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "2 days", category: "Biology & Welfare (XII)" },
  neet_bot_14: { name: "Organisms & Populations",                             priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "2 days", category: "Ecology (XII)" },
  neet_bot_15: { name: "Ecosystem",                                           priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "2 days", category: "Ecology (XII)" },
  neet_bot_16: { name: "Biodiversity & Conservation",                         priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "2 days", category: "Ecology (XII)" },

  // 2. ZOOLOGY (15)
  neet_zoo_1:  { name: "Animal Kingdom (Classification & Phyla)",             priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "3-4 Qs", days: "5 days", category: "Diversity (XI)" },
  neet_zoo_2:  { name: "Structural Organisation in Animals (Tissues)",        priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Structural Zoology (XI)" },
  neet_zoo_3:  { name: "Digestion & Absorption",                              priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_4:  { name: "Breathing & Exchange of Gases",                       priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_5:  { name: "Body Fluids & Circulation",                           priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_6:  { name: "Excretory Products & Their Elimination",              priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_7:  { name: "Locomotion & Movement",                              priority: "MEDIUM",    stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_8:  { name: "Neural Control & Coordination",                       priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Human Physiology (XI)" },
  neet_zoo_9:  { name: "Chemical Coordination & Integration (Endocrine)",     priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Human Physiology (XI)" },
  neet_zoo_10: { name: "Human Reproduction",                                  priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "3 days", category: "Reproduction (XII)" },
  neet_zoo_11: { name: "Reproductive Health",                                 priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "2 days", category: "Reproduction (XII)" },
  neet_zoo_12: { name: "Evolution",                                          priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "3 days", category: "Evolution (XII)" },
  neet_zoo_13: { name: "Human Health & Disease",                              priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "3 days", category: "Biology & Welfare (XII)" },
  neet_zoo_14: { name: "Biotechnology — Principles & Processes",              priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "3 days", category: "Biotechnology (XII)" },
  neet_zoo_15: { name: "Biotechnology & Its Applications",                    priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "2 days", category: "Biotechnology (XII)" },

  // 3. CHEMISTRY (20)
  neet_che_1:  { name: "Some Basic Concepts of Chemistry (Mole Concept)",     priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  neet_che_2:  { name: "Structure of Atom",                                   priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  neet_che_3:  { name: "Classification of Elements & Periodicity",            priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Inorganic Chemistry" },
  neet_che_4:  { name: "Chemical Bonding & Molecular Structure",              priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "5 days", category: "Inorganic Chemistry" },
  neet_che_5:  { name: "Chemical Thermodynamics",                             priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  neet_che_6:  { name: "Equilibrium (Chemical & Ionic)",                      priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2 Qs",   days: "4 days", category: "Physical Chemistry" },
  neet_che_7:  { name: "Redox Reactions",                                     priority: "MEDIUM",    stage: "Class XI", prelimsWeight: "1 Q",    days: "2 days", category: "Physical Chemistry" },
  neet_che_8:  { name: "p-Block Elements (Groups 13–14)",                     priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Inorganic Chemistry" },
  neet_che_9:  { name: "Organic Chemistry — Basic Principles & Techniques (GOC)", priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "5 days", category: "Organic Chemistry" },
  neet_che_10: { name: "Hydrocarbons",                                        priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Organic Chemistry" },
  neet_che_11: { name: "Solutions & Colligative Properties",                  priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  neet_che_12: { name: "Electrochemistry",                                    priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  neet_che_13: { name: "Chemical Kinetics",                                   priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "2 days", category: "Physical Chemistry" },
  neet_che_14: { name: "p-Block Elements (Groups 15–18)",                     priority: "HIGH",      stage: "Class XII", prelimsWeight: "2 Qs",   days: "3 days", category: "Inorganic Chemistry" },
  neet_che_15: { name: "d- & f-Block Elements",                               priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "2 days", category: "Inorganic Chemistry" },
  neet_che_16: { name: "Coordination Compounds",                             priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "4 days", category: "Inorganic Chemistry" },
  neet_che_17: { name: "Haloalkanes & Haloarenes",                            priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "2 days", category: "Organic Chemistry" },
  neet_che_18: { name: "Alcohols, Phenols & Ethers",                          priority: "HIGH",      stage: "Class XII", prelimsWeight: "1-2 Qs", days: "3 days", category: "Organic Chemistry" },
  neet_che_19: { name: "Aldehydes, Ketones, Carboxylic Acids & Amines",       priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "5 days", category: "Organic Chemistry" },
  neet_che_20: { name: "Biomolecules",                                        priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2 Qs",   days: "2 days", category: "Organic Chemistry" },

  // 4. PHYSICS (19)
  neet_phy_1:  { name: "Units, Dimensions & Measurement",                     priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Basics (XI)" },
  neet_phy_2:  { name: "Kinematics (Motion in 1D & 2D)",                       priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Mechanics (XI)" },
  neet_phy_3:  { name: "Laws of Motion & Friction",                           priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Mechanics (XI)" },
  neet_phy_4:  { name: "Work, Energy & Power",                                priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Mechanics (XI)" },
  neet_phy_5:  { name: "System of Particles & Rotational Motion",             priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "5 days", category: "Mechanics (XI)" },
  neet_phy_6:  { name: "Gravitation",                                         priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "2 days", category: "Mechanics (XI)" },
  neet_phy_7:  { name: "Properties of Bulk Matter (Elasticity, Fluids, Thermal)", priority: "HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "4 days", category: "Mechanics & Heat (XI)" },
  neet_phy_8:  { name: "Thermodynamics",                                      priority: "VERY HIGH", stage: "Class XI", prelimsWeight: "2-3 Qs", days: "3 days", category: "Heat (XI)" },
  neet_phy_9:  { name: "Kinetic Theory of Gases",                             priority: "MEDIUM",    stage: "Class XI", prelimsWeight: "1 Q",    days: "2 days", category: "Heat (XI)" },
  neet_phy_10: { name: "Oscillations (SHM)",                                  priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Waves (XI)" },
  neet_phy_11: { name: "Waves & Sound",                                       priority: "HIGH",      stage: "Class XI", prelimsWeight: "1-2 Qs", days: "3 days", category: "Waves (XI)" },
  neet_phy_12: { name: "Electrostatics & Capacitance",                        priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3 Qs",   days: "5 days", category: "Electrodynamics (XII)" },
  neet_phy_13: { name: "Current Electricity",                                 priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "4 days", category: "Electrodynamics (XII)" },
  neet_phy_14: { name: "Magnetic Effects of Current & Magnetism",             priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "4 days", category: "Electrodynamics (XII)" },
  neet_phy_15: { name: "Electromagnetic Induction & Alternating Current",     priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "4 days", category: "Electrodynamics (XII)" },
  neet_phy_16: { name: "Electromagnetic Waves",                               priority: "MEDIUM",    stage: "Class XII", prelimsWeight: "1 Q",    days: "1 day",  category: "Electrodynamics (XII)" },
  neet_phy_17: { name: "Optics — Ray & Wave Optics",                          priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3 Qs",   days: "5 days", category: "Optics (XII)" },
  neet_phy_18: { name: "Dual Nature of Radiation & Matter + Atoms & Nuclei",  priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "3-4 Qs", days: "4 days", category: "Modern Physics (XII)" },
  neet_phy_19: { name: "Semiconductor Electronics",                           priority: "VERY HIGH", stage: "Class XII", prelimsWeight: "2-3 Qs", days: "3 days", category: "Modern Physics (XII)" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_NEET, NEET_PRIORITY_DATA };
}
