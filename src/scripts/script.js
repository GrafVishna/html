$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .menu, .menu__links').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.card__ittems').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		speed: 1000,
		autoplay: true,
		autoplayspeed: 1500,
		touchThreshold: 10,
		waitForAnimate: false,
		responsive: [
			{
			  breakpoint: 1543,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1281,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 918,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 630,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	});
});

