/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans':['Nunito', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}