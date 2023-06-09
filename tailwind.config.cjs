/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
      },
      colors: {
        "black-text": "#262626",
        "grey-text": "#5E5E5E",
        "footer-color": "#1D1D1D",
        "primary-accent": "#FFAE4D",
        "secondary-accent": "#7D2E89",
        "orange-grad-end": "#FFDF93",
      },
      fontSize: {
        xxs: "0.625rem",
        hero: "3.2rem",
      },
      height: {
        heroImage: "36rem",
        heroCircle: "31rem",
      },
      width: {
        heroImage: "50rem",
        heroCircle: "31rem",
      },
    },
  },
  plugins: [],
};
