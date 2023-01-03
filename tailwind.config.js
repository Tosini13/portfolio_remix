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
        'hover-hover': { 'raw': '(hover: hover)' },
        'hover-none': { 'raw': '(hover: none)' },
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
        'show&hide': {
          '0%': { opacity: '0', scaleY: '0' },
          '50%': { opacity: '1', scaleY: '1' },
          '100%': { opacity: '0', scaleY: '0' },

        },
      },
      animation: {
        'banner-scroll': 'scroll 15s linear infinite',
        'popup': 'show&hide 2s ease',
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