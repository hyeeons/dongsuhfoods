$(function () {
	// tab
	$(".txt-box").on("click", function (event) {
		event.preventDefault();
		$(".tab").removeClass("active");
		$(this).parents(".tab").addClass("active");
	});




});

// sec-05 TVCF 스와이퍼
var swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// 화면이 430px 이하일 때
		430: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
});







