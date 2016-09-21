// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 21, 2016 
//ALWAYS use document.ready
$(document).ready(function () {
    //Example of the: 'Selector - Event - Effect' sequence
    $("div").click(function () {
        $(this).css({'height': '300px', 'background-color': 'orange', 'border': '4px solid black'});
    });
    //Example of looping a collection of elements (li elements inside a div)
    console.log($("div li").length);
    $("div li").each(function (index, el) {
        console.log(index + " : " + el.textContent);
    });
    //Example of changing position of elments with append
    $("#boats img").click(function () {
        $("#boats").append($(this).css({"margin": "2px"}));
    });
});

