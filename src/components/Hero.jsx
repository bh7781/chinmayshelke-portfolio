export default function Hero({ onNavigate, onRequestResume }) {
  return (
    <section className="grid items-center gap-10 pt-10 pb-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:pt-14">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-teal-300">
          Analytics Leadership | Data Quality Automation | Regulatory Reporting Controls
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Chinmay Shelke
        </h1>
        <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-zinc-100 sm:text-3xl">
          Client-facing analytics leader for complex financial data.
        </p>
        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-zinc-300">
          I combine Python, SQL, automation, data quality, regulatory reporting, and team leadership to turn messy control problems into repeatable analytics systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {['Lead Data Scientist', 'Analytics Automation', 'Data Quality', 'Regulatory Reporting'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('timeline')}
            className="rounded-lg bg-teal-500 px-4 py-2.5 text-base font-medium text-zinc-950 transition-colors duration-150 hover:bg-teal-300"
          >
            View Career Timeline
          </button>
          <button
            type="button"
            onClick={() => onNavigate('client-work')}
            className="rounded-lg border border-violet-500/70 px-4 py-2.5 text-base font-medium text-violet-200 transition-colors duration-150 hover:border-violet-300 hover:bg-violet-500/10"
          >
            Explore Client Work
          </button>
          <button
            type="button"
            onClick={onRequestResume}
            className="rounded-lg border border-zinc-700 px-4 py-2.5 text-base font-medium text-zinc-300 transition-colors duration-150 hover:border-zinc-500 hover:text-white"
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
            className="h-64 w-52 rounded-2xl border border-zinc-700/80 bg-zinc-950 object-cover shadow-2xl shadow-black/70 sm:h-80 sm:w-64 lg:h-96 lg:w-80"
          />
        </div>
      </div>
    </section>
  )
}
