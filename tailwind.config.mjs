/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#F16529', // Ton Orange
				dark: '#0F0F0F',   // Le noir Anesh
				card: '#141414',
			},
			fontFamily: {
				heading: ['Oswald', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}