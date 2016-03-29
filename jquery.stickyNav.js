/*
 * @fileOverview StickyNav - jQuery Plugin
 * @version 1.0.0
 *
 * @author Sanish Maharjan https://github.com/sanishmaharjan
 * @see https://github.com/sanishmaharjan/stickyNav
 */
(function ($) {
    $.fn.stickyNav = function (options) {
        var $element = $(this);
        var stickyNav = {
            lastScrollTop: 0,
            options: $.extend({
                "top": 0,
                "width": "100%",
                "zIndex": 10,
                "backgroundColor": "#ffffff",
                "scrollUp": true
            }, options),
            init: function () {
                $element.wrap('<div class="sticky-nav"></div>');

                $(".sticky-nav").css({
                    "top": stickyNav.options.top,
                    "width": stickyNav.options.width,
                    "z-index": stickyNav.options.zIndex,
                    "background-color": stickyNav.options.backgroundColor,
                    "border": "solid #cccccc",
                    "border-width": "0 0 1px",
                    "box-shadow": "0 3px 2px 0 rgba(0, 0, 0, 0.09)",
                    "position": stickyNav.options.scrollUp ? "absolute" : "fixed",
                    "left": 0
                });
                stickyNav.addEventHandler();
            },
            addEventHandler: function () {
                $(window).scroll(function (event) {
                    var scrollTop = $(window).scrollTop();
                    if (stickyNav.lastScrollTop > scrollTop) {
                        console.log("scroll down");
                        if (stickyNav.options.scrollUp) {
                            $(".sticky-nav").css("position", "fixed");
                            $(".sticky-nav").css("top", stickyNav.options.top);
                        }
                    } else {
                        console.log("scroll up");
                        if (stickyNav.options.scrollUp) {
                            if ($(".sticky-nav").css("position") == "fixed") {
                                $(".sticky-nav").css("position", "absolute");
                                $(".sticky-nav").css("top", scrollTop + stickyNav.options.top);
                            }
                        }
                    }
                    stickyNav.lastScrollTop = scrollTop;
                });
            }
        };

        stickyNav.init();
        return this;
    };
}(jQuery));