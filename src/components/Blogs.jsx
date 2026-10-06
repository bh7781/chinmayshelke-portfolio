import { articles } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function ArticleCard({ title, url, description }) {
  return (
    <article className="h-full card p-5 sm:p-6">
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
        title="Articles"
        description="Short articles on programming, BI and machine learning, published on Medium."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {articles.map((article, index) => (
          <Reveal key={article.url} delay={(index % 3) * 80} className="h-full">
            <ArticleCard {...article} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
