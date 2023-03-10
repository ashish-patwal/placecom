/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				'layerone-pink-one': '#FFA1C9',
				'layerone-pink-two': '#F94892',
				'layerone-pink-three': '#E60965',
				'layertwo-neon-one': '#D2F6C5',
				'layertwo-neon-two': '#99F3BD',
				'layertwo-neon-three': '#28DF99',
				'layerthree-violet-one': '#F0E3FF',
				'layerthree-violet-two': '#D89CF6',
				'layerthree-violet-three': '#916DD5',
				lime: '#9CFF2E',
				olive: '#39AEA9',
				mist: '#B9F3E4'
			},
			fontFamily: {
				navbar: ['Open Sans'],
				BebasNeue: ["'Bebas Neue'"],
				sacramento: ['Sacramento'],
				montserrat: ['Montserrat'],
				aneklatin: ['Anek Latin'],
				poppins: ['Poppins']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter'
		]
	}
}
