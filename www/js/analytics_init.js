
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
            window.analytics.trackEvent('click', 'homeBtn');
        });
    }
});
