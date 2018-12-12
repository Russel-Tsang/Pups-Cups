var landing_banner = document.querySelector('.landing-banner');

landing_banner.addEventListener("mouseover", function(){
	landing_banner.classList.add('landing-banner-2');
})

landing_banner.addEventListener("mouseout", function(){
	landing_banner.classList.remove('landing-banner-2');
})

// for (var i = 200; i < 1200; i += 200) {
// 	window.setTimeout(function() {
// 			jumbotron.classList.toggle('jumbotron-image-2');
// 	}, i);
// }