$(function() {
	var slides = document.getElementsByClassName('slider')[0].children;
	var numSlides = slides.length;
	var count = 0;

	$('#arrowL').bind('click', moveLeft);

	function moveLeft() {
		var reduction = count;
		return (function() {
			count = (reduction <= 0) ? numSlides - moveRight() : --reduction;
			/*$(slides[0]).hide();*/
			/*alert(count);*/
			return count;
		})();
	}

	$('#arrowR').bind('click', moveRight);	

	function moveRight() {
		var addition = count;
		return (function() {
			count = (addition >= numSlides - 1) ? 1 - moveLeft() : ++addition;
			alert(count);
			return count;
		})();
	}

});





/*var nodes = document.getElementsByClassName('grid')[0].children;

for (var i = 0; i < nodes.length; i++) {
	var item = nodes[i];
	 
	var handl = function() {
		var a = ++i;
		return function() {
			alert(a);
		}
	}
	item.onclick = handl();
}*/