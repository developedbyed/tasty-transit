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
        "black-text": "#262626",
        "grey-text": "#5E5E5E",
        "footer-color": "#1D1D1D",
        "primary-accent": "#FFAE4D",
        "secondary-accent": "#7D2E89",
      },
      fontSize: {
        xxs: "0.625rem",
        hero: "3.5rem",
      },
      height: {
        heroImage: "33rem",
      },
      width: {
        heroImage: "33rem",
      },
    },
  },
  plugins: [],
};
