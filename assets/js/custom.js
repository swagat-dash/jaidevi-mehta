(function($) {
  'use strict';  
    /*------------------
        Preloader JS
    --------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.spinner');
        var preloaderArea = jQuery('.preloader_area');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*--------------------
        mobile_menu JS
    ----------------------*/
    $(".menu_icon,.close_icon,.sidebar-menu li a").on('click', function (e) {
        $(".menu_icon").toggleClass("open");
    });
    $(".menu_icon,.close_icon,.sidebar-menu li a").on('click', function (e) {
        $(".sidenav_menu").toggleClass("open");
    });
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 121) {
          $(".header_area").removeClass("sticky");
         }else{
          $(".header_area").addClass("sticky");
         }
    });
    /*---------------------------------
        page_scroll top JS
    --------------------------------*/
    $("a.page_scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function(){});
        }
    });
    /*---------------------------------
        scrollspy JS
    --------------------------------*/
    $(window).on('scroll', function() {
        var currentTop = $(window).scrollTop();
        var elems = $('.scrollspy');
        elems.each(function(index){
          var elemTop   = $(this).offset().top;
          var elemBottom    = elemTop + $(this).height();
          if(currentTop >= elemTop && currentTop <= elemBottom){
            var id      = $(this).attr('id');
            var navElem = $('a[href="#' + id+ '"]');
        navElem.parent().addClass('active').siblings().removeClass( 'active' );
          }
        })
    });
    /*---------------------- 
        Scroll to top js
    ------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll_top').fadeIn();
        }
        else {
          $('#scroll_top').fadeOut();
        }
    });
    $('#scroll_top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------- 
        Slick slider js
    ------------------------*/
    $('.portfolio_slider_1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 400,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $('.testimonial_author_slide').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.testimonial_review_slide'
    });
    $('.testimonial_review_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.testimonial_author_slide',
      dots: false,
      autoplay: true,
      arrows: true,
      focusOnSelect: true
    });
    $('.blog_slider_1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $('.project_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        dots: true,
        arrows: false,
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.zoom_img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
      delay: 60,
      time: 2000
    });
    /*---------------------- 
        easypiechart js
    ------------------------*/
    $('.chart_1').easyPieChart({
        size: 140,
        easing: 'easeOutBounce',
        barColor: '#ff0066',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 10,
        trackColor: '#505050',
        animate: 2000
    });
    /*---------------------- 
        easypiechart js
    ------------------------*/
    /*----------------------
        wow js
    ------------------------*/
    new WOW().init();
    
})(window.jQuery);   