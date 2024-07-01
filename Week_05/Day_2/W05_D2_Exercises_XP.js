/*
Exercise 1 : List of people
Instructions

const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review about arrays
    Write code to remove “Greg” from the people array.
    Write code to replace “James” to “Jason”.
    Write code to add your name to the end of the people array.
    Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
    Write code to make a copy of the people array using the slice method.
        The copy should NOT include “Mary” or your name.
        Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
        Hint: Check out the documentation for the slice method
    Write code that gives the index of “Foo”. Why does it return -1 ?
    Create a variable called last which value is the last element of the array.
    Hint: What is the relationship between the index of the last element in the array and the length of the array?

Part II - Loops

    Using a loop, iterate through the people array and console.log each person.
    Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
    Hint: take a look at the break statement in the lesson.
*/

const people = ["Greg", "Mary", "Devon", "James"];

console.log("Given array : ", people);

console.log("Remove", people.shift(), ":", people);

people[2] = "Jason";
console.log("Replace “James” to “Jason”:", people);

people.push("Eugene");
console.log("Add my name to the end of array”:", people);

console.log("Mary's index:", people.indexOf("Mary"));

const people_1 = people.slice(people.indexOf("Mary") + 1, people.indexOf("Eugene"));
console.log("New array without Mary and me:", people_1);

console.log("Index of 'Foo':", people_1.indexOf("Foo"));
// It returns -1 because there is no "Foo" in array

var last = people_1.at(-1);
var last_1 = people_1[people_1.length - 1];
console.log("The last element of array is:", last);
console.log("The last element of array is still:", last_1);

for (index in people){
    console.log(index, people[index]);
}


for (i = 0; i < people.indexOf("Devon"); i++){
    console.log(i, people[i]);
}


for (person of people){
    if (person != "Devon"){
        console.log(people.indexOf(person), person);   
    } else {
        break};
}


