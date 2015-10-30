//function for book

//swiper var
var swiper = null;
var appStartTime = new Date().getTime();
var beforePage = 1;
var currPage = 1;
var beforeTime = 0;

//index function
function indexFunction (pageNum) {
    'use strict';
    swiper.slideTo(parseInt(pageNum) - 1);
}

//goHome function
function goHomeFunction () {
    'use strict';
    swiper.slideTo(0);
}

//popup index page function
function popUpIndexDiv () {
    if($("#indexDiv").css('z-index') > -1) {
        $("#indexDiv").css('zIndex', '-1');
    } else {
        $("#indexDiv").css('zIndex', '10');
    }
    
}


function popUpIndexFunction (pageNum) {
    
    //disapear popup index page
    $("#indexDiv").css('zIndex', '-1');
    
    swiper.slideTo(parseInt(pageNum) - 1);
}
