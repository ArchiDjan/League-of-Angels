$(function() {
	var initialPos, currentWidth,																																	// позиция и ширина слайда
	slides 												= document.getElementsByClassName('slider')[0].children,				// количество слайдов
  numSlides 										= slides.length - 1,																						 
	timeDelay 										= 100,		                                                      // длительность смены слайда
	btnChars 											= document.getElementsByClassName('toggleChar')[0].children,    // коллекция кнопок персонажей
	numIcon 											= 0,                                                            // порядковый номер кнопки персонажа из коллекции
	maxNumIcon 										= btnChars.length - 1;



	$('.toggleChar li:first').addClass('active');

	// обработчик при нажатии на иконку персонажа
	for (var i = 0; i < btnChars.length; i++) {
		btnChars[i].addEventListener('click', function() {
			$('.toggleChar li').removeClass('active');
			$(this).addClass("active");
			toggleSlide();
		});
	}

/*	function toggleSlide(event) {
		var currentPos = event.currentTarget;
		alert(currentPos);
	}*/

	// обработчик при нажатии на стрелку влево
	$('#arrowL').bind({'click': moveLeft, 'mousedown': switchIconL});																			

	// сдвигает контейнер со слайдами на одну позицию влево
	function moveLeft() {	
		initialPos = $('.slider').css('left').replace('px', '')*1;
		currentWidth = $('.slider').css('width').replace('px', '')*1;
		var newPos = (initialPos == 0) ? 0 : initialPos + currentWidth;
		$('.slider').animate({left: newPos}, timeDelay);
	}

	// меняет иконки персонажей при листании слайдов
	function switchIconL() {
		numIcon = (numIcon == 0) ? 0 : --numIcon;
		$('.toggleChar li').removeClass('active');
		btnChars[numIcon].className = btnChars[numIcon].className + " " + "active";
	}

	// обработчик при нажатии на стрелку вправо
	$('#arrowR').bind({'click': moveRight, 'mousedown': switchIconR});	

	// сдвигает контейнер со слайдами на одну позицию вправо
	function moveRight() {
		initialPos = $('.slider').css('left').replace('px', '')*1;
		currentWidth = $('.slider').css('width').replace('px', '')*1;
		var newPos = (initialPos <= -currentWidth*numSlides) ? initialPos : initialPos - currentWidth;
		$('.slider').animate({left: newPos}, timeDelay);
	}

	// меняет иконки персонажей при листании слайдов
	function switchIconR() {
		numIcon = (numIcon < maxNumIcon) ? ++numIcon : maxNumIcon;
		$('.toggleChar li').removeClass('active');
		btnChars[numIcon].className = btnChars[numIcon].className + " " + "active";
	}

});