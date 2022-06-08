module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	mode: 'jit',
	// These paths are just examples, customize them to match your project structure
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./styles/**/*.{js,jsx,ts,tsx,vue}',
	],
	theme: {
		fontFamily: {
			display: ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
		extend: {
			fontSize: {
				14: '0.875rem',
			},
			backgroundColor: {
				'main-bg': '#FAFBFB',
				'main-dark-bg': '#20232A',
				'secondary-dark-bg': '#33373E',
				'light-gray': '#F7F7F7',
				'half-transparent': 'rgba(0, 0, 0, 0.5)',
			},
			borderWidth: {
				1: '0.0625rem',
			},
			borderColor: {
				color: 'rgba(0, 0, 0, 0.1)',
			},
			width: {
				400: '25rem',
				760: '47.5rem',
				780: '48.75rem',
				800: '50rem',
				1000: '62.5rem',
				1200: '75rem',
				1400: '87.5rem',
			},
			height: {
				80: '5rem',
			},
			minHeight: {
				590: '36.875rem',
			},
			backgroundImage: {
				'hero-pattern':
					"url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
			},
		},
	},
	plugins: [],
};
