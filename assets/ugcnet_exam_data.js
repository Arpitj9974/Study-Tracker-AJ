/*
================================================================================
  ugcnet_exam_data.js  —  Arpit's Exam Hub
  MODULE: UGC NET (National Eligibility Test)
================================================================================
*/

const EXAM_CONFIG_UGCNET = {
  examKey: "ugcnet",
  examName: "UGC NET",
  examFullName: "UGC National Eligibility Test",
  conductedBy: "NTA (National Testing Agency) on behalf of UGC",
  targetYear: 2026,
  targetSession: "December 2026",

  examDate: "2026-12-31",
  examDateEnd: "2027-01-07",
  datesTentative: true,
  examPatternVerified: true,

  examPattern: {
    mode: "CBT (Computer-Based Test)",
    totalDuration: 180,
    totalQuestions: 150,
    totalMarks: 300,
    negativeMarking: false,
    bilingual: true,
    stages: 1,
    papers: [
      {
        paper: "Paper 1",
        name: "General / Teaching & Research Aptitude",
        questions: 50,
        marks: 100,
        marksPerQuestion: 2,
        units: 10,
        questionsPerUnit: 5,
        marksPerUnit: 10,
        commonForAllSubjects: true
      },
      {
        paper: "Paper 2",
        name: "Subject-specific (candidate's chosen discipline)",
        questions: 100,
        marks: 200,
        marksPerQuestion: 2,
        subjectsAvailable: 87,
        note: "Each candidate selects one subject. Separate syllabus per subject."
      }
    ],
    qualification: {
      jrfAndAP: "Higher cutoff — eligibility for JRF + Assistant Professorship",
      apOnly: "Lower cutoff — Assistant Professorship only",
      phdOnly: "Separate merit — PhD admission only"
    }
  },

  subjects: [
    { key: "ugcnet_p1_teaching",      name: "Teaching Aptitude",                icon: "🎓", color: "#4F46E5", examStage: "Paper 1 — Unit 1", prefix: "ugcnet_ta_",  totalChapters: 1 },
    { key: "ugcnet_p1_research",      name: "Research Aptitude",                icon: "🔬", color: "#0891B2", examStage: "Paper 1 — Unit 2", prefix: "ugcnet_ra_",  totalChapters: 1 },
    { key: "ugcnet_p1_reasoning",     name: "Logical & Mathematical Reasoning", icon: "🧮", color: "#7C3AED", examStage: "Paper 1 — Units 5&6", prefix: "ugcnet_lr_", totalChapters: 2 },
    { key: "ugcnet_p1_di",            name: "Data Interpretation",              icon: "📊", color: "#059669", examStage: "Paper 1 — Unit 7", prefix: "ugcnet_di_",  totalChapters: 1 },
    { key: "ugcnet_p1_communication", name: "Communication",                    icon: "💬", color: "#D97706", examStage: "Paper 1 — Unit 4", prefix: "ugcnet_com_", totalChapters: 1 },
    { key: "ugcnet_p1_comprehension", name: "Reading Comprehension",            icon: "📖", color: "#BE185D", examStage: "Paper 1 — Unit 3", prefix: "ugcnet_rc_",  totalChapters: 1 },
    { key: "ugcnet_p1_ict",           name: "ICT",                              icon: "💻", color: "#0284C7", examStage: "Paper 1 — Unit 8", prefix: "ugcnet_ict_", totalChapters: 1 },
    { key: "ugcnet_p1_environment",   name: "People, Development & Environment",icon: "🌿", color: "#16A34A", examStage: "Paper 1 — Unit 9", prefix: "ugcnet_env_", totalChapters: 1 },
    { key: "ugcnet_p1_highered",      name: "Higher Education System",          icon: "🏛️", color: "#B45309", examStage: "Paper 1 — Unit 10", prefix: "ugcnet_he_", totalChapters: 1 }
  ]
};

