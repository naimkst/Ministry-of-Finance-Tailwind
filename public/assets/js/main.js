(function($) {
  "use strict";

  
  jQuery(document).ready(function(){
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 300,
      animation: 'fade'
    }); 
    /*-------------------------------------------
    mobile header 
    --------------------------------------------- */
    $('button.mobile-menu-button').on('click', function() {
      $('.mobile-menu').toggleClass('hidden');
    });
    /*-------------------------------------------
    hero-slider active
    --------------------------------------------- */
    
    (function () {
      if( $( "html" ).attr("dir") == "rtl" ) {   
        $('.hero-slider').slick({
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          dots: false,
          arrows: true,
          rtl: true,
          prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
          nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
        });   
      }else {
        $('.hero-slider').slick({
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          dots: false,
          arrows: true,
          prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
          nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
        });
      }
    })();
    /*-------------------------------------------
    service-slide active
    --------------------------------------------- */
    (function () {
      if( $( "html" ).attr("dir") == "rtl" ) {   
        $('.service-slide').slick({
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          dots: true,
          arrows: false,
          rtl: true,
          prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
          nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });  
      }else {
        $('.service-slide').slick({
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          dots: true,
          arrows: false,
          prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
          nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    })();
    
    /*-------------------------------------------
    js counterUp
    --------------------------------------------- */
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });

})(jQuery);