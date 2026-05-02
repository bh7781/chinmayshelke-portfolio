export const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'client-work', label: 'Client Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export const metrics = [
  { stat: '9+', label: 'Years across data, analytics, and financial services delivery' },
  { stat: '~5M', label: 'Trades processed per reporting cycle across control workflows' },
  { stat: 'EUR 1.6M', label: 'Annualised savings delivered through automation and process improvement' },
  { stat: '5', label: 'Direct delegates managed, coached, and reviewed' },
  { stat: '40K+', label: 'Exceptions classified through repeatable root-cause frameworks' },
  { stat: '10 regimes', label: 'EMIR, SFTR, ASIC, MAS, JFSA, HKMA, CFTC, SEC, CSA, and CAT' },
]

export const profilePillars = [
  {
    title: 'Client-Facing Analytics Lead',
    text: 'Owns messy, cross-functional analytics work where regulatory context, data logic, delivery governance, and stakeholder clarity all matter.',
  },
  {
    title: 'Automation and Controls Builder',
    text: 'Turns manual workflows, fragmented scripts, and recurring checks into reusable Python, SQL, Alteryx, and Power BI driven systems.',
  },
  {
    title: 'People and Quality Manager',
    text: 'Leads team delivery, feedback, mentoring, review discipline, and business-safe communication for client and internal stakeholders.',
  },
]

export const careerTimeline = [
  {
    period: 'Oct 2025 - Present',
    title: 'Senior Process Manager',
    company: 'eClerx',
    location: 'Pune, India',
    logo: '/assets/company_logos/eclerx.png',
    summary:
      'Leads client-facing analytics and control delivery for financial regulatory reporting workstreams, combining delivery ownership, team management, and technical governance.',
    highlights: [
      'Manages multiple testing, diagnostics, eligibility, reporting, and automation streams.',
      'Acts as a bridge between client stakeholders, internal delivery teams, BAs, QA, and adjacent technology teams.',
      'Drives quality gates, review discipline, stakeholder updates, and structured delivery communication.',
    ],
    skills: ['Project Management', 'Machine Learning', 'Stakeholder Management', 'Governance'],
  },
  {
    period: 'Nov 2023 - Sep 2025',
    title: 'Process Manager',
    company: 'eClerx',
    location: 'India',
    logo: '/assets/company_logos/eclerx.png',
    summary:
      'Expanded from associate process management into formal process leadership across data science, analytics delivery, stakeholder management, and team leadership.',
    highlights: [
      'Managed delivery priorities across technical analysts and client-facing workstreams.',
      'Converted ambiguous reporting and controls problems into structured analytics execution.',
      'Mentored team members through SQL, Python, Alteryx, and reporting delivery challenges.',
    ],
    skills: ['Data Science', 'Team Leadership', 'Analytics Delivery', 'Power BI'],
  },
  {
    period: 'Apr 2022 - Nov 2023',
    title: 'Associate Process Manager',
    company: 'eClerx',
    location: 'Pune, India',
    logo: '/assets/company_logos/eclerx.png',
    summary:
      'Moved into broader ownership of testing methodology, reporting logic, process governance, and stakeholder-ready delivery artifacts.',
    highlights: [
      'Supported regulatory testing workstreams involving stratification, diagnostics, and eligibility analysis.',
      'Helped standardize logic, documentation, evidence, and review workflows.',
      'Produced structured outputs for management information and control-focused decision making.',
    ],
    skills: ['Regulatory Reporting', 'SQL', 'Alteryx', 'Process Governance'],
  },
  {
    period: 'Jan 2019 - Mar 2022',
    title: 'Senior Analyst',
    company: 'eClerx',
    location: 'Navi Mumbai, India',
    logo: '/assets/company_logos/eclerx.png',
    summary:
      'Built the hands-on analytics foundation across Python, SQL, data quality, statistical analysis, trade data, and dashboard-oriented reporting.',
    highlights: [
      'Worked with large-scale financial and regulatory datasets across multiple systems.',
      'Built and maintained analysis logic, exception workflows, and reporting outputs.',
      'Developed strong working knowledge of data quality, reconciliation, and reporting controls.',
    ],
    skills: ['Python', 'SQL', 'Statistical Analysis', 'Data Quality'],
  },
  {
    period: 'Apr 2018 - Jan 2019',
    title: 'Application Development Analyst',
    company: 'Accenture in India',
    location: 'Pune, India',
    logo: '/assets/company_logos/accenture.png',
    summary:
      'Continued software delivery experience while moving closer to data-driven and supervised learning oriented work.',
    highlights: [
      'Worked in application development with exposure to Java and analytical problem solving.',
      'Built engineering discipline that later supported automation and analytics architecture work.',
    ],
    skills: ['Java', 'Supervised Learning', 'Application Development'],
  },
  {
    period: 'Nov 2016 - Mar 2018',
    title: 'Application Development Associate',
    company: 'Accenture in India',
    location: 'Pune, India',
    logo: '/assets/company_logos/accenture.png',
    summary:
      'Started professional career in application development, building a software-first foundation before moving into analytics and data leadership.',
    highlights: [
      'Learned delivery discipline, enterprise workflows, and production-oriented development habits.',
      'Built early experience translating requirements into working technical outputs.',
    ],
    skills: ['Software Delivery', 'Enterprise Systems', 'Development Fundamentals'],
  },
]

