/*
back button listener function setup js
*/


//backbutton listener
$(document).ready(function () {
    document.addEventListener('backbutton', function (event) {
        event.preventDefault(); // EDIT

        //video check
        //video stop, if playing 
        var video_elems = $('video');
        if (video_elems.get(0).paused == false)
            video_elems.get(0).pause();
        if (video_elems.get(1).paused == false)
            video_elems.get(1).pause();

        //image popup check
        //image popup delete, if showing
        var fancybox_elem = $('.fancybox-overlay');

        if (fancybox_elem.length > 0) {
            //image popup showing
            //close btn click
            $('a.fancybox-item.fancybox-close').click();
        } else {
            //image popup not showing
            //dialog show
            function onConfirm(buttonIndex) {
                if (1 == buttonIndex) {
                    //Quit
                    navigator.app.exitApp(); // exit the app
                } else {
                    //Cancel
                    //none
                }
            }

            navigator.notification.confirm(
                'Are you want to Quit?', // message
                onConfirm, // callback to invoke with index of button pressed
                'Quit', // title
            ['Quit', 'Cancel'] // buttonLabels
            );
        }
    });
});