// @author Thomas Hartmann - tha@cphbusiness.dk created on Feb 26, 2017 
var app = document.getElementById("app");
var content = '<div id="quotecontainer"></div>';
content += '<button id="quoteButton">Click to get new quote</button>';
content += '<div id="autoquotecontainer"></div>';
app.innerHTML = content;
var container = document.getElementById("quotecontainer");
var button = document.getElementById("quoteButton");
button.onclick = function () {
    fetch("http://localhost:8084/ajax_json_solution/QuoteControl", {
        method: 'get'
    }).then(function (response) {
        //console.log(response.text());
        return response.text();
    }).then(function (text) {
        console.log(text);
        container.innerHTML = text;
    });
};
var autocontainer = document.getElementById("autoquotecontainer");
(function(){
    setInterval(function () {
        var url = "http://localhost:8084/ajax_json_solution/QuoteControl";
        fetch(url, {method: 'get'})
            .then(function (response) {
                return response.text();
            })
            .then(function(text){
                autocontainer.innerHTML = text;
            });
    }, 10000);
})();


