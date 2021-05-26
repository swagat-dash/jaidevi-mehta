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
    /*------------------
        Preloader JS
    --------------------*/ 
})(window.jQuery);   