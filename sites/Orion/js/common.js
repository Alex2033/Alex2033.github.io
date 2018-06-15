$(window).ready(function() { 
	$(".preloader").fadeOut(); 
	$(".holder").delay(200).fadeOut("slow"); 
});

$(function() {
	$(".player").YTPlayer();
});

$(document).ready(function(){
	$(document).on('click', '.nav-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

$(function() {
	$(".toggle-menu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".nav").slideToggle();
		return false;
	});
});

$(".nav-list__btn").click(function() {
	$(".bg-popup").fadeIn(400);
	$(".popup").fadeIn(400);
});

$(".bg-popup, .popup-exit").click(function() {
	$(".bg-popup").fadeOut(400);
	$(".popup").fadeOut(400);
});

$(document).ready(function() {
	toplogo_pos = $('.header').offset().top; // определяем его первоначальное положение
	$(window).scroll(function(){

	   if ($(window).scrollTop() > toplogo_pos){ // Если страницу прокрутили дальше, чем находится наш блок
			$('.header').css({'background-color': 'rgba(0,0,0,0.6)', 'position': 'fixed'}); // То мы этот блок фиксируем и отображаем сверху.
	
	   }else{  // Если же позиция скрола меньше (выше), чем наш блок
			$('.header').css({'background-color': 'transparent', 'position': 'absolute'}); // то возвращаем все назад
	   }
	});
});

$(function() {
	$(".portfolio-list").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: false,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false
			}
		}
    ]
	})
});

slick_slider();
$(window).resize(slick_slider);

function slick_slider() {
    var wrapper = $(".team-list");
    if ($(".slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
		dots: true,
		speed: 500,
		infinite: false,
		responsive: [
		{
			breakpoint: 99999,
			settings: "unslick"
		},
	    {
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
	    	}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
	    	}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
	    	}
		}
		]
	});
};