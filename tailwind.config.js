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
          'h2': { color: 'rgb(58, 58, 58)', fontSize: '2.5rem', fontWeight: 700 },
          'h3': {
            color: 'rgb(24, 25, 31)', fontSize: '1.75rem', fontWeight: 500
          },
          'p': { fontSize: '1rem', color: 'rgb(58, 58, 58)', fontWeight: 600 },
          '.hr-border': { background: 'linear-gradient(135deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.378%, rgba(192, 204, 218, 0.1) 100%)' },
          '.card-shadow': { boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.15)' }
        }
      )
    }
  ],
}

