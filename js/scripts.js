$(document).ready(function(){
	'use strict';

	$('.slider').slick({
		prevArrow: '<button class="slider__arrow slider__arrow--prev">',
		nextArrow: '<button class="slider__arrow slider__arrow--next">',
		dots : false,
		variableWidth: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	
});