/*
Exercise 1: Timer
Instructions

Using this HTML code:

<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>

Part I
    In your Javascript file, using setTimeout, call a function after 2 seconds.
    The function will alert “Hello World”.
Part II
    In your Javascript file, using setTimeout, call a function after 2 seconds.
    The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
Part III
    In your Javascript file, using setInterval, call a function every 2 seconds.
    The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
    The interval will be cleared (ie. clearInterval), when the user will click on the button.
    Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
*/

// 1
function alert_hello_world(){
    alert("Hello World")
};

setTimeout(alert_hello_world, 5000);

// 2
function add_paragraph(){
    let _target_place = document.getElementById("container");
    let _p = document.createElement("p");
    _p.textContent = "Hello World"
    _target_place.appendChild(_p)
};

setTimeout(add_paragraph, 2000)

// 3
let _interval_timer = setInterval(add_paragraph, 2000);

let _check_paragraph = setInterval(function (){
    if (document.getElementsByTagName("p").length == 5){
        stop_adding();
    };
console.log("checking paragraphs");
}, 1000)

function stop_adding(){
    clearInterval(_interval_timer);
    clearInterval(_check_paragraph);
};

let _button = document.getElementById("clear");
_button.addEventListener("click", stop_adding);


