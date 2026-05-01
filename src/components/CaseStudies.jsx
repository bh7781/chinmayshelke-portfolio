import { caseStudies } from '../data'

const rows = ['Problem', 'Action', 'Result']

function CaseStudyCard({ title, problem, action, result, tools }) {
  const content = { Problem: problem, Action: action, Result: result }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-colors duration-150">
      <h3 className="text-sm font-semibold text-white leading-snug mb-5">
        {title}
      </h3>
      <div className="space-y-3">
        {rows.map((label) => (
          <p key={label} className="text-[13px] text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200 mr-1.5">{label}</span>
            {content[label]}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-slate-800">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-[11px] font-medium text-slate-400 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Featured Case Studies
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="flex flex-col gap-4">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={i} {...cs} />
        ))}
      </div>
    </section>
  )
}
