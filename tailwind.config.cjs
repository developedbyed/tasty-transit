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
				'yellowzGradient':'#FFDF93',
				'purple':'#7D2389',
				'black_background': '#1D1D1D',
				'orange_ish': '#FFAE4D',
				'purple_gradient_start': '#7D2E89',
				'purple_gradient_finish': '#CA52DD',
				'orange_gradient_start': '#FFAE4D',
				'orange_gradient_finish': '#FFDF93',
			  },
			gradientColorStops:{
				
			}
		},
	},
	plugins: [],
}


//linear-gradient(45deg, #F7A746, #FFDF93)