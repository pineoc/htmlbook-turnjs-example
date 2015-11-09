# htmlbook-turnjs-example


HTML5 + Turn.js + Cordova
E-Book application

etc libs. + touchSwipe.js + fancybox.js

###single page application

file : js/turn_init.js
```javascript 
  module.ratio = 0.75,
  ...
  plugins: function (pageNum) {
        'use strict';
        // run the plugin
        //if you want double page,
        /*
        $(this.el).turn({
            page: 1,
            display: "double",
            gradients: true,
            acceleration: true
        });
        */
        $(this.el).turn({
            page: 1,
            display: "single",
            gradients: true,
            acceleration: true
        });
        // hide the body overflow
        document.body.className = 'hide-overflow';
    }
```

###double page application

file : js/turn_init.js
```javascript 
  module.ratio = 1.5,
  ...
  plugins: function (pageNum) {
        'use strict';
        // run the plugin
        //if you want double page,
        /*
        $(this.el).turn({
            page: 1,
            display: "double",
            gradients: true,
            acceleration: true
        });
        */
        $(this.el).turn({
            page: 1,
            display: "double",
            gradients: true,
            acceleration: true
        });
        // hide the body overflow
        document.body.className = 'hide-overflow';
    }
```


##platforms
ios

android
