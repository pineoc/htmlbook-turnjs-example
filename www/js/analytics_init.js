
$(document).ready(function() {
    //set analytics setup
    document.addEventListener("deviceready", analytics_setup, false);
    document.addEventListener("deviceready", analytics_event_setup, false);
    
    function analytics_setup () {
        
        //set debug mode
        window.analytics.debugMode();
        
        //set GA id
        window.analytics.startTrackerWithId(ga_identification);
        
        //set user
        window.analytics.setUserId('USER_ID');
        
        //set home view
        window.analytics.trackView('Home Screen');
    }
    
    function analytics_event_setup () {
        //set ga event
        $("#goIndex").click(function () {
            window.analytics.trackEvent('앱 활동', 'homeBtn 클릭');
        });
        
        $(".fancybox").click(function () {
            var target_img = $(this).attr('href');
            window.analytics.trackEvent('앱 활동', '이미지 클릭', target_img);
        });
    }
});
