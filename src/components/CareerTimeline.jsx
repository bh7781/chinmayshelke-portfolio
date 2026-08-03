import { useState } from 'react'
import { careerTimeline } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMonth(value) {
  if (!value) {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

function formatMonth(value) {
  if (!value) return 'Present'
  const { year, month } = parseMonth(value)
  return `${MONTHS[month - 1]} ${year}`
}

function monthsBetween(start, end) {
  const from = parseMonth(start)
  const to = parseMonth(end)
  return (to.year - from.year) * 12 + (to.month - from.month) + 1
}

function formatDuration(totalMonths) {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  return parts.join(' ') || '1 mo'
}

function companySpan(roles) {
  const start = roles[roles.length - 1].start
  const end = roles.some((role) => !role.end) ? null : roles[0].end
  return { start, end }
}

function RoleItem({ role, isLast, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <li className="relative pl-8 pb-6 last:pb-0">
      {!isLast && (
        <span className="absolute left-[5px] top-4 bottom-0 w-px bg-zinc-800" aria-hidden="true" />
      )}
      <span
        className="absolute left-0 top-2.5 h-[11px] w-[11px] rounded-full border-2 border-teal-400 bg-zinc-950"
        aria-hidden="true"
      />
      <div
        className={`rounded-xl border p-1 transition-colors duration-300 sm:-mx-3 sm:px-4 sm:py-3 ${
          open ? 'border-zinc-800/60 bg-zinc-900/40' : 'border-transparent hover:border-zinc-800/60 hover:bg-zinc-900/40'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="group flex w-full items-start justify-between gap-3 text-left"
        >
          <span className="min-w-0">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-teal-200">
                {role.title}
              </span>
              <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-300">
                {formatDuration(monthsBetween(role.start, role.end))}
              </span>
            </span>
            <span className="mt-1 block text-sm text-zinc-400">
              {formatMonth(role.start)} - {formatMonth(role.end)}
              <span className="mx-2 text-zinc-600">|</span>
              {role.location}
            </span>
          </span>
          <svg
            className={`mt-1.5 h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:text-teal-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <p className="mt-3 text-base leading-7 text-zinc-300">{role.summary}</p>

            <ul className="mt-3 grid gap-1.5">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="text-[15px] leading-7 text-zinc-400">
                  <span className="mr-2 text-teal-300">/</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5 pb-1">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-zinc-700/70 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

function CompanyCard({ company, location, logo, roles }) {
  const span = companySpan(roles)
  const tenure = formatDuration(monthsBetween(span.start, span.end))

  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-zinc-700 sm:p-7">
      <header className="flex items-start gap-4 border-b border-zinc-800 pb-5 sm:gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-white p-2 shadow-lg shadow-black/20 sm:h-16 sm:w-16">
          <img src={logo} alt={`${company} logo`} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{company}</h3>
          <p className="mt-1 text-sm text-zinc-400">
            {formatMonth(span.start)} - {formatMonth(span.end)}
            <span className="mx-2 text-zinc-600">|</span>
            {location}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
            {tenure}
            <span className="font-normal normal-case tracking-normal text-teal-200/70">
              {roles.length} role{roles.length > 1 ? 's' : ''}
            </span>
          </p>
        </div>
      </header>

      <ol className="mt-6">
        {roles.map((role, index) => (
          <RoleItem
            key={`${role.title}-${role.start}`}
            role={role}
            isLast={index === roles.length - 1}
            defaultOpen={!role.end}
          />
        ))}
      </ol>
    </article>
  )
}

export default function CareerTimeline() {
  const allRoles = careerTimeline.flatMap((item) => item.roles)
  const totalSpan = companySpan(
    [...allRoles].sort((a, b) => (a.start < b.start ? 1 : -1))
  )
  const totalExperience = formatDuration(monthsBetween(totalSpan.start, totalSpan.end))

  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Career Timeline"
        title="From application development to analytics leadership."
        description="Software delivery, regulatory data analysis, automation, controls, and client-facing leadership — in one continuous progression."
      />
      <div className="max-w-4xl">
        <p className="mb-8 inline-flex items-baseline gap-3 rounded-xl border border-zinc-800 bg-zinc-950/75 px-5 py-3 shadow-lg shadow-black/20">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Total experience
          </span>
          <span className="text-lg font-semibold text-white">{totalExperience}</span>
        </p>
        <div className="grid gap-8">
          {careerTimeline.map((item, index) => (
            <Reveal key={item.company} delay={index * 80}>
              <CompanyCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
