/*
Exercise 1: Hello, World! Program
What You Will Learn:
    How to create a simple TypeScript program.
    How to define and log variables of different types.
Description: Create a simple “Hello, World!” program in TypeScript.

Instructions
Create a TypeScript program that logs the message “Hello, World!” to the console.
*/

console.log("Hello, World!");


/*
Exercise 2: Type Annotations
What You Will Learn:
    How to use type annotations in TypeScript.
    How to define and log variables with specified types.
Description: Use type annotations to specify the types of variables.

Instructions
Define a variable age of type number and a variable name of type string, and log them to the console.
*/

let age: number = 10;
let username: string;
username = 'Mike';

console.log("Name:", username, " Age:", age);


/*
Exercise 3: Union Types
What You Will Learn:
    How to use union types in TypeScript.
    How to define variables that can hold either a string or a number.
Description: Use union types to declare a variable that can hold either a string or a number.

Instructions
Define a variable id that can be either a string or a number.
*/

let id: string | number;


/*
Exercise 4: Control Flow with if...else
What You Will Learn:
    How to use if...else statements to control program flow.
    How to handle different conditions using if...else statements.
Description: Use if...else statements to control the flow of a program.

Instructions
Write a function that takes a number as input and returns a string
indicating whether the number is positive, negative, or zero.
*/

let exercise_4_func: (num: number) => string;

exercise_4_func = function(num: number) {

    let result: 'positive' | 'negative' | 'zero'

    result = num === 0 ? 'zero'
            : num > 0 ?  'positive'
            : 'negative'

    return `${num} is ${result}`;
}

console.log(exercise_4_func(0));
console.log(exercise_4_func(-1));
console.log(exercise_4_func(1));



