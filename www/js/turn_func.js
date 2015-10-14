//function for image popup

function popImage(id) {
    'use strict';
    //get image tag value 
    var elem_val = document.getElementById(id).getAttribute("value");
    
    var $book = $(".book");
    console.log('book size : ', $book.width(), $book.height());
    
    //pop div
    var popupDiv = document.getElementById("popupDiv");
    popupDiv.style.display = 'block';
    popupDiv.style.zIndex = 3;
    
    //image setting
    var popupImg = document.getElementById("popupImg");
    popupImg.setAttribute("src", "img/" + elem_val.toString() + ".jpg"); // image source set
    
    //size set
    //popupImg.style.width = $book.width() * 0.5 + "px";
    //position set
    popupImg.style.left = (window.innerWidth - popupImg.clientWidth) / 2 + 'px';
    popupImg.style.bottom = (window.innerHeight - popupImg.clientHeight) / 2 + 'px';
    //z index set
    popupImg.style.zIndex = 4;
    console.log('img size : ', $("#popupImg").width(), $("#popupImg").height());
    
    //popup close button
    var popCloseBtn = document.getElementById("popCloseBtn");
    popCloseBtn.style.position = 'absolute';
    popCloseBtn.style.left = (window.innerWidth + popupImg.clientWidth) / 2 + 'px';
    popCloseBtn.style.bottom = (window.innerHeight + popupImg.clientHeight) / 2 + 'px';
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

