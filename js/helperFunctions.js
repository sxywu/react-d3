//Check if it's Safari
var is_safari = false;
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	is_safari = true;
}

var isMobile = window.matchMedia("only screen and (max-width: 1050px)").matches;

//Function to only run once after the last transition ends
function endall(transition, callback) { 
	var n = 0; 
	transition 
		.each(function() { ++n; }) 
		.each("end", function() { if (!--n) callback.apply(this, arguments); }); 
}//endall

//Normal random
//http://jsfiddle.net/guffa/tvt5k/
function rnd2() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}

//Round number to 2 behind the decimal
function round2(num) {
	return (Math.round((num + 0.00001) * 100)/100);
}//round2

function getRandomNumber(start, end) {
    return ((Math.random() * (end-start)) + start);
}	

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}//isInArray

//Turn degrees into radians
function toRadians (angle) { 
	return angle * (Math.PI / 180); 
}//toRadians

//Replaces spaces, - and & for use in classes
function removeSpace(str) {
	str = str.replace(/\s+/g, '-');
	str = str.replace(/&/g, '');
	str = str.replace(/\./g,'').toLowerCase();
	return str;
}//removeSpace

/*Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text*/
function wrap(text, width) {
  text.each(function() {
	var text = d3.select(this),
		words = text.text().split(/\s+/).reverse(),
		word,
		line = [],
		lineNumber = 0,
		lineHeight = 1.4, // ems
		y = parseFloat(text.attr("y")),
		x = parseFloat(text.attr("x")),
		dy = parseFloat(text.attr("dy")),
		tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

	while (word = words.pop()) {
	  line.push(word);
	  tspan.text(line.join(" "));
	  if (tspan.node().getComputedTextLength() > width) {
		line.pop();
		tspan.text(line.join(" "));
		line = [word];
		tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
	  }
	}
  });
}//wrap


//https://books.google.nl/books?id=kc4iT8lfEQYC&pg=PA467&lpg=PA467&dq=ease+in+html5+canvas&source=bl&ots=x290WCqkpM&sig=K9O3ovZ3CsdTyCx5zWvyNv1UcKc&hl=nl&sa=X&ved=0ahUKEwjA1vejuunNAhWDWRoKHe1QCsIQ6AEIajAJ#v=onepage&q=ease%20in%20html5%20canvas&f=false
function easeInOut( iteration, power ) {
	var p = power || 3;
	//returned: 0 - 1
	//return iteration - Math.sin( iteration * 2 * Math.PI ) / (2 * Math.PI);
	return Math.pow(iteration, p) / ( Math.pow(iteration, p) + Math.pow(1 - iteration, p) ); 
}//easeInOut

//https://gist.github.com/gre/1650294
function easeIn( iteration, power ) {
	var p = power || 2;
	//returned: 0 - 1
	return Math.pow(iteration, p);
}//easeIn

function easeOut( iteration, power ) {
	var p = power || 6;
	//returned: 0 - 1
	return 1 - Math.pow(1 - iteration, p);
}//easeOut

