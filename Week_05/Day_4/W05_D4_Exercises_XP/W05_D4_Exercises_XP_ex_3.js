/*
Exercise 3 : Transform the sentence
Instructions

Add this sentence to your HTML file then follow the steps :

<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

In the JS file:
    Declare a global variable named allBoldItems.
    Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
    Create a function called highlight() that changes the color of all the bold text to blue.
    Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
    Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

*/

// 1
let allBoldItems = [];

// 2
let _fname = document.getElementById("fname")
let _lname = document.getElementById("lname")
let _submit = document.getElementById("submit");
console.log(_fname);
console.log(_lname);
console.log(_submit);

// 3
console.log(_form.elements['firstname']);
console.log(document.getElementsByName('lastname')[0]);


// 4
function _form_submit(e){
    e.preventDefault();
    let _ul = document.getElementsByTagName("ul")[0];
    let first_name = _fname.value.trim();
    let last_name = _lname.value.trim();
    if (first_name === "" || last_name === ""){
        alert("Please enter valid first an last names");
        // return ""
    } else {
        let _li_fname = document.createElement("li");
        let _li_lname = document.createElement("li");

        _li_fname.textContent = "First name of the user: " + first_name;
        _li_lname.textContent = "Last name of the user: " + last_name;

        _ul.appendChild(_li_fname);
        _ul.appendChild(_li_lname);

        console.log(e.target);

    };
};

_form.addEventListener("submit", _form_submit);


// // console.log(_submit);