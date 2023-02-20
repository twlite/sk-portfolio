/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0C1222',
        red: '#ED653A',
        darkRed: '#C05435',
        gray: '#64748B',
        darkGray: '#1E293B',
        light: '#CBD5E1'
      }
    }
  },
  plugins: []
}
