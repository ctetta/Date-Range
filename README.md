

chat-loader

It’s is bad idea as you’re depending on the client machine date/time and correct approach would be doing that in server side. Fortunately  in my setup the client machine is also the server.

HTML:

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Code - Display content based on the date</title>
        
        <!--Load the Style sheet-->
        <link rel="stylesheet" type="text/css" href="css/DateRange.css">
        
        <!--Load the Scripts-->
        <script src="js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="js/DateRange.js"></script>
        
        <head>
            <body>
                
                <!--Shows the content between April the 14th 2016 until  April the 15th 2016 -->
                <div class="DateDiv"><span class="DateRange">4/14/2016 to 4/15/2016</span>Shows the content on April the 14th 2016</div>
                
                <!--Shows the content between April the 15th 2016 until  April the 16th 2016 -->
                <div class="DateDiv"><span class="DateRange">4/15/2016 to 4/16/2016</span>Shows the content on April the 15th 2016</div>
                
                <!--Shows the content between January the 1st 2016 until January the 1st 2017 -->
                <div class="DateDiv"><span class="DateRange">1/1/2016 to 1/1/2017</span>Shows the content whole 2016</div>
                
            </body>
</html>

Put the date range inside a span inside each div with the class “DateRange”.

Next, have such CSS to have them initially hidden.

CSS:

/*
Name: Code - Display content based on the date
URI: : http://www.studiopieters.nl/code-display-content-based-date
Description: Jquery or JavaScript that displays content based on specifics date period.
Version: 0.0.3
Author: Achim Pieters
Author URI: http://www.studiopieters.nl
*/

.DateRange,
.DateDiv {
  display: none;
}

And finally, this script:

Script:

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


