$(function () {
	// tab
	$(".txt-box").on("click", function (event) {
		event.preventDefault();
		$(".tab").removeClass("active");
		$(this).parents(".tab").addClass("active");
	});


});

var swiper = new Swiper(".swiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: true,
	// },
	loop: true
});

// 동영상 재생 시 슬라이드 멈춤
var iframes = document.querySelectorAll('iframe');



