/*
Exercise 2 : Work with forms
Instructions

Copy the code below, into a structured HTML file:

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul>

    Retrieve the form and console.log it.
    Retrieve the inputs by their id and console.log them.
    Retrieve the inputs by their name attribute and console.log them.
    When the user submits the form (ie. submit event listener)
        use event.preventDefault(), why ?
        get the values of the input tags,
        make sure that they are not empty,
        create an li per input value,
        then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>
*/

// 1
let _form = document.getElementsByTagName("form")[0];
console.log(_form);

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
    } else {
        let _li_fname = document.createElement("li");
        let _li_lname = document.createElement("li");

        _li_fname.textContent = "First name of the user: " + first_name;
        _li_lname.textContent = "Last name of the user: " + last_name;

        _ul.appendChild(_li_fname);
        _ul.appendChild(_li_lname);

        e.target.requestSubmit();
        e.target.reset();
    };
};

_form.addEventListener("submit", _form_submit);

