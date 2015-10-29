//function for book

//swiper var
var swiper = null;
var appStartTime = new Date().getTime();
var beforePage = 1;
var currPage = 1;
var beforeTime = 0;

//index function
function indexFunction(pageNum) {
    'use strict';
    swiper.slideTo(parseInt(pageNum) - 1);
}
//goHome function
function goHomeFunction() {
    'use strict';
    swiper.slideTo(0);
}
