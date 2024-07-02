/*
Instructions

In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.
    Create an array which value is the planets of the solar system.
    For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
    Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
    Finally append each div to the <section> in the HTML (presented below).
    Bonus: Do the same process to create the moons.
        Be careful, each planet has a certain amount of moons. How should you display them?
        Should you still use an array for the planets ? Or an array of objects ?

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Create a solar system</title>
        <style>
            body {
                background-color: black;
                padding: 10px;
            }
            .planet {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                text-align: center;
                padding: 10px;
                position: relative;
                border: 2px solid white;
            }
            .moon {
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: rgb(237, 237, 237);
                border: 5px solid red;
            }
        </style>
    </head>
    <body>

    <section class="listPlanets"></section>

    <script src="..."></script>
    </body>
</html>
*/

let planets_arr = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];

let moons = {
    Mercury: [],
    Venus: [],
    Earth: ["Moon"],
    Mars: ["Phobos", "Deimos"],
    Jupiter: ["Io", "Europa", "Ganymede", "Callisto"],
    Saturn: ["Titan", "Rhea", "Iapetus", "Dione", "Tethys", "Enceladus", "Mimas"],
    Uranus: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    Neptune: ["Triton", "Nereid", "Proteus", "Larissa", "Hippocamp"]
  };

  function rand_int(){
    return Math.floor(Math.random() * 255)
  };

  function set_tag(target_place, obj_to_set, type, left_pos){
    let _div = document.createElement("div");
    let _div_text_node = document.createTextNode(obj_to_set);
    target_place.appendChild(_div);
    target_place.lastElementChild.appendChild(_div_text_node);

    target_place.lastElementChild.setAttribute("class", type);

    if (type === "planet"){
        var _color = 'rgb(' + rand_int() + ", " + rand_int() + ", " + rand_int() + ')';
        target_place.lastElementChild.style.backgroundColor = _color;
    }else{
        target_place.lastElementChild.style.left = left_pos
    };
};

  for (planet of planets_arr){
    var target_object = document.getElementsByTagName("section")[0];
    set_tag(target_object, planet, "planet");
        
    target_object = target_object.lastElementChild;
    left_shift = 0

    for (moon of moons[planet]){
        set_tag(target_object, moon, "moon", left_shift + "px");
        left_shift += 70
    };
  };
