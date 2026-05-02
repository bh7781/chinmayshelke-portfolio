export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}
