/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '10ch' },
          '15%, 20%': { width: '20ch' },
          '25%, 30%': { width: '30ch' },
          '35%, 40%': { width: '40ch' },
          '45%, 50%': { width: '50ch' },
          '55%, 60%': { width: '60ch' },
          '65%, 70%': { width: '70ch' },
          '75%, 80%': { width: '80ch' },
          '85%, 90%': { width: '90ch' },
          '95%': { width: '100ch' },
        },
        'fade-in-left': {
          '0%': {
              opacity: '0',
              transform: 'translateX(500px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
        },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-40px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
        },
      },
      animation: {
        type: 'type 1.8s ease-out .8s 1 normal both',
        'fade-in-left': 'fade-in-left 0.5s ease-in',
        'fade-in-down': 'fade-in-down 0.5s ease-in',
      },
      fontFamily: {
        'courier-prime': ['Courier Prime', 'monospace']
      },
    }
  },
  plugins: [],
};
