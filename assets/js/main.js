$(function () {
  // tab
  $(".txt-box").on("click", function (event) {
    event.preventDefault();
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  //   sec-05 TVCF
  $(".cf-img-box").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
