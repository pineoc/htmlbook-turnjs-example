var i = 1;
var init = function () {
    'use strict';
    
    $(document).on("swipeleft", function (e) {
        if (i < 3) {
            i = i + 1;
            $.mobile.changePage("#page" + i.toString(), {transition : 'slide'});
        }
    });
    
    $(document).on("swiperight", function (e) {
        if (i > 1) {
            i = i - 1;
            $.mobile.changePage("#page" + i.toString(), {transition : 'slide', reverse: true});
        }
    });
};

$(document).bind('pageinit', init);