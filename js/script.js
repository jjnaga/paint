$(document).ready(function() {
	var i = 0;
	var totalBoxes = 64;

	while (i < totalBoxes- 1) {
		var original = document.getElementById("tile" + i);
		var clone = original.cloneNode(true);
		clone.id = "tile" + ++i;
		original.parentNode.appendChild(clone);
	}

	$(".tile").mouseover(function() {
		var randomColor = ["red", "blue", "green", "orange", "pink"];
		$(this).css("background-color", randomColor[Math.floor(Math.random()*6)]);
	});

	$("#reset").click(function() {
		totalBoxes = prompt("How much boxes you wnat?");	
		i = 0;
		while (i < totalBoxes - 1) {
		var original = document.getElementById("tile" + i);
		var clone = original.cloneNode(true);
		clone.id = "tile" + ++i;
		original.parentNode.appendChild(clone);
g	}

	})
});

