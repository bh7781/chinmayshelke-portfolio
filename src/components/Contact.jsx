import SectionHeader from './SectionHeader'

export default function Contact({ onOpenForm, onRequestResume }) {
  return (
    <section id="contact" className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Hiring for a data role, exploring a collaboration, or just have a question about my work? Drop me a message — I usually reply within a day or two."
      />

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onOpenForm()}
          className="rounded-lg bg-teal-500 px-5 py-2.5 text-base font-medium text-zinc-950 transition-colors duration-150 hover:bg-teal-300"
        >
          Contact Me
        </button>
        <button
          type="button"
          onClick={onRequestResume}
          className="rounded-lg border border-zinc-700 px-5 py-2.5 text-base font-medium text-zinc-300 transition-colors duration-150 hover:border-teal-400 hover:text-teal-300"
        >
          Request Resume
        </button>
      </div>
    </section>
  )
}
