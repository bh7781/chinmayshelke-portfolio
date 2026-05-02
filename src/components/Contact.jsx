import ContactForm from './ContactForm'

export default function Contact({ contactIntent, onRequestResume }) {
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
      <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-sm text-slate-300 leading-6">
          I share my resume directly with genuine recruiters, hiring teams, and professional contacts.
        </p>
        <button
          onClick={onRequestResume}
          className="mt-4 text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg px-5 py-2.5 transition-colors duration-150"
        >
          Request Resume
        </button>
      </div>
      <ContactForm
        key={contactIntent.focusKey}
        focusKey={contactIntent.focusKey}
        initialPurpose={contactIntent.purpose}
      />
    </section>
  )
}
