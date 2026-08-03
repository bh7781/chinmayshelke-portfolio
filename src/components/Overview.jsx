import { profilePillars } from '../data'
import Hero from './Hero'
import Impact from './Impact'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function PillarCard({ title, text }) {
  return (
    <article className="h-full rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-teal-500/40 sm:p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-zinc-400">{text}</p>
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
          title="Technical enough to build. Senior enough to own the outcome."
          description="I own work that sits between business process, data logic, technical implementation, and delivery governance."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {profilePillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80} className="h-full">
              <PillarCard {...pillar} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
