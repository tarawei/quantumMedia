jQuery(document).ready(function($) {
	$(".toggle").on("click", function(){
		$(".nav").toggleClass("close-nav");
	});
	$(".nav a").on("click", function(){
		$(".nav").addClass("close-nav");
	});

  $('#pagepiling').pagepiling({
    direction: 'horizontal'
  });

});