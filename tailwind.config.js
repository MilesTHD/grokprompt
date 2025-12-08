/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(slate|gray|cyan|purple|blue|green|red)-(.*)/,
      variants: ['hover', 'focus']
    },
    'glass',
    'backdrop-blur-xl',
    'bg-white\/5',
    'border-white\/10',
    'bg-gradient-to-(r|br)',
    'from-slate-900',
    'via-purple-900',
    'to-slate-900',
    'animate-(ping|pulse|spin-slow)',
    'rounded-(2xl|3xl)',
    'shadow-(2xl|lg)'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
