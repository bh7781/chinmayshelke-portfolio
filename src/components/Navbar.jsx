import { useState } from 'react'
import { navItems } from '../data'

export default function Navbar({ activeView, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          type="button"
          onClick={() => handleNavigate('overview')}
          className="text-left text-sm font-semibold tracking-tight text-white"
        >
          Chinmay Shelke
        </button>

        <ul className="hidden list-none items-center gap-1 p-0 m-0 md:flex">
          {navItems.map(({ id, label }) => {
            const active = activeView === id

            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(id)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-sky-400'
                  }`}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="text-slate-400 transition-colors hover:text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="grid list-none gap-1 px-5 py-4">
            {navItems.map(({ id, label }) => {
              const active = activeView === id

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(id)}
                    aria-current={active ? 'page' : undefined}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                      active
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-sky-400'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
