import { careerTimeline } from '../data'
import SectionHeader from './SectionHeader'

function TimelineItem({ period, title, company, location, logo, summary, highlights, skills }) {
  return (
    <article className="relative border-l border-zinc-800 pl-6 pb-8 last:pb-0">
      <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full border border-teal-200 bg-teal-400" />
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
              {period}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-1 text-base text-zinc-400">
              {company} | {location}
            </p>
          </div>
          <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-white p-2 shadow-lg shadow-black/20">
            <img
              src={logo}
              alt={`${company} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <p className="mt-5 text-base leading-8 text-zinc-300">{summary}</p>

        <ul className="mt-5 grid gap-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="text-base leading-7 text-zinc-400">
              <span className="mr-2 text-teal-300">/</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800 pt-5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-zinc-700/70 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function CareerTimeline() {
  const progression = careerTimeline.map(({ title }) => title)

  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Career Timeline"
        title="From application development to analytics leadership."
        description="A progression through software delivery, regulatory data analysis, management information, automation, controls, and client-facing leadership."
      />
      <div className="mb-9 rounded-xl border border-zinc-800 bg-zinc-950/75 p-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-300">
          Progression Path
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-300">
          {progression.map((role, index) => (
            <span key={role} className="flex items-center gap-2">
              <span className="rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1">
                {role}
              </span>
              {index < progression.length - 1 && (
                <span className="text-teal-300">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-4xl">
        {careerTimeline.map((item) => (
          <TimelineItem key={`${item.company}-${item.title}-${item.period}`} {...item} />
        ))}
      </div>
    </section>
  )
}
