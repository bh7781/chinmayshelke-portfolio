import { profile } from '../data'
import SocialLinks from './SocialLinks'

export default function Hero({ onNavigate, onRequestResume }) {
  return (
    <section className="grid items-center gap-10 pt-10 pb-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:pt-14">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-teal-300">
          Data analytics · Regulatory reporting · Automation
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="gradient-text mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          I build analytics, testing and automation for regulatory reporting in financial services, using Python, SQL, Snowflake, Alteryx and Power BI, and I manage a team that delivers it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('timeline')}
            className="rounded-lg bg-teal-500 px-4 py-2.5 text-base font-medium text-zinc-950 transition-colors duration-150 hover:bg-teal-300"
          >
            View Experience
          </button>
          <button
            type="button"
            onClick={() => onNavigate('client-work')}
            className="rounded-lg border border-teal-500/70 px-4 py-2.5 text-base font-medium text-teal-200 transition-colors duration-150 hover:border-teal-300 hover:bg-teal-500/10"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={onRequestResume}
            className="rounded-lg border border-zinc-700 px-4 py-2.5 text-base font-medium text-zinc-300 transition-colors duration-150 hover:border-zinc-500 hover:text-white"
          >
            Request Resume
          </button>
        </div>

        <SocialLinks className="mt-5" />
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal-500/40 via-transparent to-violet-500/40 blur-2xl"
            aria-hidden="true"
          />
          <img
            src="/assets/profile/chinmay-960.webp"
            srcSet="/assets/profile/chinmay-640.webp 640w, /assets/profile/chinmay-960.webp 960w, /assets/profile/chinmay-1254.webp 1254w"
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 208px"
            width="1254"
            height="1254"
            fetchPriority="high"
            decoding="async"
            alt={`${profile.name} profile photo`}
            className="relative h-64 w-52 rounded-2xl border border-zinc-700/80 bg-zinc-950 object-cover shadow-2xl shadow-black/70 ring-1 ring-teal-400/20 sm:h-80 sm:w-64 lg:h-96 lg:w-80"
          />
        </div>
      </div>
    </section>
  )
}
