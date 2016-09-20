// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 20, 2016 
var persons = [
    {'firstname': 'Hans', 'age': 12},
    {'firstname': 'Grethe', 'age': 11}
];
var Person = function(firstname, age){
    this.firstname = firstname;
    this.age = age;
};
var form1 = document.getElementById("form1");
form1.onsubmit = function(event){
    event.preventDefault();
    var inputArray = document.getElementsByTagName("input");
    //console.log("size"+inputArray.length);
    var firstname = inputArray[0].value;
    //console.log(firstname);
    var age = inputArray[1].value;
    persons.push(new Person(firstname, age));
//    for (var i = 0; i < persons.length; i++) {
//        console.log(persons[i]);
//    }
    populate();
    //return false;
};
var populate = function(){
    
    var table1 = document.getElementById("persondata");
    table1.innerHTML = "";
    //console.log(table1);
    for (var i = 0; i < persons.length; i++) {
        //text += "<tr>"+"<td>"+persons[i].firstname+"</td>"+"<td>"+persons[i].age+"</td>"+"</tr>";
        var row = table1.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        console.log(persons[i].firstname);
        td1.innerHTML = persons[i].firstname;
        td2.innerHTML = persons[i].age;
    }
};



