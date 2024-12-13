
jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
 
    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
    });
    // Run on page load
    $(document).ready(function () {
      checkScroll();
    });

    // Run on scroll
    $(window).on("scroll", function () {
      checkScroll();
    });
   
    $('.testimonial-slider').slick({
      slidesToShow:3,
      slidesToScroll: 1,
      arrows: true,
      dots:true,
      autoplay: true,
      infinite: true,
      prevArrow: $('.nav-btn'),
      nextArrow: $('.nav-btn'),
      responsive: [
         
        {
          breakpoint:991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 557,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      
      });

      // 
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})
