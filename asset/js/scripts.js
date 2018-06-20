;(function () {
    "use strict";

    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");

    
    /*==============================================
     Pre loader init
     ===============================================*/
    $window.on("load", function () {
        $('.loader').css('display','none');
    });

    /*==============================================
     Wow init
     ===============================================*/
    if (typeof WOW == "function")
        new WOW().init();


    $document.ready(function () {

        /*==============================================
         Retina support added
         ===============================================*/
        if (window.devicePixelRatio > 1) {
            $(".retina").imagesLoaded(function () {
                $(".retina").each(function () {
                    //var src = $(this).attr("src").replace(".", "@2x.");
                    //var h = $(this).height();
                    //$(this).attr("src", src).css({height: h, width: "auto"});
                });
            });
        }


        /*==============================================
         Smooth scroll init
         ===============================================*/
        if (typeof smoothScroll == "object") {
            smoothScroll.init();
        }


        /*==============================================
         Menuzord init
         ===============================================*/
        $(".js-primary-navigation").menuzord();


        /*==============================================
         Onepage nav init
         ===============================================*/
        $(".op-nav li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".op-nav").onePageNav({
                currentClass: "active"
            });
        }


        /*==============================================
         Sticky nav
         ===============================================*/
        function initSticky() {
            var $navbarSticky, navbarHeight, $brandLogo, centerLogoNormalHeight, centerLogoStickyHeight;
            $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
            navbarHeight = $navbarSticky.height();
            $brandLogo = $(".logo-brand");
            centerLogoNormalHeight = 100;
            centerLogoStickyHeight = 60;

            if ($navbarSticky.hasClass("l-navbar_s-center")) {
                $brandLogo.height(centerLogoNormalHeight);
            }

            $navbarSticky.sticky({
                className: "",
                wrapperClassName: "l-navbar-wrapper",
                zIndex: 10000,
                bottomSpacing: 100
            }).on("sticky-start", function() {
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.height(0);
                    setTimeout(function() {
                        $brandLogo.addClass("sticky-fix").height(centerLogoStickyHeight);
                    }, 300);
                }
            }).on("sticky-end", function () {
                $navbarSticky.parent().height(navbarHeight);
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.removeClass("sticky-fix").height(centerLogoNormalHeight);
                }
            });
        }
        initSticky();

        /*==============================================
         Flickity init
         ===============================================*/
        $window.load(function () {
            $(".main-carousel").flickity({
                cellAlign: 'center',
                contain: true,
                wrapAround: true,
                lazyLoad: true,
            });
        });

        /*==============================================
         Typist init
         ===============================================*/
        if (typeof Typist == "function") {
            new Typist(document.querySelector(".typist-element"), {
                letterInterval: 60,
                textInterval: 3000
            });
        }


        /*==============================================
         Back to top init
         ===============================================*/
        $body.append("<a data-scroll class='lift-off js-lift-off lift-off_hide' href='#'><i class='fa fa-angle-up'></i></a>");

        var $liftOff = $(".js-lift-off");
        $window.on("scroll", function () {
            if ($window.scrollTop() > 150) {
                $liftOff.addClass("lift-off_show").removeClass("lift-off_hide");
            } else {
                $liftOff.addClass("lift-off_hide").removeClass("lift-off_show");
            }
        });

    });

})(jQuery);
