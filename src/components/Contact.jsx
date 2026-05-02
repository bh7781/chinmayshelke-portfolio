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
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
          <p className="text-lg font-semibold text-white">
            Resume requests
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-400">
            I share my resume directly with genuine recruiters, hiring teams, and professional contacts.
          </p>
          <button
            type="button"
            onClick={onRequestResume}
            className="mt-5 rounded-lg bg-teal-500 px-5 py-2.5 text-base font-medium text-zinc-950 transition-colors duration-150 hover:bg-teal-300"
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
