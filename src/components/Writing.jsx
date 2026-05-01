import { articles } from '../data'

function ArticleCard({ title, url, publication }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title} — read on Medium (opens in new tab)`}
      className="group block bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-slate-700 transition-colors duration-150"
    >
      <p className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-2">
        {publication}
      </p>
      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-sky-400 transition-colors duration-150">
        {title}
      </h3>
      <p className="text-xs text-slate-500 mt-3">Read on Medium ↗</p>
    </a>
  )
}

export default function Writing() {
  return (
    <section id="writing" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Writing
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} {...article} />
        ))}
      </div>
    </section>
  )
}
