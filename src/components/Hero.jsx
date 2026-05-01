export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-20 scroll-mt-14">
      <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-5">
        Portfolio
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
        Chinmay Shelke
      </h1>
      <p className="text-base sm:text-lg font-medium text-sky-400 mb-7">
        Lead Data Analyst · AI/ML & Analytics Automation
      </p>
      <p className="text-sm text-slate-400 leading-7 max-w-xl mb-10">
        I build scalable analytics, data-quality controls, and automation solutions
        for complex business and regulatory problems using Python, SQL, Snowflake,
        Alteryx, and Power BI.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          download
          className="text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg px-4 py-2 transition-colors duration-150"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/bh7781"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-slate-300 border border-slate-700 rounded-lg px-4 py-2 hover:border-sky-500 hover:text-sky-400 transition-colors duration-150"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/chinmay-shelke/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-slate-300 border border-slate-700 rounded-lg px-4 py-2 hover:border-sky-500 hover:text-sky-400 transition-colors duration-150"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
