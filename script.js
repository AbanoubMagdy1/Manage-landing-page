const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
	document.body.classList.add('open')
	hamburger.classList.add('open')
	menu.classList.add('open')
	overlay.classList.add('open')
})

overlay.addEventListener('click', () => {
	document.body.classList.remove('open')
	hamburger.classList.remove('open')
	menu.classList.remove('open')
	overlay.classList.remove('open')
})

new Glide('.glide', {
	type: 'carousel',
	gap: 30,
	perView: 3,
	breakpoints: {
		975: {
			perView: 2
		},
		767: {
            controls: true,
            autoplay: 4000,
			perView: 1
		}
	}
}).mount();
