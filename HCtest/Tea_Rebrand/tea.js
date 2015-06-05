

// var h5 = document.getElementById("purchaseNow");

// h5.addEventListener("mouseover", function() {
// 	var spins = h5.getElementsByClassName("fa-spinner");
// 	for (var i = 0; i < spins.length; i++) {
// 		spins[i].className += " fa-spin";
// 	}
// });

// h5.addEventListener("mouseout", function() {

// 	var spins = h5.getElementsByClassName("fa-spinner");
// 	for (var i = 0; i < spins.length; i++) {
// 		spins[i].classList.remove("fa-spin");
// 	}
// });


var spins = document.getElementsByClassName("fa-spinner");

	for (var i = 0; i < spins.length; i++) {
spins[1].addEventListener("mouseover", function() {
		spins[i].className += " fa-spin";
		console.log('hi');
	});
};

// h5.addEventListener("mouseout", function() {

// 	var spins = h5.getElementsByClassName("fa-spinner");
// 	for (var i = 0; i < spins.length; i++) {
// 		spins[i].classList.remove("fa-spin");
// 	}
// });




