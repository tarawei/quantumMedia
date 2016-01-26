jQuery(document).ready(function($) {

	$(".toggle").on("click", function(){
		$(".nav").toggleClass("close-nav");
	});
	$(".nav a").on("click", function(){
		$(".nav").addClass("close-nav");
	});
  $(window).on("resize", function(){
    $(".pages-block").css("width", ($(window).width()*5)+"px");
    rePostion();
  });

  $(window).trigger("resize");

  $(window).on("hashchange", function(e){
    rePostion();
  });

  $(window).trigger("hashchange");

  function rePostion(){
    var hash = location.hash.replace("#", ".");
    hash = (hash === ""?".kv":hash);
    $(".pages-block").css("left", -($(".page").index($(hash)) * $(window).width())+'px');
  }
});