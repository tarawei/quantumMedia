jQuery(document).ready(function($) {
	$(".toggle").on("click", function(){
		$(".nav").toggleClass("close-nav");
	});
	$(".nav a").on("click", function(){
		$(".nav").addClass("close-nav");
		$.fn.pagepiling.moveTo($(this).data('index'));
	});

	$(".logo-box a").on("click", function(){
		$('.pages').slick('slickGoTo', $(this).data('index'));
	})

	$('#pagepiling').pagepiling({
		direction: 'horizontal'
	});

	$.fn.pagepiling.setAllowScrolling(false);
});