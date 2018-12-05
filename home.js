var get_started = document.getElementsByClassName("get_started")[0];
var item_border = document.getElementById("item-border");
var nav_links = document.getElementsByClassName("nav-link");
var logo = document.getElementById("logo");

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('#navigation').css('background', 'black');
        $('.nav-link').css('color', '#9ac8ed');
     
    } else{
        $('#navigation').css('background', 'rgba(0, 0, 0, .6)');
        // $('.nav-link').css('color', 'white');

        for (var i = 0; i < nav_links.length - 1; i++) {
            nav_links[i].style.color = "white";
        }
    }
});

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = "#9ac8ed";
}






