$(function () {
  // header
  function header(){
	// PC버전
	  if (window.innerWidth >= 430) {
		  $("#header").mouseenter(function () {
			$(".nav-bg").stop(true, true).slideDown(200);
			$(".nav-list-depth2").stop(true, true).slideDown(200);
			$(".nav-list-depth1 > a").css("color", "#333333");
			$(".hd-wrap").css("border-bottom", "1px solid #c3c3c3");
		  });
		
		  $("#header").mouseleave(function () {
			$(".nav-bg").stop(true, true).slideUp(200);
			$(".nav-list-depth2").stop(true, true).slideUp(200);
			$(".nav-list-depth1 > a").css("color", "#ffffff");
			$(".hd-wrap").css("border-bottom", "none");
		  });
		
		  $(".nav-list-depth1 > a").mouseenter(function () {
			$(this).css("color", "#ef383b");
		  });
		  $(".nav-list-depth1 > a").mouseleave(function () {
			$(this).css("color", "#333333");
		  });
	  } 
	  else {
		// 모바일 버전
		$("#header").off("mouseenter mouseleave");
		$(".nav-list-depth1 > a").off("mouseenter mouseleave");
		$(".nav-list-depth1 > a").click(function(){
			$(this).closest(".nav-list-depth1").toggleClass("expanded");
			const $navDepth2 = $(this).next(".nav-list-depth2"); 
			if ($navDepth2.hasClass("expanded")){
				$navDepth2.removeClass("expanded");
			} else {
				$(".nav-list-depth2").removeClass("expanded");
				$navDepth2.addClass("expanded");
			}	
		})
		
  	}
}
  header();
  $(window).on("resize", function () {
    header();
  });


});

// aos
AOS.init({ duration: 1000, easing: "ease-in-out", dealy: 0 });
