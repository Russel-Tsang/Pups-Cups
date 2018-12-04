var get_started = document.getElementsByClassName("get_started")[0];
var item_border = document.getElementById("item-border");
var nav_links = document.getElementsByClassName("nav-link");
var logo = document.getElementById("logo");

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('#navigation').css('background', 'rgba(0, 0, 0, 0.6)');
        $('.nav-link').css('color', '#9ac8ed');
        $('nav').css('height', '130px');
        logo.setAttribute('src', 'https://i.ibb.co/bd0cgcx/logo.png');
        logo.classList.remove('logo-change');        
    } else{
        $('#navigation').css('background', 'rgba(0, 0, 0, .6)');
        // $('.nav-link').css('color', 'white');
        $('nav').css('height', '70px');
        logo.setAttribute('src', 'https://i.ibb.co/ScbWjv8/logo-2.png');
        logo.classList.add('logo-change');

        for (var i = 0; i < nav_links.length - 1; i++) {
            nav_links[i].style.color = "white";
        }
    }
});

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = "white";
}

item_border.addEventListener("mouseover", function(){
	get_started.style.fontSize = "27px";
})

item_border.addEventListener("mouseout", function(){
	get_started.style.fontSize = "25px";
})


