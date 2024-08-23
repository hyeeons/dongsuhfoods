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

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0 : {
			slidesPerView: 1,
			spaceBetween: 30,
			
		},
		576 : {
			slidesPerView: 3,
			spaceBetween: 10,
		
		}
	}
});