const UGCNET_PRIORITY_DATA = {
  ugcnet_ta_1: {
    name: "Teaching Aptitude",
    priority: "VERY HIGH",
    stage: "Paper 1 — Unit 1",
    unitWeight: "5 Qs / 10 marks",
    days: "5 days",
    category: "Core Aptitude",
    topics: [
      "Concept, objectives, levels of teaching (memory/understanding/reflective)",
      "Learner characteristics — adolescent & adult learners",
      "Factors affecting teaching (teacher, learner, support material, institution)",
      "Teaching methods — teacher-centred vs learner-centred; offline vs online",
      "Swayam, Swayamprabha, MOOCs",
      "Evaluation systems, types of evaluation",
      "Teaching aids and institutional roles"
    ]
  },

  ugcnet_ra_1: {
    name: "Research Aptitude",
    priority: "VERY HIGH",
    stage: "Paper 1 — Unit 2",
    unitWeight: "5 Qs / 10 marks",
    days: "5 days",
    category: "Core Aptitude",
    topics: [
      "Research — meaning, characteristics, types (descriptive/experimental/historical)",
      "Research methods — empirical, qualitative, quantitative",
      "Research steps and processes",
      "Thesis/dissertation writing; thesis structure",
      "Research ethics — plagiarism, fabrication, falsification",
      "Computer applications in research",
      "Research communication — reading & evaluating research"
    ]
  },

  ugcnet_lr_1: {
    name: "Mathematical Reasoning & Aptitude",
    priority: "HIGH",
    stage: "Paper 1 — Unit 5",
    unitWeight: "5 Qs / 10 marks",
    days: "4 days",
    category: "Reasoning & Aptitude",
    topics: [
      "Types of reasoning",
      "Number series, letter series, codes, relationships",
      "Mathematical aptitude — fractions, time & distance, ratio & proportion",
      "Percentage, profit & loss, simple & compound interest",
      "Averages, discounting"
    ]
  },

  ugcnet_lr_2: {
    name: "Logical Reasoning",
    priority: "HIGH",
    stage: "Paper 1 — Unit 6",
    unitWeight: "5 Qs / 10 marks",
    days: "4 days",
    category: "Reasoning & Aptitude",
    topics: [
      "Understanding the structure of arguments",
      "Evaluating and distinguishing arguments — deductive and inductive",
      "Analogies — word analogies, semantic analogies",
      "Venn diagrams; Indian logic — Pramana, Anumana",
      "Relationship between statements and assumptions/conclusions",
      "Categorical syllogisms",
      "Fallacies — formal and informal"
    ]
  },

  ugcnet_di_1: {
    name: "Data Interpretation",
    priority: "HIGH",
    stage: "Paper 1 — Unit 7",
    unitWeight: "5 Qs / 10 marks",
    days: "3 days",
    category: "Reasoning & Aptitude",
    topics: [
      "Sources of data — primary, secondary",
      "Quantitative vs qualitative data",
      "Graphical representation — bar charts, pie charts, histograms, line graphs",
      "Data and governance",
      "Reading and interpreting tables, graphs, and statistical summaries"
    ]
  },

  ugcnet_com_1: {
    name: "Communication",
    priority: "HIGH",
    stage: "Paper 1 — Unit 4",
    unitWeight: "5 Qs / 10 marks",
    days: "3 days",
    category: "Core Aptitude",
    topics: [
      "Meaning, nature, and characteristics of communication",
      "Types of communication — verbal, non-verbal",
      "Effective communication techniques",
      "Intercultural and group communication",
      "Classroom communication",
      "Barriers to effective communication",
      "Mass media and society"
    ]
  },

  ugcnet_rc_1: {
    name: "Reading Comprehension",
    priority: "MEDIUM",
    stage: "Paper 1 — Unit 3",
    unitWeight: "5 Qs / 10 marks",
    days: "2 days",
    category: "Core Aptitude",
    topics: [
      "Reading passages — academic/general text",
      "Answering inferential and direct questions from the passage",
      "Improving reading speed and comprehension accuracy"
    ]
  },

  ugcnet_ict_1: {
    name: "Information & Communication Technology",
    priority: "MEDIUM",
    stage: "Paper 1 — Unit 8",
    unitWeight: "5 Qs / 10 marks",
    days: "3 days",
    category: "Technology",
    topics: [
      "ICT — meaning, advantages, disadvantages",
      "Basics of internet, intranet, e-mail, audio/video conferencing",
      "Digital initiatives in higher education — Swayam, SWAYAMPRABHA, e-PG Pathshala",
      "ICT and governance",
      "Computer basics — input/output devices, memory, operating system",
      "Cybersecurity basics, digital literacy"
    ]
  },

  ugcnet_env_1: {
    name: "People, Development & Environment",
    priority: "MEDIUM",
    stage: "Paper 1 — Unit 9",
    unitWeight: "5 Qs / 10 marks",
    days: "3 days",
    category: "Environment & Society",
    topics: [
      "Development and environment — human impact and sustainability",
      "Sustainable Development Goals (SDGs) — 17 goals",
      "Anthropogenic activities and their environmental impacts",
      "Environmental issues — air, water, soil, noise pollution",
      "Climate change — causes, effects, mitigation",
      "Natural hazards and disasters — cyclones, earthquakes, floods",
      "Disaster management and mitigation strategies"
    ]
  },

  ugcnet_he_1: {
    name: "Higher Education System",
    priority: "MEDIUM",
    stage: "Paper 1 — Unit 10",
    unitWeight: "5 Qs / 10 marks",
    days: "3 days",
    category: "Higher Education",
    topics: [
      "Evolution of higher learning and research in post-Independence India",
      "UGC — structure, functions, powers",
      "NAAC, NBA, NIRF — accreditation and ranking",
      "NEP 2020 — key provisions and implications for higher education",
      "Professional, technical, and skill-based education",
      "Institutions of national importance (IITs, IIMs, AIIMS, NLUs)",
      "Governance and administration of universities",
      "Policies related to distance, online, and open learning"
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_UGCNET, UGCNET_PRIORITY_DATA };
}
