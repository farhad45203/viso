jQuery(document).ready(function ($) {
  $(".slider").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  $(".testimonial-info").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  $(".agent-slider").owlCarousel({
    items: 3,
    slideMove: 1,
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".navBar").click(function () {
    $(".mobileNav").addClass("show");
    $(".navClose").addClass("show");
    $(".navBar").addClass("hide");
  });

  $(".navClose, .bannerArea").click(function () {
    $(".mobileNav").removeClass("show");
    $(".navClose").removeClass("show");
    $(".navBar").removeClass("hide");
  });
});
