import { metrics } from '../data'
import SectionHeader from './SectionHeader'

function MetricCard({ stat, label }) {
  const isLong = stat.length > 5

  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
      <p className={`mb-2 font-semibold leading-none tracking-tight text-white ${isLong ? 'text-xl sm:text-2xl' : 'text-3xl'}`}>
        {stat}
      </p>
      <p className="text-base leading-7 text-zinc-400">{label}</p>
    </article>
  )
}

export default function Impact() {
  return (
    <section className="pb-16">
      <SectionHeader
        eyebrow="Snapshot"
        title="The profile in numbers"
        description="A compact view of scale, ownership, and the kind of environments this work has operated in."
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {metrics.map(({ stat, label }) => (
          <MetricCard key={label} stat={stat} label={label} />
        ))}
      </div>
    </section>
  )
}
