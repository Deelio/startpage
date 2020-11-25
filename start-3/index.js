var left, center, right;
var ll, lc, lr;

function init() {
	left = document.getElementById("l");
	center = document.getElementById("c");
	right = document.getElementById("r");

	ll = document.getElementById("ll");
	lc = document.getElementById("lc");
	lr = document.getElementById("lr");
}

function ret() {
	left.style.width = "33.33333%";
	center.style.width = "33.33333%";
	right.style.width = "33.33333%";
	ll.style.display = "none";
	lc.style.display = "none";
	lr.style.display = "none";
}

function enL() {
	left.style.width = "68%";
	center.style.width = "16%";
	right.style.width = "16%";

	ll.style.display = "grid";
}
function enC() {
	left.style.width = "16%";
	center.style.width = "68%";
	right.style.width = "16%";

	lc.style.display = "grid";
}
function enR() {
	left.style.width = "16%";
	center.style.width = "16%";
	right.style.width = "68%";

	lr.style.display = "grid";

}