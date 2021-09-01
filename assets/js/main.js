$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle__collapse");

  //   Click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //   Owl-Carousel for blog
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
  });
});
