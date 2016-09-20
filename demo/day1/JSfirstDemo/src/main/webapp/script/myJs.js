// @author Thomas Hartmann - tha@cphbusiness.dk created on Sep 19, 2016 
//var bb = document.getElementById("bluebox");
//bb.onclick = function(){
//    alert("Blue box was clicked");
//};
//myFunc();

//(function myFunc(){
//    alert("from myFunc");
//})();
//var myFunc2 = function(){
//    alert("from myFunc2");
//};
//myFunc2();

var newFunc =function(input1){
    console.log(input1);
    console.log(arguments[1]);
};
//newFunc("Hejsa", "hovsa");
//newFunc("Hej");
newFunc();
var var2 = 'test0';
//test for scope
var scopeTest = function(var1){
    var2 = 'test2';
    if(true){
        var var3 = 'test3';
    }
//    console.log(var3);
//    console.log(var2);
//    console.log(var1);
console.log(this);
};
//scopeTest("test1");
//console.log(var2);
var myObj = {
    gender: 'male'
};
console.log(myObj);
myObj.name = 'Hans';
console.log(myObj);
myObj.age = 34;
console.log(myObj);
console.log(myObj.name);
console.log(myObj.size);

//var person = {
//    name: 'Henrik',
//    age: 12,
//    child: {name: 'Peter'},
//    toString: function(){
//        return this.name + ' '+this.age;
//    }
//};
//console.log(person.toString());
//console.log(person["name"], person["age"]);
//console.log(person.child.name);

var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.toString = function(){ return this.name + ': ' + this.age; };
};
var person1 = new Person('Kurt', 21);
console.log(person1);
var mitArray = [1, "two", true];
