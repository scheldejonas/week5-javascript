/* 
 
 */

//var testDiv = document.getElementById("test");
//testDiv.innerHTML = "Dette er den indsatte tekst i vores div";
//
//var items = document.getElementsByClassName("items");
//for(var i = 0; i < items.length; i++){
//    console.log(items[i]);
//}

//var imgs = document.getElementsByTagName("img");
////console.log(imgs[0]);
//var counter = 0;
//
//(function changeImg(){
//    var images = ["img/img1.png", "img/img2.png", "img/img3.jpg", "img/img4.jpg"];
//    imgs[0].setAttribute("src", images[counter]);
//    counter++;
//    if(counter > 2)
//        counter = 0;
//    setTimeout(changeImg, 3000);
//})();

//var li = document.querySelectorAll("li"); // vs: document.querySelector("li");
//console.log(li);

//var divTest = document.getElementById("test");
//var styleObject = divTest.style;
////styleObject.backgroundColor = "red";
//
////divTest.setAttribute("style", "border: 3px solid black");
////styleObject.cssText = "border: 5px solid orange";
//divTest.className = "greenBorder";


//var ulChildren = document.body.children;
//var ulChildren = document.querySelector("body").childNodes;
//console.log(ulChildren[1]);

//var button = document.getElementById("test");
//button.onclick = function(){
//    alert("button was clicked");
//};
//button.onmouseenter = function(){
//    alert("button was hovered");
//};

//var divElement = document.createElement('div');
//divElement.innerText = "Hellloooooooooooo";
////Sæt mit nye element fast på DOM
//var parent = document.getElementById("test");
//parent.appendChild(divElement);

var liElement = document.createElement('li');
var textNode = document.createTextNode('Dette er den ekstra text node');
liElement.appendChild(textNode);
var list = document.getElementsByTagName("ul")[0];
//console.log(list.lastChild);
list.insertBefore(liElement, list.firstChild);






