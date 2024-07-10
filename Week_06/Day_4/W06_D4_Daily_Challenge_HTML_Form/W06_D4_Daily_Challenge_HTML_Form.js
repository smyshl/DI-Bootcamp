/*
Instructions
    Create a form with two fields (name, last name) and a submit button.
    When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
    The output should be:
*/
let _form = document.getElementById("my_form");
let _fname_inp = document.getElementById("first_name");
let _lname_inp = document.getElementById("last_name");

function add_data(e){
    e.preventDefault();
    let output = {};
    output.name = _fname_inp.value.trim();
    output.lastname = _lname_inp.value.trim();

    let _new_p = document.createElement("p");
    _new_p.textContent = JSON.stringify(output);
    document.getElementsByTagName("body")[0].appendChild(_new_p);

    e.target.reset();
}

_form.addEventListener("submit", add_data);