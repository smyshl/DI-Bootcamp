/*
Exercise 5 : Users
Instructions

Create a new structured HTML file and a new Javascript file

<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>

    Add the code above, to your HTML file
    Using Javascript:
        Retrieve the div and console.log it
        Change the name “Pete” to “Richard”.
        Delete the second <li> of the second <ul>.
        Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
    Using Javascript:
        Add a class called student_list to both of the <ul>'s.
        Add the classes university and attendance to the first <ul>.
    Using Javascript:
        Add a “light blue” background color and some padding to the <div>.
        Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
        Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
        Change the font size of the whole body.
    Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

//2.1
var _div = document.getElementsByTagName("div");
console.log(_div)

//2.2
var _li = document.getElementsByTagName("li")[1].textContent;
document.getElementsByTagName("li")[1].textContent = "Richard";

//2.3
document.getElementsByTagName("ul")[1].children[1].remove()

//2.4
for (ul of document.getElementsByTagName("ul")){
    ul.children[0].textContent = "Eugene"
};

//3.1
for (ul of document.getElementsByTagName("ul")){
    console.log(ul);
    ul.classList.add("student_list");
};

//3.2
document.getElementsByTagName("ul")[0].classList.add("university", "attendance");

//4.1
document.getElementsByTagName("div")[0].style.backgroundColor = "lightblue";
document.getElementsByTagName("div")[0].style.paddingLeft = "5em";

//4.2
var li_coll = document.getElementsByTagName("li")
for (index in li_coll){
    if (li_coll[index].textContent === "Dan"){
        break
    };
};
li_coll[index].style.display = "none"

//4.3
for (index in li_coll){
    if (li_coll[index].textContent === "Richard"){
        break
    };
};
li_coll[index].style.border = "black solid 1px"

//4.4
document.getElementsByTagName("body")[0].style.fontSize = "1.3em"



