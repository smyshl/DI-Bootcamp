let _color_set = [
    "red",
    "orangered",
    "orange",
    "yellow",
    "yellowgreen",
    "lightgreen",
    "green",
    "turquoise",
    "cyan",
    "lightskyblue",
    "dodgerblue",
    "blue",
    "darkblue",
    "indigo",
    "darkmagenta",
    "violet",
    "lightpink",
    "lightgray",
    "gray",
    "black",
    "white"
];

let _left_grid = document.getElementById("left_container");
let _right_grid = document.getElementById("right_container");
let _selected_color = ''

function _make_element(place, type, _class='', _color=''){
    let element = document.createElement(type);
    if (_class){
        element.setAttribute("class", _class);
    };

    if (_color){
        element.style.backgroundColor = _color;
    };

    place.appendChild(element);

};


function _set_boxes(amount, place, type, _class){
    for (let i = 1; i <= amount; i++){

        if (_class === "left_grid_item"){
            _make_element(place, type, _class, _color_set[i - 1])
        } else {
            _make_element(place, type, _class)
        };

    };
};


_set_boxes(21, _left_grid, "div", "left_grid_item");
_set_boxes(60 * 48, _right_grid, "div", "right_grid_item");

_left_grid.addEventListener('click', function(e){
    if (e.target.classList.contains("left_grid_item")){
        _selected_color = e.target.style.backgroundColor;


        _right_grid.addEventListener('mousedown', function(e){
            if (e.target.classList.contains("right_grid_item")){
                e.target.style.backgroundColor = _selected_color;  

                _right_grid.addEventListener('mouseover', function(e){
                    if (e.target.classList.contains("right_grid_item")){
                        e.target.style.backgroundColor = _selected_color;  
                    };
                });

                _right_grid.addEventListener('mouseup', function(e){
                    if (e.target.classList.contains("right_grid_item")){
                        _right_grid.removeEventListener('mouseover', function(e){
                            if (e.target.classList.contains("right_grid_item")){
                                e.target.style.backgroundColor = _selected_color;  
                            };
                        });
                    };
                });

            };
        });






    };
})
