var get_started = document.getElementsByClassName("get_started")[0];
var nav_links = document.querySelectorAll(".nav-link");
var logo = document.getElementById("logo");

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = "#7db8e8";    //sets color of navbar links on page load 
}

navColorChange();  // change nav link colors when on mouse-hover

function navColorChange() {  // change nav link colors when on mouse-hover
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].addEventListener("mouseover", function(){
            this.style.color = "#52a0e0";
        });
    }

    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].addEventListener("mouseout", function(){
            this.style.color = "#7db8e8";
        });
    }
}

