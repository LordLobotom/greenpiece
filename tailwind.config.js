/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
        },
      },
    },
  },
  plugins: [],
}
