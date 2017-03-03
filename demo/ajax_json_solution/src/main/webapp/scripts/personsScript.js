// @author Thomas Hartmann - tha@cphbusiness.dk created on Feb 26, 2017 
var app = document.getElementById("app");
var content = '<div id="personContainer"></div>';
content += '<button id="personButton">Click to get new person</button>';

app.innerHTML = content;

var container = document.getElementById("personContainer");
var button = document.getElementById("personButton");

//Opgave a-d
button.onclick = function () {
    fetch("http://localhost:8084/ajax_json_solution/PersonControl", {
        method: 'get'
    }).then(function (response) {
        //console.log(response.text());
        return response.text();
    }).then(function (text) {
        var person = JSON.parse(text);
        console.log(person);
        container.innerHTML = person.firstname + " " + person.lastname;
    });
};
var form = document.getElementById("frm1");
form.onsubmit = function(){
//    for (var i = 0; element; element = form.elements[i++]) {
//    if (element.type === "text" && element.value === "")
//        console.log(element.value);
//    }
    var firstname = form.elements[0].value;
    var lastname = form.elements[1].value;
    var age = form.elements[2].value;
    //console.log(firstname+lastname+age);
    var promise = fetch("http://localhost:8084/ajax_json_solution/PersonControl", {
        method: 'post',
        body: JSON.stringify({
		firstname: firstname,
		lastname: lastname,
                age: age
	})
    });
    promise.then(function(response){
        return response.text();
    }).then(function(text){
        alert(text);
    });
//            .then(function (response) {
//        //console.log(response.text());
//        return response.text();
//    }).then(function (text) {
//        var person = JSON.parse(text);
//        console.log(person);
//        container.innerHTML = person.firstname + " " + person.lastname;
//    });
    return false;
};

