var get_started = document.getElementsByClassName("get_started")[0];
var nav_links = document.querySelectorAll(".nav-link");
var logo = document.getElementById("logo");

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 600){
        $('#navigation').css('background', 'black');

        $('.nav-link').css('color', '#9ac8ed');

        for (var i = 0; i < nav_links.length; i++) {
            nav_links[i].addEventListener("mouseover", function(){
                this.style.color = "white";
            });
        }
        
        for (var i = 0; i < nav_links.length; i++) {
            nav_links[i].addEventListener("mouseout", function(){
                this.style.color = "#9ac8ed";
            });
        }
     
    } else{
        $('.navbar').css('background','transparent');

        for (var i = 0; i < nav_links.length - 1; i++) {
            nav_links[i].style.color = "white";
        }
        
        for (var i = 0; i < nav_links.length - 1; i++) {
            nav_links[i].addEventListener("mouseover", function(){
                this.style.color = "#9ac8ed";
            });
        }
        for (var i = 0; i < nav_links.length - 1; i++) {
            nav_links[i].addEventListener("mouseout", function(){
                this.style.color = "white";
            });
        }
    }
});

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = "#9ac8ed";  
}






