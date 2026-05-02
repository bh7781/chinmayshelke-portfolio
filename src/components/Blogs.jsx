import { articles } from '../data'

function ArticleCard({ title, url, description }) {
  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-slate-700 transition-colors duration-150">
      <h3 className="text-sm font-semibold text-white leading-snug">
        {title}
      </h3>
      <p className="mt-3 text-sm text-slate-400 leading-6">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} on Medium (opens in new tab)`}
        className="mt-5 inline-flex text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors duration-150"
      >
        Read Article
      </a>
    </article>
  )
}

export default function Blogs() {
  return (
    <section id="blogs" className="pb-20 scroll-mt-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest shrink-0">
          Blogs
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} {...article} />
        ))}
      </div>
    </section>
  )
}
