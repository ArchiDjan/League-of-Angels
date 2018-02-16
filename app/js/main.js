$(function() {
	var slides = document.getElementsByClassName('slider')[0];
	var count = 0;

	$('.b_right').click(alert(moveRight()));
	$('.b_left').click(alert(moveLeft()));

	var moveRight = function() {
		var addition = 0;
		return function() {
			return ++addition;
		}
	};

	var moveLeft = function() {
		var reduction = 0;
		return function() {
			return --reduction;
		}
	};

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