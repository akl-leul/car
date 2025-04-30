// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        dark: '#0f0f0f',
        gold: '#d4af37',
        steel: '#2c3e50',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        luxury: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config;
