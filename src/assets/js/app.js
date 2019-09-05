(function ($) { 
    /* ---------------------------------------------
      Preloaded
      --------------------------------------------- */
    $(window).on("load", function () {
        $('.preloader').addClass('loaded');
        if ($('.preloader').hasClass('loaded')) {
            $('.preloader').delay(1200).queue(function () {
                $(this).remove();
            });
        }
    });
      
    
    // nav fixed
    function navMenu() {
         
        var t = $(".navbar-sticky");
         $(window).on("scroll load", function() {
            var e = $(window).scrollTop();
            120 <= e ? t.addClass("navbar-sticky--moved-up") : t.removeClass("navbar-sticky--moved-up"), 250 <= e ? t.addClass("navbar-sticky--transitioned") : t.removeClass("navbar-sticky--transitioned"), 500 <= e ? t.addClass("navbar-sticky--on") : t.removeClass("navbar-sticky--on")
        })
    }
    

    (jQuery), $(document).ready(function() {
        
    }), navMenu(),


 




})(jQuery);
