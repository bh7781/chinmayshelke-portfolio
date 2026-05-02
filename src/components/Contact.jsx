import ContactForm from './ContactForm'
import SectionHeader from './SectionHeader'

export default function Contact({ contactIntent, onRequestResume }) {
  return (
    <section id="contact" className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Contact"
        title="Start a focused conversation."
        description="Use the form for hiring conversations, professional collaboration, or resume requests. My direct email and resume remain private by design."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
          <p className="text-sm font-semibold text-white">
            Resume requests
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            I share my resume directly with genuine recruiters, hiring teams, and professional contacts.
          </p>
          <button
            type="button"
            onClick={onRequestResume}
            className="mt-5 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-sky-500"
          >
            Request Resume
          </button>
        </div>

        <ContactForm
          key={contactIntent.focusKey}
          focusKey={contactIntent.focusKey}
          initialPurpose={contactIntent.purpose}
        />
      </div>
    </section>
  )
}
