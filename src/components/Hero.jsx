export default function Hero({ onRequestResume }) {
  return (
    <section id="about" className="pt-14 sm:pt-16 pb-20 scroll-mt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-5">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Chinmay Shelke
          </h1>
          <p className="text-base sm:text-lg font-medium text-sky-400 mb-6">
            Lead Data Analyst | AI/ML | Analytics Automation | Data Quality | Regulatory Reporting
          </p>
          <p className="text-lg font-semibold text-slate-100 leading-snug max-w-xl mb-5">
            Building AI/ML, automation, and data-quality systems for complex business data.
          </p>
          <p className="text-sm text-slate-400 leading-7 max-w-xl mb-10">
            Specialising in Python, SQL, Snowflake, PySpark, Alteryx, and Power BI with deep
            experience in regulatory reporting, analytics automation, and data-quality control
            for large-scale trade data environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onRequestResume}
              className="text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg px-4 py-2 transition-colors duration-150"
            >
              Request Resume
            </button>
            <a
              href="#case-studies"
              className="text-sm font-medium text-sky-400 border border-sky-700 hover:border-sky-500 hover:bg-sky-600/10 rounded-lg px-4 py-2 transition-colors duration-150"
            >
              View Case Studies
            </a>
            <a
              href="https://github.com/bh7781"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="text-sm font-medium text-slate-300 border border-slate-700 rounded-lg px-4 py-2 hover:border-slate-600 hover:text-white transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chinmay-shelke/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="text-sm font-medium text-slate-300 border border-slate-700 rounded-lg px-4 py-2 hover:border-slate-600 hover:text-white transition-colors duration-150"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-sky-500/10 blur-2xl" aria-hidden="true" />
            <img
              src="/assets/profile.jpg"
              alt="Chinmay Shelke professional profile photo"
              className="relative h-64 w-52 rounded-2xl border border-slate-700/80 bg-slate-900 object-cover shadow-2xl shadow-slate-950/60 sm:h-80 sm:w-64 lg:h-96 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
