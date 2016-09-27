// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 21, 2016 
$(document).ready(function () {
    $("#button1").click(function () {

//$.get() uses HTTP GET. Use this for simple data
        $.get('JsonProvider', function (data) {
            var persons = data;
            persons.forEach(function (element) {
                console.log(element.name);
            });
        }, 'JSON').fail(function () {
            alert("FAILED!!!!!!!!!!!!!!!");
        });
    });
    $("#button2").click(function () {
//load() injects the data directly into the DOM. If you don't need this behavior, use get().
        $("#container").load('content.html #data');
    });
    $("#button3").click(function () {
        var person = {name: 'Peter', age: 4, phone: '+4521346578'};
        var url = 'JsonProvider';
        //$.post(url, data, callback, type);
        $.post(url, person, function (data) {
            alert('data: ' + data);
        });
    });
    $("#button4").click(function () {
        //Here I added a lot of settings. Play around with them and check result in chrome dev tools/network tab
        
        //The ajax() method returns a jQuery XMLHttpRequest (jqXHR) object which is a Promise object.
        //Promise has 3 methods: done, fail and always (these can be used instead of the succes and error functions inside the ajax object.
        var person = {"name": "Rastapopoulos", "age": 54, "phone": "+45666666"};
        var url = 'JsonProvider';
        var jqXHR = $.ajax({
            url: url,
            /*beforeSend: function (jqXHR) { //Example of using a function to configure the request
                jqXHR.setRequestHeader("Content-Type", "application/json");
                jqXHR.setRequestHeader("Accept", "application/json");
            },*/
            //data: {json: person, delay: 5}, //delay the response 5 seconds
            //data: {json: JSON.stringify(person)},
            //data: JSON.stringify(person),
            data: person,
            dataType: "json", //What we expect from the server
            //contentType: "application/json; charset=utf-8", //What we send to the server (Default: application/x-www-form-urlencoded)
            method: "POST",
            statusCode: {
                400: function () {
                    alert("Bad Request");
                },
                404: function () {
                    alert("page not found");
                } //Add all relevant status code and callback functions to handle these
            },
            success: function (data) {
                alert("Person: " + data.name + " was succesfully added on the server");
            },
            //success: function(data){ alert(data);},
            error: function (jqxhr, status, errormsg) {
                alert(status + ": " + errormsg);
            }

        });
        //jqXHR.done === jqXHR.success AND jqXHR.fail === jqXHR.error
        jqXHR.done(function () {
            alert("the function succeeded - message from done()");
        });
        jqXHR.fail(function () {
            alert("the function failed - message from fail()");
        });
        //Use .then() to utilize the deferred object and ability to use call chain. see: 
        //http://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
        jqXHR.then(function () {
            alert("succes - message from .then()");
        }, function () {
            alert("failed - message from .then()");
        });
    });
});


