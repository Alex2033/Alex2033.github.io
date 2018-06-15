$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(function() {

	$(".hero-carousel").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				dots: false
			}
		}
		]
	})
	
});

$(function() {

	$("#my-menu").mmenu({
		extensions: [ 'effect-menu-slide', 'pagedim-black', 'position-right' ],
		navbar: {
			title: 'Skylith'
		},
		onClick: {
			close: true
		}
	});
	
});

$(function() {

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function () {
		$('.sandwich').addClass('active');
	});
	api.bind('close:before', function () {
		$('.sandwich').removeClass('active');
	});

});

$(function() {

	$(".team-carousel").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	});
	
});

slick_slider();
$(window).resize(slick_slider);

function slick_slider() {
    var wrapper = $(".clients-list");
    if ($(".slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
		dots: true,
		speed: 500,
		infinite: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 99999,
			settings: "unslick"
		},
	    {
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
	    	}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
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
};

$(function() {

	$(".testimonials-list").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});
	
});

$(function() {

	$(".blog-list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
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


$(document).ready(function(){
  $(".photos-item").magnificPopup({
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
	$("main .slick-dots").addClass("slick-dots__custom");
});


function initMap() {
	var uluru = {lat: 45.6205909, lng: -73.736312};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: uluru
	});
	
	addMarker({
		coordinates: {lat: 45.6205909, lng: -73.736312},
		image: "img/map/ellipse.png",
		info: "<div class='map-window'>Hey there!</div>"
	});


	function addMarker(properties) {
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
			icon: properties.image 
		});

		if(properties.info)
		{
			var infoWindow = new google.maps.InfoWindow({
				content: properties.info
			});

			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});
		}
	};
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $(".title").addClass("moveInLeft");
    }
});

$(function(){
  $.scrollUp({
  	scrollText: '<i class="fas fa-angle-up"></i>'
  });
});