/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase(
        {
          'h1': { color: 'rgb(58, 58, 58)', fontWeight: 700 },
          'p': { fontSize: '1rem', color: 'rgb(58, 58, 58)', fontWeight: 600 },
          '.hr-border': { background: 'linear-gradient(135deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.378%, rgba(192, 204, 218, 0.1) 100%)' },
        }
      )
    }
  ],
}

