/**
 * ============================================================
 * ARPIT'S EXAM HUB — UPSC CSE MODULE DATA
 * File: upsc_exam_data.js | Version: 1.0 | Date: 15 Jul 2026
 * ============================================================
 */

window.EXAM_CONFIG_UPSC = {
  examKey: "upsc_cse",
  examName: "UPSC Civil Services Examination",
  targetYear: 2027,
  prelimsDate: "2027-05-23",
  mainsDate: "2027-08-20",
  notificationDate: "2027-01-13",
  applicationDeadline: "2027-02-02",
  subjects: [
    { key: "polity",           name: "Indian Polity & Governance",            icon: "⚖️", color: "#3B5BDB", examStage: "Prelims + Mains", prefix: "upsc_pol_", totalChapters: 23 },
    { key: "modern_history",   name: "Modern Indian History & Freedom Struggle", icon: "✊", color: "#B04A2F", examStage: "Prelims + Mains", prefix: "upsc_mhi_", totalChapters: 14 },
    { key: "geography",        name: "Geography (Physical, Indian, World, Human)", icon: "🌍", color: "#2B8A6E", examStage: "Prelims + Mains", prefix: "upsc_geo_", totalChapters: 16 },
    { key: "economy",          name: "Indian Economy & Development",          icon: "📈", color: "#B7791F", examStage: "Prelims + Mains", prefix: "upsc_eco_", totalChapters: 14 },
    { key: "env_eco",          name: "Environment, Biodiversity & Ecology",   icon: "🌿", color: "#4C9A3F", examStage: "Prelims + Mains", prefix: "upsc_env_", totalChapters: 10 },
    { key: "ancient_medieval", name: "Ancient & Medieval History",            icon: "🏺", color: "#8C6239", examStage: "Prelims + Mains", prefix: "upsc_anc_", totalChapters: 10 },
    { key: "art_culture",      name: "Art & Culture",                         icon: "🎭", color: "#A64D9C", examStage: "Prelims + Mains", prefix: "upsc_art_", totalChapters: 8 },
    { key: "sci_tech",         name: "Science & Technology",                  icon: "🔬", color: "#2C7A9E", examStage: "Prelims + Mains", prefix: "upsc_sct_", totalChapters: 8 },
    { key: "ir_security",      name: "International Relations & Security",    icon: "🌐", color: "#5F5AA2", examStage: "Prelims + Mains", prefix: "upsc_irs_", totalChapters: 8 },
    { key: "ethics_gs4",       name: "Ethics, Integrity & Aptitude (GS-4)",   icon: "🧭", color: "#6B7280", examStage: "Mains Only (GS4)", prefix: "upsc_eth_", totalChapters: 8 },
    { key: "csat_aptitude",    name: "CSAT — Aptitude & Comprehension",       icon: "🧮", color: "#B34747", examStage: "Prelims Only",    prefix: "upsc_csa_", totalChapters: 7 }
  ]
};

