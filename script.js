const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
	document.body.classList.toggle('open')
	hamburger.classList.toggle('open')
	menu.classList.toggle('open')
	overlay.classList.toggle('open')
})

overlay.addEventListener('click', () => {
	document.body.classList.remove('open')
	hamburger.classList.remove('open')
	menu.classList.remove('open')
	overlay.className = 'overlay close'
})

window.addEventListener('scroll', function changeNavColorOnScroll(e){
	if(window.scrollY > 90){
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
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
