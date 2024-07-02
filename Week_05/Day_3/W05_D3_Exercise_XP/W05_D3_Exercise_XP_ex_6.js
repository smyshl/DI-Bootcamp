/*
Exercise 6 : Change the navbar
Instructions

Create a new structured HTML file and a new Javascript file

<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>

    Add the code above, to your HTML file
    Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
    We are going to add a new <li> to the <ul>.
        First, create a new <li> tag (use the createElement method).
        Create a new text node with “Logout” as its specified text.
        Append the text node to the newly created list node (<li>).
        Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
    Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
*/

//6.2
document.getElementsByTagName("div")[0].setAttribute("id", "socialNetworkNavigation");

//6.3
let new_li_element = document.createElement("li");
let new_text_node = document.createTextNode("Logout");
new_li_element.appendChild(new_text_node);
document.getElementsByTagName("ul")[0].appendChild(new_li_element)

//6.4
console.log("First element:", document.getElementsByTagName("ul")[0].firstElementChild.textContent);
console.log("Last element:", document.getElementsByTagName("ul")[0].lastElementChild.textContent);


// let _ul = document.getElementsByTagName("ul")[0];
// _ul.appendChild();
// var 


// _ul.lastElementChild.textContent = "Logout"
// console.log(_ul.lastElementChild.textContent);
// body.appendChild(document.getElementsByTagName("ul").createElement("Logout"))
// document.getElementsByTagName("ul").lastElementChild.textContent = "Logout"