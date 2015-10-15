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

//swipe function
$(function () {
    'use strict';
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
});

//okay go link function
$(function () {
    'use strict';
    var linkfunc = function () {
        $("#okgoLink").tap(function () {
            var ref = window.open('http://okgo.net/wotw', '_blank', 'location=yes');
        });
    };

    var init = function () {
        document.addEventListener('deviceready', linkfunc, false);
    };

    $(document).ready(init);
});
/*
$(function () {
    'use strict';
    var myFilename = "turning.mp4";
    var myUrl = cordova.file.applicationDirectory + "www/video/" + myFilename;
    var fileTransfer = new FileTransfer();
    var filePath = cordova.file.dataDirectory + myFilename;

    fileTransfer.download(encodeURI(myUrl), filePath, (function (entry) {
        var vid = document.getElementById("videoTurning");
        vid.src = entry.nativeURL;
        vid.loop = false;
    }), (function (error) {
        alert("Video download error: source " + error.source);
        alert("Video download error: target " + error.target);
    }), true, {
        headers: {
            Authorization: "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    });
});
*/

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
        if ("Android" === device.platform) {
            //video src set
            var myFilename = "turning.mp4";
            var myUrl = cordova.file.applicationDirectory + "www/video/" + myFilename;
            var fileTransfer = new FileTransfer();
            var filePath = cordova.file.dataDirectory + myFilename;
            alert('myUrl : ' + myUrl);
            alert('filePath : ' + filePath);

            fileTransfer.download(encodeURI(myUrl), filePath,
                function (entry) {
                    var vid = document.getElementById("videoTurning");
                    vid.src = entry.nativeURL;
                    vid.loop = false;
                    alert('download success');
                    alert('entry,nativeURL : ' + entry.nativeURL);
                    alert('vid src : ' + vid.src);
                },
                function (error) {
                    alert("Video download error: source " + error.source);
                    alert("Video download error: target " + error.target);
                }, true, {
                    headers: {
                        Authorization: "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                    }
                });
            alert('download ended');
        }
    }
};

app.initialize();