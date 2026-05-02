import { articles } from '../data'
import SectionHeader from './SectionHeader'

function ArticleCard({ title, url, description }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 transition-colors duration-150 hover:border-violet-600/60 sm:p-6">
      <h3 className="text-xl font-semibold leading-snug text-white">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-zinc-400">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} on Medium (opens in new tab)`}
        className="mt-5 inline-flex text-sm font-medium text-teal-300 transition-colors duration-150 hover:text-teal-200"
      >
        Read Article
      </a>
    </article>
  )
}

export default function Blogs() {
  return (
    <section className="py-10 sm:py-14">
      <SectionHeader
        eyebrow="Writing"
        title="Technical writing with a bias for clarity."
        description="Short, practical articles that explain engineering, BI, and machine learning concepts without making them heavier than they need to be."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.url} {...article} />
        ))}
      </div>
    </section>
  )
}
