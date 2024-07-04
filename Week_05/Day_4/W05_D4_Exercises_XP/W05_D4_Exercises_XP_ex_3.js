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
function getBoldItems(){
    let _get_bold_collection = document.getElementsByTagName('strong');
    for (item of _get_bold_collection){
        allBoldItems.push(item);
    };
};

getBoldItems();

// 3
function highligth(elements_arr, _color="blue"){
    for (element of elements_arr){
    element.style.color = _color;
    };
};

highligth(allBoldItems);

// 4
function returnItemsToDefault(items_arr, default_color="black"){
    highligth(items_arr, default_color)
};

returnItemsToDefault(allBoldItems);

// 5
let _target_tag = document.getElementsByTagName("p")[0];

_target_tag.addEventListener("mouseover", function (){
    highligth(allBoldItems);
    }
);

_target_tag.addEventListener("mouseout", function (){
    returnItemsToDefault(allBoldItems);
    }
);