import { clientProjects } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const rows = [
  ['Context', 'context'],
  ['Contribution', 'contribution'],
  ['Impact', 'impact'],
]

function ClientProjectCard({ title, domain, context, contribution, impact, tools }) {
  const content = { context, contribution, impact }

  return (
    <article className="h-full rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-teal-500/40 sm:p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-300">
        {domain}
      </p>
      <h3 className="text-xl font-semibold leading-snug text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {rows.map(([label, key]) => (
          <p key={label} className="text-base leading-7 text-zinc-400">
            <span className="mr-1.5 font-semibold text-zinc-100">{label}</span>
            {content[key]}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-800 pt-5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-zinc-700/70 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
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
        title="Real delivery work, without the sensitive client detail."
        description="Selected, anonymized examples of analytics, controls, automation, and data-quality work delivered in client environments."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {clientProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 80} className="h-full">
            <ClientProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
