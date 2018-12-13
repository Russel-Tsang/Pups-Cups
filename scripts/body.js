var paw = document.getElementsByTagName("img")[1];
var missionp = document.getElementsByTagName("p")[0];
var our_mission = document.querySelector(".jumbotron h2");
var hr = document.querySelector(".jumbotron hr");
var background = document.getElementsByClassName("background");

window.setTimeout(function() {
		paw.style.opacity = "1";
		if (background[0]) {  //if background[0] exists (false for photos page)
			background[0].style.left = "0";  //situates background div behind header 
		}
}, 200);

window.setTimeout(function() {
		missionp.style.opacity = "1";  //removes transparency for animation effect
		our_mission.style.opacity = "1"; 
		hr.style.opacity = "1"; 
		if (background[1]) {  //if background[1] exists (false for photos page)
			background[1].style.left = "0";  //situates background div behind header
		}
}, 400);

window.setTimeout(function() {
		if (background[2]) {  //if background[2] exists (false for photos page)
			background[2].style.left = "0";  //situates background div behind header
		}
}, 600);