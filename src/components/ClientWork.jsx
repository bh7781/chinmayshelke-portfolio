import { clientProjects } from '../data'
import SectionHeader from './SectionHeader'

const rows = [
  ['Context', 'context'],
  ['Contribution', 'contribution'],
  ['Impact', 'impact'],
]

function ClientProjectCard({ title, domain, context, contribution, impact, tools }) {
  const content = { context, contribution, impact }

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors duration-150 hover:border-slate-700 sm:p-6">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-sky-400">
        {domain}
      </p>
      <h3 className="text-base font-semibold leading-snug text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {rows.map(([label, key]) => (
          <p key={label} className="text-sm leading-6 text-slate-400">
            <span className="mr-1.5 font-semibold text-slate-200">{label}</span>
            {content[key]}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800 pt-5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-slate-700/70 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function ClientWork() {
  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Client Work"
        title="Real delivery work, presented without exposing sensitive client detail."
        description="These are not fictional case studies. They are selected, anonymized examples of analytics, controls, automation, and data-quality work delivered in client environments."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {clientProjects.map((project) => (
          <ClientProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
