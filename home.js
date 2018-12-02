$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('#navigation').css('background', 'rgba(0, 0, 0, 0.05)');
        $('.nav-link').css('color', '#9ac8ed');
    } else{
        $('#navigation').css('background', 'rgba(0, 0, 0, .6)');
        $('.nav-link').css('color', 'white');
    }
});

var get_started = document.getElementsByClassName("get_started")[0];
var item_border = document.getElementById("item-border");

item_border.addEventListener("mouseover", function(){
	get_started.style.fontSize = "27px";
})

item_border.addEventListener("mouseout", function(){
	get_started.style.fontSize = "25px";
})