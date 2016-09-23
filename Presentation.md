#Week 5 - Javascript <img align="right" src="img/cphbusinessWhite.png" />  
## Day 1 - Introduction
###Lets start by doing som js
1. Set up external js document to alert()
2. React to a div being clicked
  - console.log() vs alert()
  - Inline, Internal and external js



### Some of the oddities of javascript  
[Reference here](https://www.smashingmagazine.com/2011/05/10-oddities-and-secrets-about-javascript)  
1. `alert(typeof null); //alerts 'object'`  
2. `alert(null instanceof Object); //evaluates false`  
3. `alert(typeof NaN); //alerts 'Number'`
  - `alert(NaN === NaN); //evaluates false`  
4. `alert(new Array() == false); //evaluates true`
  - every non-boolean value has a built-in boolean flag that is called on when the value is asked to behave like a boolean (Truthy or Falsy)   
5. ```var someVar = 0;   
   alert(someVar == false); //evaluates true ```   
6. ``` var someVar = 0;   
alert(someVar == false); //evaluates true – zero is a falsy    
alert(someVar === false); //evaluates false – zero is a number, not a boolean```  



### Javascript characteristics:
- is a loosely typed language
```javascript
var text = 'something here';
text = 6;
if(text){...}
```
- js has objects but not classes.
- js has a syntax similar to java
- is interpreted every time it runs
- is not compiled as a seperate step



###Data types
- number, (max 64bit)
  - Integer and floating points (NaN, infinity, -infinity)
- string, 
  - (+, \n, “typeof” operator that returns a string)
- boolean, 
- Object, 
- Function, 
- Undefined values (null and ‘undefined’)



###Truthy and Falsy
- Every non-boolean value has a built-in boolean flag
- [ ] == false
- null == false
- "" == false
- "Hello" == true
- 0 == false
- 1 == true   
[See the whole table](https://dorey.github.io/JavaScript-Equality-Table/)  
So remember to use === for comparison if it is not the boolean flag you want!!



### Operators
- Unary operators: (typeof and instanceof)
- Binary operators:
  - String Operators
  - Arithmetic Operators (+, -, *, /, %...)
  - Assignment Operators (=, +=, -=, *=, ….)
  - Logical Operators (==, ===, !==, <, >=, …)  
- Ternary operator: 
`var react = (age >= 18)? 'You are old enough to vote':'You are too young to vote'`



### Functions
- Functions and Methods (functions declared in objects).
- Functions are them selves objects
	- Objects that can be called (executed) - function objects
	- objects because functions can have properties and methods just like any object.
	- a funtion always return a value (undefined if no return statement)
	
- Declaration - 2 ways:  
```javascript
    function myFunction(){
      return "Hello from javascript";
    }
```   
and function declaration as a statement:  
```
    var myFuntion = function(){
	  return "Hello...";
    };
```
- Hoisting: 
	- Variable and function declarations are hoisted
	- Initialization is not hoisted
	- [Try removing declaration of Y here](http://www.w3schools.com/js/tryit.asp?filename=tryjs_hoisting3)
  - hoisting of functions - Only when declared as a function (not var somename = function...) 

- IIFE (immediately Invoked Function Expression)
```javascript
    (function(){ 
      return "Hello";  
    })();
```


### Function arguments
- Extra arguments are ignored
- Too few arguments and the value will be set to ”undefined”
- The 'arguements' property:
  - `arguments[0]` holds the first input parameter send to the function.
  - all function arguments are accessible through the arguments array.



### Scope
- scope is the set of variables, objects, and functions you have access to
- Javascript has function scope
	- variables declared in body of function is local to that function
	- no other code block (like conditional or loops) have local scope
- A variable declared outside a function, becomes GLOBAL
- A global variable has global scope: All scripts and functions on a web page can access it.
- If a variable is not declared (using var someVar..) it becomes a global variable
	- `myVar = 100;` If this was the first time it was mentioned - it is now a global varible no matter where it was initialized.
- Local variables are deleted when the function is completed.
- Global variables are deleted when you close the page.



### Objects
- `var myObject = {};`
- it is essentially a map or associative array (key/value pairs)
- can contain properties and methods 
```
    var person = {
      'name': 'Hans',
      'age': 41,
      'toString' : function(){
         return this.name + ' ' + this.age;
       }
    };  
```
- dot notation:
  - `person.lastName = 'Petersen';` 
- array notation
  - `person["lastname"] = 'Petersen';`


### Object constructor  
- the object is declared as a function (arguments can be used to set state)
- the new operator runs the function and returns an object with properties/methods

```javascript  
var Person = function (firstName) {
  this.firstName = firstName;
  console.log('Person instantiated');
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');

// Show the firstName properties of the objects
console.log('person1 is ' + person1.firstName); // logs "person1 is Alice"
console.log('person2 is ' + person2.firstName); // logs "person2 is Bob"  
```

### THIS keyword  
- In the global execution context (outside of any function), this refers to the global object "window object".
- else 'this' refers to the containing object  

```
    var Car = {
      age: 10,
      showAge: function(){ return 'this car is '+this.age+' years old'; }
    };

```  
And 
```  
buttons[i].onclick = function(event){
  console.log(this); //this refers to the button that was clicked
};
```


###Javascript arrays
- arrays are much like in java
- 0 indexed list of items
- js arrays can hold mixed datatypes
- `var myArray = ['one', 'two', 'three'];`
- `var myArray = new Array('one', 'two', 'three');`
- [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Global namespace
- bundle variables and functions in a namespace (rather than using global variables)
- put all variables and functions in a shared object:
```
    // global namespace
    var MYAPP = MYAPP || {};
    // sub namespace
    MYAPP.event = {};
```

### Closure
- local variables only live as long as their parent function is running..WRONG
- local variables inside closures (inner functions) live on if that inner function can be accessed
- Usefull for creating private variables (like encapsulation in java)
- usefull for creating modules like this:  

```javascript  
      var counter = (function() {
	  var privateCounter = 0;
	  function changeBy(val) {
	    privateCounter += val;
	  }
	  return {
	    increment: function() {
	      changeBy(1);
	    },
	    decrement: function() {
	      changeBy(-1);
	    },
	    value: function() {
	      return privateCounter;
	    }
	  };   
	})();
```


### Callbacks
- High order functions (functions as arguments to functions)
- to be called at some later point
- callbacks are also closures (they can access the local variables of the enclosing function
- Example the array method: foreach takes a callback argument:  
```
var names = ['Peter', 'Poul', 'Palle', 'Piotr'];
names.foreach(function(eachname, index){
  console.log(index + 1 + '. '+eachname);
});
```

### Exception
- js has a throw keyword  
- js has try catch syntax

```
var validateAge = function(age){
	if(isNaN(age)){
	  throw {name: 'badAge', message: 'Invalid Age'};
	}
	if(age < 0 || age > 100){
	  throw {name: 'badAge', message: 'Age is out of range'};
	}
}
...
try{
  var age = prompt('Enter your age please');
  validateAge(age);
} catch(e){
  alert('ERROR: '+e.message);
}

```



### Javascript strict mode  
JavaScript in strict mode does not allow variables to be used if they are not declared.
- `"use strict"` put this at the top of the script (script level) or at the top of the function statements (function level)
- helps us by throwing an error when we do stupid things ;-)


### a quick look at 2 of the array methods: filter and map
- Look in the demo files for day 1.

## Exercises day 1:
[Get the daily exercise here](https://github.com/CphBusCosSem3/Exercises/blob/master/SP/SP4/Javascript%20ex%201.pdf)




##Day 2: Javascript and DOM
### DOM tree
![alt text](img/DOMtree.gif)  

### Selecting elements
- document.getElementById();
- document.getElementsByTagName()
- document.getElementsByClassName()
- document.querySelector(".myClass");
  - Returns only the first element in the element collection
- querySelector(”p.test”) / (”#container”) / (”a”)
- querySelectorAll(”p”)
  - Returns all of the elements matching. 

### The Style object
- `document.getElementById("demo").style`
- this object can be used to change styling:
- [See the list of styleobject properties](http://www.w3schools.com/jsref/dom_obj_style.asp)


### innerHTML vs. innerText



### Traversing the DOM



### Events



### Modifying DOM



### Forms



## Exercise day 2: 
[Get the daily exercise here](https://github.com/CphBusCosSem3/Exercises/blob/master/SP/SP4/Javascript%20ex%202.pdf)



##Day 3: JQuery

###What is JQuery?
- A javascript library
- `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`
	- Find CDN here: [jquery cdn](https://developers.google.com/speed/libraries/)
- Helps level out browser differences
- Adds overhead if not necessary  
- JQuery IS javascript
	- Inside JQuery code we can use javascript code as we please.

Syntax and structure:  
1. Selectors  
	- filters  
2. Events  
    - Mouse, keyboard, document…  
3. Effects  
    - Custom or predefined

![](img/jQueryExample.png)


###Method Chaining
#####Since all functions return the jquery object:
![](img/chaining.png)

###Selectors
See all selectors here: 
[list of selectors](http://www.w3schools.com/jquery/jquery_ref_selectors.asp)  
- Selectors are a powerful set of tools for matching elements in an HTML document.


###jQuery get/set methods
 - .text( ) 
  - Sets or returns the text content of selected elements
- .html( ) 
  - Sets or returns the content of selected elements (including HTML markup)
- .val( ) 
  - Sets or returns the value of form fields

###JQuery add/remove
- append( ): Inserts content at the end of the selected elements
- prepend(): - Inserts content at the beginning of the selected elements
- after(): Inserts content after the selected elements
- before(): Inserts content before the selected elements
- remove(): Removes the selected element (and its child elements)
- empty(): Removes the child elements from the selected element


###JQuery events
See all events here: [list of events](http://www.w3schools.com/jquery/jquery_ref_events.asp)  


###JQuery effects
See all effects here [list of effects](http://www.w3schools.com/jquery/jquery_ref_effects.asp)



###JQuery with HTML and CSS
See methods for manipulating HTML and CSS here [list of ](http://www.w3schools.com/jquery/jquery_ref_html.asp)


###JQuery css method
Takes an object argument or just 2 strings (key/value):  
```javascript
$(document).ready(function(){
    //alert("test");
    $("#test1").click(function(){
        //alert("test");
        $(this).addClass("red");
    });
    $("#test2").click(function(){
        $(this).toggleClass("red");
    });
    $("#test3").click(function(){
        $(this).css({"background-color": "green", "font-size": "200%"});
        $("p").css("background-color", "yellow");
    });
});
```

###Looping
With $.each(array, callback):
```
var myArr = [52, 97, 33, 45, 22];
    $.each(myArr, function (index, value) {
        console.log(index + ": " + value);
    });
```


## Exercise day 3: 
[Get the daily exercise here](https://github.com/CphBusCosSem3/Exercises/blob/master/SP/SP4/Javascript%20ex%203.pdf)



##Day 4: JSON and AJAX

###XML vs. JSON

###JSON as javascript objects
- JSON.stringify(data) turns a Javascript object into JSON text and stores that JSON text in a string.
- JSON.parse(data) turns a string of JSON text into a Javascript object.

###Classic web application

![](img/classicwebapp.png)  


###AJAX web application
![](img/ajaxwebapp.png)  

###AJAX (Asynchronous Javascript and XML
![](img/async.png)  

###AJAX contains:

- HTML and CSS for presentation
- DOM for dynamic display and interaction
- XML or JSON for interchange of data
- XMLHttpRequest object for asynchronous communication
- JavaScript to glue everything together
- jQuery to hide complexity and differences  


###Same Origin Policy (SOP)
![](img/SOP.png)  

###SOP examples: 
![](img/SOP2.png)  

###Cross Origin Ressource Sharing
####Let the server do the fetching:
![](img/cors.png)

### Javascript promise
[Promises explained here](http://www.html5rocks.com/en/tutorials/es6/promises/)  
![](img/promise.png)
```
Code example here
```
### Javascript the event loop
[Understand the event loop](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)  
JavaScript runtimes contain a message queue which stores a list of messages to be processed and their associated callback functions
![](img/eventloop.png)

### AJAX with JQuery 
####Jquery offers these methods:
- $.ajax()
    - Perform an asynchronous HTTP (Ajax) request. Most “complex” method to use, but also the most flexible.
[Documentation here](http://api.jquery.com/category/ajax/)



### Jquery: the ajax() method

- The jQuery XMLHttpRequest (jqXHR) object returned by $.ajax() is a superset of the browser's native XMLHttpRequest object.  
- The jqXHR implement the Promise interface, giving them all the properties, methods, and behavior of a Promise.

```
        $("#button2").click(function(){
            var url = 'JsonProvider';
            var xhr = $.ajax({
                url: url,
                error: function(xhr, ajaxOptions, thrownError){ alert(xhr.status +" : "+ thrownError);
                },
                dataType: 'json', //Because this is json it gets deserialised into js objects
                success: function(data){ 
                    $.each(data, function() {
                        $.each(this, function(k, v) {
                            console.log(k +" : "+ v);
                        });
                    });
                },
                type: 'GET'
            });
        });
```



####Shorthand methods

- $.load()
	- Load data from the server and place the returned HTML into the matched  element.
	- **$.load( url [, data ] [, complete ] )**
		- url: the resource to get from the server
		- data: (optional) if any request parameters should be added
		- complete: callback function to run when the server response returns.
- $.getJSON()  
	- Load JSON-encoded data from the server using a GET HTTP request.
- $.getScript() 
	- Load a JavaScript file from the server using a GET HTTP request, then executes it.
- $.get()
	- Load data from the server using a HTTP GET request.
	- $.get( url [, data ] [, success ] [, dataType ] )
- $.post()
	- Load data from the server using a HTTP POST request.
	- **$.post( url [, data ] [, success ] [, dataType ] )**
		- url
			- Type: String
			- A string containing the URL to which the request is sent.
		- data
			- Type: PlainObject or String
			- A plain object or string that is sent to the server with the request.
		- success
			- Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
			- A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
		- dataType
			- Type: String
 			- The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).



### $.load() method example

####This example loads the server time from the DateServlet 

- $(selector).load(URL, data, callback);
  1. The URL to load.
  2. Optional data parameter. Specifies a set of querystring key/value pairs to send along with the request.
  3. Optional callback parameter for a function to be executed after load() is completed.

```   <script>
	      $(document).ready(function(){
	        $("button").click(function(){
	       $("#time").load("DateServlet");
	        });
	      });
      </script>
```



### $.post method example

#### This example post data to the server:  
- $.post() takes 2 or 3 arguments
  1. url – the server address
  2. data – the data to be send to the server as an object of key/value pairs
  3. Callback – optional function to run when data is submittet

```
$("#button3").click(function(){
        var person = {name: 'Peter', age: 4, phone: '+4521346578'};
        var url = 'MyServlet'; 
        //$.post(url, data, callback, type);
        $.post(url, person, function(data){ alert('data: '+data); });
    });
```

###$.ajax() method example
####This is used for all the types of operation (by using a config object
[reference here](http://api.jquery.com/category/ajax)
```
var request = $.ajax({
  url: ‘myServlet’,
  type: "GET",
  dataType: "json",
});

request.done(function( msg ) {
  $( "#log" ).html( msg );
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});

```


###Lets Demo
![](img/demoman.png)


### SVG images
- Completely unrelated topic because it is used in the studypoint exercise tomorrow.
- Scalable Vector Graphics (SVG)
- XML-based
    - Look at fourHearts.svg and 
    - Countries_Europe.svg 
- Look at them in a text editor
- Look at how to select svg pars by id (the g-tags)

![](img/svgcode.png)


## Exercise day 4: 
[Get the daily exercise here](https://github.com/CphBusCosSem3/Exercises/blob/master/SP/SP4/Javascript%20ex%204.pdf)

