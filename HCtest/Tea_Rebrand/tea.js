

var h5 = document.getElementById("purchaseNow");
var ingred = document.getElementById("button");

h5.addEventListener("mouseover", function() {
	var spins = h5.getElementsByClassName("fa-spinner");
	for (var i = 0; i < spins.length; i++) {
		spins[i].className += " fa-spin";
	}
});

h5.addEventListener("mouseout", function() {

	var spins = h5.getElementsByClassName("fa-spinner");
	for (var i = 0; i < spins.length; i++) {
		spins[i].classList.remove("fa-spin");
	}
});

ingred.addEventListener("mouseover", function() {
	
	
})



