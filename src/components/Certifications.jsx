import { certifications } from '../data'

function CertificationCard({ title, issuer, badgeImage, credentialUrl }) {
  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-lg shadow-slate-950/20">
      <div className="flex items-start gap-5">
        <img
          src={badgeImage}
          alt={`${title} badge`}
          className="h-20 w-20 shrink-0 rounded-lg border border-slate-700 bg-slate-950 object-contain p-2"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-400">{issuer}</p>
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${title} (opens in new tab)`}
            className="mt-5 inline-flex rounded-lg border border-sky-700 px-3 py-2 text-xs font-medium text-sky-300 hover:border-sky-500 hover:bg-sky-600/10"
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
    <section id="certifications" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Certifications
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((certification) => (
          <CertificationCard key={certification.title} {...certification} />
        ))}
      </div>
    </section>
  )
}
