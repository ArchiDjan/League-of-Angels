$(function() {
	var slides = document.getElementsByClassName('slider')[0].children;
	var numSlides = slides.length;
	var count = 0;

	$('#arrowL').bind('click', moveLeft);
	var initialPos;

	function moveLeft() {
		initialPos = $('.slider').css('right').replace('px', '')*1;
		var newPos = (initialPos == 0) ? 0 : initialPos - 1920;
		alert(newPos);
		$('.slider').animate({left: newPos}, 500);
	}

	$('#arrowR').bind('click', moveRight);	

	function moveRight() {
		initialPos = $('.slider').css('right').replace('px', '')*1;
		var newPos = (initialPos >= 1920*2) ? initialPos : initialPos + 1920;
		alert(newPos);
		$('.slider').animate({right: newPos}, 500);
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