$(document).ready(function() {
    $(".navigation").niceScroll({
		horizrailenabled: false,
    });
});

$(window).ready(function() {
	$(".loader").fadeOut(); 
	$(".preloader").delay(400).fadeOut("slow"); 
});

$(function() {
	$('.down-anchor').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $(window).height()}, 500, 'linear');
	});
});

$(document).ready(function(){
	$(document).on('click', '.navigation-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

$('.toggle-btn').click(function() {
	$('.navigation').slideToggle(400);
	$('.toggle-btn').toggleClass('active');
});

$(document).ready(function () {
    updateContainer();
});

$(window).resize(function() {
	updateContainer();
});

function updateContainer() {
    var $containerWidth = $(window).width();
    if ($containerWidth <= 992) {
        $('.navigation').click(function() {
			$('.navigation').fadeOut(400);
			$('.toggle-btn').removeClass('active');
		});
	}
	else {
		$('.navigation').unbind('click');
	}
}

$('.play-button').click(function() {
	$('.video-window').fadeIn(400);
});

$('.video-overlay').click(function() {
	$('.video-window').fadeOut(200);
	$('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

$(function() {
	$(".tab-content__item").not(":first").hide();
	$(".tabs__item").click(function() {
		$(".tabs__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});

$(function() {
	$('.clients-list').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});
});

$(function() {
	$('.testis').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1200,
		fade: true
	});
});

$(document).ready(function() {
	toplogo_pos = $('.header__top').offset().top; // определяем его первоначальное положение
	$(window).scroll(function(){

	   if ($(window).scrollTop() > toplogo_pos){ // Если страницу прокрутили дальше, чем находится наш блок
			$('.header__top').css({'background-color': 'rgba(0,0,0,0.75'}); // То мы этот блок фиксируем и отображаем сверху.
	
	   }else{  // Если же позиция скрола меньше (выше), чем наш блок
			$('.header__top').css({'background-color': 'transparent'}); // то возвращаем все назад
	   }
	});
});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".header-composition").offset().top) {
			$("#scrollUp").fadeIn();
		}
		else {
			$("#scrollUp").fadeOut();
		}
	});
	$("#scrollUp").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});


// Animations

$(document).ready(function() {
	$('.title').addClass('animation');
});

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	// Info-section
	if (wScroll > $('.info').offset().top - ($(window).height() / 3)) {
		$('.info__btn').addClass('animation');
	}
	
	if (wScroll > $('.info').offset().top - ($(window).height() / 2)) {
		$('.info__img .triangle').addClass('border-animation');
	}
	// End Info

	// Services-section
	if (wScroll > $('.services').offset().top - ($(window).height() / 2)) {
		$('.services .h2').addClass('animation');
	}

	if (wScroll > $('.services-wrap').offset().top - ($(window).height() / 1.2)) {

		$('.service-item .triangle').each(function(i) {

			setTimeout(function() {
				$('.service-item .triangle').eq(i).addClass('border-animation');
			}, 130 * (i + 1));

		});
	}
	//End Services

	// About-section
	if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
		$('.about__video .triangle').addClass('border-animation');
	}

	if (wScroll > $('.awards').offset().top - ($(window).height() / 1.2)) {

		$('.award .triangle').each(function(i) {

			setTimeout(function() {
				$('.award .triangle').eq(i).addClass('border-animation');
			}, 130 * (i + 1));

		});
	}
	// End About

	// Portfolio-section
	if (wScroll > $('.portfolio').offset().top - ($(window).height() / 2)) {
		$('.portfolio .h2').addClass('animation');
	}

	if (wScroll > $('.tab-content').offset().top - ($(window).height() / 1.2)) {

		$('.tab-content__img').each(function(i) {
			setTimeout(function() {
				$('.tab-content__img .triangle').eq(i).addClass('border-animation');
			}, 200 * (i + 1));
		});
	}
	// End Portfolio

	// Working-idea-section
	if (wScroll > $('.working-idea').offset().top - ($(window).height() / 2)) {
		$('.working-idea__subtitle').addClass('animation');
	}
	// End Working-idea-section

	// Team-section
	if (wScroll > $('.team').offset().top - ($(window).height() / 2)) {
		$('.team .h2').addClass('animation');
	}

	if (wScroll > $('.teammates').offset().top - ($(window).height() / 1.2)) {

		$('.teammate .triangle').each(function(i) {
			setTimeout(function() {
				$('.teammate .triangle').eq(i).addClass('border-animation');
			}, 200 * (i + 1));
		});
	}
	// End Team-section

	// Clients-section
	if (wScroll > $('.clients').offset().top - ($(window).height() / 2)) {
		$('.clients .h2').addClass('animation');
	}

	if (wScroll > $('.clients-list').offset().top - ($(window).height() / 1.2)) {

		$('.clients-list__item .triangle').each(function(i) {
			setTimeout(function() {
				$('.clients-list__item .triangle').eq(i).addClass('border-animation');
			}, 200 * (i + 1));
		});
	}
	// End Clients-section

	// Blog-section
	if (wScroll > $('.blog').offset().top - ($(window).height() / 2)) {
		$('.blog .h2').addClass('animation');
	}

	if (wScroll > $('.blog').offset().top - ($(window).height() / 1.2)) {

		$('.blog-item .triangle').each(function(i) {
			setTimeout(function() {
				$('.blog-item .triangle').eq(i).addClass('border-animation');
			}, 200 * (i + 1));
		});
	}
	// End Blog-section

	// Subscribe-section
	if (wScroll > $('.subscribe').offset().top - ($(window).height() / 2)) {
		$('.subscribe__subtitle').addClass('animation');
	}
	// End Subscribe-section

	// Testimonials-section
	if (wScroll > $('.testimonials').offset().top - ($(window).height() / 2)) {
		$('.testi__img .triangle').addClass('border-animation');
	}
	// End Testimonials-section

	// Pricing-section
	if (wScroll > $('.pricing').offset().top - ($(window).height() / 2)) {
		$('.pricing .h2').addClass('animation');
	}

	if (wScroll > $('.pricing-item').offset().top - ($(window).height() / 1.2)) {

		$('.pricing-item .triangle').each(function(i) {
			setTimeout(function() {
				$('.pricing-item .triangle').eq(i).addClass('border-animation');
			}, 200 * (i + 1));
		});
	}
	// End Pricing-section

	// Contact-section
	if (wScroll > $('.contact').offset().top - ($(window).height() / 2)) {
		$('.contact .h2').addClass('animation');
	}

	if (wScroll > $('.contact-us').offset().top - ($(window).height() / 2)) {
		$('.contact-us .triangle').addClass('border-animation');
	}

	if (wScroll > $('.contact-us').offset().top - ($(window).height() / 1.2)) {

		$('.contact-info__item').each(function(i) {
			setTimeout(function() {
				$('.contact-info__item').eq(i).addClass('animation');
			}, 100 * (i + 1));
		});
	}

	if (wScroll > $('.contact-form').offset().top - ($(window).height() / 1.1)) {
		$('.contact-form__title strong').addClass('animation');
	}
	// End Contact-section
	
});