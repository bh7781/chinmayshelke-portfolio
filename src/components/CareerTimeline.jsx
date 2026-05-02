import { careerTimeline } from '../data'
import SectionHeader from './SectionHeader'

function TimelineItem({ period, title, company, location, summary, highlights, skills }) {
  return (
    <article className="relative border-l border-slate-800 pl-6 pb-8 last:pb-0">
      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              {period}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {company} | {location}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{summary}</p>

        <ul className="mt-5 grid gap-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="text-sm leading-6 text-slate-400">
              <span className="mr-2 text-sky-400">/</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800 pt-5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-slate-700/70 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300"
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
  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Career Timeline"
        title="From application development to analytics leadership."
        description="A progression through software delivery, regulatory data analysis, management information, automation, controls, and client-facing leadership."
      />
      <div className="max-w-4xl">
        {careerTimeline.map((item) => (
          <TimelineItem key={`${item.company}-${item.title}-${item.period}`} {...item} />
        ))}
      </div>
    </section>
  )
}
