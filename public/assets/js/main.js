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
    /*-------------------------------------------
    js change website font
    --------------------------------------------- */
    var size = 1, sizes = ["small", "normal", "big"];
    $(function() {
      $('.js-font').on('click', function() {
        size++;
        if (size >= sizes.length) size = 0; 
        var sizeClass = sizes[size];
        console.log(size)         
        $('body')
              .attr('class', 'font-poppins bg-body-bg')
              .addClass(sizeClass);
      document.cookie = sizeClass;
      var x = document.cookie;
      console.log(x)
      });
    });
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);

      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
      console.log(c);
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
      function checkCookie() {
        var sizech=getCookie(sizeClass);
        if (sizech != "") {
          alert("class addded " + sizech);
        $('body')
            .attr('class', 'font-poppins bg-body-bg')
            .addClass(sizech);
        } else {
          sizech = prompt("error");
          }
      }

  });

})(jQuery);