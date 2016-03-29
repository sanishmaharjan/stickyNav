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
                "zIndex": 10,
                "backgroundColor": "#ffffff",
                "scrollUp": true
            }, options),
            init: function () {
                $element.wrap('<div class="sticky-nav"></div>');
                var leftPosition = $(".sticky-nav").offset().left;
                $(".sticky-nav").css({
                    "top": stickyNav.options.top,
                    "width": $(".sticky-nav").parent().width(),
                    "z-index": stickyNav.options.zIndex,
                    "background-color": stickyNav.options.backgroundColor,
                    "border": "solid #cccccc",
                    "border-width": "0 0 1px",
                    "box-shadow": "0 3px 2px 0 rgba(0, 0, 0, 0.09)",
                    "position": stickyNav.options.scrollUp ? "absolute" : "fixed",
                    "left": stickyNav.options.scrollUp ? 0 : leftPosition
                });
                stickyNav.addEventHandler(leftPosition);
            },
            addEventHandler: function (leftPosition) {
                $(window).scroll(function (event) {
                    var scrollTop = $(window).scrollTop();
                    if (stickyNav.lastScrollTop > scrollTop) {
                        if (stickyNav.options.scrollUp) {
                            $(".sticky-nav").css({
                                    "position": "fixed",
                                    "top": stickyNav.options.top,
                                    "left": leftPosition
                                }
                            );
                        }
                    } else {
                        if (stickyNav.options.scrollUp) {
                            if ($(".sticky-nav").css("position") == "fixed") {
                                $(".sticky-nav").css({
                                    "position": "absolute",
                                    "top": scrollTop + stickyNav.options.top,
                                    "left": 0
                                });
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