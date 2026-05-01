import { metrics } from '../data'

function MetricCard({ stat, label }) {
  const isLong = stat.length > 5
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
      <p className={`font-bold text-white mb-1.5 tracking-tight leading-none ${isLong ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>
        {stat}
      </p>
      <p className="text-xs text-slate-400 leading-relaxed">{label}</p>
    </div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Impact Snapshot
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {metrics.map(({ stat, label }) => (
          <MetricCard key={label} stat={stat} label={label} />
        ))}
      </div>
    </section>
  )
}
