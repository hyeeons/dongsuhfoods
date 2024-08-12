$(function () {
	// tab
	$(".txt-box").on("click", function (event) {
		event.preventDefault();
		$(".tab").removeClass("active");
		$(this).parents(".tab").addClass("active");
	});

	// footer
	$(".goto-site").click(function () {
		$(this).find(".goto-list").slideToggle();
		$(".goto-site").toggleClass("active");
	})


});

// sec-05 TVCF 스와이퍼
var swiper = new Swiper(".swiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,

});








