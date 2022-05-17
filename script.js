new Glide('.glide', {
	type: 'carousel',
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
