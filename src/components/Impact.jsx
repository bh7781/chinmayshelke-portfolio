import { useEffect, useRef, useState } from 'react'
import { metrics } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const STAT_PATTERN = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/

function CountUpStat({ stat, className }) {
  const match = stat.match(STAT_PATTERN)
  const ref = useRef(null)
  const [display, setDisplay] = useState(() => {
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return stat
    }
    return `${match[1]}0${match[3]}`
  })

  useEffect(() => {
    if (!match || display === stat) return undefined

    const node = ref.current
    if (!node) return undefined

    const [, prefix, rawNumber, suffix] = match
    const target = Number(rawNumber)
    const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0

    let frameId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 1200
        const startTime = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`)
          if (progress < 1) {
            frameId = requestAnimationFrame(tick)
          }
        }

        frameId = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stat])

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  )
}

function MetricCard({ stat, label }) {
  const isLong = stat.length > 5

  return (
    <article className="h-full rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-teal-500/40 sm:p-6">
      <CountUpStat
        stat={stat}
        className={`mb-2 font-semibold leading-none tracking-tight text-white ${isLong ? 'text-xl sm:text-2xl' : 'text-3xl'}`}
      />
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
        description="Scale, ownership, and the environments this work operates in."
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {metrics.map(({ stat, label }, index) => (
          <Reveal key={label} delay={(index % 3) * 80} className="h-full">
            <MetricCard stat={stat} label={label} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
