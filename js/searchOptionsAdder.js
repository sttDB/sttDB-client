$(document).ready(function() {
    $('ul li:has(ul)').hover(
        function(e)
        {
            $(this).find('ul').css({display: "block"});
        },
        function(e)
        {
            $(this).find('ul').css({display: "none"});
        }
    );
});