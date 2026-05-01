import { navLinks } from '../data'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="hidden sm:block text-sm font-semibold text-white tracking-tight">
          Chinmay Shelke
        </span>
        <ul className="flex gap-5 sm:gap-8 list-none p-0 m-0 ml-auto sm:ml-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
