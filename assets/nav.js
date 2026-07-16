// Storage polyfill
if (!window.storage) {
  window.storage = {
    get: async (k) => ({ value: localStorage.getItem(k) }),
    set: async (k, v) => localStorage.setItem(k, v),
    delete: async (k) => localStorage.removeItem(k)
  };
}

const SUBJECT_COLORS = {
  speedmath: { primary: '#F97316', dim: '#EA580C', bg: '#2A1500' },
  quant:     { primary: '#7F77DD', dim: '#534AB7', bg: '#26215C' },
  reasoning: { primary: '#3B82F6', dim: '#1D4ED8', bg: '#0C2A3D' },
  coding:    { primary: '#D97706', dim: '#B45309', bg: '#3B2000' },
  english:   { primary: '#1D9E75', dim: '#0F6E56', bg: '#04342C' },
  gk:        { primary: '#EC4899', dim: '#BE185D', bg: '#3D0022' },
  // UPSC colors
  upsc_polity:           { primary: '#3B5BDB' },
  upsc_modern_history:   { primary: '#B04A2F' },
  upsc_geography:        { primary: '#2B8A6E' },
  upsc_economy:          { primary: '#B7791F' },
  upsc_env_eco:          { primary: '#4C9A3F' },
  upsc_ancient_medieval: { primary: '#8C6239' },
  upsc_art_culture:      { primary: '#A64D9C' },
  upsc_sci_tech:         { primary: '#2C7A9E' },
  upsc_ir_security:      { primary: '#5F5AA2' },
  upsc_ethics_gs4:       { primary: '#6B7280' },
  upsc_csat_aptitude:    { primary: '#B34747' },
  // IBPS PO colors
  ibps_qnt: { primary: '#B7791F' },
  ibps_rea: { primary: '#5F5AA2' },
  ibps_eng: { primary: '#B04A2F' },
  ibps_dia: { primary: '#2C7A9E' },
  ibps_gab: { primary: '#2B8A6E' },
  ibps_dsc: { primary: '#A64D9C' },
  // JEE colors
  jee_phy: { primary: '#3B5BDB' },
  jee_che: { primary: '#2B8A6E' },
  jee_mat: { primary: '#B7791F' },
  // NEET UG colors
  neet_bot: { primary: '#4C9A3F' },
  neet_zoo: { primary: '#B04A2F' },
  neet_che: { primary: '#7C3AED' },
  neet_phy: { primary: '#3B5BDB' },
  // CAT colors
  cat_qa:   { primary: '#E67E22' },
  cat_dilr: { primary: '#27AE60' },
  cat_varc: { primary: '#2E86C1' },
  // CMAT colors
  cmat_qt: { primary: '#3B82F6' },
  cmat_lr: { primary: '#8B5CF6' },
  cmat_lc: { primary: '#10B981' },
  cmat_ga: { primary: '#F59E0B' },
  cmat_ie: { primary: '#EF4444' },
  // CDS colors
  cds_gk: { primary: '#F59E0B' },
  cds_en: { primary: '#10B981' },
  cds_ma: { primary: '#3B82F6' },
  // CA Foundation colors
  cafnd_acc: { primary: '#C0392B' },
  cafnd_law: { primary: '#16A085' },
  cafnd_qa:  { primary: '#8E44AD' },
  cafnd_eco: { primary: '#D68910' },
  // CA Inter colors
  cain_acc:   { primary: '#B03A2E' },
  cain_law:   { primary: '#117864' },
  cain_tax:   { primary: '#1F618D' },
  cain_cost:  { primary: '#7D3C98' },
  cain_audit: { primary: '#196F3D' },
  cain_fmsm:  { primary: '#B9770E' },
  // CA Final colors
  cafin_fr:   { primary: '#922B21' },
  cafin_afm:  { primary: '#1A5276' },
  cafin_aud:  { primary: '#0E6251' },
  cafin_dt:   { primary: '#6C3483' },
  cafin_idt:  { primary: '#A04000' },
  cafin_ibs:  { primary: '#148F77' },
  // RRB NTPC colors
  ntpc_ga:   { primary: '#6C3483' },
  ntpc_reas: { primary: '#1A5276' },
  ntpc_math: { primary: '#B9770E' },
  // RRB Group D colors
  rrbd_reas: { primary: '#2E86C1' },
  rrbd_sci:  { primary: '#229954' },
  rrbd_math: { primary: '#CA6F1E' },
  rrbd_ga:   { primary: '#7D3C98' },
  // SSC CHSL colors
  chsl_eng:      { primary: '#8E44AD' },
  chsl_reason:   { primary: '#2980B9' },
  chsl_math:     { primary: '#27AE60' },
  chsl_ga:       { primary: '#E67E22' },
  chsl_computer: { primary: '#1ABC9C' },
  // SSC MTS colors
  mts_ga:     { primary: '#E67E22' },
  mts_eng:    { primary: '#8E44AD' },
  mts_math:   { primary: '#27AE60' },
  mts_reason: { primary: '#2980B9' },
  // UGC NET colors
  ugcnet_p1_teaching:      { primary: '#4F46E5' },
  ugcnet_p1_research:      { primary: '#0891B2' },
  ugcnet_p1_reasoning:     { primary: '#7C3AED' },
  ugcnet_p1_di:            { primary: '#059669' },
  ugcnet_p1_communication: { primary: '#D97706' },
  ugcnet_p1_comprehension: { primary: '#BE185D' },
  ugcnet_p1_ict:           { primary: '#0284C7' },
  ugcnet_p1_environment:   { primary: '#16A34A' },
  ugcnet_p1_highered:      { primary: '#B45309' },
  // IBPS Clerk colors
  ibps_clerk_qa:   { primary: '#E11D48' },
  ibps_clerk_ra:   { primary: '#1D4ED8' },
  ibps_clerk_gfa:  { primary: '#92400E' },
  ibps_clerk_eng:  { primary: '#0D9488' },
  ibps_clerk_comp: { primary: '#6B21A8' },
  // NDA colors
  nda_gat: { primary: '#F59E0B' },
  nda_ma:  { primary: '#3B82F6' },
  // XAT colors
  xat_dm:   { primary: '#943126' },
  xat_valr: { primary: '#1F618D' },
  xat_qadi: { primary: '#B9770E' },
  xat_gk:   { primary: '#5D6D7E' },
  // CLAT UG colors
  clat_legal: { primary: '#7B241C' },
  clat_ca:    { primary: '#1A5276' },
  clat_eng:   { primary: '#117A65' },
  clat_lr:    { primary: '#6C3483' },
  clat_qt:    { primary: '#B9770E' },
  // CUET UG colors
  cuet_ug_lang: { primary: '#3B82F6' },
  cuet_ug_gat:  { primary: '#8B5CF6' },
  cuet_ug_phy:  { primary: '#F59E0B' },
  cuet_ug_chem: { primary: '#10B981' },
  cuet_ug_bio:  { primary: '#06B6D4' },
  cuet_ug_math: { primary: '#EF4444' },
  cuet_ug_eco:  { primary: '#F97316' },
  cuet_ug_bst:  { primary: '#6366F1' },
  cuet_ug_acc:  { primary: '#EC4899' },
  cuet_ug_his:  { primary: '#92400E' },
  cuet_ug_pol:  { primary: '#1D4ED8' },
  cuet_ug_geo:  { primary: '#15803D' },
  cuet_ug_psy:  { primary: '#7C3AED' },
  cuet_ug_cs:   { primary: '#0369A1' },
  // CUET PG General colors
  cpg_qa:   { primary: '#059669' },
  cpg_lr:   { primary: '#DC2626' },
  cpg_gk:   { primary: '#0891B2' },
  cpg_eng:  { primary: '#4F46E5' },
  cpg_comp: { primary: '#7C3AED' },
};

