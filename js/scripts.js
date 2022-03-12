$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
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
