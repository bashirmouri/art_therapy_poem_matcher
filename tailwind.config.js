/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        body: ['"Crimson Text"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'petal-pink': '#fdf2f8',
        'ink-slate': '#1f1f29',
      },
    },
  },
  plugins: [],
}

