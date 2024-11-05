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
    spacing: {
      '1': '0.25rem', //4px
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem'
    },
    fontFamily: {
      default: ['Times New Roman', 'Times', 'serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    fontSize: {
      xl: '36px',
      lg: '24px',
      md: '16px'
    },
    extend: {},
  },
  plugins: [],
}
