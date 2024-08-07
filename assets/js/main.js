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
	autoplay: {
		delay: 5000,
		disableOnInteraction: true,
	},
	loop: true
});

