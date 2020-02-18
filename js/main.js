$(document).ready(function(){
	$('.slider1').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		arrows: false,
		dotsClass: "black_dots",
		responsive: [{
			breakpoint: 576,
			settings: {
				arrows: false
			}
		}]
	  });
	  $('.slider2').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		dotsClass: "dots",
		prevArrow: '<button type=\'button\' class=\'ar-prev\'>Previous</button>',
		nextArrow: '<button type=\'button\' class=\'ar-next\'>Previous</button>',
		responsive: [{
			breakpoint: 576,
			settings: {
				arrows: false
			}
		}]
	  });
	});