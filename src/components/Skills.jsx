import { skillGroups } from '../data'

function SkillGroup({ group, skills }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
      <p className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-4">
        {group}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] font-medium text-slate-300 bg-slate-800 border border-slate-700/50 rounded px-2.5 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Skills
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((g) => (
          <SkillGroup key={g.group} {...g} />
        ))}
      </div>
    </section>
  )
}
