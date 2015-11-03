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
                            initEnd();
                        });
                    },
                    function (error) {
                        alert('file load fail.');
                    }
                );
            }
            //function for book page make
            function initEnd() {
                //popup div deleted
                var loadingPop = document.getElementById("loadingDiv");
                loadingPop.style.display = 'none';
                
                /*
                //function for full screen video but not enough to fix it
                $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
                    var so = cordova.plugins.screenorientation;
                    console.log(so);
                    so.setOrientation(so.Orientations[5]);//landscape
                }, false);
                
                document.getElementById('videoTurning').addEventListener('pause', function () {
                    var so = cordova.plugins.screenorientation;
                    console.log(so);
                    so.setOrientation(so.Orientations[4]);//portrait
                }, false);
                */
            }

            function fail(error) {
                alert('file load fail.');
            }
        } else {
            var loadingPop = document.getElementById("loadingDiv");
            loadingPop.style.display = 'none';
        }
    }
};

app.initialize();

//fancybox setup
$(document).ready(function () {
    $(".fancybox").fancybox();
});