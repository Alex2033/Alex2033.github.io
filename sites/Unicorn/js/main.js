$(document).ready(function(){
  $(document).on('click', '.main-nav__item', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });
});

$(document).ready(function(){
  if ($(window).width() <= 768) {
    $(".toggle-menu").click(function() {
      $(".sandwich").toggleClass("active");
    });

    $(".main-nav").click(function() {
      $(".main-nav").fadeOut(600);
      $(".sandwich").toggleClass("active");
    }).append("<span>");

    $(".toggle-menu").click(function() {
      if ($(".main-nav").is(":visible")) {
        $(".main-nav").fadeOut(600);
      } else {
        $(".main-nav:hidden").fadeIn(600);
      }
    });
  } 
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	margin: 30,
  	dots: false,
  	nav: true,
  	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  	responsive: {
  		992: {
  			items:3
  		},
  		768: {
  			items:2
  		},
  		0: {
  			items:1
  		}
  	}
  });
});

$(document).ready(function(){
  $(".portfolio__img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    closeOnBgClick: true,
    fixedContentPos: false,
    mainClass: "mfp-fade",
    callbacks: {
      open: function() {
        jQuery('body').addClass('noscroll');
        },
        close: function() {
        jQuery('body').removeClass('noscroll');
        }
      }
  });
});

$(document).ready(function(){
  $(".client-carousel").owlCarousel({
    margin: 60,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      992: {
        items: 6
      },
      500: {
        items: 3
      },
      321: {
        items: 2
      },
      320: {
        items: 1
      }
    }
  });
});

$(window).ready(function() { 
  $(".loader-inner").fadeOut(); 
  $(".loader").delay(400).fadeOut("slow"); 
});

$(function() {
 $(".portfolio__tab-item").not(":first").hide();
  $(".portfolio__tabs-wrapper .portfolio__tab").click(function() {
    $(".portfolio__tabs-wrapper .portfolio__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".portfolio__tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active"); 
});

$(document).ready(function(){
  $(".portfolio__carousel").owlCarousel({
    margin: 0,
    dots: true,
    nav: false,
    autoWidth: true,
    responsive: {
      480: {
        items: 3
      },
      0: {
        items: 1,
        autoWidth: false
      }
    }
  });
});

$(document).ready(function(){
  $(".blog-carousel").owlCarousel({
    dots: false,
    nav: true,
    margin: 80,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      992: {
        items:3
      },
      570: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  });
});


$(document).ready(function() {
  $(".header-button .button").click(function() {
    $(".popup-window").css({"top": $(window).scrollTop() + 20}).addClass("active");
    $(".bg-popup").fadeIn();

    $(".bg-popup").click(function() {
      $(".popup-window").removeClass("active");
      $(".bg-popup").fadeOut();
    });
  });

  $(window).scroll(function() {
    $(".popup-window").css({"top": $(window).scrollTop() + 20})
  }).scroll();
});