const KEYS = {
  speedmath: { prefix: 'sm_',  total: 28, p1: 28 },
  quant:     { prefix: 'qt3_', total: 41, p1: 27 },
  reasoning: { prefix: 'rs3_', total: 44, p1: 23 },
  coding:    { prefix: 'cdf_', total: 16, p1: 16 },
  english:   { prefix: 'en_',  total: 26, p1: 25 },
  gk:        { prefix: 'gk_', total: 23, p1: 12 },
  // UPSC subjects
  upsc_polity:           { prefix: 'upsc_pol_', total: 23, p1: 23 },
  upsc_modern_history:   { prefix: 'upsc_mhi_', total: 14, p1: 14 },
  upsc_geography:        { prefix: 'upsc_geo_', total: 16, p1: 16 },
  upsc_economy:          { prefix: 'upsc_eco_', total: 14, p1: 14 },
  upsc_env_eco:          { prefix: 'upsc_env_', total: 10, p1: 10 },
  upsc_ancient_medieval: { prefix: 'upsc_anc_', total: 10, p1: 10 },
  upsc_art_culture:      { prefix: 'upsc_art_', total: 8,  p1: 8  },
  upsc_sci_tech:         { prefix: 'upsc_sct_', total: 8,  p1: 8  },
  upsc_ir_security:      { prefix: 'upsc_irs_', total: 8,  p1: 8  },
  upsc_ethics_gs4:       { prefix: 'upsc_eth_', total: 8,  p1: 8  },
  upsc_csat_aptitude:    { prefix: 'upsc_csa_', total: 7,  p1: 7  },
  // IBPS PO subjects
  ibps_qnt: { prefix: 'ibps_qnt_', total: 16, p1: 16 },
  ibps_rea: { prefix: 'ibps_rea_', total: 15, p1: 15 },
  ibps_eng: { prefix: 'ibps_eng_', total: 12, p1: 12 },
  ibps_dia: { prefix: 'ibps_dia_', total: 8,  p1: 8  },
  ibps_gab: { prefix: 'ibps_gab_', total: 13, p1: 13 },
  ibps_dsc: { prefix: 'ibps_dsc_', total: 4,  p1: 4  },
  // JEE subjects
  jee_phy: { prefix: 'jee_phy_', total: 20, p1: 20 },
  jee_che: { prefix: 'jee_che_', total: 21, p1: 21 },
  jee_mat: { prefix: 'jee_mat_', total: 15, p1: 15 },
  // NEET UG subjects
  neet_bot: { prefix: 'neet_bot_', total: 16, p1: 16 },
  neet_zoo: { prefix: 'neet_zoo_', total: 15, p1: 15 },
  neet_che: { prefix: 'neet_che_', total: 20, p1: 20 },
  neet_phy: { prefix: 'neet_phy_', total: 19, p1: 19 },
  // CAT subjects
  cat_qa:   { prefix: 'cat_qa_',   total: 25, p1: 25 },
  cat_dilr: { prefix: 'cat_dilr_', total: 10, p1: 10 },
  cat_varc: { prefix: 'cat_varc_', total: 7,  p1: 7  },
  // CMAT subjects
  cmat_qt: { prefix: 'cmat_qt_', total: 14, p1: 14 },
  cmat_lr: { prefix: 'cmat_lr_', total: 13, p1: 13 },
  cmat_lc: { prefix: 'cmat_lc_', total: 9,  p1: 9  },
  cmat_ga: { prefix: 'cmat_ga_', total: 10, p1: 10 },
  cmat_ie: { prefix: 'cmat_ie_', total: 12, p1: 12 },
  // CDS subjects
  cds_gk: { prefix: 'cds_gk_', total: 12, p1: 12 },
  cds_en: { prefix: 'cds_en_', total: 8,  p1: 8  },
  cds_ma: { prefix: 'cds_ma_', total: 10, p1: 10 },
  // CA Foundation
  cafnd_acc: { prefix: 'cafnd_acc_', total: 15, p1: 15 },
  cafnd_law: { prefix: 'cafnd_law_', total: 15, p1: 15 },
  cafnd_qa:  { prefix: 'cafnd_qa_',  total: 19, p1: 19 },
  cafnd_eco: { prefix: 'cafnd_eco_', total: 10, p1: 10 },
  // CA Inter
  cain_acc:   { prefix: 'cain_acc_',   total: 15, p1: 15 },
  cain_law:   { prefix: 'cain_law_',   total: 15, p1: 15 },
  cain_tax:   { prefix: 'cain_tax_',   total: 26, p1: 26 },
  cain_cost:  { prefix: 'cain_cost_',  total: 15, p1: 15 },
  cain_audit: { prefix: 'cain_audit_', total: 11, p1: 11 },
  cain_fmsm:  { prefix: 'cain_fmsm_',  total: 14, p1: 14 },
  // CA Final
  cafin_fr:   { prefix: 'cafin_fr_',   total: 17, p1: 17 },
  cafin_afm:  { prefix: 'cafin_afm_',  total: 15, p1: 15 },
  cafin_aud:  { prefix: 'cafin_aud_',  total: 20, p1: 20 },
  cafin_dt:   { prefix: 'cafin_dt_',   total: 26, p1: 26 },
  cafin_idt:  { prefix: 'cafin_idt_',  total: 32, p1: 32 },
  cafin_ibs:  { prefix: 'cafin_ibs_',  total: 9,  p1: 9  },
  // RRB NTPC subjects
  ntpc_ga:   { prefix: 'ntpc_ga_',   total: 23, p1: 23 },
  ntpc_reas: { prefix: 'ntpc_reas_', total: 19, p1: 19 },
  ntpc_math: { prefix: 'ntpc_math_', total: 20, p1: 20 },
  // RRB Group D subjects
  rrbd_reas: { prefix: 'rrbd_reas_', total: 16, p1: 16 },
  rrbd_sci:  { prefix: 'rrbd_sci_',  total: 21, p1: 21 },
  rrbd_math: { prefix: 'rrbd_math_', total: 18, p1: 18 },
  rrbd_ga:   { prefix: 'rrbd_ga_',   total: 16, p1: 16 },
  // SSC CHSL subjects
  chsl_eng:      { prefix: 'chsl_eng_',    total: 11, p1: 11 },
  chsl_reason:   { prefix: 'chsl_reason_', total: 12, p1: 12 },
  chsl_math:     { prefix: 'chsl_math_',   total: 13, p1: 13 },
  chsl_ga:       { prefix: 'chsl_ga_',     total: 12, p1: 12 },
  chsl_computer: { prefix: 'chsl_comp_',   total: 6,  p1: 6  },
  // SSC MTS subjects
  mts_ga:     { prefix: 'mts_ga_',     total: 12, p1: 12 },
  mts_eng:    { prefix: 'mts_eng_',    total: 10, p1: 10 },
  mts_math:   { prefix: 'mts_math_',   total: 12, p1: 12 },
  mts_reason: { prefix: 'mts_reason_', total: 11, p1: 11 },
  // UGC NET Paper 1 subjects
  ugcnet_p1_teaching:      { prefix: 'ugcnet_ta_',  total: 1, p1: 1 },
  ugcnet_p1_research:      { prefix: 'ugcnet_ra_',  total: 1, p1: 1 },
  ugcnet_p1_reasoning:     { prefix: 'ugcnet_lr_',  total: 2, p1: 2 },
  ugcnet_p1_di:            { prefix: 'ugcnet_di_',  total: 1, p1: 1 },
  ugcnet_p1_communication: { prefix: 'ugcnet_com_', total: 1, p1: 1 },
  ugcnet_p1_comprehension: { prefix: 'ugcnet_rc_',  total: 1, p1: 1 },
  ugcnet_p1_ict:           { prefix: 'ugcnet_ict_', total: 1, p1: 1 },
  ugcnet_p1_environment:   { prefix: 'ugcnet_env_', total: 1, p1: 1 },
  ugcnet_p1_highered:      { prefix: 'ugcnet_he_',  total: 1, p1: 1 },
  // IBPS Clerk subjects
  ibps_clerk_qa:   { prefix: 'iclk_qa_',   total: 13, p1: 13 },
  ibps_clerk_ra:   { prefix: 'iclk_ra_',   total: 12, p1: 12 },
  ibps_clerk_gfa:  { prefix: 'iclk_gfa_',  total: 8,  p1: 8  },
  ibps_clerk_eng:  { prefix: 'iclk_eng_',  total: 10, p1: 10 },
  ibps_clerk_comp: { prefix: 'iclk_comp_', total: 7,  p1: 7  },
  // UPSC NDA subjects
  nda_gat: { prefix: 'nda_gat_', total: 14, p1: 14 },
  nda_ma:  { prefix: 'nda_ma_',  total: 9,  p1: 9  },
  // XAT subjects
  xat_dm:   { prefix: 'xat_dm_',   total: 8,  p1: 8  },
  xat_valr: { prefix: 'xat_valr_', total: 10, p1: 10 },
  xat_qadi: { prefix: 'xat_qadi_', total: 24, p1: 24 },
  xat_gk:   { prefix: 'xat_gk_',   total: 10, p1: 10 },
  // CLAT UG subjects
  clat_legal: { prefix: 'clat_legal_', total: 10, p1: 10 },
  clat_ca:    { prefix: 'clat_ca_',    total: 10, p1: 10 },
  clat_eng:   { prefix: 'clat_eng_',   total: 8,  p1: 8  },
  clat_lr:    { prefix: 'clat_lr_',    total: 10, p1: 10 },
  clat_qt:    { prefix: 'clat_qt_',    total: 10, p1: 10 },
  // CUET UG subjects
  cuet_ug_lang: { prefix: 'cuet_ug_lang_', total: 5,  p1: 5  },
  cuet_ug_gat:  { prefix: 'cuet_ug_gat_',  total: 6,  p1: 6  },
  cuet_ug_phy:  { prefix: 'cuet_ug_phy_',  total: 13, p1: 13 },
  cuet_ug_chem: { prefix: 'cuet_ug_chem_', total: 16, p1: 16 },
  cuet_ug_bio:  { prefix: 'cuet_ug_bio_',  total: 10, p1: 10 },
  cuet_ug_math: { prefix: 'cuet_ug_math_', total: 13, p1: 13 },
  cuet_ug_eco:  { prefix: 'cuet_ug_eco_',  total: 10, p1: 10 },
  cuet_ug_bst:  { prefix: 'cuet_ug_bst_',  total: 8,  p1: 8  },
  cuet_ug_acc:  { prefix: 'cuet_ug_acc_',  total: 8,  p1: 8  },
  cuet_ug_his:  { prefix: 'cuet_ug_his_',  total: 15, p1: 15 },
  cuet_ug_pol:  { prefix: 'cuet_ug_pol_',  total: 10, p1: 10 },
  cuet_ug_geo:  { prefix: 'cuet_ug_geo_',  total: 12, p1: 12 },
  cuet_ug_psy:  { prefix: 'cuet_ug_psy_',  total: 8,  p1: 8  },
  cuet_ug_cs:   { prefix: 'cuet_ug_cs_',   total: 9,  p1: 9  },
  // CUET PG General subjects
  cpg_qa:   { prefix: 'cpg_qa_',   total: 14, p1: 14 },
  cpg_lr:   { prefix: 'cpg_lr_',   total: 12, p1: 12 },
  cpg_gk:   { prefix: 'cpg_gk_',   total: 13, p1: 13 },
  cpg_eng:  { prefix: 'cpg_eng_',  total: 10, p1: 10 },
  cpg_comp: { prefix: 'cpg_comp_', total: 7,  p1: 7  },
};

