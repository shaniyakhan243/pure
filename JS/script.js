// script for carousel
$('.slick-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    arrows: true,
    swipe: true,
  //  infinite: true,
    swipeToSlide: true,
    //adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: "unslick"
        }

      ]
  });

