/*
Name: Code - Display content based on the date
URI: : http://www.studiopieters.nl/code-display-content-based-date
Description: Jquery or JavaScript that displays content based on specifics date period.
Version: 0.0.3
Author: Achim Pieters
Author URI: http://www.studiopieters.nl
*/

$(function() {
    $(".DateDiv").each(function(index) {
        var sRange = $(this).find(".DateRange").html();
        var arrTemp = sRange.split(" to ");
        var dtFrom = new Date(arrTemp[0]);
        var dtTo = new Date(arrTemp[1]);
        var dtNow = new Date();
        if (dtNow >= dtFrom && dtNow <= dtTo)
            $(this).show();
    });
});
