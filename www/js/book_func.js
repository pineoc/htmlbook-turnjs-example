//function for book

//swiper var
var swiper = null;

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
