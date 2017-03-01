
##Day 3: JSON and AJAX

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
- jQuery to hide complexity and differences or modern browsers support fetch()

```
fetch('https://davidwalsh.name/demo/arsenal.json').then(function(response) { 
	// Convert to JSON
	return response.json();
}).then(function(j) {
	// Yay, `j` is a JavaScript object
	console.log(j); 
});
```  

[Reference to more about the new javascript **fetch()** method](https://davidwalsh.name/fetch)  

##Demo ajax from java servlet  

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


## Exercise day 3: 
[Get the daily exercise here](../exercises/ajaxandjson.pdf)