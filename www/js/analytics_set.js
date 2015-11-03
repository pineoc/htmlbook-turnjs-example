//set event swiper for analytics

document.addEventListener("deviceready", analytics_setting, false);

function analytics_setting() {
    //slide change start event receiver
    swiper.on('slideChangeStart', function (s) {
        beforePage = currPage;
        currPage = s.activeIndex + 1;

        //TODO : analytics function for page time
        if (0 == beforeTime) {
            //page 1 -> page 2
            beforeTime = new Date().getTime();
            var sendTimeVal = beforeTime - appStartTime;
            //console.log('page1 time : ', sendTimeVal);
            window.analytics.trackTiming('페이지 이용시간', sendTimeVal, 'page1');
            window.analytics.trackEvent('페이지', '페이지 진입', currPage);
            window.analytics.trackView('page1');
        } else {
            //page n -> page m
            var sendTimeVal = new Date().getTime() - beforeTime;
            //console.log('page'+ beforePage +' time : ', sendTimeVal);
            window.analytics.trackTiming('페이지 이용시간', sendTimeVal, 'page' + beforePage + ' time');
            window.analytics.trackEvent('페이지', '페이지 진입', currPage);
            window.analytics.trackView('page' + beforePage);
            beforeTime = new Date().getTime();
        }
    });
}
