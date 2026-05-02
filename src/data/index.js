export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
]

export const metrics = [
  { stat: "9+", label: "Years of analytics experience" },
  { stat: "~5M", label: "Trades processed per reporting cycle" },
  { stat: "EUR 1.6M", label: "Annualised savings delivered" },
  { stat: "3 FTE", label: "Effort reduction enabled" },
  { stat: "40K+", label: "Exceptions classified by root-cause framework" },
  { stat: "Multi-regime", label: "Regulatory reporting experience" },
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

export const certifications = [
  {
    title: "GitHub Copilot Certification",
    issuer: "Microsoft / GitHub",
    badgeImage: "/assets/certifications/github-copilot.png",
    credentialUrl: "https://www.credly.com/badges/c5420635-17a9-4f2d-9c33-d7e9f09dffb9",
  },
  {
    title: "MTA Software Development Fundamentals",
    issuer: "Microsoft",
    badgeImage: "/assets/certifications/mta-software-development-fundamentals-certified-2016.png",
    credentialUrl: "https://www.credly.com/badges/49ae161e-a613-49bd-a80e-532af091dc81",
  },
]

export const articles = [
  {
    title: "If You're New to Coding, Here's What Nobody Explains First",
    url: "https://medium.com/the-developer-codex/if-youre-new-to-coding-here-s-what-nobody-explains-first-1aab3282dfbc",
    description: "A beginner-friendly explanation of programming fundamentals before language syntax.",
  },
  {
    title: "Power BI Gateway Explained",
    url: "https://medium.com/the-developer-codex/power-bi-gateway-explained-d72f9cd323f6",
    description: "A simple explanation of Power BI Gateway for analytics and BI users.",
  },
  {
    title: "Classification in Machine Learning",
    url: "https://medium.com/neural-nomad/classification-in-machine-learning-a3d002383b27",
    description: "A practical introduction to classification problems in machine learning.",
  },
]

export const contactLinks = [
  { label: "Email", href: "mailto:chinmay.s077@gmail.com", display: "chinmay.s077@gmail.com", external: false },
  { label: "GitHub", href: "https://github.com/bh7781", display: "github.com/bh7781", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chinmay-shelke/", display: "linkedin.com/in/chinmay-shelke", external: true },
]
