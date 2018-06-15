$(window).ready(function() { 
	$(".blobs").fadeOut(); 
	$(".preloader").delay(400).fadeOut("slow"); 
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

	$(".hero-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

});


$(function() {
	$(".toggle-menu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".nav").slideToggle();
		return false;
	});
});

$(function() {

	$(".team-carousel, .blog-list").slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1500,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
	    {
			breakpoint: 991,
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

});

slick_slider();
$(window).resize(slick_slider);

function slick_slider() {
    var wrapper = $(".works");
    if ($(".slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1500,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 99999,
			settings: "unslick"
		},
	    {
			breakpoint: 991,
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

$(document).ready(function(){
  $(".works__link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    closeOnBgClick: true,
    fixedContentPos: false,
    mainClass: "mfp-fade"
  });
});

$(function() {

	$(".testimonials-list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		fade: true,
		pauseOnHover: false,
		pauseOnFocus: false
	});

});

$(document).ready(function() {
  setTimeout(function() {
      var mainDivs = $(".blog-list__item"); //Получаем все элементы с классом column
      var maxHeight = 0;
      for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < $(mainDivs[i]).height()) { //Находим максимальную высоту
          maxHeight = $(mainDivs[i]).height(); 
        }
      }
      for (var i = 0; i < mainDivs.length; ++i) {
        $(mainDivs[i]).height(maxHeight); //Устанавливаем всем элементам максимальную высоту
      }
    }, 1000);
});

$(function() {

	$(".clients-list").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1500,
		responsive: [
		{
			breakpoint: 9999,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
				dots: false
	    	}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				dots: true
	    	}
		},
	    {
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
	    	}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
	    	}
		}
		]
	});

});

$(function(){
  $.scrollUp({
  	scrollText: '<i class="fas fa-arrow-up"></i>'
  });
});