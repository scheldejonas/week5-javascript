/* 
 
 */
$(document).ready(function () {
    console.log("document is ready");
    $("#test").click(function () {
        console.log("div was clicked");
    });
    $("p").css({
        "background-color": "yellow",
        "font-size": "200%"
    });

    $("button").click(function () {
        var txt = "";
        txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height: " + $("#div1").outerHeight();
        $("#div1").html(txt);


        $("#hide").click(function () {
            $("p").hide(1000);
        });

        $("#show").click(function () {
            $("p").show(1000);
        });
    });
    
    $('#myButton').bind('click', function() {
        // 'this' is the DOM element that triggered the event
        alert(this.id == 'myButton');
    });
});

