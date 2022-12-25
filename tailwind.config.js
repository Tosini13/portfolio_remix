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
        "secondary": "#FFF",
        "tertiary": "#9B9DB1",
        "extra": "#2D95F5",
      },
      boxShadow: {
        'button': '0px 4px 0px #9B9DB1',
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
