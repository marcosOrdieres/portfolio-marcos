/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			keyframes: {
				animatedgradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
				fadeFastIn: 'fadeIn 3s ease-in-out',
				fadeIn: 'fadeIn 8s ease-in-out',
				fadeLateIn: 'fadeIn 10s ease-in-out',
			},
			colors: {
				primary900: "#E0FA47"
			}
		}
	},
}
