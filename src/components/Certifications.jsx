import { certifications } from '../data'
import SectionHeader from './SectionHeader'

function CertificationCard({ title, issuer, badgeImage, credentialUrl }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
      <div className="flex items-start gap-5">
        <img
          src={badgeImage}
          alt={`${title} badge`}
          className="h-20 w-20 shrink-0 rounded-lg border border-zinc-700 bg-zinc-950 object-contain p-2"
        />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{issuer}</p>
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${title} (opens in new tab)`}
            className="mt-5 inline-flex rounded-lg border border-teal-600 px-3 py-2 text-sm font-medium text-teal-300 hover:border-teal-300 hover:bg-teal-500/10"
          >
            View Credential
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Certifications() {
  return (
    <section className="pb-16">
      <SectionHeader
        eyebrow="Credentials"
        title="Signals of continued learning"
        description="Selected certifications and credential-backed badges relevant to software, AI tooling, and development fundamentals."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard key={certification.title} {...certification} />
        ))}
      </div>
    </section>
  )
}
