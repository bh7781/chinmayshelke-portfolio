export default function Hero({ onNavigate, onRequestResume }) {
  return (
    <section className="grid items-center gap-10 pt-10 pb-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:pt-14">
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-sky-400">
          Portfolio | Analytics Leadership | Regulatory Data Controls
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Client-facing analytics leader for complex financial data.
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          I combine Python, SQL, automation, data quality, regulatory reporting, and team leadership to turn messy control problems into repeatable analytics systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {['Lead Data Scientist', 'Analytics Automation', 'Data Quality', 'Regulatory Reporting'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('timeline')}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-sky-500"
          >
            View Career Timeline
          </button>
          <button
            type="button"
            onClick={() => onNavigate('client-work')}
            className="rounded-lg border border-sky-700 px-4 py-2 text-sm font-medium text-sky-300 transition-colors duration-150 hover:border-sky-500 hover:bg-sky-600/10"
          >
            Explore Client Work
          </button>
          <button
            type="button"
            onClick={onRequestResume}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-150 hover:border-slate-600 hover:text-white"
          >
            Request Resume
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          <img
            src="/assets/profile.jpg"
            alt="Chinmay Shelke professional profile photo"
            className="h-64 w-52 rounded-2xl border border-slate-700/80 bg-slate-900 object-cover shadow-2xl shadow-slate-950/60 sm:h-80 sm:w-64 lg:h-96 lg:w-80"
          />
        </div>
      </div>
    </section>
  )
}
