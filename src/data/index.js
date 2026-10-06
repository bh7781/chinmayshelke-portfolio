export const profile = {
  name: 'Chinmay Shelke',
  headline: 'Lead Data Analyst',
  // Change these two values when relocating; the clock and all location labels follow.
  location: 'Pune, India',
  timeZone: 'Asia/Kolkata',
  linkedin: 'https://www.linkedin.com/in/chinmay-shelke/',
  github: 'https://github.com/bh7781',
}

export const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'timeline', label: 'Experience' },
  { id: 'client-work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export const metrics = [
  { stat: '10+', label: 'Years in software, data, and analytics' },
  { stat: '~5M', label: 'Trades covered per reporting cycle in control workflows' },
  { stat: 'EUR 1.6M', label: 'Annualised savings from automation and process improvement' },
  { stat: '5', label: 'Direct reports managed and mentored' },
  { stat: '40K+', label: 'Exceptions classified using a repeatable root-cause method' },
  { stat: '10 regimes', label: 'EMIR, SFTR, ASIC, MAS, JFSA, HKMA, CFTC, SEC, CSA, CAT' },
]

export const profilePillars = [
  {
    title: 'Analytics and testing',
    text: 'Analysis, testing and diagnostics for regulatory reporting, working with client stakeholders and cross-functional teams.',
  },
  {
    title: 'Automation',
    text: 'Replaces manual workflows and scattered scripts with reusable Python, SQL, Alteryx and Power BI solutions.',
  },
  {
    title: 'Team and delivery',
    text: 'Manages team delivery, reviews and mentoring, and keeps client and internal stakeholders updated.',
  },
]

export const careerTimeline = [
  {
    company: 'eClerx',
    location: 'Pune, India',
    logo: '/assets/company_logos/eclerx.png',
    roles: [
      {
        title: 'Senior Process Manager',
        designation: 'Working as Lead Data Analyst',
        start: '2025-10',
        end: null,
        location: 'Pune, India',
        summary:
          'Leads analytics and control delivery for financial regulatory reporting workstreams, covering delivery, team management and technical governance.',
        highlights: [
          'Manages multiple testing, diagnostics, eligibility, reporting, and automation streams.',
          'Works between client stakeholders, delivery teams, business analysts, QA and technology teams.',
          'Runs quality checks, reviews and regular stakeholder updates.',
        ],
        skills: ['Project Management', 'Stakeholder Management', 'Governance', 'Python', 'SQL'],
      },
      {
        title: 'Process Manager',
        start: '2023-11',
        end: '2025-09',
        location: 'India',
        summary:
          'Led analytics delivery, data science work and a team of analysts for regulatory reporting clients.',
        highlights: [
          'Managed delivery priorities across technical analysts and client-facing workstreams.',
          'Turned loosely defined reporting and controls problems into structured analytics tasks.',
          'Mentored team members through SQL, Python, Alteryx, and reporting delivery challenges.',
        ],
        skills: ['Data Science', 'Team Leadership', 'Analytics Delivery', 'Power BI'],
      },
      {
        title: 'Associate Process Manager',
        start: '2022-04',
        end: '2023-11',
        location: 'Pune, India',
        summary:
          'Worked on testing methodology, reporting logic and process governance for regulatory reporting.',
        highlights: [
          'Supported regulatory testing workstreams involving stratification, diagnostics, and eligibility analysis.',
          'Helped standardize logic, documentation, evidence, and review workflows.',
          'Produced structured outputs for management information and control-focused decision making.',
        ],
        skills: ['Regulatory Reporting', 'SQL', 'Alteryx', 'Process Governance'],
      },
      {
        title: 'Senior Analyst',
        start: '2019-01',
        end: '2022-03',
        location: 'Navi Mumbai, India',
        summary:
          'Hands-on analytics with Python and SQL: data quality, statistical analysis, trade data and dashboard reporting.',
        highlights: [
          'Worked with large-scale financial and regulatory datasets across multiple systems.',
          'Built and maintained analysis logic, exception workflows, and reporting outputs.',
          'Worked on data quality, reconciliation and reporting controls.',
        ],
        skills: ['Python', 'SQL', 'Statistical Analysis', 'Data Quality'],
      },
    ],
  },
  {
    company: 'Accenture',
    location: 'Pune, India',
    logo: '/assets/company_logos/accenture.png',
    roles: [
      {
        title: 'Application Development Analyst',
        start: '2018-04',
        end: '2019-01',
        location: 'Pune, India',
        summary:
          'Application development in Java, with growing exposure to data-driven work.',
        highlights: [
          'Worked in application development with exposure to Java and analytical problem solving.',
          'Built the engineering habits later used in automation and analytics work.',
        ],
        skills: ['Java', 'Application Development'],
      },
      {
        title: 'Application Development Associate',
        start: '2016-11',
        end: '2018-03',
        location: 'Pune, India',
        summary:
          'Started my career in application development, working on enterprise software delivery.',
        highlights: [
          'Worked in enterprise delivery workflows and production development practices.',
          'Turned business requirements into working software.',
        ],
        skills: ['Software Delivery', 'Enterprise Systems', 'Development Fundamentals'],
      },
    ],
  },
]

export const education = {
  degree: 'B.E. (Information Technology)',
  institution: 'Sinhgad Institute of Technology and Science, Narhe, Pune',
  university: 'Savitribai Phule Pune University',
  year: '2016',
}

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
    tools: ['Snowflake SQL', 'JIRA', 'Internal DQ tool', 'Data Quality'],
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
  'Break down loosely defined control problems into clear analytics logic',
  'Replace manual or scattered processes with repeatable workflows',
  'Explain technical methods to stakeholders in plain language',
  'Lead people, reviews and delivery quality while staying hands-on',
]

export const certifications = [
  {
    title: 'Claude Certified Architect - Foundations',
    issuer: 'Anthropic',
    badgeImage: '/assets/certifications/claude-certified-architect-foundations.png',
    credentialUrl: 'https://www.credly.com/badges/47deeef2-9dda-4923-9cff-32aa1905d182/public_url',
  },
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
