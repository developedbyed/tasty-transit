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
        "service-paragraph": "#E0E0E0",
        "services-black": "#1E1E1E",
        'custom-gray': '#5E5E5E',
				'yellowz':'#F7A746',
				'yellowzGradient':'#FFDF93',
				'purple':'#7D2389',
				'black_background': '#1D1D1D',
				'orange_ish': '#FFAE4D',
				'purple_gradient_start': '#7D2E89',
				'purple_gradient_finish': '#CA52DD',
				'orange_gradient_start': '#FFAE4D',
				'orange_gradient_finish': '#FFDF93',
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
        hero: "3.2rem",
        headerSize: "2.5rem",
        paragraphSize: "1.125rem;",
        cardPrice: "2rem",
      },
      height: {
        heroImage: "36rem",
        heroCircle: "31rem",
      },
      width: {
        heroImage: "50rem",
        heroCircle: "31rem",
      },
      boxShadow: {
        "test-image-large": "30px 25px 0px -2px rgba(125,46,137,1)",
        "test-image-small": "20px 18px 0px -2px rgba(125,46,137,1)",
      }
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
};

