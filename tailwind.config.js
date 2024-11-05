/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      foreground : {
        500: '#9A9A9A',
        900: '#000000'
      },
      background: {
        white: '#FFFFFF'
      }
    },
    extend: {},
  },
  plugins: [],
}
