/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Full v3 classes – no more purge losses
    'min-h-screen', 'bg-gradient-to-br', 'from-slate-900', 'via-purple-900', 'to-slate-900', 'text-white', 'overflow-x-hidden',
    'max-w-5xl', 'mx-auto', 'p-6', 'text-center', 'py-12', 'text-6xl', 'font-black', 'bg-clip-text', 'text-transparent',
    'from-cyan-400', 'via-blue-500', 'to-purple-600', 'flex', 'items-center', 'justify-center', 'gap-4', 'mb-4', 'w-16', 'h-16',
    'animate-spin-slow', 'w-12', 'h-12', 'animate-pulse', 'text-xl', 'mt-2', 'cyan-200', 'max-w-2xl', 'opacity-0', 'y-30', 'duration-0.8',
    'backdrop-blur-xl', 'bg-white/5', 'rounded-3xl', 'p-8', 'mb-8', 'border', 'border-white/10', 'shadow-2xl', 'text-2xl', 'font-bold',
    'gap-3', 'w-6', 'h-6', 'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'space-y-2', 'text-cyan-300', 'font-semibold', 'text-sm',
    'w-2', 'h-2', 'bg-cyan-400', 'rounded-full', 'animate-ping', 'w-full', 'p-4', 'rounded-2xl', 'bg-slate-800/50', 'border-cyan-500/30',
    'focus:border-cyan-400', 'transition-all', 'duration-300', 'text-purple-300', 'border-purple-500/30', 'focus:border-purple-400',
    'flex', 'justify-end', 'md:justify-start', 'text-xl', 'cursor-pointer', 'group', 'w-7', 'h-7', 'bg-red-500', 'bg-gray-600',
    'text-red-300', 'text-gray-400', 'space-y-6', 'text-3xl', 'cyan-400', 'w-8', 'h-8', 'md:grid-cols-2', 'capitalize', 'gray-300',
    'w-4', 'h-4', 'text-yellow-400', 'p-5', 'h-24', 'resize-none', 'border-white/20', 'focus:border-cyan-500', 'focus:outline-none',
    'mt-8', 'cursor-pointer', 'text-cyan-400', 'bg-slate-800/30', 'rounded-xl', 'w-5', 'h-5', 'mt-4', 'p-6', 'bg-slate-900/80',
    'border-cyan-500/20', 'overflow-x-auto', 'flex-col', 'sm:flex-row', 'pt-8', 'border-t', 'justify-center', 'scale-1.05',
    'boxShadow-[0_10px_25px_rgba(6,182,212,0.4)]', 'scale-0.98', 'from-cyan-500', 'to-blue-600', 'hover:from-cyan-400', 'hover:to-blue-500',
    'px-12', 'py-5', 'shadow-lg', 'from-green-500', 'to-emerald-600', 'hover:from-green-400', 'hover:to-emerald-500', 'boxShadow-[0_10px_25px_rgba(34,197,94,0.4)]',
    'mt-16', 'text-gray-500'
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
