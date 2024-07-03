/*
Exercise 1 : Change the article
Instructions

Copy the code below, into a structured HTML file:

<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article>

    Using a DOM property, retrieve the h1 and console.log it.
    Using DOM methods, remove the last paragraph in the <article> tag.
    Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
    Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
    Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
    BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
    BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
*/

// 1
let _h1 = document.querySelector("h1");
console.log(_h1);

// 2
let _p = document.getElementsByTagName("p");
_p[_p.length - 1].remove();

// 3
let _h2 = document.querySelector("h2");
_h2.addEventListener("click", function () {
    _h2.style.backgroundColor = "red"
});

// 4
let _h3 = document.querySelector("h3");
_h3.addEventListener("click", function () {
    _h3.style.display = "none"
});

// 5
let _button = document.getElementById("btn");
_button.addEventListener("click", function () {
    for (_tag of _p){
        _tag.style.fontWeight = "bold"
        // console.log(_tag);
    };
});

// 6
_h1.addEventListener("mouseover", function () {
    _h1.style.fontSize = Math.floor(Math.random() * 100) + "px"
    // console.log(_h1);
});

// 7
let _p_1 = _p[1]
_p_1.addEventListener("mouseover", function () {
    _p_1.style.opacity = 1;
    _p_1.style.transition = "opacity 1s ease-out";
    _p_1.style.opacity = 0;
});
// _p_1.style.opacity = 1;
// _p_1.style.transition = "opacity 1s ease-out"
// _p_1.style.opacity = 0

console.log(_p[1]);



// _h1.addEventListener("mouseout", function () {
//     _h1.style.fontSize = ""
//     console.log(_h1);
// });

Math.floor(Math.random() * 100)

