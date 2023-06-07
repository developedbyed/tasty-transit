/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'poppins': "'poppins', serif"
			},
			colors: {
				'custom-gray': '#5E5E5E',
				'yellowz':'#F7A746',
				'purple':'7D2389'
			  },
		},
	},
	plugins: [],
}
