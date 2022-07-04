!(function (e) {
    "use strict";
    function a() {
        if (e(".main-header").length) {
            var a = e(window).scrollTop(),
                n = e(".main-header"),
                t = e(".scroll-to-top"),
                o = e(".main-header .sticky-header");
            a > 100 ? (n.addClass("fixed-header"), o.addClass("animated slideInDown"), t.fadeIn(300)) : (n.removeClass("fixed-header"), o.removeClass("animated slideInDown"), t.fadeOut(300));
        }
    }
    if ((a(), e(".main-header li.dropdown ul").length && e(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'), e(".mobile-menu").length)) {
        e(".mobile-menu .menu-box").mCustomScrollbar();
        var n = e(".main-header .nav-outer .main-menu").html();
        e(".sticky-header .main-menu").append(n),
            e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
                e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
            }),
            e(".mobile-nav-toggler").on("click", function () {
                e("body").addClass("mobile-menu-visible");
            }),
            e(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on("click", function () {
                e("body").removeClass("mobile-menu-visible");
            }),
            e(document).keydown(function (a) {
                27 === a.keyCode && e("body").removeClass("mobile-menu-visible");
            });
    }
    if (
        (e(".banner-carousel").length &&
            e(".banner-carousel").owlCarousel({
                loop: !0,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                margin: 0,
                nav: !0,
                smartSpeed: 500,
                autoplay: 6e3,
                autoplayTimeout: 7e3,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } },
            }),
        e(".sponsors-carousel").length &&
            e(".sponsors-carousel").owlCarousel({
                loop: !0,
                margin: 40,
                nav: !0,
                smartSpeed: 500,
                autoplay: 4e3,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 800: { items: 4 }, 1024: { items: 4 }, 1200: { items: 5 } },
            }),
        e(".testimonial-slider .text-carousel").length && e(".testimonial-slider .thumb-carousel").length)
    ) {
        var t = e(".testimonial-slider .text-carousel"),
            o = e(".testimonial-slider .thumb-carousel"),
            i = !1;
        t
            .owlCarousel({
                loop: !0,
                animateOut: "fadeOutRight",
                animateIn: "fadeInLeft",
                items: 1,
                margin: 20,
                nav: !0,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
            })
            .on("changed.owl.carousel", function (e) {
                i || ((i = !1), o.trigger("to.owl.carousel", [e.item.index, 500, !0]), (i = !1));
            }),
            o
                .owlCarousel({
                    loop: !0,
                    margin: 20,
                    items: 1,
                    nav: !1,
                    navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                    dots: !1,
                    center: !0,
                    autoplay: !0,
                    autoplayTimeout: 5e3,
                    responsive: { 0: { items: 3 }, 600: { items: 3 }, 768: { items: 3 }, 1024: { items: 3 }, 1200: { items: 3 } },
                })
                .on("click", ".owl-item", function () {
                    t.trigger("to.owl.carousel", [e(this).index(), 500, !0]);
                })
                .on("changed.owl.carousel", function (e) {
                    i || ((i = !0), t.trigger("to.owl.carousel", [e.item.index, 500, !0]), (i = !1));
                });
    }
    (e(".single-item-carousel").length &&
        e(".single-item-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            smartSpeed: 700,
            autoplay: 5e3,
            navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
            responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } },
        }),
    e(".gallery-carousel").length &&
        e(".gallery-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            smartSpeed: 500,
            autoplay: 4e3,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 2 }, 800: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } },
        }),
    e(".count-box").length &&
        e(".count-box").appear(
            function () {
                var a = e(this),
                    n = a.find(".count-text").attr("data-stop"),
                    t = parseInt(a.find(".count-text").attr("data-speed"), 10);
                a.hasClass("counted") ||
                    (a.addClass("counted"),
                    e({ countNum: a.find(".count-text").text() }).animate(
                        { countNum: n },
                        {
                            duration: t,
                            easing: "linear",
                            step: function () {
                                a.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                a.find(".count-text").text(this.countNum);
                            },
                        }
                    ));
            },
            { accY: 0 }
        ),
    e(".accordion-box").length &&
        e(".accordion-box").on("click", ".acc-btn", function () {
            var a = e(this).parents(".accordion-box"),
                n = e(this).parents(".accordion");
            if ((!0 !== e(this).hasClass("active") && e(a).find(".accordion .acc-btn").removeClass("active"), e(this).next(".acc-content").is(":visible"))) return !1;
            e(this).addClass("active"), e(a).children(".accordion").removeClass("active-block"), e(a).find(".accordion").children(".acc-content").slideUp(300), n.addClass("active-block"), e(this).next(".acc-content").slideDown(300);
        }),
    e(".lightbox-image").length && e(".lightbox-image").fancybox({ openEffect: "fade", closeEffect: "fade", helpers: { media: {} } }),
    e("#contact-form").length && e("#contact-form").validate({ rules: { username: { required: !0 }, email: { required: !0, email: !0 }, phone: { required: !0 }, message: { required: !0 } } }),
    e(".scroll-to-target").length &&
        e(".scroll-to-target").on("click", function () {
            var a = e(this).attr("data-target");
            e("html, body").animate({ scrollTop: e(a).offset().top }, 1500);
        }),
    e(".wow").length) && new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }).init();
    e(window).on("scroll", function () {
        a();
    }),
        e(window).on("load", function () {
            e(".preloader").length && (e("body").addClass("page-loaded"), e(".preloader").delay(1500).fadeOut(0));
        });
})(window.jQuery);
