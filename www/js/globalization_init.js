/*
for globalization
target
1. KO (Korea)
2. EN (USA, GB)
3. CN (China)
*/
var locale_data;

//first, check current locale
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var locale_name;
    //getLocaleName
    navigator.globalization.getLocaleName(
        function (locale) {
            locale_name = locale.value.substring(0, 2);

            //file read
            /*
            $.getJSON("js/data/data-" + locale_name + ".json", function (data) {
                locale_data = data;
                global_index();
            });
            */


            //test locale
            /**/
            $.getJSON("js/data/data-en.json", function (data) {
                locale_data = data;
                global_index();
            });
            
            //popup text setting
            function global_index() {
                $(".pop-index-title").html(locale_data.index_title);
                $(".pop-index-1").html(locale_data.index_1);
                $(".pop-index-2").html(locale_data.index_2);
                $(".pop-index-3").html(locale_data.index_3);
                $(".pop-index-4").html(locale_data.index_4);
                $(".pop-index-5").html(locale_data.index_5);
            }

        },
        function () {
            console.log('Error getting locale\n');
        }
    );
}