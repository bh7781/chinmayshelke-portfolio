export const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills",       href: "#skills" },
  { label: "Contact",      href: "#contact" },
]

export const caseStudies = [
  {
    title: "Risk-Based Stratification & Natural Break Point Framework",
    problem:
      "Testing teams couldn't validate the full trade population across regulatory regimes, and random sampling lacked statistical defensibility for audit purposes.",
    action:
      "Built a Python/SQL framework applying natural break algorithms to segment trade populations into risk-tiered strata, enabling structured, weighted test selection.",
    result:
      "Delivered defensible test coverage across multiple regulatory regimes; methodology adopted as a standard for audit-ready sampling.",
    tools: ["Python", "SQL", "Snowflake"],
  },
  {
    title: "Regulatory Trade Eligibility Control",
    problem:
      "Trade reporting pipelines had no automated controls to catch trades incorrectly included in or excluded from regulatory submissions.",
    action:
      "Designed a rule-based eligibility engine in SQL and Alteryx that evaluated each trade against regime-specific criteria and flagged exceptions for analyst review.",
    result:
      "Created an auditable control layer that reduced manual eligibility checks and improved submission accuracy across regulatory regimes.",
    tools: ["SQL", "Alteryx", "Snowflake", "Power BI"],
  },
  {
    title: "Diagnostic Data-Quality Control Framework",
    problem:
      "Data quality issues surfaced late in the reporting cycle, causing downstream remediation delays and submission risk.",
    action:
      "Built a modular DQ framework in Python and SQL that profiled source data, applied configurable threshold-based checks, and routed anomalies to the responsible team before pipeline completion.",
    result:
      "Shifted issue detection upstream, reduced late-stage rework, and created a reusable pattern applied across multiple data sources and pipelines.",
    tools: ["Python", "SQL", "Snowflake", "Power BI"],
  },
  {
    title: "Exception Root-Cause Classification Framework",
    problem:
      "High volumes of trade exceptions were triaged manually with no consistent classification logic, making root-cause analysis slow and subjective.",
    action:
      "Developed a rule-based classification framework that tagged each exception with a root cause category, responsible team, and resolution path based on trade attributes and error signatures.",
    result:
      "Reduced triage time and enabled pattern analysis that identified systemic upstream issues driving repeat exceptions, leading to targeted remediation.",
    tools: ["Python", "SQL", "Power BI"],
  },
]

export const skillGroups = [
  {
    group: "Data & Analytics",
    skills: ["Python", "SQL", "PySpark", "Pandas", "Power BI", "Snowflake", "Data Profiling", "Root-Cause Analysis"],
  },
  {
    group: "AI / ML",
    skills: ["XGBoost", "LightGBM", "Random Forest", "SHAP", "Feature Engineering", "Model Explainability"],
  },
  {
    group: "Automation & Engineering",
    skills: ["Alteryx", "API Integration", "Data Pipelines", "CLI Tools", "Logging", "Workflow Automation"],
  },
  {
    group: "Domain & Business",
    skills: ["Regulatory Reporting", "Trade Data", "Data Quality Controls", "Governance Analytics"],
  },
]

export const contactLinks = [
  { label: "Email",    href: "mailto:chinmay.s077@gmail.com",              display: "chinmay.s077@gmail.com",         external: false, download: false },
  { label: "GitHub",   href: "https://github.com/bh7781",                   display: "github.com/bh7781",              external: true,  download: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chinmay-shelke/", display: "linkedin.com/in/chinmay-shelke", external: true,  download: false },
  { label: "Resume",   href: "/resume.pdf",                                  display: "Download PDF",                   external: false, download: true  },
]
