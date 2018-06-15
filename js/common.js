$(document).ready(function() {
    $("body, .sidebar").niceScroll({
    	horizrailenabled: false
    });
});

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".mnu-btn").click(function() {

	$(".sandwich").toggleClass("active");
	$(".sidebar").toggleClass("active");

});

$(document).ready(function() {
	$(".gallery__content").not(":first").hide();
	$(".filter-label").click(function() {
		$(".filter-label").removeClass("active").eq($(this).index()).addClass("active");
		$(".gallery__content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});

$(document).ready(function() {

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


});