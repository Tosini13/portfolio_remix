/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
      screens: {
        'semi-md': '900px',
        'large': '1024px',
        'hover-hover': { 'raw': '(hover: hover)' },
        'hover-none': { 'raw': '(hover: none)' },
      },
      maxWidth: {
        'theme': '1200px'
      },
      margins: {
        'desktop': '84px',
        'mobile': '71px',
      },
      fontSize: {
        'home-heading': '2.7rem'
      },
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
        'banner-scroll': 'scroll 50s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-focus': {
          '-webkit-tap-highlight-color': 'transparent',
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-html-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
        },
        '.pt-section-desktop': {
          'padding-top': '89px'
        },
        '.pt-section-mobile': {
          'padding-top': '76px'
        },
      })
    })],
}