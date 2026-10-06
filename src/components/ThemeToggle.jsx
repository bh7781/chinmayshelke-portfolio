import { useEffect, useState } from 'react'

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme)
  const isLight = theme === 'light'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f6f8fb' : '#070a10')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Light theme"
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="relative flex h-9 w-[4.25rem] shrink-0 items-center justify-between rounded-full border border-zinc-700 bg-zinc-900 px-2 transition-colors duration-200 hover:border-teal-400"
    >
      <svg className="relative z-10 h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg className="relative z-10 h-4 w-4 text-violet-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <span
        aria-hidden="true"
        className={`absolute top-1 h-7 w-7 rounded-full border border-teal-400/40 bg-teal-400/20 transition-all duration-300 ${
          isLight ? 'left-1' : 'left-[2.25rem]'
        }`}
      />
    </button>
  )
}
