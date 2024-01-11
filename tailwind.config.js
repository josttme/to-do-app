/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#000021'
			},
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',

				// Complex site-specific column configuration
				item: '15% 1fr 10% 10%'
			}
		}
	},
	plugins: []
}
