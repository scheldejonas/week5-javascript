// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 22, 2016 
$(document).ready(function(){
    $("button").click(function(){
//        var url = "JsonProvider";
//        var person = {name: "Frederik Hansen", age: 14, tlf: 34344334};
       
//        $.post(url, person, function(data){
//            $("#person").html(data);
//        });
//        $.get("JsonProvider", function(data){
//            console.log(data);
//            var persons = JSON.parse(data);
//            for (var i = 0; i < persons.length; i++) {
//                console.log(persons[i].name);
//            }
//        });
    $.ajax({
        url: "JsonProvider",
        data: {name: "Frederik Hansen", age: 14, tlf: 34344334},
        success: function(data){
            console.log(data);
        }
    });
        
        
        
        //$.get("QuickDemoServlet", function(data){
//        console.log(data);
    });
    });
    
      
   
   
//    var promise = new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve(1);
//        }, 4000);
//    });

//    var newPromise = promise.then(function(val){
//        console.log(val); // 1
//        return val + 2; //This returns a new promise object
//    }).then(function (val) {
//        console.log(val); // 3
//        console.log(newPromise);
//    });
//    setTimeout(function () {
//        console.log(newPromise);
//    }, 5000);
//});


