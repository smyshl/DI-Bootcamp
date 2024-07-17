/*
Exercise 2: Advanced Module Usage using ES6 module syntax
Instructions
    Create a file named data.js.
    Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.
    Export the array using the ES6 module syntax.
    Create another file named app.js.
    In app.js, import the array of person objects from the data.js module.
    Write a function that calculates and prints the average age of all the persons in the array.
    Use the imported array and the average age function in app.js.
    Run app.js and confirm that the average age is correctly calculated and displayed.
*/

export let people = [
    {"name": "John", "age": 25, "location": "New-York"},
    {"name": "Ben", "age": 18, "location": "Tel-Aviv"},
    {"name": "Ron", "age": 41, "location": "Paris"},
];