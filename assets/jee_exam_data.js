/**
 * ============================================================
 * ARPIT'S EXAM HUB — JEE (MAIN + ADVANCED) MODULE DATA
 * File: jee_exam_data.js | Version: 1.0 | Date: 15 Jul 2026
 * ============================================================
 * Target cycle: JEE Main 2027 (Session 1 ~Jan, Session 2 ~Apr) +
 * JEE Advanced 2027 (~May).
 */

const EXAM_CONFIG_JEE = {
  examKey: "jee",
  examName: "JEE — Main + Advanced (Engineering Entrance)",
  targetYear: 2027,
  session1Window: "Jan 2027 (TBA)",
  session2Window: "Apr 2027 (TBA)",
  advancedWindow: "May 2027 (TBA)",
  examPattern: {
    main: {
      paper: "Paper 1 (B.E./B.Tech), CBT, 3 hours, two sessions (Jan + Apr) — best score counts",
      totalQuestions: 75, totalMarks: 300,
      perSubject: "25 Qs = 20 MCQ (Section A) + 5 Numerical (Section B)",
      marking: "+4 correct / −1 incorrect — applies to BOTH MCQs and Numerical questions",
      tools: "No calculator; on-screen numeric keypad for Section B"
    },
    advanced: {
      eligibility: "Top ~2.5 lakh JEE Main rankers",
      paper: "Two compulsory papers, 3 hrs each"
    }
  },
  subjects: [
    { key: "physics",   name: "Physics",     icon: "⚛️", color: "#3B5BDB", examStage: "Main + Advanced", prefix: "jee_phy_", totalChapters: 20 },
    { key: "chemistry", name: "Chemistry",   icon: "🧪", color: "#2B8A6E", examStage: "Main + Advanced", prefix: "jee_che_", totalChapters: 21 },
    { key: "maths",     name: "Mathematics", icon: "📐", color: "#B7791F", examStage: "Main + Advanced", prefix: "jee_mat_", totalChapters: 15 }
  ]
};

