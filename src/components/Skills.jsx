import { operatingModes, skillGroups } from '../data'
import SectionHeader from './SectionHeader'

function SkillGroup({ group, skills }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-sky-400">
        {group}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-slate-700/60 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Skills() {
  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Skills and Operating Style"
        title="A practical technical stack, shaped by delivery pressure."
        description="The portfolio is strongest where analytics engineering, control logic, stakeholder communication, and team leadership overlap."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.group} {...group} />
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-sky-400">
          How I Work
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {operatingModes.map((mode) => (
            <p key={mode} className="text-sm leading-6 text-slate-300">
              <span className="mr-2 text-sky-400">/</span>
              {mode}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
