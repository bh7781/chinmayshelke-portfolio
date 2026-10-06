const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Colours below are theme-aware: values are defined per theme in src/index.css.
      colors: {
        white: v('c-white'),
        black: v('c-black'),
        zinc: {
          100: v('zinc-100'), 200: v('zinc-200'), 300: v('zinc-300'), 400: v('zinc-400'),
          500: v('zinc-500'), 600: v('zinc-600'), 700: v('zinc-700'), 800: v('zinc-800'),
          900: v('zinc-900'), 950: v('zinc-950'),
        },
        teal: { 200: v('teal-200'), 300: v('teal-300'), 400: v('teal-400'), 500: v('teal-500'), 600: v('teal-600') },
        violet: { 200: v('violet-200'), 300: v('violet-300') },
        cyan: { 200: v('cyan-200') },
        emerald: { 300: v('emerald-300'), 800: v('emerald-800'), 950: v('emerald-950') },
        rose: { 300: v('rose-300'), 800: v('rose-800'), 950: v('rose-950') },
      },
    },
  },
  plugins: [],
};
