/*
Instructions
You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
Note: The API contains 83 different characters
    Create your HTML file, and add the relevant elements.
    In your JS file, create your functions :
        to retrieve the elements from the DOM.
        to get the data from the API (star wars characters).
        to display the info on the DOM: the name, height, gender, birth year, and home world of the character.
    Display the data using AJAX. Make sure to display a loading message as follows:
    You can use any of these animation icons for the loading message.
    Fontawesome link :
    https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
*/

let character_info = {
    "name": document.getElementById("name"),
    "height": document.getElementById("height"),
    "gender": document.getElementById("gender"),
    "birth_year": document.getElementById("birth_year"),
    "homeworld": document.getElementById("home_world")
};

let search_button = document.getElementById("search_button");

let people_url_template = 'https://www.swapi.tech/api/people/';

function make_people_url(){
    let chosen_people = 1 + Math.floor(Math.random() * 82);
    return people_url_template + chosen_people;
}

async function get_data_from_api(e){

    render_data();

    let person_info = {'name': 'No such character'};
    let planet_name;

    try {       // trying to fetch character data from API
        let response = await fetch (make_people_url());
        if (response.ok) {
            let data = await response.json();
            person_info = data.result.properties;

            try {       // trying to fetch homeworld data from API
                response = await fetch (person_info.homeworld)
                if (response.ok) {
                    data = await response.json()
                    planet_name = data.result.properties.name
                }else {
                    throw new Error ("Response planet data NOT ok")
                }
            } catch (error) {
                console.log(error);
            };

            person_info.homeworld = planet_name;
            render_data(person_info)

        } else {
            render_data(person_info);
            throw new Error ("Response character data NOT ok")
        }
    } catch (error) {
        console.log(error);
    };
};

function render_data(_json = 0){

    let people_properties = Object.keys(character_info);

    if (_json != 0){

        for (key of people_properties) {
            character_info[key].textContent = _json[key];
        }
    } else {
        for (key of people_properties) {
        character_info[key].innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';
        }
    }
};

search_button.addEventListener('click', get_data_from_api)