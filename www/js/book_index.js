/*
 * Turn.js responsive book
 */

/*
turn corner change

var way = 1;

setInterval(function() {
  if (way==1) {
    $("#flipbook").turn("next");

    if ($("#flipbook").turn("page")== $("#flipbook").turn("pages")) {
      way = 2;
      $("#flipbook").turn("options", {turnCorners: "tl,tr"});
    }
  } else {
    $("#flipbook").turn("previous");
    
    if ($("#flipbook").turn("page")==1) {
       way = 1;
       $("#flipbook").turn("options", {turnCorners: "bl,br"});
    }
  }
}, 1000);

*/

//book, turn.js setup
var module = {
    ratio: 0.75, //double: 1.38, single: 0.75
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

        //okgo link function added
        var linkfunc = function () {
            $("#okgoLink").tap(function () {
                var ref = window.open('http://okgo.net/wotw', '_blank', 'location=yes');
            });
        };

        if ("Android" === device.platform) {
            document.addEventListener("deviceready", gotFile_turning, false);

            //setup turning video 
            function gotFile_turning() {
                var fileTransfer = new FileTransfer();
                var uri = encodeURI('cdvfile://localhost/temporary/turning.mp4');

                fileTransfer.download(
                    "file:///android_asset/www/video/turning.mp4",
                    uri,
                    function (entry) {
                        resolveLocalFileSystemURL('cdvfile://localhost/temporary/turning.mp4', function (entry1) {
                            var nativePath = entry1.toURL();
                            document.querySelector("#videoTurning").src = nativePath;
                            //file
                            document.addEventListener("deviceready", gotFile_okgo, false);
                        });
                    },
                    function (error) {
                        alert('download error source ' + error.source);
                    }
                );
            }

            //setup okgo video
            function gotFile_okgo() {
                var fileTransfer = new FileTransfer();
                var uri = encodeURI('cdvfile://localhost/temporary/okgo.mp4');

                fileTransfer.download(
                    "file:///android_asset/www/video/okgo.mp4",
                    uri,
                    function (entry) {
                        resolveLocalFileSystemURL('cdvfile://localhost/temporary/okgo.mp4', function (entry1) {
                            var nativePath = entry1.toURL();
                            document.querySelector("#videoOkgo").src = nativePath;
                            //file
                            bookMake();
                        });
                    },
                    function (error) {
                        alert('file load fail.');
                    }
                );
            }

            function bookMake() {
                var loadingPop = document.getElementById("loadingDiv");
                loadingPop.style.display = 'none';
                module.init('book');
            }

            function fail(error) {
                alert('file load fail.');
            }
        } else {
            var loadingPop = document.getElementById("loadingDiv");
            loadingPop.style.display = 'none';
            module.init('book');
        }
    }
};

app.initialize();

//for test
/*
var loadingPop = document.getElementById("loadingDiv");
loadingPop.style.display = 'none';
module.init('book');
*/

//fancybox setup
$(document).ready(function() {
    $(".fancybox").fancybox();
});

