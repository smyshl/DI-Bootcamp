/*
Exercice 4 : Volume of a sphere
Instructions

    Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

<!doctype html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <title>Volume of a Sphere</title> 
        <style>  
            body {
                padding-top:30px;
            } 

            label,input {
                display:block;
            }  
        </style> 
    </head> 
    <body> 
        <p>Input radius value and get the volume of a sphere.</p> 
        <form  id="MyForm"> 
            <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
            <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
            <input type="submit" value="Calculate" id="submit">    
        </form> 
    </body> 
</html> 
*/

// 1
let _form = document.getElementById("MyForm");
let _radius = document.getElementById("radius");
let _volume = document.getElementById("volume");

console.log(_form, _radius, _volume);

function _form_submit(e){
    e.preventDefault();
    let radius = Number(_radius.value.trim());

    if (isNaN(radius)){
        alert("Please enter numeric value of the radius");
        e.target.reset();
    } else {
        _volume.value = 4 / 3 * Math.PI * radius ** 3;
    };

    console.log(radius);
};

_form.addEventListener("submit", _form_submit);
