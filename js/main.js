

$(function () {

	$('.footer__bottom-link').on('click', function () {
		$('.footer__popup').toggleClass('active');
	})



	$('.footer__popup-cross').on('click', function () {
		$('.footer__popup').toggleClass('active');
	})


	$('.header__burger').on('click', function () {
		$('.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	})



	$('.slider__content').slick({
		dots: true,
		infinite: true,
		fade: true,
		arrows: false,
	});





});





