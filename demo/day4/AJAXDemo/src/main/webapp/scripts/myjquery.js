// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 21, 2016 
$(document).ready(function(){
    $("#button1").click(function(){
        
        $.get('JsonProvider', function(data){
            var persons = data;

            persons.forEach(function(element){
                console.log(element.name);
            });
        }, 'JSON').fail(function(){alert("FAILED!!!!!!!!!!!!!!!");});
    });
    $("#button3").click(function(){
        var person = {name: 'Peter', age: 4, phone: '+4521346578'};
        var url = 'JsonProvider'; 
        //$.post(url, data, callback, type);
        $.post(url, person, function(data){ 
            alert('data: '+data); 
        });
    });
    
});


