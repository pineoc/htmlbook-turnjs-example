/*
 * Turn.js responsive book
 */
(function () {
    'use strict';

    var module = {
        ratio: 0.75, //double: 1.38, single: 0.75
        currPage: 1,
        init: function (id) {
            var me = this;

            // if older browser then don't run javascript
            if (document.addEventListener) {
                this.el = document.getElementById(id);
                this.resize();
                this.plugins();

                // on window resize, update the plugin size
                window.addEventListener('resize', function (e) {
                    var size = me.resize();
                    $(me.el).turn('size', size.width, size.height);
                });
            }
            $("#book").bind("turning", function (event, page, view) {
                document.getElementById("book_effect").play();
                this.currPage = page;
            });

        },
        resize: function () {
            // reset the width and height to the css defaults
            this.el.style.width = '';
            this.el.style.height = '';

            var width = this.el.clientWidth,
                height = Math.round(width / this.ratio),
                padded = Math.round(document.body.clientHeight * 0.9);

            // if the height is too big for the window, constrain it
            if (height > padded) {
                height = padded;
                width = Math.round(height * this.ratio);
            }

            // set the width and height matching the aspect ratio
            this.el.style.width = width + 'px';
            this.el.style.height = height + 'px';

            return {
                width: width,
                height: height
            };
        },
        plugins: function (pageNum) {
            // run the plugin
            $(this.el).turn({
                page: 1,
                display: "single",
                gradients: true,
                acceleration: true
            });
            // hide the body overflow
            document.body.className = 'hide-overflow';
        }
    };

    module.init('book');
}());

var onDeviceReady = function () {
    $("#okgoLink").tap(function () {
        var ref = window.open('http://okgo.net/wotw', '_blank', 'location=yes');
    });
};

var init = function () {
    document.addEventListener('deviceready', onDeviceReady, false);
};

$(document).ready(init);