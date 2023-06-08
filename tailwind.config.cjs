/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'black-text': '#262626',
        'grey-text': '#5E5E5E',
        'footer-color': '#1D1D1D',
        'primary-accent': '#FFAE4D'
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  plugins: [],
};