const NQT_MAX = { speedmath: 0, quant: 27, reasoning: 23, coding: 16, english: 25, gk: 0  };
const SSC_MAX = { speedmath: 0, quant: 14, reasoning: 21, coding: 0,  english: 1,  gk: 23 };

// ── Exam Configuration ────────────────────────────────────────────────────────
const EXAM_CONFIG = {
  nqt: {
    label: 'TCS NQT',
    color: '#7F77DD',
    icon: '🎯',
    subjects: ['speedmath', 'quant', 'reasoning', 'coding', 'english'],
    countMode: 'p1',
    examDate: '2025-08-01',
    totalChapters: 119,
    links: [
      { page: 'dashboard-nqt.html', href: 'dashboard-nqt.html', icon: '📊', label: 'NQT Dashboard' },
      { page: 'tracker-speedmath.html', href: 'tracker-speedmath.html', icon: '⚡', label: 'Speed Math' },
      { page: 'tracker-quant.html',     href: 'tracker-quant.html',     icon: '🔢', label: 'Quant' },
      { page: 'tracker-reasoning.html', href: 'tracker-reasoning.html', icon: '🧠', label: 'Reasoning' },
      { page: 'tracker-english.html',   href: 'tracker-english.html',   icon: '📝', label: 'English' },
      { page: 'tracker-coding.html',    href: 'tracker-coding.html',    icon: '💻', label: 'NQT Coding' },
    ]
  },
  ssc: {
    label: 'SSC CGL',
    color: '#1D9E75',
    icon: '📋',
    subjects: ['speedmath', 'quant', 'reasoning', 'english', 'gk'],
    countMode: 'all',
    examDate: '2025-09-15',
    totalChapters: 162,
    links: [
      { page: 'dashboard-ssc.html', href: 'dashboard-ssc.html', icon: '📊', label: 'SSC Dashboard' },
      { page: 'tracker-speedmath.html', href: 'tracker-speedmath.html', icon: '⚡', label: 'Speed Math' },
      { page: 'tracker-quant.html',     href: 'tracker-quant.html',     icon: '🔢', label: 'Quant' },
      { page: 'tracker-reasoning.html', href: 'tracker-reasoning.html', icon: '🧠', label: 'Reasoning' },
      { page: 'tracker-english.html',   href: 'tracker-english.html',   icon: '📝', label: 'English' },
      { page: 'tracker-gk.html',        href: 'tracker-gk.html',        icon: '🌍', label: 'General Knowledge' },
    ]
  },
  upsc: {
    label: 'UPSC CSE',
    color: '#3B5BDB',
    icon: '🏛️',
    subjects: [
      'upsc_polity', 'upsc_modern_history', 'upsc_geography', 'upsc_economy',
      'upsc_env_eco', 'upsc_ancient_medieval', 'upsc_art_culture', 'upsc_sci_tech',
      'upsc_ir_security', 'upsc_ethics_gs4', 'upsc_csat_aptitude'
    ],
    countMode: 'all',
    examDate: '2027-05-23',
    totalChapters: 126,
    links: [
      { page: 'dashboard-upsc.html', href: 'dashboard-upsc.html', icon: '📊', label: 'UPSC Dashboard' },
      { page: 'resource-upsc.html',  href: 'resource-upsc.html',  icon: '📚', label: 'Strategy & Vault' },
      { page: 'tracker-upsc.html?subj=upsc_polity',           href: 'tracker-upsc.html?subj=upsc_polity',           icon: '⚖️', label: 'Polity' },
      { page: 'tracker-upsc.html?subj=upsc_modern_history',   href: 'tracker-upsc.html?subj=upsc_modern_history',   icon: '✊', label: 'Modern History' },
      { page: 'tracker-upsc.html?subj=upsc_geography',        href: 'tracker-upsc.html?subj=upsc_geography',        icon: '🌍', label: 'Geography' },
      { page: 'tracker-upsc.html?subj=upsc_economy',          href: 'tracker-upsc.html?subj=upsc_economy',          icon: '📈', label: 'Economy' },
      { page: 'tracker-upsc.html?subj=upsc_env_eco',          href: 'tracker-upsc.html?subj=upsc_env_eco',          icon: '🌿', label: 'Environment' },
      { page: 'tracker-upsc.html?subj=upsc_ancient_medieval', href: 'tracker-upsc.html?subj=upsc_ancient_medieval', icon: '🏺', label: 'Ancient/Medieval' },
      { page: 'tracker-upsc.html?subj=upsc_art_culture',      href: 'tracker-upsc.html?subj=upsc_art_culture',      icon: '🎭', label: 'Art & Culture' },
      { page: 'tracker-upsc.html?subj=upsc_sci_tech',         href: 'tracker-upsc.html?subj=upsc_sci_tech',         icon: '🔬', label: 'Sci & Tech' },
      { page: 'tracker-upsc.html?subj=upsc_ir_security',      href: 'tracker-upsc.html?subj=upsc_ir_security',      icon: '🌐', label: 'IR & Security' },
      { page: 'tracker-upsc.html?subj=upsc_ethics_gs4',       href: 'tracker-upsc.html?subj=upsc_ethics_gs4',       icon: '🧭', label: 'Ethics (GS-4)' },
      { page: 'tracker-upsc.html?subj=upsc_csat_aptitude',    href: 'tracker-upsc.html?subj=upsc_csat_aptitude',    icon: '🧮', label: 'CSAT' },
    ]
  },
  ibps_po: {
    label: 'IBPS PO',
    color: '#B7791F',
    icon: '🏦',
    subjects: ['ibps_qnt', 'ibps_rea', 'ibps_eng', 'ibps_dia', 'ibps_gab', 'ibps_dsc'],
    countMode: 'all',
    examDate: '2026-08-22',
    totalChapters: 68,
    links: [
      { page: 'dashboard-ibps.html', href: 'dashboard-ibps.html', icon: '📊', label: 'IBPS Dashboard' },
      { page: 'tracker-ibps.html?subj=ibps_qnt', href: 'tracker-ibps.html?subj=ibps_qnt', icon: '🔢', label: 'Quant Aptitude' },
      { page: 'tracker-ibps.html?subj=ibps_rea', href: 'tracker-ibps.html?subj=ibps_rea', icon: '🧩', label: 'Reasoning Ability' },
      { page: 'tracker-ibps.html?subj=ibps_eng', href: 'tracker-ibps.html?subj=ibps_eng', icon: '📖', label: 'English Language' },
      { page: 'tracker-ibps.html?subj=ibps_dia', href: 'tracker-ibps.html?subj=ibps_dia', icon: '📊', label: 'Data Analysis & DI' },
      { page: 'tracker-ibps.html?subj=ibps_gab', href: 'tracker-ibps.html?subj=ibps_gab', icon: '🏦', label: 'Banking & GA' },
      { page: 'tracker-ibps.html?subj=ibps_dsc', href: 'tracker-ibps.html?subj=ibps_dsc', icon: '✍️', label: 'Descriptive English' }
    ]
  },
  jee: {
    label: 'JEE Main & Adv',
    color: '#3B5BDB',
    icon: '⚛️',
    subjects: ['jee_phy', 'jee_che', 'jee_mat'],
    countMode: 'all',
    examDate: '2027-01-24',
    totalChapters: 56,
    links: [
      { page: 'dashboard-jee.html', href: 'dashboard-jee.html', icon: '📊', label: 'JEE Dashboard' },
      { page: 'tracker-jee.html?subj=jee_phy', href: 'tracker-jee.html?subj=jee_phy', icon: '⚛️', label: 'Physics' },
      { page: 'tracker-jee.html?subj=jee_che', href: 'tracker-jee.html?subj=jee_che', icon: '🧪', label: 'Chemistry' },
      { page: 'tracker-jee.html?subj=jee_mat', href: 'tracker-jee.html?subj=jee_mat', icon: '📐', label: 'Mathematics' }
    ]
  },
  neet_ug: {
    label: 'NEET UG',
    color: '#4C9A3F',
    icon: '🩺',
    subjects: ['neet_bot', 'neet_zoo', 'neet_che', 'neet_phy'],
    countMode: 'all',
    examDate: '2027-05-02',
    totalChapters: 70,
    links: [
      { page: 'dashboard-neet.html', href: 'dashboard-neet.html', icon: '📊', label: 'NEET Dashboard' },
      { page: 'tracker-neet.html?subj=neet_bot', href: 'tracker-neet.html?subj=neet_bot', icon: '🌱', label: 'Botany' },
      { page: 'tracker-neet.html?subj=neet_zoo', href: 'tracker-neet.html?subj=neet_zoo', icon: '🧬', label: 'Zoology' },
      { page: 'tracker-neet.html?subj=neet_che', href: 'tracker-neet.html?subj=neet_che', icon: '🧪', label: 'Chemistry' },
      { page: 'tracker-neet.html?subj=neet_phy', href: 'tracker-neet.html?subj=neet_phy', icon: '⚛️', label: 'Physics' }
    ]
  },
  cat: {
    label: 'CAT (MBA)',
    color: '#E67E22',
    icon: '📈',
    subjects: ['cat_qa', 'cat_dilr', 'cat_varc'],
    countMode: 'all',
    examDate: '2026-11-29',
    totalChapters: 42,
    links: [
      { page: 'dashboard-cat.html', href: 'dashboard-cat.html', icon: '📊', label: 'CAT Dashboard' },
      { page: 'tracker-cat.html?subj=cat_qa', href: 'tracker-cat.html?subj=cat_qa', icon: '🔢', label: 'Quantitative Ability' },
      { page: 'tracker-cat.html?subj=cat_dilr', href: 'tracker-cat.html?subj=cat_dilr', icon: '🧩', label: 'DILR' },
      { page: 'tracker-cat.html?subj=cat_varc', href: 'tracker-cat.html?subj=cat_varc', icon: '📖', label: 'VARC' }
    ]
  },
  cmat: {
    label: 'CMAT (MBA)',
    color: '#EF4444',
    icon: '🚀',
    subjects: ['cmat_qt', 'cmat_lr', 'cmat_lc', 'cmat_ga', 'cmat_ie'],
    countMode: 'all',
    examDate: '2027-01-24',
    totalChapters: 58,
    links: [
      { page: 'dashboard-cmat.html', href: 'dashboard-cmat.html', icon: '📊', label: 'CMAT Dashboard' },
      { page: 'tracker-cmat.html?subj=cmat_qt', href: 'tracker-cmat.html?subj=cmat_qt', icon: '📐', label: 'Quant & DI' },
      { page: 'tracker-cmat.html?subj=cmat_lr', href: 'tracker-cmat.html?subj=cmat_lr', icon: '🧩', label: 'Logical Reasoning' },
      { page: 'tracker-cmat.html?subj=cmat_lc', href: 'tracker-cmat.html?subj=cmat_lc', icon: '📖', label: 'Language Comp' },
      { page: 'tracker-cmat.html?subj=cmat_ga', href: 'tracker-cmat.html?subj=cmat_ga', icon: '🌐', label: 'General Awareness' },
      { page: 'tracker-cmat.html?subj=cmat_ie', href: 'tracker-cmat.html?subj=cmat_ie', icon: '🚀', label: 'Innovation & Entr' }
    ]
  },
  cds: {
    label: 'UPSC CDS',
    color: '#10B981',
    icon: '🎖️',
    subjects: ['cds_gk', 'cds_en', 'cds_ma'],
    countMode: 'all',
    examDate: '2026-09-13',
    totalChapters: 30,
    links: [
      { page: 'dashboard-cds.html', href: 'dashboard-cds.html', icon: '📊', label: 'CDS Dashboard' },
      { page: 'tracker-cds.html?subj=cds_gk', href: 'tracker-cds.html?subj=cds_gk', icon: '🌍', label: 'General Knowledge' },
      { page: 'tracker-cds.html?subj=cds_en', href: 'tracker-cds.html?subj=cds_en', icon: '📝', label: 'English' },
      { page: 'tracker-cds.html?subj=cds_ma', href: 'tracker-cds.html?subj=cds_ma', icon: '📐', label: 'Elementary Maths (IMA/INA/AFA)' }
    ]
  },
  ca_foundation: {
    label: 'CA Foundation',
    color: '#C0392B',
    icon: '🎓',
    subjects: ['cafnd_acc', 'cafnd_law', 'cafnd_qa', 'cafnd_eco'],
    countMode: 'all',
    examDate: '2026-09-02',
    totalChapters: 59,
    links: [
      { page: 'dashboard-ca.html?level=foundation', href: 'dashboard-ca.html?level=foundation', icon: '📊', label: 'Foundation Dashboard' },
      { page: 'tracker-ca.html?level=foundation&subj=cafnd_acc', href: 'tracker-ca.html?level=foundation&subj=cafnd_acc', icon: '📒', label: 'Accounting' },
      { page: 'tracker-ca.html?level=foundation&subj=cafnd_law', href: 'tracker-ca.html?level=foundation&subj=cafnd_law', icon: '⚖️', label: 'Business Laws' },
      { page: 'tracker-ca.html?level=foundation&subj=cafnd_qa',  href: 'tracker-ca.html?level=foundation&subj=cafnd_qa',  icon: '🔢', label: 'Quantitative Aptitude' },
      { page: 'tracker-ca.html?level=foundation&subj=cafnd_eco', href: 'tracker-ca.html?level=foundation&subj=cafnd_eco', icon: '📈', label: 'Business Economics' }
    ]
  },
  ca_inter: {
    label: 'CA Intermediate',
    color: '#B03A2E',
    icon: '🏛️',
    subjects: ['cain_acc', 'cain_law', 'cain_tax', 'cain_cost', 'cain_audit', 'cain_fmsm'],
    countMode: 'all',
    examDate: '2026-09-01',
    totalChapters: 96,
    links: [
      { page: 'dashboard-ca.html?level=inter', href: 'dashboard-ca.html?level=inter', icon: '📊', label: 'Intermediate Dashboard' },
      { page: 'tracker-ca.html?level=inter&subj=cain_acc',   href: 'tracker-ca.html?level=inter&subj=cain_acc',   icon: '📗', label: 'Advanced Accounting' },
      { page: 'tracker-ca.html?level=inter&subj=cain_law',   href: 'tracker-ca.html?level=inter&subj=cain_law',   icon: '⚖️', label: 'Corporate Laws' },
      { page: 'tracker-ca.html?level=inter&subj=cain_tax',   href: 'tracker-ca.html?level=inter&subj=cain_tax',   icon: '🧾', label: 'Taxation (Income-tax & GST)' },
      { page: 'tracker-ca.html?level=inter&subj=cain_cost',  href: 'tracker-ca.html?level=inter&subj=cain_cost',  icon: '🏭', label: 'Costing' },
      { page: 'tracker-ca.html?level=inter&subj=cain_audit', href: 'tracker-ca.html?level=inter&subj=cain_audit', icon: '🔍', label: 'Auditing & Ethics' },
      { page: 'tracker-ca.html?level=inter&subj=cain_fmsm',  href: 'tracker-ca.html?level=inter&subj=cain_fmsm',  icon: '📊', label: 'FM & SM' }
    ]
  },
  ca_final: {
    label: 'CA Final',
    color: '#922B21',
    icon: '👑',
    subjects: ['cafin_fr', 'cafin_afm', 'cafin_aud', 'cafin_dt', 'cafin_idt', 'cafin_ibs'],
    countMode: 'all',
    examDate: '2026-11-02',
    totalChapters: 119,
    links: [
      { page: 'dashboard-ca.html?level=final', href: 'dashboard-ca.html?level=final', icon: '📊', label: 'Final Dashboard' },
      { page: 'tracker-ca.html?level=final&subj=cafin_fr',  href: 'tracker-ca.html?level=final&subj=cafin_fr',  icon: '📘', label: 'Financial Reporting (FR)' },
      { page: 'tracker-ca.html?level=final&subj=cafin_afm', href: 'tracker-ca.html?level=final&subj=cafin_afm', icon: '💹', label: 'Adv Financial Mgmt (AFM)' },
      { page: 'tracker-ca.html?level=final&subj=cafin_aud', href: 'tracker-ca.html?level=final&subj=cafin_aud', icon: '🔎', label: 'Adv Auditing & Ethics' },
      { page: 'tracker-ca.html?level=final&subj=cafin_dt',  href: 'tracker-ca.html?level=final&subj=cafin_dt',  icon: '🧾', label: 'Direct Tax (DT)' },
      { page: 'tracker-ca.html?level=final&subj=cafin_idt', href: 'tracker-ca.html?level=final&subj=cafin_idt', icon: '📑', label: 'Indirect Tax (IDT)' },
      { page: 'tracker-ca.html?level=final&subj=cafin_ibs', href: 'tracker-ca.html?level=final&subj=cafin_ibs', icon: '🧠', label: 'Integrated Business Sol (IBS)' }
    ]
  },
  rrb_ntpc: {
    label: 'RRB NTPC',
    color: '#6C3483',
    icon: '🚆',
    subjects: ['ntpc_ga', 'ntpc_reas', 'ntpc_math'],
    countMode: 'all',
    examDate: '2027-03-01',
    totalChapters: 62,
    links: [
      { page: 'dashboard-rrb.html?exam=ntpc', href: 'dashboard-rrb.html?exam=ntpc', icon: '📊', label: 'NTPC Dashboard' },
      { page: 'tracker-rrb.html?exam=ntpc&subj=ntpc_ga',   href: 'tracker-rrb.html?exam=ntpc&subj=ntpc_ga',   icon: '🌏', label: 'General Awareness' },
      { page: 'tracker-rrb.html?exam=ntpc&subj=ntpc_reas', href: 'tracker-rrb.html?exam=ntpc&subj=ntpc_reas', icon: '🧩', label: 'Reasoning Ability' },
      { page: 'tracker-rrb.html?exam=ntpc&subj=ntpc_math', href: 'tracker-rrb.html?exam=ntpc&subj=ntpc_math', icon: '🔢', label: 'Mathematics' }
    ]
  },
  rrb_group_d: {
    label: 'RRB Group D',
    color: '#229954',
    icon: '🛠️',
    subjects: ['rrbd_reas', 'rrbd_sci', 'rrbd_math', 'rrbd_ga'],
    countMode: 'all',
    examDate: '2026-08-03',
    totalChapters: 71,
    links: [
      { page: 'dashboard-rrb.html?exam=group_d', href: 'dashboard-rrb.html?exam=group_d', icon: '📊', label: 'Group D Dashboard' },
      { page: 'tracker-rrb.html?exam=group_d&subj=rrbd_reas', href: 'tracker-rrb.html?exam=group_d&subj=rrbd_reas', icon: '🧩', label: 'Reasoning Ability' },
      { page: 'tracker-rrb.html?exam=group_d&subj=rrbd_sci',  href: 'tracker-rrb.html?exam=group_d&subj=rrbd_sci',  icon: '🔬', label: 'General Science' },
      { page: 'tracker-rrb.html?exam=group_d&subj=rrbd_math', href: 'tracker-rrb.html?exam=group_d&subj=rrbd_math', icon: '🔢', label: 'Mathematics' },
      { page: 'tracker-rrb.html?exam=group_d&subj=rrbd_ga',   href: 'tracker-rrb.html?exam=group_d&subj=rrbd_ga',   icon: '🌏', label: 'General Awareness' }
    ]
  },
  ssc_chsl: {
    label: 'SSC CHSL',
    color: '#8E44AD',
    icon: '📝',
    subjects: ['chsl_eng', 'chsl_reason', 'chsl_math', 'chsl_ga', 'chsl_computer'],
    countMode: 'all',
    examDate: '2026-07-01',
    totalChapters: 54,
    links: [
      { page: 'dashboard-ssc.html?exam=chsl', href: 'dashboard-ssc.html?exam=chsl', icon: '📊', label: 'CHSL Dashboard' },
      { page: 'tracker-ssc.html?exam=chsl&subj=chsl_eng',      href: 'tracker-ssc.html?exam=chsl&subj=chsl_eng',      icon: '📝', label: 'English Language' },
      { page: 'tracker-ssc.html?exam=chsl&subj=chsl_reason',   href: 'tracker-ssc.html?exam=chsl&subj=chsl_reason',   icon: '🧠', label: 'Reasoning' },
      { page: 'tracker-ssc.html?exam=chsl&subj=chsl_math',     href: 'tracker-ssc.html?exam=chsl&subj=chsl_math',     icon: '🔢', label: 'Quantitative Aptitude' },
      { page: 'tracker-ssc.html?exam=chsl&subj=chsl_ga',       href: 'tracker-ssc.html?exam=chsl&subj=chsl_ga',       icon: '🌍', label: 'General Awareness' },
      { page: 'tracker-ssc.html?exam=chsl&subj=chsl_computer', href: 'tracker-ssc.html?exam=chsl&subj=chsl_computer', icon: '💻', label: 'Computer Knowledge' }
    ]
  },
  ssc_mts: {
    label: 'SSC MTS',
    color: '#E67E22',
    icon: '🎖️',
    subjects: ['mts_ga', 'mts_eng', 'mts_math', 'mts_reason'],
    countMode: 'all',
    examDate: '2026-09-01',
    totalChapters: 45,
    links: [
      { page: 'dashboard-ssc.html?exam=mts', href: 'dashboard-ssc.html?exam=mts', icon: '📊', label: 'MTS Dashboard' },
      { page: 'tracker-ssc.html?exam=mts&subj=mts_ga',     href: 'tracker-ssc.html?exam=mts&subj=mts_ga',     icon: '🌍', label: 'General Awareness' },
      { page: 'tracker-ssc.html?exam=mts&subj=mts_eng',    href: 'tracker-ssc.html?exam=mts&subj=mts_eng',    icon: '📝', label: 'English Language' },
      { page: 'tracker-ssc.html?exam=mts&subj=mts_math',   href: 'tracker-ssc.html?exam=mts&subj=mts_math',   icon: '🔢', label: 'Numerical Ability' },
      { page: 'tracker-ssc.html?exam=mts&subj=mts_reason', href: 'tracker-ssc.html?exam=mts&subj=mts_reason', icon: '🧠', label: 'Reasoning Ability' }
    ]
  },
  ugcnet: {
    label: 'UGC NET',
    color: '#4F46E5',
    icon: '🎓',
    subjects: [
      'ugcnet_p1_teaching', 'ugcnet_p1_research', 'ugcnet_p1_reasoning', 'ugcnet_p1_di',
      'ugcnet_p1_communication', 'ugcnet_p1_comprehension', 'ugcnet_p1_ict',
      'ugcnet_p1_environment', 'ugcnet_p1_highered'
    ],
    countMode: 'all',
    examDate: '2026-12-31',
    totalChapters: 10,
    links: [
      { page: 'dashboard-ugcnet.html', href: 'dashboard-ugcnet.html', icon: '📊', label: 'UGC NET Dashboard' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_teaching',      href: 'tracker-ugcnet.html?subj=ugcnet_p1_teaching',      icon: '🎓', label: 'Teaching Aptitude' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_research',      href: 'tracker-ugcnet.html?subj=ugcnet_p1_research',      icon: '🔬', label: 'Research Aptitude' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_reasoning',     href: 'tracker-ugcnet.html?subj=ugcnet_p1_reasoning',     icon: '🧮', label: 'Logical & Math Reasoning' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_di',            href: 'tracker-ugcnet.html?subj=ugcnet_p1_di',            icon: '📊', label: 'Data Interpretation' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_communication', href: 'tracker-ugcnet.html?subj=ugcnet_p1_communication', icon: '💬', label: 'Communication' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_comprehension', href: 'tracker-ugcnet.html?subj=ugcnet_p1_comprehension', icon: '📖', label: 'Reading Comprehension' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_ict',           href: 'tracker-ugcnet.html?subj=ugcnet_p1_ict',           icon: '💻', label: 'ICT' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_environment',   href: 'tracker-ugcnet.html?subj=ugcnet_p1_environment',   icon: '🌿', label: 'Environment' },
      { page: 'tracker-ugcnet.html?subj=ugcnet_p1_highered',      href: 'tracker-ugcnet.html?subj=ugcnet_p1_highered',      icon: '🏛️', label: 'Higher Education' }
    ]
  },
  ibps_clerk: {
    label: 'IBPS Clerk (CSA)',
    color: '#E11D48',
    icon: '🏦',
    subjects: ['ibps_clerk_qa', 'ibps_clerk_ra', 'ibps_clerk_gfa', 'ibps_clerk_eng', 'ibps_clerk_comp'],
    countMode: 'all',
    examDate: '2026-10-10',
    totalChapters: 50,
    links: [
      { page: 'dashboard-ibps.html?exam=clerk', href: 'dashboard-ibps.html?exam=clerk', icon: '📊', label: 'Clerk Dashboard' },
      { page: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_qa',   href: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_qa',   icon: '🔢', label: 'Quantitative Aptitude' },
      { page: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_ra',   href: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_ra',   icon: '🧠', label: 'Reasoning Ability' },
      { page: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_gfa',  href: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_gfa',  icon: '🏦', label: 'Financial Awareness' },
      { page: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_eng',  href: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_eng',  icon: '📚', label: 'English Language' },
      { page: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_comp', href: 'tracker-ibps.html?exam=clerk&subj=ibps_clerk_comp', icon: '💻', label: 'Computer Aptitude' }
    ]
  },
  nda: {
    label: 'UPSC NDA & NA',
    color: '#F59E0B',
    icon: '🎖️',
    subjects: ['nda_gat', 'nda_ma'],
    countMode: 'all',
    examDate: '2026-09-13',
    totalChapters: 23,
    links: [
      { page: 'dashboard-nda.html', href: 'dashboard-nda.html', icon: '📊', label: 'NDA Dashboard' },
      { page: 'tracker-nda.html?subj=nda_gat', href: 'tracker-nda.html?subj=nda_gat', icon: '🌍', label: 'General Ability Test (GAT)' },
      { page: 'tracker-nda.html?subj=nda_ma',  href: 'tracker-nda.html?subj=nda_ma',  icon: '📐', label: 'Mathematics' }
    ]
  },
  xat: {
    label: 'XAT (XLRI)',
    color: '#943126',
    icon: '⚖️',
    subjects: ['xat_dm', 'xat_valr', 'xat_qadi', 'xat_gk'],
    countMode: 'all',
    examDate: '2027-01-03',
    totalChapters: 52,
    links: [
      { page: 'dashboard-xat.html', href: 'dashboard-xat.html', icon: '📊', label: 'XAT Dashboard' },
      { page: 'tracker-xat.html?subj=xat_dm',   href: 'tracker-xat.html?subj=xat_dm',   icon: '⚖️', label: 'Decision Making' },
      { page: 'tracker-xat.html?subj=xat_valr', href: 'tracker-xat.html?subj=xat_valr', icon: '📖', label: 'Verbal & Logical Ability' },
      { page: 'tracker-xat.html?subj=xat_qadi', href: 'tracker-xat.html?subj=xat_qadi', icon: '🔢', label: 'Quantitative & DI' },
      { page: 'tracker-xat.html?subj=xat_gk',   href: 'tracker-xat.html?subj=xat_gk',   icon: '🌏', label: 'General Knowledge' }
    ]
  },
  clat_ug: {
    label: 'CLAT UG',
    color: '#7B241C',
    icon: '⚖️',
    subjects: ['clat_legal', 'clat_ca', 'clat_eng', 'clat_lr', 'clat_qt'],
    countMode: 'all',
    examDate: '2026-12-06',
    totalChapters: 48,
    links: [
      { page: 'dashboard-clat.html', href: 'dashboard-clat.html', icon: '📊', label: 'CLAT Dashboard' },
      { page: 'tracker-clat.html?subj=clat_legal', href: 'tracker-clat.html?subj=clat_legal', icon: '⚖️', label: 'Legal Reasoning' },
      { page: 'tracker-clat.html?subj=clat_ca',    href: 'tracker-clat.html?subj=clat_ca',    icon: '📰', label: 'Current Affairs & GK' },
      { page: 'tracker-clat.html?subj=clat_eng',   href: 'tracker-clat.html?subj=clat_eng',   icon: '📖', label: 'English Language' },
      { page: 'tracker-clat.html?subj=clat_lr',    href: 'tracker-clat.html?subj=clat_lr',    icon: '🧩', label: 'Logical Reasoning' },
      { page: 'tracker-clat.html?subj=clat_qt',    href: 'tracker-clat.html?subj=clat_qt',    icon: '🔢', label: 'Quantitative Techniques' }
    ]
  },
  cuet_ug: {
    label: 'CUET UG',
    color: '#3B82F6',
    icon: '🎓',
    subjects: ['cuet_ug_lang', 'cuet_ug_gat', 'cuet_ug_phy', 'cuet_ug_chem', 'cuet_ug_bio', 'cuet_ug_math', 'cuet_ug_eco', 'cuet_ug_bst', 'cuet_ug_acc', 'cuet_ug_his', 'cuet_ug_pol', 'cuet_ug_geo', 'cuet_ug_psy', 'cuet_ug_cs'],
    countMode: 'all',
    examDate: '2027-05-15',
    totalChapters: 143,
    links: [
      { page: 'dashboard-cuet-ug.html', href: 'dashboard-cuet-ug.html', icon: '📊', label: 'CUET UG Dashboard' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_lang', href: 'tracker-cuet-ug.html?subj=cuet_ug_lang', icon: '📝', label: 'Language (English/Hindi)' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_gat',  href: 'tracker-cuet-ug.html?subj=cuet_ug_gat',  icon: '🧠', label: 'General Aptitude (GAT)' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_phy',  href: 'tracker-cuet-ug.html?subj=cuet_ug_phy',  icon: '⚡', label: 'Physics' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_chem', href: 'tracker-cuet-ug.html?subj=cuet_ug_chem', icon: '🧪', label: 'Chemistry' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_bio',  href: 'tracker-cuet-ug.html?subj=cuet_ug_bio',  icon: '🧬', label: 'Biology' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_math', href: 'tracker-cuet-ug.html?subj=cuet_ug_math', icon: '📐', label: 'Mathematics' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_eco',  href: 'tracker-cuet-ug.html?subj=cuet_ug_eco',  icon: '📊', label: 'Economics' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_bst',  href: 'tracker-cuet-ug.html?subj=cuet_ug_bst',  icon: '💼', label: 'Business Studies' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_acc',  href: 'tracker-cuet-ug.html?subj=cuet_ug_acc',  icon: '🧾', label: 'Accountancy' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_his',  href: 'tracker-cuet-ug.html?subj=cuet_ug_his',  icon: '🏛️', label: 'History' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_pol',  href: 'tracker-cuet-ug.html?subj=cuet_ug_pol',  icon: '⚖️', label: 'Political Science' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_geo',  href: 'tracker-cuet-ug.html?subj=cuet_ug_geo',  icon: '🗺️', label: 'Geography' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_psy',  href: 'tracker-cuet-ug.html?subj=cuet_ug_psy',  icon: '🧩', label: 'Psychology' },
      { page: 'tracker-cuet-ug.html?subj=cuet_ug_cs',   href: 'tracker-cuet-ug.html?subj=cuet_ug_cs',   icon: '💻', label: 'Computer Science' }
    ]
  },
  cuet_pg_general: {
    label: 'CUET PG General',
    color: '#059669',
    icon: '🏛️',
    subjects: ['cpg_qa', 'cpg_lr', 'cpg_gk', 'cpg_eng', 'cpg_comp'],
    countMode: 'all',
    examDate: '2027-03-20',
    totalChapters: 56,
    links: [
      { page: 'dashboard-cuet-pg.html', href: 'dashboard-cuet-pg.html', icon: '📊', label: 'CUET PG Dashboard' },
      { page: 'tracker-cuet-pg.html?subj=cpg_qa',   href: 'tracker-cuet-pg.html?subj=cpg_qa',   icon: '🔢', label: 'Quantitative Aptitude' },
      { page: 'tracker-cuet-pg.html?subj=cpg_lr',   href: 'tracker-cuet-pg.html?subj=cpg_lr',   icon: '🧠', label: 'Logical Reasoning' },
      { page: 'tracker-cuet-pg.html?subj=cpg_gk',   href: 'tracker-cuet-pg.html?subj=cpg_gk',   icon: '🌐', label: 'GK & Current Affairs' },
      { page: 'tracker-cuet-pg.html?subj=cpg_eng',  href: 'tracker-cuet-pg.html?subj=cpg_eng',  icon: '📚', label: 'English Comprehension' },
      { page: 'tracker-cuet-pg.html?subj=cpg_comp', href: 'tracker-cuet-pg.html?subj=cpg_comp', icon: '💻', label: 'Computer Basics' }
    ]
  }
};

// Detect current exam context from URL
function getCurrentExam() {
  const page = window.location.pathname.split('/').pop() || '';
  if (page.includes('nqt')) return 'nqt';
  if (page.includes('ssc')) {
    const params = new URLSearchParams(window.location.search);
    const ex = params.get('exam');
    if (ex === 'chsl') return 'ssc_chsl';
    if (ex === 'mts') return 'ssc_mts';
    return 'ssc';
  }
  if (page.includes('ugcnet')) return 'ugcnet';
  if (page.includes('nda')) return 'nda';
  if (page.includes('xat')) return 'xat';
  if (page.includes('clat')) return 'clat_ug';
  if (page.includes('cuet-pg') || page.includes('cuet_pg')) return 'cuet_pg_general';
  if (page.includes('cuet')) return 'cuet_ug';
  if (page.includes('upsc')) return 'upsc';
  if (page.includes('ibps')) {
    const params = new URLSearchParams(window.location.search);
    const ex = params.get('exam');
    if (ex === 'clerk') return 'ibps_clerk';
    return 'ibps_po';
  }
  if (page.includes('jee')) return 'jee';
  if (page.includes('neet')) return 'neet_ug';
  if (page.includes('cat')) return 'cat';
  if (page.includes('cmat')) return 'cmat';
  if (page.includes('cds')) return 'cds';
  if (page.includes('rrb')) {
    const params = new URLSearchParams(window.location.search);
    const ex = params.get('exam');
    if (ex === 'group_d') return 'rrb_group_d';
    return 'rrb_ntpc';
  }
  if (page.includes('ca')) {
    const params = new URLSearchParams(window.location.search);
    const lvl = params.get('level');
    if (lvl === 'inter') return 'ca_inter';
    if (lvl === 'final') return 'ca_final';
    return 'ca_foundation';
  }
  // For tracker pages, check localStorage for last selected exam
  return localStorage.getItem('selectedExam') || 'nqt';
}

// ── Read stats filtered by exam ───────────────────────────────────────────────
function readExamStats(examKey) {
  const config = EXAM_CONFIG[examKey];
  if (!config) return readStats();
  const results = {};
  for (const subj of config.subjects) {
    const cfg = KEYS[subj];
    let done = 0, p1done = 0, p2done = 0;
    const max = config.countMode === 'p1' ? cfg.p1 : cfg.total;
    for (let i = 1; i <= max; i++) {
      if (localStorage.getItem(cfg.prefix + i) === '1') {
        done++;
        if (i <= cfg.p1) p1done++; else p2done++;
      }
    }
    results[subj] = { done, p1done, p2done, total: max, p1: Math.min(cfg.p1, max), p2: Math.max(0, max - cfg.p1) };
  }
  return results;
}

// ── Read all stats from localStorage ──────────────────────────────────────────
function readStats() {
  const results = {};
  for (const [subj, cfg] of Object.entries(KEYS)) {
    let done = 0, p1done = 0, p2done = 0;
    for (let i = 1; i <= cfg.total; i++) {
      if (localStorage.getItem(cfg.prefix + i) === '1') {
        done++;
        if (i <= cfg.p1) p1done++; else p2done++;
      }
    }
    results[subj] = { done, p1done, p2done, total: cfg.total, p1: cfg.p1, p2: cfg.total - cfg.p1 };
  }
  return results;
}

// ── Countdown ──────────────────────────────────────────────────────────────────
function getCountdown() {
  const nqt = new Date('2025-08-01T00:00:00');
  return Math.ceil((nqt - new Date()) / 86400000);
}

function getTimelineProgress() {
  const start = new Date('2025-05-01'), nqt = new Date('2025-08-01');
  return Math.max(0, Math.min(100, Math.round(((new Date() - start) / (nqt - start)) * 100)));
}

// ── Sidebar injection ─────────────────────────────────────────────────────────
function buildNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  
  // Don't show sidebar on the exam selector (index.html)
  if (page === 'index.html' || page === '') return;

  // Remove any existing navigation elements before re-building
  const existingSidebar = document.getElementById('sidebar');
  if (existingSidebar) existingSidebar.remove();

  const existingMobileHeader = document.getElementById('mobile-header');
  if (existingMobileHeader) existingMobileHeader.remove();

  const existingMobileTabs = document.getElementById('mobile-tabs');
  if (existingMobileTabs) existingMobileTabs.remove();

  const examKey = getCurrentExam();
  const config  = EXAM_CONFIG[examKey] || EXAM_CONFIG.nqt;
  const links   = config.links;

  const stats   = readExamStats(examKey);
  const total   = config.totalChapters;
  const done    = Object.values(stats).reduce((s, v) => s + v.done, 0);
  const pct     = total > 0 ? Math.round((done / total) * 100) : 0;
  const examDate = new Date(config.examDate + 'T00:00:00');
  const days    = Math.ceil((examDate - new Date()) / 86400000);
  let daysColor = '#1D9E75';
  if (days < 30) daysColor = '#EF4444';
  else if (days < 60) daysColor = '#D97706';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const fullPath    = currentPage + window.location.search;

  const isActive = (l) => {
    return fullPath === l.href || currentPage === l.href || fullPath === l.page || currentPage === l.page;
  };

  const navLinks = links.map(l => {
    const active = isActive(l);
    return `<a href="${l.href}" class="nav-link${active ? ' active' : ''}" data-page="${l.page}">
      <span class="ni">${l.icon}</span>${l.label}
    </a>`;
  }).join('');

  const userSub = window.currentUserEmail 
    ? `Logged in: <span style="color:var(--accent-purple);font-size:10px">${window.currentUserEmail}</span>`
    : `Arpit's Exam Hub`;

  const isAdminUser = window.isAdmin && window.isAdmin(window.currentUserEmail);
  const adminBtnHTML = isAdminUser ? `<a href="admin.html" class="switch-exam-btn" style="background:rgba(245,158,11,0.15);color:#F59E0B;border-color:rgba(245,158,11,0.3);margin-top:6px;display:inline-block">🛡️ Admin Panel</a>` : ``;

  const sidebarHTML = `
  <div id="sidebar">
    <div class="sidebar-top">
      <div class="sidebar-brand">
        <h1>${config.icon} ${config.label}</h1>
        <p>${userSub}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <a href="index.html?select=true" class="switch-exam-btn">🔄 Switch Exam</a>
        ${adminBtnHTML}
      </div>
      <div class="sidebar-divider"></div>
    </div>
    <div class="sidebar-scrollable">
      <div class="nav-links">${navLinks}</div>
      <div class="sidebar-bottom">
        <div class="sidebar-divider"></div>
        <div class="sidebar-progress-block">
          <span class="spb-label">${config.label} Progress</span>
          <div class="spb-bar-wrap">
            <div class="spb-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${config.color},${config.color}dd)"></div>
          </div>
          <div class="spb-numbers"><span style="color:${config.color}">${done}</span> / ${total} done · ${pct}%</div>
        </div>
        <div class="sidebar-countdown">
          <span class="sc-label">${config.label} In</span>
          <div class="sc-days" style="color:${daysColor}">${days > 0 ? days : '🎯'}</div>
          <div class="sc-sub">${days > 0 ? 'days' : 'Exam Day!'}</div>
        </div>
        <button id="logout-btn" onclick="if(window.handleLogout)window.handleLogout();else{localStorage.clear();location.href='login.html';}" style="width:100%;background:rgba(239,68,68,0.1);color:#EF4444;border:1px solid rgba(239,68,68,0.2);padding:10px;border-radius:8px;font:600 12px/1 'DM Sans';cursor:pointer;margin-top:16px;transition:all 0.2s">Log Out</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  // Mobile top header card (Progress, Countdown, Switch Exam, Log Out)
  const mobileHeaderHTML = `
  <div id="mobile-header">
    <div class="mh-top">
      <div class="mh-brand">
        <span class="mh-icon">${config.icon}</span>
        <div class="mh-brand-info">
          <div class="mh-brand-title">${config.label}</div>
          <div class="mh-brand-sub">${userSub}</div>
        </div>
      </div>
      <div class="mh-actions">
        ${isAdminUser ? `<a href="admin.html" class="switch-exam-btn mh-btn" style="background:rgba(245,158,11,0.15);color:#F59E0B">🛡️ Admin</a>` : ''}
        <a href="index.html?select=true" class="switch-exam-btn mh-btn">🔄 Switch</a>
        <button class="logout-btn-trigger mh-btn logout-btn" onclick="if(window.handleLogout)window.handleLogout();else{localStorage.clear();location.href='login.html';}">Log Out</button>
      </div>
    </div>
    <div class="mh-bottom">
      <div class="mh-progress">
        <div class="spb-bar-wrap">
          <div class="spb-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${config.color},${config.color}dd)"></div>
        </div>
        <div class="spb-numbers"><span style="color:${config.color}">${done}</span> / ${total} done · ${pct}%</div>
      </div>
      <div class="mh-countdown">
        <span class="mh-cd-val" style="color:${daysColor}">${days > 0 ? days + 'd' : '🎯'}</span>
        <span class="mh-cd-lbl">${days > 0 ? 'days left' : 'Exam!'}</span>
      </div>
    </div>
  </div>`;

  const mainElem = document.querySelector('main');
  if (mainElem) {
    mainElem.insertAdjacentHTML('afterbegin', mobileHeaderHTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', mobileHeaderHTML);
  }

  // Mobile bottom tabs - slide system
  const mobTabs = links.map(l => {
    const active = isActive(l);
    return `<a href="${l.href}" class="mob-tab${active ? ' active' : ''}">
      <span class="mt-icon">${l.icon}</span>
      <span class="mt-label">${l.label}</span>
    </a>`;
  }).join('');
  document.body.insertAdjacentHTML('beforeend',
    `<nav id="mobile-tabs">${mobTabs}</nav>`);

  // Auto-scroll active tab into view
  setTimeout(() => {
    const activeTab = document.querySelector('#mobile-tabs .mob-tab.active');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 100);
}

// ── CSS variable injection into iframes ───────────────────────────────────────
function injectTheme(iframe) {
  try {
    const r = iframe.contentDocument.documentElement.style;
    r.setProperty('--font-sans',                 'DM Sans, sans-serif');
    r.setProperty('--font-mono',                 'JetBrains Mono, monospace');
    r.setProperty('--color-background-primary',  '#141720');
    r.setProperty('--color-background-secondary','#1C2030');
    r.setProperty('--color-text-primary',        '#F0F2FF');
    r.setProperty('--color-text-secondary',      '#9BA3C4');
    r.setProperty('--color-text-tertiary',       '#5A6080');
    r.setProperty('--color-border-tertiary',     'rgba(255,255,255,0.07)');
    r.setProperty('--color-border-secondary',    'rgba(255,255,255,0.12)');
    r.setProperty('--border-radius-md',          '8px');
    r.setProperty('--border-radius-lg',          '12px');
    r.setProperty('--bg-surface',                '#141720');
    r.setProperty('--bg-elevated',               '#1C2030');
    r.setProperty('--bg-hover',                  '#222640');
    r.setProperty('--border-subtle',             'rgba(255,255,255,0.07)');
    r.setProperty('--border-medium',             'rgba(255,255,255,0.12)');
    r.setProperty('--text-primary',              '#F0F2FF');
    r.setProperty('--text-secondary',            '#9BA3C4');
    r.setProperty('--text-tertiary',             '#5A6080');
    r.setProperty('--accent-purple',             '#7F77DD');
    r.setProperty('--accent-green',              '#1D9E75');
    r.setProperty('--accent-amber',              '#D97706');
    r.setProperty('--radius-md',                 '10px');
    r.setProperty('--radius-lg',                 '14px');
    // also set bg color on body
    iframe.contentDocument.body.style.background = '#141720';
    iframe.contentDocument.body.style.color       = '#F0F2FF';
  } catch(e) {}
}

function syncIframeHeight(iframe) {
  injectTheme(iframe);
  iframe.setAttribute('scrolling', 'no');
  // Height is now handled by each tracker file sending postMessage
  // Set a reasonable initial height while waiting for the message
  iframe.style.height = '600px';
}

// Global listener: receive height messages from tracker iframes
window.addEventListener('message', function(evt) {
  if (!evt.data || evt.data.type !== 'iframeHeight') return;
  var h = evt.data.height;
  if (h < 50) return;
  // Find the iframe that sent this message
  var frames = document.querySelectorAll('iframe');
  for (var i = 0; i < frames.length; i++) {
    try {
      if (frames[i].contentWindow === evt.source) {
        frames[i].style.height = (h + 32) + 'px';
        break;
      }
    } catch(ex) {}
  }
});

// ── Mini stats for tracker header ─────────────────────────────────────────────
function renderMiniStats(subj, containerId) {
  const el = document.getElementById(containerId);
  if (!el || !KEYS[subj]) return;
  const cfg = KEYS[subj];
  const col = SUBJECT_COLORS[subj] || { primary: '#7F77DD' };
  const exam = getCurrentExam();
  const config = EXAM_CONFIG[exam];
  
  const countMode = config ? config.countMode : 'all';
  const totalCount = (countMode === 'p1' && cfg.p1) ? cfg.p1 : cfg.total;
  
  let done = 0;
  for (let i = 1; i <= totalCount; i++) {
    if (localStorage.getItem(cfg.prefix + i) === '1') {
      done++;
    }
  }
  const rem = totalCount - done;
  const pct = totalCount > 0 ? Math.round((done / totalCount) * 100) : 0;

  if (countMode === 'p1') {
    el.innerHTML = `
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${done}</div>
        <div class="th-stat-lbl">Done of ${totalCount}</div>
      </div>
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${rem}</div>
        <div class="th-stat-lbl">Remaining</div>
      </div>
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${pct}%</div>
        <div class="th-stat-lbl">Complete</div>
      </div>`;
  } else {
    let p1done = 0;
    for (let i = 1; i <= Math.min(cfg.p1, totalCount); i++) {
      if (localStorage.getItem(cfg.prefix + i) === '1') p1done++;
    }
    el.innerHTML = `
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${done}</div>
        <div class="th-stat-lbl">Done of ${totalCount}</div>
      </div>
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${p1done}<span style="font-size:14px;color:#5A6080"> /${cfg.p1}</span></div>
        <div class="th-stat-lbl">Phase 1</div>
      </div>
      <div class="th-stat">
        <div class="th-stat-val" style="color:${col.primary}">${pct}%</div>
        <div class="th-stat-lbl">Complete</div>
      </div>`;
  }
}

if (typeof window !== 'undefined') {
  window.EXAM_CONFIG = EXAM_CONFIG;
  window.KEYS = KEYS;
  window.readExamStats = readExamStats;
  window.getCurrentExam = getCurrentExam;
}

document.addEventListener('DOMContentLoaded', buildNav);

window.addEventListener('cloudDataSynced', () => {
  buildNav();
  document.querySelectorAll('iframe').forEach(frame => {
    try { frame.contentWindow.postMessage({ type: 'cloudSynced' }, '*'); } catch(e){}
  });
});

window.addEventListener('storage', () => {
  buildNav();
});
