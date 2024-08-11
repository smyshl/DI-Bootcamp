/*
Daily Challenge: Type Guard with Union Types
What You Will Learn:
    How to use type guards in TypeScript.
    How to handle different types of inputs from a union type.
    How to perform specific operations based on the input type.
Time Needed: 30 minutes
Description: Create a function that uses type guards to handle different types of inputs
from a union type and perform specific operations based on the input type.

Exercise:
Create a function processInput that accepts an input of type number | string | boolean.
The function should perform the following operations:
    If the input is a number, return its square.
    If the input is a string, return the uppercase version of the string.
    If the input is a boolean, return the negated value.
*/

function processInput (input: number | string | boolean): number | string | boolean {

    switch (typeof input) {
        case 'number' :
            return input ** 2;
        case 'string' :
            return input.toUpperCase();
        case 'boolean' :
            return !input;
    };
};

console.log(processInput(25));
console.log(processInput('Daily Challenge: Type Guard with Union Types'));
console.log(processInput(false));