window.UPSC_PRIORITY_DATA = {

  // ══════════ 1. INDIAN POLITY & GOVERNANCE (Laxmikanth-mapped, 23) ══════════
  upsc_pol_1:  { name: "Historical Background & Making of the Constitution", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Constitutional Framework" },
  upsc_pol_2:  { name: "Salient Features & the Preamble",                    priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Constitutional Framework" },
  upsc_pol_3:  { name: "Union & Its Territory + Citizenship",                priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Constitutional Framework" },
  upsc_pol_4:  { name: "Fundamental Rights (Art. 12–35)",                    priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "4 days", category: "Constitutional Framework" },
  upsc_pol_5:  { name: "DPSP & Fundamental Duties",                          priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Constitutional Framework" },
  upsc_pol_6:  { name: "Constitutional Amendments & Basic Structure",        priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Constitutional Framework" },
  upsc_pol_7:  { name: "Parliamentary System & Nature of Federalism",        priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "System of Government" },
  upsc_pol_8:  { name: "Centre–State & Inter-State Relations",               priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "System of Government" },
  upsc_pol_9:  { name: "Emergency Provisions",                               priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "1 day",  category: "System of Government" },
  upsc_pol_10: { name: "President & Vice-President",                         priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Union Government" },
  upsc_pol_11: { name: "PM, Council of Ministers & Cabinet Committees",      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Union Government" },
  upsc_pol_12: { name: "Parliament — Structure, Sessions, Bills, Budget, Committees", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "5 days", category: "Union Government" },
  upsc_pol_13: { name: "Supreme Court, Judicial Review & Judicial Activism", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Judiciary" },
  upsc_pol_14: { name: "State Executive — Governor & Chief Minister",        priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "State Government" },
  upsc_pol_15: { name: "State Legislature",                                  priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "2 days", category: "State Government" },
  upsc_pol_16: { name: "High Courts & Subordinate Judiciary",                priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "2 days", category: "Judiciary" },
  upsc_pol_17: { name: "Local Government — Panchayats & Municipalities (73rd/74th)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Local Governance" },
  upsc_pol_18: { name: "UTs, Scheduled & Tribal Areas, Special Provisions",  priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Special Areas" },
  upsc_pol_19: { name: "Constitutional Bodies — EC, UPSC, CAG, AG, Finance Commission, NCSC/ST/BC", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "4 days", category: "Bodies & Institutions" },
  upsc_pol_20: { name: "Non-Constitutional Bodies — NITI, NHRC, CIC, CVC, CBI, Lokpal", priority: "HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Bodies & Institutions" },
  upsc_pol_21: { name: "Tribunals, Elections & RPA, Official Language",      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Bodies & Institutions" },
  upsc_pol_22: { name: "Parties, Pressure Groups & Anti-Defection Law",      priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Political Dynamics" },
  upsc_pol_23: { name: "Governance — Transparency, E-Gov, Citizen Charters, SHGs", priority: "HIGH", stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "3 days", category: "Governance (GS-2)" },

  // ══════════ 2. MODERN INDIAN HISTORY (Spectrum-mapped, 14) ══════════
  upsc_mhi_1:  { name: "Advent of Europeans & British Conquest of India",    priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Company Rule" },
  upsc_mhi_2:  { name: "British Administration & Economic Impact (Land Revenue, Drain)", priority: "HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Company Rule" },
  upsc_mhi_3:  { name: "Revolt of 1857 — Causes, Spread, Aftermath",         priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Early Resistance" },
  upsc_mhi_4:  { name: "Socio-Religious Reform Movements",                   priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Social Awakening" },
  upsc_mhi_5:  { name: "Rise of Nationalism & Formation of INC (1858–1905)", priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "National Movement I" },
  upsc_mhi_6:  { name: "Swadeshi, Partition of Bengal, Moderates vs Extremists (1905–17)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "National Movement I" },
  upsc_mhi_7:  { name: "Gandhi's Emergence — Champaran to Non-Cooperation (1917–22)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2 Qs", days: "3 days", category: "Gandhian Era" },
  upsc_mhi_8:  { name: "1920s Politics — Swarajists, Simon Commission, Nehru Report, Revolutionaries", priority: "HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Gandhian Era" },
  upsc_mhi_9:  { name: "Civil Disobedience & Round Table Conferences (1930–35)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Gandhian Era" },
  upsc_mhi_10: { name: "GoI Act 1935, Provincial Ministries & WWII-era Politics", priority: "HIGH",  stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Towards Freedom" },
  upsc_mhi_11: { name: "Quit India, INA & Naval Mutiny (1942–46)",           priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Towards Freedom" },
  upsc_mhi_12: { name: "Cabinet Mission, Partition & Independence (1946–47)", priority: "HIGH",     stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Towards Freedom" },
  upsc_mhi_13: { name: "Post-Independence Consolidation & States Reorganisation", priority: "MEDIUM", stage: "Mains Only",   prelimsWeight: "— (Mains)", days: "3 days", category: "Post-1947 (GS-1)" },
  upsc_mhi_14: { name: "Governor-Generals & Viceroys — Chronology & Acts",   priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Reference & Revision" },

  // ══════════ 3. GEOGRAPHY (16) ══════════
  upsc_geo_1:  { name: "Geomorphology — Earth Interior, Plate Tectonics, Landforms", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2 Qs", days: "4 days", category: "Physical Geography" },
  upsc_geo_2:  { name: "Climatology — Atmosphere, Winds, Pressure, Cyclones", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "5 days", category: "Physical Geography" },
  upsc_geo_3:  { name: "Oceanography — Currents, Tides, El Niño/La Niña",    priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Physical Geography" },
  upsc_geo_4:  { name: "Biogeography — Soils & Biomes of the World",         priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Physical Geography" },
  upsc_geo_5:  { name: "World Physical Geography & Places in News (Mapping)", priority: "HIGH",     stage: "Prelims Only",    prelimsWeight: "1-2 Qs", days: "3 days", category: "World Geography" },
  upsc_geo_6:  { name: "Indian Physiography — Mountains, Plateaus, Plains, Coasts", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Indian Geography" },
  upsc_geo_7:  { name: "Indian Drainage Systems — Himalayan & Peninsular Rivers", priority: "HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Indian Geography" },
  upsc_geo_8:  { name: "Indian Climate & the Monsoon Mechanism",             priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Indian Geography" },
  upsc_geo_9:  { name: "Indian Soils & Natural Vegetation",                  priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Indian Geography" },
  upsc_geo_10: { name: "Indian Agriculture — Cropping Patterns & Irrigation", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Economic Geography" },
  upsc_geo_11: { name: "Mineral & Energy Resources of India",                priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Economic Geography" },
  upsc_geo_12: { name: "Industries & Industrial Regions",                    priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Economic Geography" },
  upsc_geo_13: { name: "Transport, Trade & Communication",                   priority: "LOW",       stage: "Prelims Only",    prelimsWeight: "0-1 Q",  days: "1 day",  category: "Economic Geography" },
  upsc_geo_14: { name: "Human Geography — Population, Migration, Settlements", priority: "MEDIUM",  stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Human Geography" },
  upsc_geo_15: { name: "Daily Map Practice — India & World Atlas Work",      priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "Ongoing (15 min/day)", category: "Map Skills" },
  upsc_geo_16: { name: "Geophysical Phenomena & Disasters (Earthquakes, Floods, Landslides)", priority: "MEDIUM", stage: "Prelims + Mains", prelimsWeight: "1 Q", days: "2 days", category: "Contemporary Geography" },

  // ══════════ 4. INDIAN ECONOMY (14) ══════════
  upsc_eco_1:  { name: "Basic Concepts — GDP, GNP, NNP, Deflator, Inflation Indices", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2 Qs", days: "3 days", category: "Fundamentals" },
  upsc_eco_2:  { name: "National Income Accounting & Growth vs Development", priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Fundamentals" },
  upsc_eco_3:  { name: "Money & Banking — RBI, Monetary Policy, NPAs, Bank Types", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "4 days", category: "Financial System" },
  upsc_eco_4:  { name: "Financial Markets — Capital Market, SEBI, Instruments", priority: "HIGH",   stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Financial System" },
  upsc_eco_5:  { name: "Public Finance — Budget, Taxation (GST), Fiscal Policy, FRBM", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2 Qs", days: "4 days", category: "Government Finance" },
  upsc_eco_6:  { name: "External Sector — BoP, Forex, Convertibility, Trade Policy", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "External Economy" },
  upsc_eco_7:  { name: "Inflation, Employment & Unemployment Measures",      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Macro Issues" },
  upsc_eco_8:  { name: "Agriculture Economics — MSP, PDS, Subsidies, Reforms", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Sectoral Economy" },
  upsc_eco_9:  { name: "Industry, Infrastructure & PPP Models",              priority: "MEDIUM",    stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Sectoral Economy" },
  upsc_eco_10: { name: "Poverty, Inequality & Human Development Indices",    priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Development" },
  upsc_eco_11: { name: "Flagship Government Schemes (Live Tracker)",         priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "3 days + ongoing", category: "Schemes & Policy" },
  upsc_eco_12: { name: "International Institutions — IMF, World Bank, WTO, ADB", priority: "HIGH",  stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Global Economy" },
  upsc_eco_13: { name: "Economic Survey & Union Budget (Current Year)",      priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "4 days (Feb–Mar 2027)", category: "Current Economy" },
  upsc_eco_14: { name: "Planning History, NITI Aayog & Development Models",  priority: "LOW",       stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "1 day",  category: "Fundamentals" },

  // ══════════ 5. ENVIRONMENT & ECOLOGY (10) ══════════
  upsc_env_1:  { name: "Ecology Basics — Ecosystems, Food Chains, Biogeochemical Cycles", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "3 days", category: "Core Ecology" },
  upsc_env_2:  { name: "Biodiversity — Types, Hotspots, Conservation Approaches", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "3 days", category: "Biodiversity" },
  upsc_env_3:  { name: "Protected Area Network — NPs, Sanctuaries, Biosphere & Tiger Reserves, Ramsar", priority: "VERY HIGH", stage: "Prelims Only", prelimsWeight: "2-3 Qs", days: "3 days", category: "Biodiversity" },
  upsc_env_4:  { name: "Wildlife & Species in News — Behaviour, Habitat, IUCN Status", priority: "VERY HIGH", stage: "Prelims Only", prelimsWeight: "2-3 Qs", days: "3 days + ongoing", category: "Biodiversity" },
  upsc_env_5:  { name: "Climate Change — Science, Impacts, Mitigation & Adaptation", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2 Qs", days: "3 days", category: "Climate" },
  upsc_env_6:  { name: "International Conventions — UNFCCC/COPs, CBD, CITES, Montreal, Basel", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "2-3 Qs", days: "4 days", category: "Global Frameworks" },
  upsc_env_7:  { name: "Pollution — Air, Water, Soil, Waste & Control Tech", priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Pollution" },
  upsc_env_8:  { name: "Indian Environmental Laws & Bodies — EPA, WPA, NGT, CPCB", priority: "HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "2 days", category: "Law & Institutions" },
  upsc_env_9:  { name: "Renewable Energy & Sustainable Development (SDGs)",  priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Sustainability" },
  upsc_env_10: { name: "Agriculture–Environment Interface — Organic, GM Crops, Soil Health", priority: "MEDIUM", stage: "Prelims + Mains", prelimsWeight: "1 Q", days: "2 days", category: "Sustainability" },

  // ══════════ 6. ANCIENT & MEDIEVAL HISTORY (10) ══════════
  upsc_anc_1:  { name: "Prehistoric Cultures & Indus Valley Civilisation",   priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1-2 Qs", days: "2 days", category: "Ancient India" },
  upsc_anc_2:  { name: "Vedic Age — Society, Polity, Literature",            priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Ancient India" },
  upsc_anc_3:  { name: "Buddhism & Jainism — Doctrines, Councils, Spread",   priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Religious Movements" },
  upsc_anc_4:  { name: "Mauryan Empire — Ashoka, Administration, Edicts",    priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Ancient India" },
  upsc_anc_5:  { name: "Post-Mauryan Period & Sangam Age",                   priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Ancient India" },
  upsc_anc_6:  { name: "Gupta & Post-Gupta Period — Golden Age Debate",      priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Ancient India" },
  upsc_anc_7:  { name: "Early Medieval — Cholas, Rajputs, Palas, Rashtrakutas", priority: "MEDIUM", stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Medieval India" },
  upsc_anc_8:  { name: "Delhi Sultanate — Dynasties, Administration, Economy", priority: "MEDIUM",  stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Medieval India" },
  upsc_anc_9:  { name: "Vijayanagara & Bahmani Kingdoms",                    priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "0-1 Q",  days: "1 day",  category: "Medieval India" },
  upsc_anc_10: { name: "Mughal Empire & Rise of the Marathas",               priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Medieval India" },

  // ══════════ 7. ART & CULTURE (8) ══════════
  upsc_art_1:  { name: "Architecture — Temple Styles, Indo-Islamic, Colonial, Rock-Cut", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Visual Arts" },
  upsc_art_2:  { name: "Sculpture, Pottery & Coinage Traditions",            priority: "MEDIUM",    stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "1 day",  category: "Visual Arts" },
  upsc_art_3:  { name: "Paintings — Murals, Miniatures, Folk Traditions",    priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Visual Arts" },
  upsc_art_4:  { name: "Classical & Folk Music and Dance Forms",             priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "2 days", category: "Performing Arts" },
  upsc_art_5:  { name: "Theatre, Puppetry & Martial Art Forms",              priority: "LOW",       stage: "Prelims Only",    prelimsWeight: "0-1 Q",  days: "1 day",  category: "Performing Arts" },
  upsc_art_6:  { name: "Literature & Language Traditions (Classical Languages)", priority: "MEDIUM", stage: "Prelims Only",   prelimsWeight: "1 Q",    days: "2 days", category: "Literary Heritage" },
  upsc_art_7:  { name: "Indian Philosophy Schools & Religious Traditions",   priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Philosophy & Religion" },
  upsc_art_8:  { name: "UNESCO Sites, GI Tags & Festivals (Live Tracker)",   priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1-2 Qs", days: "2 days + ongoing", category: "Heritage & Current" },

  // ══════════ 8. SCIENCE & TECHNOLOGY (8) ══════════
  upsc_sct_1:  { name: "Space Technology — ISRO Missions, Orbits, Launch Vehicles", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Space" },
  upsc_sct_2:  { name: "Biotechnology — Genes, CRISPR, Vaccines, GM Debate", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Biotech & Health" },
  upsc_sct_3:  { name: "IT & Emerging Tech — AI, Quantum, Blockchain, 5G/6G, Semiconductors", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days", category: "Emerging Tech" },
  upsc_sct_4:  { name: "Defence Technology — Missiles, Platforms, Exercises", priority: "HIGH",     stage: "Prelims Only",    prelimsWeight: "1-2 Qs", days: "2 days", category: "Defence" },
  upsc_sct_5:  { name: "Nuclear Technology & Energy Programme",              priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Energy" },
  upsc_sct_6:  { name: "Health & Diseases in News — Pathogens, Treatments",  priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "1-2 Qs", days: "2 days", category: "Biotech & Health" },
  upsc_sct_7:  { name: "Basic Science Refresher — NCERT Physics/Chemistry/Biology Concepts", priority: "MEDIUM", stage: "Prelims Only", prelimsWeight: "1-2 Qs", days: "4 days", category: "Fundamentals" },
  upsc_sct_8:  { name: "S&T Institutions, Awards & Misc Current Developments", priority: "MEDIUM",  stage: "Prelims Only",    prelimsWeight: "1 Q",    days: "Ongoing", category: "Current S&T" },

  // ══════════ 9. INTERNATIONAL RELATIONS & SECURITY (8) ══════════
  upsc_irs_1:  { name: "India & the Neighbourhood — Pakistan, China, Nepal, Bangladesh, Sri Lanka", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1 Q", days: "3 days", category: "Bilateral Relations" },
  upsc_irs_2:  { name: "India & Major Powers — USA, Russia, EU, Japan",      priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "3 days", category: "Bilateral Relations" },
  upsc_irs_3:  { name: "Groupings — QUAD, BRICS, SCO, ASEAN, G20, I2U2 (Live Tracker)", priority: "VERY HIGH", stage: "Prelims + Mains", prelimsWeight: "1-2 Qs", days: "3 days + ongoing", category: "Multilateral" },
  upsc_irs_4:  { name: "UN System & International Institutions",             priority: "HIGH",      stage: "Prelims + Mains", prelimsWeight: "1 Q",    days: "2 days", category: "Multilateral" },
  upsc_irs_5:  { name: "Internal Security — Extremism, Insurgency, LWE",     priority: "HIGH",      stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Security (GS-3)" },
  upsc_irs_6:  { name: "Cyber Security, Money Laundering & Terror Financing", priority: "HIGH",     stage: "Prelims + Mains", prelimsWeight: "0-1 Q",  days: "2 days", category: "Security (GS-3)" },
  upsc_irs_7:  { name: "Border Management & Defence Cooperation",            priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days", category: "Security (GS-3)" },
  upsc_irs_8:  { name: "Evolution of India's Foreign Policy & Strategic Doctrine", priority: "MEDIUM", stage: "Mains Only",   prelimsWeight: "— (Mains)", days: "2 days", category: "Foreign Policy (GS-2)" },

  // ══════════ 10. ETHICS, INTEGRITY & APTITUDE — GS-4 (8, all Mains) ══════════
  upsc_eth_1:  { name: "Ethics & Human Interface — Essence, Determinants, Consequences", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Theory" },
  upsc_eth_2:  { name: "Attitude, Aptitude & Foundational Values for Civil Service", priority: "VERY HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "2 days", category: "Theory" },
  upsc_eth_3:  { name: "Emotional Intelligence — Concepts & Administrative Application", priority: "HIGH", stage: "Mains Only", prelimsWeight: "— (Mains)", days: "1 day", category: "Theory" },
  upsc_eth_4:  { name: "Moral Thinkers & Philosophers — Indian & Western",   priority: "HIGH",      stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "3 days", category: "Thinkers" },
  upsc_eth_5:  { name: "Public Service Values, Probity & Ethical Governance", priority: "VERY HIGH", stage: "Mains Only",     prelimsWeight: "— (Mains)", days: "2 days", category: "Applied Ethics" },
  upsc_eth_6:  { name: "Corporate Governance & Accountability Mechanisms",   priority: "MEDIUM",    stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "1 day",  category: "Applied Ethics" },
  upsc_eth_7:  { name: "Case Studies — Framework, Templates & Practice Sets", priority: "VERY HIGH", stage: "Mains Only",     prelimsWeight: "— (Mains)", days: "4 days + ongoing", category: "Case Studies" },
  upsc_eth_8:  { name: "Ethics Keywords Glossary & Quotes Bank",             priority: "HIGH",      stage: "Mains Only",      prelimsWeight: "— (Mains)", days: "2 days + ongoing", category: "Reference" },

  // ══════════ 11. CSAT — PAPER 2 (7, qualifying at 66/200) ══════════
  upsc_csa_1:  { name: "Reading Comprehension — Passages & Inference Skills", priority: "VERY HIGH", stage: "Prelims Only",   prelimsWeight: "25-27 Qs", days: "5 days + ongoing", category: "Comprehension" },
  upsc_csa_2:  { name: "Basic Numeracy — Number System, Percentages, Ratio & Averages", priority: "VERY HIGH", stage: "Prelims Only", prelimsWeight: "~15 Qs", days: "5 days", category: "Quantitative" },
  upsc_csa_3:  { name: "Arithmetic — Time-Work, Speed-Distance, SI/CI, Profit-Loss", priority: "HIGH", stage: "Prelims Only", prelimsWeight: "~10 Qs", days: "4 days", category: "Quantitative" },
  upsc_csa_4:  { name: "Data Interpretation — Tables, Graphs, Charts",       priority: "HIGH",      stage: "Prelims Only",    prelimsWeight: "5-8 Qs", days: "3 days", category: "Quantitative" },
  upsc_csa_5:  { name: "Logical Reasoning — Syllogisms, Arrangements, Blood Relations, Directions", priority: "VERY HIGH", stage: "Prelims Only", prelimsWeight: "~15 Qs", days: "5 days", category: "Reasoning" },
  upsc_csa_6:  { name: "Analytical Ability — Puzzles, Series, Venn Diagrams", priority: "HIGH",     stage: "Prelims Only",    prelimsWeight: "~8 Qs",  days: "3 days", category: "Reasoning" },
  upsc_csa_7:  { name: "Decision Making & Interpersonal Skills (No Negative Marking)", priority: "LOW", stage: "Prelims Only", prelimsWeight: "2-3 Qs", days: "1 day", category: "Decision Making" }
};
