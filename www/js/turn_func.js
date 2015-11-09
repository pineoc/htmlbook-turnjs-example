


//index function, go to pageNum turn('page', indexNum);
function indexFunction(pageNum) {
    'use strict';
    $("#book").turn("page", parseInt(pageNum));
}

function goIndexFunction() {
    'use strict';
    $("#book").turn("page", 1);
}
