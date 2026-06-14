/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Sora', 'Inter', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        night: '#030712',
        cyan: '#22D3EE',
        violet: '#8B5CF6',
        emerald: '#10B981',
      },
    },
  },
  plugins: [],
};
