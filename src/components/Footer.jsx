import { navItems } from '../data'

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-14 border-t border-zinc-800/80 bg-black/40">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight text-white">Chinmay Shelke</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Client-facing analytics leader for complex financial data — Python, SQL, automation, and regulatory reporting controls.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid list-none grid-cols-2 gap-x-10 gap-y-2 p-0 m-0">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="text-sm text-zinc-400 transition-colors duration-150 hover:text-teal-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Chinmay Shelke. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
