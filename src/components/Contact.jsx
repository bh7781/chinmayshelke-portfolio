import SectionHeader from './SectionHeader'
import SocialLinks from './SocialLinks'

export default function Contact({ onOpenForm, onRequestResume }) {
  return (
    <section id="contact" className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk."
        description="For a role, a collaboration or a question about my work, send a message through the form. You can also find me on LinkedIn and GitHub."
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

      <SocialLinks className="mt-6" />
    </section>
  )
}
