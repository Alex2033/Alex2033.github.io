$(window).ready(function() { 
	$("#outer-barG").fadeOut(); 
	$(".preloader-wrap").delay(200).fadeOut("slow"); 
});
 
$(document).ready(function() {
	$(".advantages__wrapper").waypoint(function() {
		$('.advantages__amount').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});	
	}, { offset: '100%'});

	$(".about-item__icon").waypoint(function() {
		$(".about-item__icon").addClass("animated zoomIn");
	}, { offset: '100%'});

	$(".title-line, .hero-btns").waypoint(function() {
		$(".title-line, .hero-btns").addClass("animated fadeInUp");
	}, { offset: '100%'});

	$(".services__item_left").waypoint(function() {
		$(".services__item_left").addClass("animated bounceInLeft");
	}, { offset: '100%'});

	$(".services__item_right").waypoint(function() {
		$(".services__item_right").addClass("animated bounceInRight");
	}, { offset: '100%'});

	$(".appointment-form").waypoint(function() {
		$(".appointment-form").addClass("animated fadeIn");
	}, { offset: '100%'});

	$(".barber__img").waypoint(function() {
		$(".barber__img").addClass("animated fadeIn");
	}, { offset: '100%'});

	$(".testits__slide").waypoint(function() {
		$(".fa-star, .testis__text, .user__photo, .user__name").addClass("animated fadeIn");
	}, { offset: '100%'});

	$(".gallery__item").waypoint(function() {
		$(".gallery__item").addClass("animated flipInX");
	}, { offset: '100%'});

	$(".pricing-item").waypoint(function() {
		$(".pricing-item_man, .pricing-item_woman").addClass("animated flipInY");
	}, { offset: '100%'});
});

$(document).ready(function() {
	toplogo_pos = $('.navigation').offset().top; // определяем его первоначальное положение
	$(window).scroll(function(){

	   if ($(window).scrollTop() > toplogo_pos){ // Если страницу прокрутили дальше, чем находится наш блок
			$('.navigation').css({'position': 'fixed', 'background-color': 'rgba(0,0,0, 0.85)'}); // То мы этот блок фиксируем и отображаем сверху.
	
	   }else{  // Если же позиция скрола меньше (выше), чем наш блок
			$('.navigation').css({'position': 'absolute', 'background-color': 'rgba(0,0,0, 0.25)'}); // то возвращаем все назад
	   }
	});
});

$(document).ready(function(){
	$(document).on('click', '.nav-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
})

$(function() {

	$('.hero-slider, .testis').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});


$(function() {
	$(".toggle-menu").click(function() {
		$(".nav-list").slideToggle();
	});
});

$(function() {
	$("#date").datepicker();
});

$(function(){
  $.scrollUp({
  	scrollText: ''
  });
});