export const clientProjects = [
  {
    title: 'Risk-Based Stratification and Natural Break Framework',
    domain: 'Regulatory testing methodology',
    context:
      'Testing teams needed a defensible way to segment large trade populations instead of relying on broad manual sampling.',
    contribution:
      'Designed Python and SQL based stratification logic using natural break concepts, coverage metrics, run summaries, and reusable output structures.',
    impact:
      'Helped create a repeatable, audit-ready method for structured test selection across regulatory regimes and asset classes.',
    tools: ['Python', 'SQL', 'Snowflake', 'Pandas'],
  },
  {
    title: 'CAT Diagnostic Rule Governance',
    domain: 'Data quality and regulatory controls',
    context:
      'Diagnostic rules required consistent documentation, implementation logic, evidence, and lifecycle tracking.',
    contribution:
      'Translated reporting issues into structured diagnostic rules, JIRA-ready descriptions, validation queries, and evidence-friendly outputs.',
    impact:
      'Reduced ambiguity in rule implementation and strengthened traceability from issue definition through testing and sign-off.',
    tools: ['Snowflake SQL', 'JIRA', 'Pantheon', 'Data Quality'],
  },
  {
    title: 'Regulatory Trade Eligibility Control',
    domain: 'Eligibility and reporting accuracy',
    context:
      'Reporting pipelines needed controls to identify trades incorrectly included in or excluded from regulatory submissions.',
    contribution:
      'Built rule logic and review workflows to evaluate trade populations against regime-specific criteria and exception paths.',
    impact:
      'Improved control coverage and gave analysts a clearer basis for reviewing eligibility exceptions.',
    tools: ['SQL', 'Alteryx', 'Snowflake', 'Power BI'],
  },
  {
    title: 'Exception Root-Cause Classification',
    domain: 'Exception analytics',
    context:
      'High-volume exceptions needed consistent classification to reveal recurring upstream issues and ownership patterns.',
    contribution:
      'Developed repeatable classification logic that tagged exceptions by root cause, owner, and resolution direction.',
    impact:
      'Accelerated triage and enabled trend analysis across large exception populations.',
    tools: ['Python', 'SQL', 'Power BI', 'Root-Cause Analysis'],
  },
  {
    title: 'JIRA Extraction and MI Reporting Pipeline',
    domain: 'Automation and management information',
    context:
      'Operational reporting needed reliable extraction, transformation, and dashboard-ready structures from JIRA and shared sources.',
    contribution:
      'Worked with API extraction, YAML style field mapping, authentication constraints, scheduled workflows, and Power BI data models.',
    impact:
      'Improved reporting repeatability, reduced manual preparation, and supported clearer management views.',
    tools: ['Python', 'JIRA API', 'YAML', 'Power BI'],
  },
  {
    title: 'UTI Mapping and JSON Structure Discovery',
    domain: 'Trade data reconciliation',
    context:
      'UTI values appeared across varied JSON structures and regime-specific payloads, making mapping coverage hard to analyze.',
    contribution:
      'Explored fallback extraction logic, structure signatures, blank indicators, and grouping strategies across reporting payloads.',
    impact:
      'Improved understanding of mapping coverage and exposed patterns for more systematic reconciliation logic.',
    tools: ['SQL', 'JSON', 'Snowflake', 'Data Profiling'],
  },
]

export const skillGroups = [
  {
    group: 'Data and Analytics',
    skills: ['Python', 'SQL', 'PySpark', 'Pandas', 'Power BI', 'Snowflake', 'Data Profiling', 'Root-Cause Analysis'],
  },
  {
    group: 'AI / ML',
    skills: ['XGBoost', 'LightGBM', 'Random Forest', 'SHAP', 'Feature Engineering', 'Model Explainability'],
  },
  {
    group: 'Automation and Engineering',
    skills: ['Alteryx', 'API Integration', 'Data Pipelines', 'JIRA API', 'Logging', 'Workflow Automation'],
  },
  {
    group: 'Leadership and Governance',
    skills: ['Team Leadership', 'Stakeholder Management', 'Regulatory Reporting', 'Data Quality Controls', 'Delivery Governance'],
  },
]

export const operatingModes = [
  'Convert ambiguous control problems into structured analytics logic',
  'Build repeatable workflows from manual or fragmented processes',
  'Explain technical methods in business-safe language for stakeholders',
  'Lead people, reviews, feedback, and delivery quality without losing technical depth',
]

export const certifications = [
  {
    title: 'GitHub Copilot Certification',
    issuer: 'Microsoft / GitHub',
    badgeImage: '/assets/certifications/github-copilot.png',
    credentialUrl: 'https://www.credly.com/badges/c5420635-17a9-4f2d-9c33-d7e9f09dffb9',
  },
  {
    title: 'MTA Software Development Fundamentals',
    issuer: 'Microsoft',
    badgeImage: '/assets/certifications/mta-software-development-fundamentals-certified-2016.png',
    credentialUrl: 'https://www.credly.com/badges/49ae161e-a613-49bd-a80e-532af091dc81',
  },
]

export const articles = [
  {
    title: "If You're New to Coding, Here's What Nobody Explains First",
    url: 'https://medium.com/the-developer-codex/if-youre-new-to-coding-here-s-what-nobody-explains-first-1aab3282dfbc',
    description: 'A beginner-friendly explanation of programming fundamentals before language syntax.',
  },
  {
    title: 'Power BI Gateway Explained',
    url: 'https://medium.com/the-developer-codex/power-bi-gateway-explained-d72f9cd323f6',
    description: 'A simple explanation of Power BI Gateway for analytics and BI users.',
  },
  {
    title: 'Classification in Machine Learning',
    url: 'https://medium.com/neural-nomad/classification-in-machine-learning-a3d002383b27',
    description: 'A practical introduction to classification problems in machine learning.',
  },
]
