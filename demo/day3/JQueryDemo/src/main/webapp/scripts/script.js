// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 20, 2016 
$(document).ready(function () {
    //alert("test");
    $("#test1").click(function () {
        //alert("test");
        $(this).addClass("red");
    });
    $("#test2").click(function () {
        $(this).toggleClass("red");
    });
    $("#test3").click(function () {
        $(this).css({"background-color": "green", "font-size": "200%"});
        $("p").css("background-color", "yellow");
    });
    var myArr = [52, 97, 33, 45, 22];
    $.each(myArr, function (index, value) {
        console.log(index + ": " + value);
    });
});