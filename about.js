var img = document.getElementsByTagName("img")[1];
var missionp = document.getElementsByTagName("p")[0];
var our_mission = document.querySelector(".jumbotron h2");
var hr = document.querySelector(".jumbotron hr");
var background = document.getElementsByClassName("background");

window.setTimeout(function() {
		img.style.opacity = "1";
		background[0].style.left = "0";
}, 200);

window.setTimeout(function() {
		missionp.style.opacity = "1";
		our_mission.style.opacity = "1";
		hr.style.opacity = "1";
		background[1].style.left = "0";
}, 400);

window.setTimeout(function() {
		background[2].style.left = "0";
}, 600);