const JEE_PRIORITY_DATA = {

  // 1. PHYSICS (20)
  jee_phy_1:  { name: "Units, Dimensions & Error Analysis",                  priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Mechanics (XI)" },
  jee_phy_2:  { name: "Kinematics — 1D, 2D & Projectile Motion",             priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Mechanics (XI)" },
  jee_phy_3:  { name: "Laws of Motion & Friction",                           priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Mechanics (XI)" },
  jee_phy_4:  { name: "Work, Energy & Power",                                priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Mechanics (XI)" },
  jee_phy_5:  { name: "Centre of Mass, Momentum & Rotational Motion",        priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "6 days", category: "Mechanics (XI)" },
  jee_phy_6:  { name: "Gravitation",                                         priority: "MEDIUM",    stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Mechanics (XI)" },
  jee_phy_7:  { name: "Properties of Matter — Elasticity & Fluid Mechanics", priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Mechanics (XI)" },
  jee_phy_8:  { name: "Thermal Physics — KTG, Thermodynamics & Heat Transfer", priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs", days: "5 days", category: "Heat & Thermo (XI)" },
  jee_phy_9:  { name: "Oscillations (SHM)",                                  priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Waves (XI)" },
  jee_phy_10: { name: "Waves & Sound",                                       priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Waves (XI)" },
  jee_phy_11: { name: "Electrostatics & Capacitance",                        priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "6 days", category: "Electrodynamics (XII)" },
  jee_phy_12: { name: "Current Electricity",                                 priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2-3 Qs", days: "5 days", category: "Electrodynamics (XII)" },
  jee_phy_13: { name: "Magnetic Effects of Current & Magnetism",             priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "5 days", category: "Electrodynamics (XII)" },
  jee_phy_14: { name: "Electromagnetic Induction & Alternating Current",     priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Electrodynamics (XII)" },
  jee_phy_15: { name: "Electromagnetic Waves",                               priority: "MEDIUM",    stage: "Main Only",       prelimsWeight: "1 Q",    days: "1 day",  category: "Electrodynamics (XII)" },
  jee_phy_16: { name: "Ray Optics & Optical Instruments",                    priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Optics (XII)" },
  jee_phy_17: { name: "Wave Optics",                                         priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Optics (XII)" },
  jee_phy_18: { name: "Modern Physics — Dual Nature, Atoms & Nuclei",        priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2-3 Qs", days: "4 days", category: "Modern Physics (XII)" },
  jee_phy_19: { name: "Semiconductors & Electronic Devices",                 priority: "HIGH",      stage: "Main Only",       prelimsWeight: "1 Q",    days: "2 days", category: "Modern Physics (XII)" },
  jee_phy_20: { name: "Experimental Skills & Practical Physics",             priority: "MEDIUM",    stage: "Main Only",       prelimsWeight: "1 Q",    days: "2 days", category: "Practical" },

  // 2. CHEMISTRY (21)
  jee_che_1:  { name: "Some Basic Concepts — Mole & Stoichiometry",          priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Physical Chemistry" },
  jee_che_2:  { name: "Atomic Structure",                                    priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Physical Chemistry" },
  jee_che_3:  { name: "Chemical Bonding & Molecular Structure",              priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "5 days", category: "Inorganic Chemistry" },
  jee_che_4:  { name: "Chemical Thermodynamics & Thermochemistry",           priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Physical Chemistry" },
  jee_che_5:  { name: "Chemical & Ionic Equilibrium",                        priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "5 days", category: "Physical Chemistry" },
  jee_che_6:  { name: "Redox Reactions & Electrochemistry",                  priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Physical Chemistry" },
  jee_che_7:  { name: "Solutions & Colligative Properties",                  priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Physical Chemistry" },
  jee_che_8:  { name: "Chemical Kinetics",                                   priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Chemistry" },
  jee_che_9:  { name: "Classification of Elements & Periodicity",            priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Inorganic Chemistry" },
  jee_che_10: { name: "Coordination Compounds",                              priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Inorganic Chemistry" },
  jee_che_11: { name: "d- & f-Block Elements",                               priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Inorganic Chemistry" },
  jee_che_12: { name: "p-Block Elements (general trends only)",              priority: "MEDIUM",    stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Inorganic Chemistry" },
  jee_che_13: { name: "Purification & Characterisation of Organic Compounds", priority: "MEDIUM",   stage: "Main Only",       prelimsWeight: "1 Q",    days: "2 days", category: "Organic Chemistry" },
  jee_che_14: { name: "GOC — Isomerism, Electronic Effects & Intermediates", priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "6 days", category: "Organic Chemistry" },
  jee_che_15: { name: "Hydrocarbons",                                        priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Organic Chemistry" },
  jee_che_16: { name: "Haloalkanes & Haloarenes",                            priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Organic Chemistry" },
  jee_che_17: { name: "Alcohols, Phenols & Ethers",                          priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Organic Chemistry" },
  jee_che_18: { name: "Aldehydes, Ketones & Carboxylic Acids",               priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Organic Chemistry" },
  jee_che_19: { name: "Amines & Nitrogen-Containing Compounds",              priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Organic Chemistry" },
  jee_che_20: { name: "Biomolecules",                                        priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Organic Chemistry" },
  jee_che_21: { name: "Principles Related to Practical Chemistry",           priority: "MEDIUM",    stage: "Main Only",       prelimsWeight: "1 Q",    days: "2 days", category: "Practical" },

  // 3. MATHEMATICS (15)
  jee_mat_1:  { name: "Sets, Relations & Functions",                         priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "3 days", category: "Algebra" },
  jee_mat_2:  { name: "Complex Numbers & Quadratic Equations",               priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Algebra" },
  jee_mat_3:  { name: "Matrices & Determinants",                             priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Algebra" },
  jee_mat_4:  { name: "Permutations & Combinations",                         priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "3 days", category: "Algebra" },
  jee_mat_5:  { name: "Binomial Theorem",                                    priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1 Q",    days: "2 days", category: "Algebra" },
  jee_mat_6:  { name: "Sequences & Series (AP, GP, Special Series)",         priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "3 days", category: "Algebra" },
  jee_mat_7:  { name: "Limits, Continuity & Differentiability",              priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "5 days", category: "Calculus" },
  jee_mat_8:  { name: "Applications of Derivatives (Tangents, Maxima-Minima)", priority: "HIGH",   stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Calculus" },
  jee_mat_9:  { name: "Indefinite & Definite Integration",                   priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2-3 Qs", days: "6 days", category: "Calculus" },
  jee_mat_10: { name: "Differential Equations & Area Under Curves",          priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "3 days", category: "Calculus" },
  jee_mat_11: { name: "Straight Lines & Circles",                            priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Coordinate Geometry" },
  jee_mat_12: { name: "Conic Sections — Parabola, Ellipse, Hyperbola",       priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "4 days", category: "Coordinate Geometry" },
  jee_mat_13: { name: "Vectors & 3D Geometry",                               priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2-3 Qs", days: "5 days", category: "Vectors & 3D" },
  jee_mat_14: { name: "Trigonometry — Ratios, Equations, Inverse",          priority: "HIGH",      stage: "Main + Advanced", prelimsWeight: "1-2 Qs", days: "4 days", category: "Trigonometry" },
  jee_mat_15: { name: "Probability & Statistics",                            priority: "VERY HIGH", stage: "Main + Advanced", prelimsWeight: "2 Qs",   days: "3 days", category: "Probability & Statistics" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_JEE, JEE_PRIORITY_DATA };
}
