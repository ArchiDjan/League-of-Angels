$(function() {
	var slides = document.getElementsByClassName('slider')[0].children;
	var count = 3;

	$('#arrowL').bind('click', function() {
		var reduction = count;
		return (function() {
			count = --reduction;
			alert(count);
		})();
	});

	$('#arrowR').bind('click', function() {
		var addition = count;
		return (function() {
			count = ++addition;
			alert(count);
		})();
	});	

	/*var moveRight = function Right() {
		var addition = count;
		return (function() {
			count = ++addition
			return count;
		})();
	};

	var moveLeft = function Left() {
		var reduction = count;
		return (function() {
			count = --reduction
			return count;
		})();
	};*/

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