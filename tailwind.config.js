/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./example/index.html'],
	theme: {
		extend: {
			gutter: {
				xs: '0.75rem',
				sm: '1rem',
				md: '1.25rem',
				lg: '1.75rem',
				xl: '2rem',
			},
		},
	},
	plugins: [require('./index')],
}
