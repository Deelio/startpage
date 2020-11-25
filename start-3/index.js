var left, center, right;

function init() {
	left = document.getElementById("l");
	center = document.getElementById("c");
	right = document.getElementById("r");
}

function ret() {
	left.style.width = "33.33333%";
	center.style.width = "33.33333%";
	right.style.width = "33.33333%";
}

function enL() {
	left.style.width = "68%";
	center.style.width = "16%";
	right.style.width = "16%";
}
function enC() {
	left.style.width = "16%";
	center.style.width = "68%";
	right.style.width = "16%";
}
function enR() {
	left.style.width = "16%";
	center.style.width = "16%";
	right.style.width = "68%";
}