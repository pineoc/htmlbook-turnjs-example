document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var container = document.getElementById("demo");
    var dragend = new Dragend(container, {
        afterInitialize: function () {
            container.style.visibility = "visible";
        }
    });
}, false);