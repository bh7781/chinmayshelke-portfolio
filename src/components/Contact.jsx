import { contactLinks } from '../data'

export default function Contact({ onRequestResume }) {
  return (
    <section id="contact" className="pb-24 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Contact
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <p className="text-sm text-slate-400 leading-7 max-w-lg mb-8">
        Interested in analytics, AI/ML, automation, or data leadership roles? Let's connect.
      </p>
      <div className="space-y-4 mb-8">
        {contactLinks.map(({ label, href, display, external }) => (
          <div key={label} className="flex items-baseline gap-6">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest w-16 shrink-0">
              {label}
            </span>
            <a
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${display} (opens in new tab)` }
                : {})}
              className="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-150"
            >
              {display}
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={onRequestResume}
        className="text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg px-5 py-2.5 transition-colors duration-150"
      >
        Request Resume
      </button>
    </section>
  )
}
