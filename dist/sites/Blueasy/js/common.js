$(document).ready(function() {
	$(".sandwich").click(function() {
		$(this).toggleClass("sandwich-active");
		$(".navigation").slideToggle();
		return false;
	});	
});

$(document).mouseup(function (e) {
    var container = $(".navigation");
    var container2 = $(".sandwich");
    if (container.has(e.target).length === 0 && container2.has(e.target).length === 0){
        container.hide();
        $(".sandwich").removeClass("sandwich-active");
    }
});


$(function() {
	$(".portfolio-item").not(":first").hide();
	$(".tabs-wrapper .tab").click(function() {
		$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".portfolio-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});

$(document).ready(function(){
	$(document).on('click', '.navigation-list__link, .footer-list__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(function(){
  $.scrollUp({
  	scrollText: '<i class="fas fa-arrow-up"></i>'
  });
});