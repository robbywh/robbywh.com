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
        }
      },
      animation: {
        type: 'type 1.8s ease-out .8s 1 normal both',
      },
      fontFamily: {
        'courier-prime': ['Courier Prime', 'monospace']
      },
    }
  },
  plugins: [],
};
