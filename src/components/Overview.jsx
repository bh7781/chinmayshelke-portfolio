import { profilePillars } from '../data'
import Hero from './Hero'
import Impact from './Impact'
import SectionHeader from './SectionHeader'

function PillarCard({ title, text }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </article>
  )
}

export default function Overview({ onNavigate, onRequestResume }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} onRequestResume={onRequestResume} />
      <Impact />
      <section className="pb-16">
        <SectionHeader
          eyebrow="Profile Signal"
          title="A hybrid analytics leader: technical enough to build, senior enough to own the outcome."
          description="The strongest thread across the profile is ownership of work that sits between business process, data logic, technical implementation, and delivery governance."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {profilePillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>
    </div>
  )
}
