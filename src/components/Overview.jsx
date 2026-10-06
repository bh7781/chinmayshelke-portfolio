import { profilePillars } from '../data'
import Hero from './Hero'
import Impact from './Impact'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function PillarCard({ title, text }) {
  return (
    <article className="h-full card p-5 sm:p-6">
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
          eyebrow="About"
          title="What I do"
          description="I work on data analysis, automation and delivery management for regulatory reporting teams in financial services."
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
