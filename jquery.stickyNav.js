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
                "z-index": 10,
                "background-color": "#ffffff",
                "border": "solid #cccccc",
                "border-width": "0 0 1px",
                "box-shadow": "0 3px 2px 0 rgba(0, 0, 0, 0.09)",
                "position": "absolute",
                "left": 0
            }, options),
            init: function () {
                $element.wrap('<div class="sticky-nav"></div>');
                $(".sticky-nav").css(stickyNav.options);
                stickyNav.addEventHandler();
            },
            addEventHandler: function () {
                $(window).scroll(function (event) {
                    var scrollTop = $(window).scrollTop();
                    if (stickyNav.lastScrollTop > scrollTop) {
                        $(".sticky-nav").css("top", scrollTop + stickyNav.options.top);
                    }
                    stickyNav.lastScrollTop = scrollTop;
                });
            }
        };

        stickyNav.init();
        return this;
    };
}(jQuery));