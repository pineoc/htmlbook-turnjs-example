/*
back button listener function setup js
*/


//backbutton listener
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
    } 
    else if ($('#indexDiv').css("z-index") > 0) {
        //index popup close
        $("#indexDiv").css('zIndex', '-1');
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

        //check locale_data if null, default dialog setting
        if (locale_data) {
            navigator.notification.confirm(
                locale_data.dialog_msg, // message
                onConfirm, // callback to invoke with index of button pressed
                locale_data.dialog_title, // title
            [locale_data.dialog_yes, locale_data.dialog_no] // buttonLabels
            );
        } else {
            navigator.notification.confirm(
                'Are you want to quit?', // message
                onConfirm, // callback to invoke with index of button pressed
                'Quit', // title
            ['Yes', 'No'] // buttonLabels
            );
        }
    }
});
