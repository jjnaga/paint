var tilesCurrently = 0;
var maxTiles = 16;

$(document).ready(function() {
	setGrid();
	
});


setGrid() {
	var toAdd = $(".tile").clone();
	$(".paintbox").append($("toAdd"));
	$(".paintbox").append("<p>Test</p>");
	console.log();
}




