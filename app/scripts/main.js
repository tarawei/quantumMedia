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
    $(".page-block").removeClass("height1");
    var hash = location.hash.replace("#", ".");
    hash = (hash === ""?".kv":hash);
    $(".pages-block").css("left", -($(".page").index($(hash)) * $(window).width())+'px');
    setTimeout(function(){
      $(".page:not(" + hash + ")").parent().addClass("height1");
    }, 600);
  }
  function OpenLink(link) {     
  parent.$.colorbox({ href: link, iframe: true, width: "50%", height: "50%" });
  }
});