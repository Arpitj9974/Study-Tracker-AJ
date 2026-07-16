/*
 * ============================================================
 *  ARPIT'S EXAM HUB — CUET UG MODULE
 *  File: cuet_ug_exam_data.js
 *  Version: 1.0 | Date: 2026-07-17
 * ============================================================
 *
 *  TARGET CYCLE: 2027
 *  Why 2027? The CUET UG 2026 cycle is fully complete:
 *    - Exam held: 11 May – 31 May 2026 (CBT mode)
 *    - Result declared: 23 June 2026 (NTA official)
 *  The 2027 cycle notification is expected in January 2027.
 *  All dates below are tentative estimates based on the 2026
 *  cycle calendar; datesTentative: true is set accordingly.
 *
 * ============================================================
 *  PATTERN (verified this session — NTA notification 3 Jan 2026)
 * ============================================================
 *  Mode: Computer-Based Test (CBT) only
 *  Sections: 3
 *    Section IA/IB — Languages (13 options: Tamil, Telugu,
 *      Kannada, Malayalam, Marathi, Gujarati, Odia, Bengali,
 *      Assamese, Punjabi, English, Hindi, Urdu)
 *    Section II   — Domain Subjects (23 options)
 *    Section III  — General Aptitude Test (GAT) — 1 paper
 *  Questions per paper: 50 MCQs (ALL compulsory — no optional
 *    questions from CUET 2025 onwards; confirmed unchanged 2026)
 *  Marks per paper: 250 (+5 correct / -1 wrong)
 *  Duration: 60 minutes per paper (uniform for ALL papers —
 *    changed from variable durations in earlier cycles)
 *  Max papers a candidate can choose: 5 (reduced from 6)
 *  No subject-stream restriction: any student can pick any
 *    domain subject regardless of Class 12 stream
 *
 *  WHAT CHANGED vs 2025:
 *    - Total papers reduced from 63 to 37 (41% cut) — largest
 *      structural change since CUET's inception (2022)
 *    - Domain subjects: 27 → 23 (6 removed — see do-NOT-add list)
 *    - Languages: 33 → 13 (20 foreign/minority languages removed)
 *    - Optional questions abolished (all 50 now compulsory)
 *    - Duration standardised to 60 min for every paper
 *    - Max subject cap reduced to 5 (was 6)
 *    - General Test renamed to General Aptitude Test (GAT)
 *    - No subject-stream restriction introduced
 *    - 15 domain subjects saw syllabus revisions
 *
 * ============================================================
 *  SYLLABUS BASIS
 * ============================================================
 *  Official Source: NTA CUET UG 2026 Information Brochure
 *  released 3 January 2026 on cuet.nta.nic.in, plus
 *  subject-wise syllabus PDFs at:
 *  cdnbbsr.s3waas.gov.in/s3d1a21da7bca4abff8b0b61b87597de73/
 *  Domain syllabus = NCERT Class 12 syllabus for each subject,
 *  with NTA-specific additions/deletions noted below.
 *
 *  *** DO-NOT-RE-ADD LIST (removed from CUET in 2025/2026) ***
 *  Old coaching PDFs and 2024 study material WILL list these.
 *  Do NOT create subject cards or tracker chapters for:
 *
 *  Domain subjects removed (from 2025 cycle onward):
 *    - Entrepreneurship
 *    - Teaching Aptitude
 *    - Legal Studies
 *    - Fashion Studies
 *    - Tourism
 *    - Engineering Graphics
 *  (Admissions for courses needing these now use GAT score.)
 *
 *  Languages removed (foreign/minority, from 2025 cycle):
 *    French, Spanish, German, Nepali, Persian, Italian, Arabic,
 *    Sindhi, Kashmiri, Konkani, Bodo, Dogri, Maithili,
 *    Manipuri, Santhali, Sanskrit, Tibetan, Japanese,
 *    Russian, Chinese
 *
 *  Physics topics deleted (2026 syllabus):
 *    - Radioactivity (alpha/beta/gamma) — completely removed
 *    - Polarisation (plane polarised light) — dropped
 *
 *  Business Studies topics deleted (2026):
 *    - Financial Markets chapter — eliminated
 *    - Business Finance / Financial Management — removed
 *
 *  Accountancy topics deleted (2026):
 *    - Not-for-Profit Organisations (NPOs) — dropped
 *    - Redemption of Debentures (under Debenture Issues) — removed
 *
 *  Mathematics (Applied) topics deleted (2026):
 *    - Growth & Decay models — dropped
 *
 * ============================================================
 *  HONESTY NOTES
 * ============================================================
 *  1. OPINION: Subject ordering in PRIORITY_DATA is editorial.
 *     CUET UG has no fixed "important domain" — each student
 *     picks their own subjects. The ordering here assumes the
 *     single most-attempted combination: Language (English) +
 *     Domain 1 + Domain 2 + GAT. Re-tune after mock data.
 *     To verify the most-attempted subjects: check NTA's
 *     post-exam statistics PDF on cuet.nta.nic.in.
 *
 *  2. UNCERTAIN: The 2027 exam dates are estimates based on
 *     the 2026 calendar. Verify at cuet.nta.nic.in when the
 *     2027 notification releases (expected January 2027).
 *
 *  3. OPINION: `days` estimates assume a Class 12 student
 *     preparing ~3–4 hrs/day alongside board prep, OR a
 *     dropper doing 5–6 hrs/day focused CUET prep.
 *     For a dropper, halve the days estimates.
 *
 *  4. OPINION: Priority ratings are based on NTA's track record
 *     of question distribution and topic frequency in CUET
 *     2022–2026 PYQs. Re-tune after the student's first mock.
 *
 *  5. FACT: The `prelimsWeight` field is repurposed here as
 *     `sectionWeight` — the approximate proportion of 50
 *     questions that come from each topic cluster within a
 *     domain paper. CUET has no separate prelims stage.
 *     See schema header comment in each subject block.
 *
 *  6. UNCERTAIN: Performing Arts (Dance, Drama, Music) and
 *     Fine Arts / Visual Arts are listed as single domain
 *     entries by NTA but have sub-options. Verify whether
 *     your target university accepts the sub-option or
 *     requires a specific one. Check university brochure.
 *
 *  7. FACT: Chemistry syllabus in CUET 2026 uses a 16-unit
 *     structure that INCLUDES chapters removed from the
 *     rationalised CBSE Class 12 board syllabus. Students
 *     using only CBSE board prep material are at risk.
 *     Verify against the NTA CUET Chemistry PDF directly.
 *
 * ============================================================
 *  CHANGELOG
 * ============================================================
 *  v1.0 | 2026-07-17 | Initial build — targets 2027 cycle.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
//  EXAM CONFIG
// ─────────────────────────────────────────────────────────────

const EXAM_CONFIG_CUETUG = {
  examKey: "cuet_ug",                    // unique across hub
  examName: "CUET UG",
  examFullName: "Common University Entrance Test (Undergraduate)",
  conductedBy: "NTA (National Testing Agency)",
  targetYear: 2027,

  // 2027 dates are estimated from the 2026 cycle calendar.
  // 2026 actual: application Jan 2026, exam May 11–31 2026.
  // 2027 estimate: application Feb 2027, exam May 2027.
  examDate: "2027-05-15",               // UNCERTAIN — tentative mid-May
  applicationStart: "2027-02-01",       // UNCERTAIN — tentative
  notificationDate: "2027-01-05",       // UNCERTAIN — tentative
  datesTentative: true,
  datesTentativeVerifiedFlag: true,     // verified 2026 cycle was May 11–31; 2027 estimate only

  examPattern: {
    mode: "CBT (Computer-Based Test) only",
    modeVerified: true,                 // verified: NTA notification Jan 3 2026
    sections: [
      {
        id: "sec_1",
        name: "Section I — Languages (IA/IB)",
        description: "Proficiency in chosen language(s)",
        availablePapers: 13,
        availableLanguages: [
          "Tamil", "Telugu", "Kannada", "Malayalam", "Marathi",
          "Gujarati", "Odia", "Bengali", "Assamese", "Punjabi",
          "English", "Hindi", "Urdu"
        ],
        questionsPerPaper: 50,
        allCompulsory: true,
        marksPerPaper: 250,
        durationMinutes: 60,
        markingCorrect: 5,
        markingWrong: -1,
        markingSkipped: 0
      },
      {
        id: "sec_2",
        name: "Section II — Domain Subjects",
        description: "NCERT Class 12 syllabus for chosen subjects",
        availablePapers: 23,
        questionsPerPaper: 50,
        allCompulsory: true,
        marksPerPaper: 250,
        durationMinutes: 60,
        markingCorrect: 5,
        markingWrong: -1,
        markingSkipped: 0
      },
      {
        id: "sec_3",
        name: "Section III — General Aptitude Test (GAT)",
        description: "GK, Current Affairs, Reasoning, Quantitative Ability",
        availablePapers: 1,
        questionsPerPaper: 50,
        allCompulsory: true,
        marksPerPaper: 250,
        durationMinutes: 60,
        markingCorrect: 5,
        markingWrong: -1,
        markingSkipped: 0
      }
    ],
    totalPapers: 37,                    // 13 languages + 23 domain + 1 GAT
    maxPapersPerCandidate: 5,           // reduced from 6 in 2025
    maxPapersVerified: true,
    subjectStreamRestriction: false,    // any student can pick any domain
    negativeMarkingVerified: true,
    durationStandardisedVerified: true  // all papers now 60 min uniform
  },

  // Subject cards — ordered for the most common CUET prep sequence:
  // English (required by most universities for DU, JNU, BHU) first,
  // then GAT (highest-competition paper, needed broadly), then
  // Science domains, then Humanities/Commerce domains.
  // OPINION: adjust to the student's actual subject selection.
  subjects: [
    {
      key: "cuet_ug_lang",
      name: "Language (English / Hindi)",
      icon: "📝",
      color: "#3B82F6",
      examStage: "Section I",
      prefix: "cuet_ug_lang_",
      totalChapters: 5
    },
    {
      key: "cuet_ug_gat",
      name: "General Aptitude Test",
      icon: "🧠",
      color: "#8B5CF6",
      examStage: "Section III",
      prefix: "cuet_ug_gat_",
      totalChapters: 6
    },
    {
      key: "cuet_ug_phy",
      name: "Physics",
      icon: "⚡",
      color: "#F59E0B",
      examStage: "Section II",
      prefix: "cuet_ug_phy_",
      totalChapters: 13
    },
    {
      key: "cuet_ug_chem",
      name: "Chemistry",
      icon: "🧪",
      color: "#10B981",
      examStage: "Section II",
      prefix: "cuet_ug_chem_",
      totalChapters: 16
    },
    {
      key: "cuet_ug_bio",
      name: "Biology",
      icon: "🧬",
      color: "#06B6D4",
      examStage: "Section II",
      prefix: "cuet_ug_bio_",
      totalChapters: 10
    },
    {
      key: "cuet_ug_math",
      name: "Mathematics",
      icon: "📐",
      color: "#EF4444",
      examStage: "Section II",
      prefix: "cuet_ug_math_",
      totalChapters: 13
    },
    {
      key: "cuet_ug_eco",
      name: "Economics",
      icon: "📊",
      color: "#F97316",
      examStage: "Section II",
      prefix: "cuet_ug_eco_",
      totalChapters: 10
    },
    {
      key: "cuet_ug_bst",
      name: "Business Studies",
      icon: "💼",
      color: "#6366F1",
      examStage: "Section II",
      prefix: "cuet_ug_bst_",
      totalChapters: 8
    },
    {
      key: "cuet_ug_acc",
      name: "Accountancy",
      icon: "🧾",
      color: "#EC4899",
      examStage: "Section II",
      prefix: "cuet_ug_acc_",
      totalChapters: 8
    },
    {
      key: "cuet_ug_his",
      name: "History",
      icon: "🏛️",
      color: "#92400E",
      examStage: "Section II",
      prefix: "cuet_ug_his_",
      totalChapters: 15
    },
    {
      key: "cuet_ug_pol",
      name: "Political Science",
      icon: "⚖️",
      color: "#1D4ED8",
      examStage: "Section II",
      prefix: "cuet_ug_pol_",
      totalChapters: 10
    },
    {
      key: "cuet_ug_geo",
      name: "Geography",
      icon: "🗺️",
      color: "#15803D",
      examStage: "Section II",
      prefix: "cuet_ug_geo_",
      totalChapters: 12
    },
    {
      key: "cuet_ug_psy",
      name: "Psychology",
      icon: "🧩",
      color: "#7C3AED",
      examStage: "Section II",
      prefix: "cuet_ug_psy_",
      totalChapters: 8
    },
    {
      key: "cuet_ug_cs",
      name: "Computer Science",
      icon: "💻",
      color: "#0369A1",
      examStage: "Section II",
      prefix: "cuet_ug_cs_",
      totalChapters: 9
    }
  ]
};

// ─────────────────────────────────────────────────────────────
//  PRIORITY DATA
//
//  Field key:      prefix + integer (strictly)
//  `sectionWeight` = approximate % of 50 questions from this
//                    topic cluster in a typical CUET paper.
//                    (Re-named from `prelimsWeight` which has
//                    no meaning in CUET — single-stage exam.
//                    See HONESTY NOTE 5.)
//  `days`          = first-pass concept learning only.
//                    Assumes 3–4 hrs/day (Class 12 student).
//                    Droppers can roughly halve.
// ─────────────────────────────────────────────────────────────

const CUETUG_PRIORITY_DATA = {

  // ── SECTION I: LANGUAGE (English / Hindi) ──────────────────
  // All language papers share the same 3-part structure.
  // totalChapters = 5 (verified count below)

  cuet_ug_lang_1: {
    name: "Reading Comprehension — Factual Passages",
    priority: "VERY HIGH",
    stage: "Section I",
    sectionWeight: "30–35% of language paper",
    days: "4 days",
    category: "Language Skills"
  },
  cuet_ug_lang_2: {
    name: "Reading Comprehension — Narrative Passages",
    priority: "VERY HIGH",
    stage: "Section I",
    sectionWeight: "20–25% of language paper",
    days: "3 days",
    category: "Language Skills"
  },
  cuet_ug_lang_3: {
    name: "Reading Comprehension — Literary Passages",
    priority: "HIGH",
    stage: "Section I",
    sectionWeight: "15–20% of language paper",
    days: "3 days",
    category: "Language Skills"
  },
  cuet_ug_lang_4: {
    name: "Vocabulary — Synonyms, Antonyms, Word Usage",
    priority: "HIGH",
    stage: "Section I",
    sectionWeight: "15–20% of language paper",
    days: "5 days",
    category: "Language Skills"
  },
  cuet_ug_lang_5: {
    name: "Grammar, Verbal Ability & Sentence Rearrangement",
    priority: "MEDIUM",
    stage: "Section I",
    sectionWeight: "10–15% of language paper",
    days: "4 days",
    category: "Language Skills"
  },

  // ── SECTION III: GENERAL APTITUDE TEST (GAT) ───────────────
  // totalChapters = 6 (verified count below)

  cuet_ug_gat_1: {
    name: "General Knowledge — Static & Constitution",
    priority: "HIGH",
    stage: "Section III",
    sectionWeight: "20–25% of GAT paper",
    days: "7 days",
    category: "General Awareness"
  },
  cuet_ug_gat_2: {
    name: "Current Affairs — National & International",
    priority: "VERY HIGH",
    stage: "Section III",
    sectionWeight: "20–25% of GAT paper",
    days: "Ongoing — daily reading",
    category: "General Awareness"
  },
  cuet_ug_gat_3: {
    name: "General Mental Ability — Patterns & Puzzles",
    priority: "HIGH",
    stage: "Section III",
    sectionWeight: "15–20% of GAT paper",
    days: "5 days",
    category: "Reasoning"
  },
  cuet_ug_gat_4: {
    name: "Logical & Analytical Reasoning",
    priority: "HIGH",
    stage: "Section III",
    sectionWeight: "15–20% of GAT paper",
    days: "6 days",
    category: "Reasoning"
  },
  cuet_ug_gat_5: {
    name: "Quantitative Aptitude — Arithmetic & Algebra",
    priority: "HIGH",
    stage: "Section III",
    sectionWeight: "15–20% of GAT paper",
    days: "7 days",
    category: "Numerical Ability"
  },
  cuet_ug_gat_6: {
    name: "Numerical Ability — Geometry, Mensuration, Stats",
    priority: "MEDIUM",
    stage: "Section III",
    sectionWeight: "10–15% of GAT paper",
    days: "5 days",
    category: "Numerical Ability"
  },

  // ── SECTION II: PHYSICS ─────────────────────────────────────
  // Syllabus: NCERT Class 12 with 2026 deletions noted.
  // DELETED (do NOT add back): Radioactivity, Polarisation.
  // totalChapters = 13 (verified count below)

  cuet_ug_phy_1: {
    name: "Electrostatics — Charges, Fields, Potential",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Physics paper",
    days: "4 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_2: {
    name: "Current Electricity",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Physics paper",
    days: "3 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_3: {
    name: "Moving Charges and Magnetism",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "3 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_4: {
    name: "Magnetism and Matter",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Physics paper",
    days: "2 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_5: {
    name: "Electromagnetic Induction",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "3 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_6: {
    name: "Alternating Current",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "3 days",
    category: "Electricity & Magnetism"
  },
  cuet_ug_phy_7: {
    name: "Electromagnetic Waves",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Physics paper",
    days: "2 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_8: {
    name: "Ray Optics and Optical Instruments",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Physics paper",
    days: "4 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_9: {
    name: "Wave Optics (excl. Polarisation — deleted 2026)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "3 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_10: {
    name: "Dual Nature of Radiation and Matter",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "3 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_11: {
    name: "Atoms",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Physics paper",
    days: "2 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_12: {
    name: "Nuclei (excl. Radioactivity — deleted 2026)",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Physics paper",
    days: "2 days",
    category: "Optics & Modern"
  },
  cuet_ug_phy_13: {
    name: "Semiconductor Devices and Logic Gates",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Physics paper",
    days: "4 days",
    category: "Optics & Modern"
  },

  // ── SECTION II: CHEMISTRY ───────────────────────────────────
  // CAUTION: CUET 2026 Chemistry uses 16-unit structure that
  // INCLUDES chapters deleted from the CBSE rationalised board
  // syllabus. Board prep alone is insufficient.
  // totalChapters = 16 (verified count below)

  cuet_ug_chem_1: {
    name: "Solutions",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Physical Chemistry"
  },
  cuet_ug_chem_2: {
    name: "Electrochemistry",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Physical Chemistry"
  },
  cuet_ug_chem_3: {
    name: "Chemical Kinetics",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Physical Chemistry"
  },
  cuet_ug_chem_4: {
    name: "Surface Chemistry",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Chemistry paper",
    days: "2 days",
    category: "Physical Chemistry"
  },
  cuet_ug_chem_5: {
    name: "General Principles of Isolation of Elements",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–5% of Chemistry paper",
    days: "2 days",
    category: "Inorganic Chemistry"
  },
  cuet_ug_chem_6: {
    name: "p-Block Elements",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Chemistry paper",
    days: "5 days",
    category: "Inorganic Chemistry"
  },
  cuet_ug_chem_7: {
    name: "d- and f-Block Elements",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Inorganic Chemistry"
  },
  cuet_ug_chem_8: {
    name: "Coordination Compounds (incl. Metal Carbonyls)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Inorganic Chemistry"
  },
  cuet_ug_chem_9: {
    name: "Haloalkanes and Haloarenes",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_10: {
    name: "Alcohols, Phenols and Ethers",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of Chemistry paper",
    days: "3 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_11: {
    name: "Aldehydes, Ketones and Carboxylic Acids",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Chemistry paper",
    days: "4 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_12: {
    name: "Amines",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Chemistry paper",
    days: "2 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_13: {
    name: "Biomolecules",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Chemistry paper",
    days: "3 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_14: {
    name: "Polymers",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–5% of Chemistry paper",
    days: "2 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_15: {
    name: "Chemistry in Everyday Life",
    priority: "LOW",
    stage: "Section II",
    sectionWeight: "3–4% of Chemistry paper",
    days: "2 days",
    category: "Organic Chemistry"
  },
  cuet_ug_chem_16: {
    name: "Solid State (incl. Henry's Law additions 2026)",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Chemistry paper",
    days: "3 days",
    category: "Physical Chemistry"
  },

  // ── SECTION II: BIOLOGY ─────────────────────────────────────
  // 2026 additions: explicit listing of PCR, RNAi, ICSI, IUI,
  // Amensalism, specific named experiments (Hershey-Chase etc.)
  // totalChapters = 10 (verified count below)

  cuet_ug_bio_1: {
    name: "Reproduction in Organisms",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Biology paper",
    days: "3 days",
    category: "Reproduction"
  },
  cuet_ug_bio_2: {
    name: "Sexual Reproduction in Flowering Plants",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Biology paper",
    days: "3 days",
    category: "Reproduction"
  },
  cuet_ug_bio_3: {
    name: "Human Reproduction (incl. ICSI, IUI — added 2026)",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Biology paper",
    days: "4 days",
    category: "Reproduction"
  },
  cuet_ug_bio_4: {
    name: "Principles of Inheritance and Variation",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Biology paper",
    days: "4 days",
    category: "Genetics & Evolution"
  },
  cuet_ug_bio_5: {
    name: "Molecular Basis of Inheritance",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Biology paper",
    days: "5 days",
    category: "Genetics & Evolution"
  },
  cuet_ug_bio_6: {
    name: "Evolution (incl. Miller's Experiment — added 2026)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Biology paper",
    days: "3 days",
    category: "Genetics & Evolution"
  },
  cuet_ug_bio_7: {
    name: "Biotechnology — Principles and Applications",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Biology paper",
    days: "5 days",
    category: "Biotechnology"
  },
  cuet_ug_bio_8: {
    name: "Biotechnology — PCR, RNAi, and DNA Tech (2026 add)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Biology paper",
    days: "3 days",
    category: "Biotechnology"
  },
  cuet_ug_bio_9: {
    name: "Ecology — Organisms and Populations",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of Biology paper",
    days: "3 days",
    category: "Ecology"
  },
  cuet_ug_bio_10: {
    name: "Ecosystem, Biodiversity & Environmental Issues",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "8–10% of Biology paper",
    days: "4 days",
    category: "Ecology"
  },

  // ── SECTION II: MATHEMATICS ─────────────────────────────────
  // Applied Maths deleted topic (2026): Growth & Decay models.
  // Bond Valuation added (Applied Maths only).
  // totalChapters = 13 (verified count below)

  cuet_ug_math_1: {
    name: "Relations and Functions",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "3 days",
    category: "Algebra"
  },
  cuet_ug_math_2: {
    name: "Inverse Trigonometric Functions",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Maths paper",
    days: "2 days",
    category: "Algebra"
  },
  cuet_ug_math_3: {
    name: "Matrices",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "3 days",
    category: "Algebra"
  },
  cuet_ug_math_4: {
    name: "Determinants",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "3 days",
    category: "Algebra"
  },
  cuet_ug_math_5: {
    name: "Continuity and Differentiability",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "4 days",
    category: "Calculus"
  },
  cuet_ug_math_6: {
    name: "Applications of Derivatives",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "4 days",
    category: "Calculus"
  },
  cuet_ug_math_7: {
    name: "Integrals",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Maths paper",
    days: "5 days",
    category: "Calculus"
  },
  cuet_ug_math_8: {
    name: "Applications of Integrals",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Maths paper",
    days: "2 days",
    category: "Calculus"
  },
  cuet_ug_math_9: {
    name: "Differential Equations",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Maths paper",
    days: "3 days",
    category: "Calculus"
  },
  cuet_ug_math_10: {
    name: "Vector Algebra",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Maths paper",
    days: "3 days",
    category: "Geometry"
  },
  cuet_ug_math_11: {
    name: "Three-Dimensional Geometry",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of Maths paper",
    days: "3 days",
    category: "Geometry"
  },
  cuet_ug_math_12: {
    name: "Linear Programming",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of Maths paper",
    days: "2 days",
    category: "Geometry"
  },
  cuet_ug_math_13: {
    name: "Probability",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Maths paper",
    days: "4 days",
    category: "Statistics"
  },

  // ── SECTION II: ECONOMICS ───────────────────────────────────
  // totalChapters = 10 (verified count below)

  cuet_ug_eco_1: {
    name: "Introduction to Microeconomics & Consumer Behaviour",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Economics paper",
    days: "4 days",
    category: "Microeconomics"
  },
  cuet_ug_eco_2: {
    name: "Theory of Production and Costs",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Microeconomics"
  },
  cuet_ug_eco_3: {
    name: "Market Forms and Price Determination",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Economics paper",
    days: "4 days",
    category: "Microeconomics"
  },
  cuet_ug_eco_4: {
    name: "National Income Accounting",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Economics paper",
    days: "4 days",
    category: "Macroeconomics"
  },
  cuet_ug_eco_5: {
    name: "Money and Banking",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Macroeconomics"
  },
  cuet_ug_eco_6: {
    name: "Determination of Income and Employment",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Macroeconomics"
  },
  cuet_ug_eco_7: {
    name: "Government Budget and the Economy",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Macroeconomics"
  },
  cuet_ug_eco_8: {
    name: "Balance of Payments",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of Economics paper",
    days: "2 days",
    category: "Macroeconomics"
  },
  cuet_ug_eco_9: {
    name: "Indian Economy on the Eve of Independence",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Indian Economy"
  },
  cuet_ug_eco_10: {
    name: "Economic Reforms & Development Since 1991",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Economics paper",
    days: "3 days",
    category: "Indian Economy"
  },

  // ── SECTION II: BUSINESS STUDIES ───────────────────────────
  // DELETED (do NOT add back): Financial Markets chapter,
  // Business Finance / Financial Management chapter.
  // totalChapters = 8 (verified count below)

  cuet_ug_bst_1: {
    name: "Nature and Significance of Management",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of BST paper",
    days: "2 days",
    category: "Management Principles"
  },
  cuet_ug_bst_2: {
    name: "Principles of Management (Fayol & Taylor)",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–14% of BST paper",
    days: "3 days",
    category: "Management Principles"
  },
  cuet_ug_bst_3: {
    name: "Business Environment",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of BST paper",
    days: "2 days",
    category: "Management Principles"
  },
  cuet_ug_bst_4: {
    name: "Planning and Organising",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of BST paper",
    days: "3 days",
    category: "Management Functions"
  },
  cuet_ug_bst_5: {
    name: "Staffing, Directing, and Controlling",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of BST paper",
    days: "4 days",
    category: "Management Functions"
  },
  cuet_ug_bst_6: {
    name: "Marketing Management",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of BST paper",
    days: "3 days",
    category: "Business Operations"
  },
  cuet_ug_bst_7: {
    name: "Consumer Protection",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "8–10% of BST paper",
    days: "2 days",
    category: "Business Operations"
  },
  cuet_ug_bst_8: {
    name: "Entrepreneurship Development",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "8–10% of BST paper",
    days: "2 days",
    category: "Business Operations"
  },

  // ── SECTION II: ACCOUNTANCY ─────────────────────────────────
  // DELETED (do NOT add back): Not-for-Profit Organisations,
  // Redemption of Debentures.
  // totalChapters = 8 (verified count below)

  cuet_ug_acc_1: {
    name: "Partnership Accounts — Fundamentals",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of Accountancy paper",
    days: "4 days",
    category: "Partnership"
  },
  cuet_ug_acc_2: {
    name: "Reconstitution of Partnership Firm",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of Accountancy paper",
    days: "4 days",
    category: "Partnership"
  },
  cuet_ug_acc_3: {
    name: "Dissolution of Partnership Firm",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Accountancy paper",
    days: "3 days",
    category: "Partnership"
  },
  cuet_ug_acc_4: {
    name: "Share Capital and Debenture Accounting",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of Accountancy paper",
    days: "4 days",
    category: "Company Accounts"
  },
  cuet_ug_acc_5: {
    name: "Financial Statements of Companies",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Accountancy paper",
    days: "3 days",
    category: "Company Accounts"
  },
  cuet_ug_acc_6: {
    name: "Analysis of Financial Statements (Ratios)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Accountancy paper",
    days: "3 days",
    category: "Financial Analysis"
  },
  cuet_ug_acc_7: {
    name: "Cash Flow Statement",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Accountancy paper",
    days: "3 days",
    category: "Financial Analysis"
  },
  cuet_ug_acc_8: {
    name: "Accounting for Debentures (excl. Redemption)",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Accountancy paper",
    days: "3 days",
    category: "Company Accounts"
  },

  // ── SECTION II: HISTORY ─────────────────────────────────────
  // NCERT Class 12 History Themes — 15 themes (3 books).
  // 2026: some themes revised. Verify against official PDF.
  // totalChapters = 15 (verified count below)

  cuet_ug_his_1: {
    name: "The Story of the First Cities — Harappan Civilisation",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of History paper",
    days: "2 days",
    category: "Ancient India"
  },
  cuet_ug_his_2: {
    name: "Political and Economic History — Mauryan Empire",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "2 days",
    category: "Ancient India"
  },
  cuet_ug_his_3: {
    name: "Kinship, Caste and Class — Early Societies",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of History paper",
    days: "2 days",
    category: "Ancient India"
  },
  cuet_ug_his_4: {
    name: "Thinkers, Beliefs and Buildings — Buddhism & Jainism",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "2 days",
    category: "Ancient India"
  },
  cuet_ug_his_5: {
    name: "Through the Eyes of Travellers — Medieval India",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of History paper",
    days: "2 days",
    category: "Medieval India"
  },
  cuet_ug_his_6: {
    name: "Bhakti-Sufi Traditions",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "2 days",
    category: "Medieval India"
  },
  cuet_ug_his_7: {
    name: "An Imperial Capital — Vijayanagara",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of History paper",
    days: "2 days",
    category: "Medieval India"
  },
  cuet_ug_his_8: {
    name: "Peasants, Zamindars and the State — Mughal Era",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "2 days",
    category: "Medieval India"
  },
  cuet_ug_his_9: {
    name: "Kings and Chronicles — Mughal Court",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–5% of History paper",
    days: "2 days",
    category: "Medieval India"
  },
  cuet_ug_his_10: {
    name: "Colonialism and the Countryside",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of History paper",
    days: "3 days",
    category: "Modern India"
  },
  cuet_ug_his_11: {
    name: "Rebels and the Raj — 1857 Uprising",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "6–8% of History paper",
    days: "3 days",
    category: "Modern India"
  },
  cuet_ug_his_12: {
    name: "Colonial Cities — Urbanisation, Planning and Architecture",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "4–6% of History paper",
    days: "2 days",
    category: "Modern India"
  },
  cuet_ug_his_13: {
    name: "Mahatma Gandhi and the Nationalist Movement",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of History paper",
    days: "3 days",
    category: "Modern India"
  },
  cuet_ug_his_14: {
    name: "Partition — Understanding and Interpreting",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "3 days",
    category: "Modern India"
  },
  cuet_ug_his_15: {
    name: "The Constitution — Why and How",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "5–7% of History paper",
    days: "3 days",
    category: "Modern India"
  },

  // ── SECTION II: POLITICAL SCIENCE ──────────────────────────
  // totalChapters = 10 (verified count below)

  cuet_ug_pol_1: {
    name: "Challenges of Nation Building",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_2: {
    name: "Era of One-Party Dominance",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_3: {
    name: "Politics of Planned Development",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_4: {
    name: "India's External Relations — Foreign Policy",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_5: {
    name: "Challenges to the Congress System & Emergency",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Pol Sci paper",
    days: "3 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_6: {
    name: "Rise of Popular Movements",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_7: {
    name: "Regional Aspirations and the Federal System",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "2 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_8: {
    name: "Recent Developments in Indian Politics",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "3 days",
    category: "Indian Politics"
  },
  cuet_ug_pol_9: {
    name: "Cold War Era and Bi-Polar World",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Pol Sci paper",
    days: "2 days",
    category: "World Politics"
  },
  cuet_ug_pol_10: {
    name: "Post-Cold War — Globalisation, Security, New Centres",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Pol Sci paper",
    days: "4 days",
    category: "World Politics"
  },

  // ── SECTION II: GEOGRAPHY ───────────────────────────────────
  // totalChapters = 12 (verified count below)

  cuet_ug_geo_1: {
    name: "Human Geography — Nature and Scope",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "5–7% of Geography paper",
    days: "1 days",
    category: "Human Geography"
  },
  cuet_ug_geo_2: {
    name: "World Population — Distribution, Density, Growth",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "Human Geography"
  },
  cuet_ug_geo_3: {
    name: "Human Development",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "Human Geography"
  },
  cuet_ug_geo_4: {
    name: "Primary Activities — Agriculture, Forestry, Mining",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "Economic Geography"
  },
  cuet_ug_geo_5: {
    name: "Secondary and Tertiary Activities",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "Economic Geography"
  },
  cuet_ug_geo_6: {
    name: "Transport, Communication and Trade",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "Economic Geography"
  },
  cuet_ug_geo_7: {
    name: "International Trade",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "5–7% of Geography paper",
    days: "2 days",
    category: "Economic Geography"
  },
  cuet_ug_geo_8: {
    name: "India — Location, Relief, Structure, Drainage",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Geography paper",
    days: "3 days",
    category: "India Geography"
  },
  cuet_ug_geo_9: {
    name: "India — Climate, Vegetation, Soils",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Geography paper",
    days: "3 days",
    category: "India Geography"
  },
  cuet_ug_geo_10: {
    name: "India — Resources and Agriculture",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "India Geography"
  },
  cuet_ug_geo_11: {
    name: "India — Industries and Infrastructure",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "India Geography"
  },
  cuet_ug_geo_12: {
    name: "India — Population and Human Settlements",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of Geography paper",
    days: "2 days",
    category: "India Geography"
  },

  // ── SECTION II: PSYCHOLOGY ──────────────────────────────────
  // totalChapters = 8 (verified count below)

  cuet_ug_psy_1: {
    name: "What is Psychology? — Nature and Methods",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of Psychology paper",
    days: "2 days",
    category: "Foundations"
  },
  cuet_ug_psy_2: {
    name: "Biological and Cultural Basis of Behaviour",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Psychology paper",
    days: "2 days",
    category: "Foundations"
  },
  cuet_ug_psy_3: {
    name: "Human Development",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Psychology paper",
    days: "3 days",
    category: "Developmental"
  },
  cuet_ug_psy_4: {
    name: "Sensory, Attentional and Perceptual Processes",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Psychology paper",
    days: "3 days",
    category: "Cognitive"
  },
  cuet_ug_psy_5: {
    name: "Learning",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of Psychology paper",
    days: "3 days",
    category: "Cognitive"
  },
  cuet_ug_psy_6: {
    name: "Motivation and Emotion",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Psychology paper",
    days: "2 days",
    category: "Cognitive"
  },
  cuet_ug_psy_7: {
    name: "Individual Differences — Intelligence & Personality",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–14% of Psychology paper",
    days: "4 days",
    category: "Individual Differences"
  },
  cuet_ug_psy_8: {
    name: "Social Influence, Group Processes and Applications",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of Psychology paper",
    days: "3 days",
    category: "Social Psychology"
  },

  // ── SECTION II: COMPUTER SCIENCE ───────────────────────────
  // totalChapters = 9 (verified count below)

  cuet_ug_cs_1: {
    name: "Computational Thinking and Programming — Python",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of CS paper",
    days: "5 days",
    category: "Programming"
  },
  cuet_ug_cs_2: {
    name: "Data Structures — Lists, Tuples, Dictionaries",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of CS paper",
    days: "4 days",
    category: "Programming"
  },
  cuet_ug_cs_3: {
    name: "Functions and Modules in Python",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of CS paper",
    days: "3 days",
    category: "Programming"
  },
  cuet_ug_cs_4: {
    name: "File Handling",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "7–9% of CS paper",
    days: "2 days",
    category: "Programming"
  },
  cuet_ug_cs_5: {
    name: "Exception Handling and Libraries",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "5–7% of CS paper",
    days: "2 days",
    category: "Programming"
  },
  cuet_ug_cs_6: {
    name: "Computer Networks — Types, Protocols, Security",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "10–12% of CS paper",
    days: "3 days",
    category: "Networking"
  },
  cuet_ug_cs_7: {
    name: "Database Concepts and SQL",
    priority: "VERY HIGH",
    stage: "Section II",
    sectionWeight: "12–15% of CS paper",
    days: "4 days",
    category: "Database"
  },
  cuet_ug_cs_8: {
    name: "Boolean Algebra and Logic Gates",
    priority: "HIGH",
    stage: "Section II",
    sectionWeight: "8–10% of CS paper",
    days: "3 days",
    category: "Digital Logic"
  },
  cuet_ug_cs_9: {
    name: "Society, Law and Ethics — Cybersecurity & AI",
    priority: "MEDIUM",
    stage: "Section II",
    sectionWeight: "6–8% of CS paper",
    days: "2 days",
    category: "Societal Issues"
  }
};

/*
 * ============================================================
 *  STORAGE PATTERN
 * ============================================================
 *  ONE JSON blob per subject prefix, stored in localStorage:
 *
 *    localStorage.setItem(
 *      subject.prefix + "progress",
 *      JSON.stringify(progressObj)
 *    );
 *
 *  progressObj maps chapterKey → { done: bool, score: number, … }
 *  Never store one key per chapter — prefix lookups break.
 * ============================================================
 */

if (typeof window !== "undefined") {
  window.EXAM_CONFIG_CUETUG = EXAM_CONFIG_CUETUG;
  window.CUETUG_PRIORITY_DATA = CUETUG_PRIORITY_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_CONFIG_CUETUG, CUETUG_PRIORITY_DATA };
}
