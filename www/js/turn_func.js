//function for image popup

function popImage(id) {
    'use strict';
    //get image tag value 
    var elem_val = document.getElementById(id).getAttribute("value");
    
    var $book = $(".book");
    
    //pop div
    var popupDiv = document.getElementById("popupDiv");
    popupDiv.style.display = 'block';
    popupDiv.setAttribute("width", $book.width() + 'px');
    popupDiv.setAttribute("height", $book.height() + 'px');
    popupDiv.style.zIndex = 3;
    
    //image setting
    var popupImg = document.getElementById("popupImg");
    popupImg.style.background = "url(" + "img/" + elem_val + ".jpg) no-repeat center center"; // image source set
    popupImg.style.backgroundSize = "contain";
    
    //size set
    
    popupImg.style.height = $book.height() * 0.8 + "px";
    popupImg.style.width = $book.width() * 0.8 + "px";
    //position set
    popupImg.style.left = (window.innerWidth - $('#popupImg').width()) / 2 + 'px';
    popupImg.style.bottom = (window.innerHeight - $('#popupImg').height()) / 2 + 'px';
    //z index set
    popupImg.style.zIndex = 4;
    
}

function popClose() {
    'use strict';
    var popupDiv = document.getElementById("popupDiv");
    popupDiv.style.display = 'none';
    popupDiv.style.zIndex = -1;
    
    var popupImg = document.getElementById("popupImg");
    popupImg.setAttribute("src", "");
    popupImg.style.zIndex = -1;
}

function indexFunction(pageNum) {
    'use strict';
    $("#book").turn("page", parseInt(pageNum));
}

