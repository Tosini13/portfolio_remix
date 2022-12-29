/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        "primary": "#24242E",
        "primary-light": "#343453",
        "secondary": "#FFF",
        "tertiary": "#9B9DB1",
        "extra": "#2D95F5",
        "extra-light": "#44A5FF",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'scroll': {
          '0%': { left: '0' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        'banner-scroll': 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
}
