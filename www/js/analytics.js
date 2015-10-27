
$(document).ready(function() {
    //set analytics setup
    document.addEventListener("deviceready", analytics_setup, false);
    document.addEventListener("deviceready", analytics_event_setup, false);
    
    function analytics_setup () {
        
        //set debug mode
        window.analytics.debugMode();
        
        //set GA id
        window.analytics.startTrackerWithId('UA-68637631-4');
        
        //set user
        window.analytics.setUserId('USER_ID');
        
        //set home view
        window.analytics.trackView('Home Screen');
        
        //alert('analytics setup success');
    }
    
    function analytics_event_setup () {
        //set ga event
        $("#goIndex").click(function () {
            //console.log('home clicked');
            window.analytics.trackEvent('click', 'home');
        });
        
        
    }
});
