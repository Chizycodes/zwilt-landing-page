/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#525AA0',
				secondary: '#FFBE2E',
				lightPurple: '#A285D0',
				darkPurple: '#AF7CFF',
				textDark: '#202229',
				textGray: '#959595',
				purpleBg: '#EDEFFF',
				lightGray: '#F6F6F6',
			},
		},
	},
	variants: {
		extend: {
			width: ['group-hover'],
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: false,
	},
};
