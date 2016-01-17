jQuery(document).ready(function($) {
	$(".toggle").on("click", function(){
		$(".nav").toggleClass("close-nav");
	});
	$(".nav a").on("click", function(){
		$(".nav").addClass("close-nav");
		$('.pages').slick('slickGoTo', $(this).data('index'));
	});

	$('.pages').slick({
		arrows: false,
	});
});