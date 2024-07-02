/*
Exercise 7 : My Book List
Instructions

The point of this challenge is to display a list of two books on your browser.
    In the body of the HTML page, create an empty section:
    <section class="listBooks"></section>
    In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
        title,
        author,
        image : a url,
        alreadyRead : which is a boolean (true or false).
    Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
    Requirements : All the instructions below need to be coded in the js file:
        Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
        For each book :
            You have to display the book’s title and the book’s author.
            Example: HarryPotter written by JKRolling.
            The width of the image has to be set to 100px.
            If the book is already read. Set the color of the book’s details to red.
*/

let allBooks = [
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        image: "https://i.guim.co.uk/img/media/278c0fc5182d85b4b547c90f4eb61495f35edcdf/2_0_459_276/master/459.png?width=620&dpr=2&s=none",
        alreadyRead: true,
    },
    {
        title: "Three Men in a Boat",
        author: "Jerome K Jerome",
        image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/3/1393850330743/three-men-boat-jerome-011.jpg?width=620&dpr=2&s=none",
        alreadyRead: false,
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        image: "https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2014/1/3/1388750788705/Moby-Dick-011.jpg?width=620&dpr=2&s=none",
        alreadyRead: false,
    }
];

let target_object = document.getElementsByTagName("section")[0]

for (book of allBooks){
    console.log(book.title);
    let _div = document.createElement("div");
    let _p = document.createElement("p");
    let _a = document.createElement("img");

    _p_text_node = document.createTextNode(book.author + " written by " + book.title);

    target_object.appendChild(_div);

    target_object.lastElementChild.appendChild(_p);    
    target_object.lastElementChild.lastElementChild.appendChild(_p_text_node);

    target_object.lastElementChild.appendChild(_a);    
    target_object.lastElementChild.lastElementChild.setAttribute("src", book.image)
    target_object.lastElementChild.lastElementChild.style.width = "100px"

    if (book.alreadyRead == true){
        target_object.lastElementChild.style.color = "red"
    };
};

