import { operatingModes, skillGroups } from '../data'
import SectionHeader from './SectionHeader'

function SkillGroup({ group, skills }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-300">
        {group}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-zinc-700/60 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
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

      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-300">
          How I Work
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {operatingModes.map((mode) => (
            <p key={mode} className="text-base leading-7 text-zinc-300">
              <span className="mr-2 text-teal-300">/</span>
              {mode}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
