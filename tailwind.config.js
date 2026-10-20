/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-1': '#0D0D0D',
        'bg-2': '#111111',
        'text-1': '#F2F2EF',
        'text-2': '#888888',
        'text-3': '#3A3A3A',
        accent: '#C5FF00',
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        display: ['"Be Vietnam Pro"', '"Inter"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', '"Inter"', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.22em',
        'wide2': '0.14em',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
