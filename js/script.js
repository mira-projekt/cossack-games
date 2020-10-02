$(function () {

  $('.home-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'home-dots',
    autoplay: 2000
  });


  $('.video-news__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1190,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, ]
  });

  // mail-btn

  $(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this;
    setTimeout(function () {
      $(that).removeClass("fly");
    }, 5400);
  });

 
});