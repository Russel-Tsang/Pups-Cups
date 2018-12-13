var landing_banner = document.querySelector('.landing-banner');

landing_banner.addEventListener("mouseover", function(){
	landing_banner.classList.add('landing-banner-2');  //change banner image on mouse hover
})

landing_banner.addEventListener("mouseout", function(){
	landing_banner.classList.remove('landing-banner-2');  //reverts banner image on mouseout
})
