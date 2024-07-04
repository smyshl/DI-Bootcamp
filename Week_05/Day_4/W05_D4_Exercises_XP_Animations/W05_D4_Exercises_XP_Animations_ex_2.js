/*
Exercise 2 : Move the box
Instructions

<!DOCTYPE html>
    <html>
    <head>
        <style>
        #container {
          width: 400px;
          height: 400px;
          position: relative;
          background: yellow;
        }
        #animate {
          width: 50px;
          height: 50px;
          position: absolute;
          background-color: red;
        }
        </style>
    </head>
    <body>
        <p><button onclick="myMove()">Click Me</button></p>
        <div id="container">
          <div id="animate"></div>
        </div>
    </body>
    </html>

    Copy the code above, to a structured HTML file.
    In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container
Hint : check out the demonstration in the Course Noted named JS Functions
*/

let _container = document.getElementById("container");
let _animated_box = document.getElementById("animate");

let _move_to = _container.offsetWidth - _animated_box.offsetWidth;

function myMove(){
    _animated_box.style.left = "0px";
    let _box_position = 0;
    setInterval(function (){
    if (_box_position < _move_to){
        _box_position++;
        _animated_box.style.left = _box_position + "px";
    };
}, 1)
};

