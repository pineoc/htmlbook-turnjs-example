/*
 * Turn.js responsive book
 */

//book, turn.js setup
var module = {
    ratio: 0.75, //double: 1.5, single: 0.75
    currPage: 1,
    init: function (id) {
        'use strict';
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
            //window.analytics.trackView('Page'+page.toString());
            //console.log('pageNum : ' + page);
        });
        $("#book").bind("start", function (event, page, corner) {
            if ('bl' == corner) {
                event.preventDefault();
                page.next = page.page;
            }
            if ('br' == corner) {
                event.preventDefault();
                page.next = page.page;
            }
        });
        
        //Enable swiping...
        $(".t").swipe({
            //Generic swipe handler for all directions
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction === 'left') {
                    $("#book").turn("next");
                } else {
                    $("#book").turn("previous");
                }
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 75
        });

    },
    resize: function () {
        // reset the width and height to the css defaults
        'use strict';
        this.el.style.width = '';
        this.el.style.height = '';

        var width = this.el.clientWidth,
            height = Math.round(width / this.ratio),
            padded = Math.round(document.body.clientHeight);

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
        'use strict';
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


//video file setup function
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: function () {
        
        //book setting
        module.init('book');
    }
};

//app initialize
app.initialize();

//on web for test
module.init('book');

//fancybox setup
$(document).ready(function() {
    $(".fancybox").fancybox();
});
