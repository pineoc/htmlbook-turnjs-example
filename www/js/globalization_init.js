/*
for globalization
target
1. KO (Korea)
2. EN (USA, GB)
3. CN (China)
*/

//first, check current locale
$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        var locale_name;
        //getLocaleName
        navigator.globalization.getLocaleName(
            function (locale) {
                console.log('locale: ' + locale.value + '\n');
                locale_name = locale.value.substring(0, 2);
                
                //file read
                $.getJSON("js/data/data-" + locale_name + ".json", function (data) {
                    var items = [];
                    $.each(data, function (key, val) {
                        items.push(key + ', ' + val);
                    });
                    console.log('items : ', items);
                });
            },
            function () {
                console.log('Error getting locale\n');
            }
        );
    }



});