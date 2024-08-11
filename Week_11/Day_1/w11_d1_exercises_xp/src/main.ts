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


/*
Exercise 5: Function Overloading
What You Will Learn:
    How to use function overloading in TypeScript.
    How to define functions that can accept different types of arguments.
Description: Use function overloading to define a function that can accept different types and numbers of arguments.

Instructions
Create a function called add that can add two numbers together or concatenate two strings.
*/

function add(num_1: number, num_2: number): number;
function add(str_1: string, str_2: string): string;
function add(a: any, b: any): any {
    return a + b;
};

console.log(add(3, 4));
console.log(add('3', '4'));


/*
Exercise 6: Tuple Types
What You Will Learn:
    How to use tuple types in TypeScript.
    How to define functions that return multiple values of different types.
Description: Use tuple types to define a function that returns multiple values of different types.

Instructions
Create a function getDetails that takes a name and age as input and returns a tuple containing
the input values and a greeting message.
*/

function getDetails(username: string, age: number): [string, number, string] {
    return [username, age, `Hello, ${username}! Your age is ${age}`]
};

console.log(getDetails('Mike', 9));


/*
Exercise 7: Object Type Annotations
What You Will Learn:
    How to use object type annotations in TypeScript.
    How to define the shape of an object using an interface.
Description: Use object type annotations to define the shape of an object.

Instructions
Create a function createPerson that returns an object representing a person,
with properties for name and age, using object type annotations.
*/


function createPerson (firstName: string, age: number): object {

    let person: {
        firstName: string,
        age: number
    };

    person = {firstName, age}

    return person;
};

console.log(createPerson('John', 89));


/*
Exercise 8: Type Assertions
What You Will Learn:
    How to use type assertions in TypeScript.
    How to cast variables to specific types when TypeScript cannot infer the type.
Description: Use type assertions to specify the type of a variable that TypeScript cannot infer.

Instructions
Given an HTML element, use a type assertion to cast it to a specific type and access its properties.
*/

let inputElement = document.getElementById("inputId") as HTMLInputElement;
console.log("Value of input element:", inputElement.value);


/*
Exercise 9: switch Statement with Complex Conditions
What You Will Learn:
    How to use a switch statement in TypeScript.
    How to handle multiple conditions using complex cases in a switch statement.
Description: Use a switch statement with complex conditions to determine different behaviors.

Instructions
Create a function getAction that takes a string representing a user role and returns an action for the user.
Use a switch statement with complex conditions to handle multiple roles.
*/

function getAction (role: 'doctor' | 'teacher' | 'farmer' | 'artist'): string {

    switch (role) {
        case 'doctor' :
            return 'treats';
        case 'teacher' :
            return 'educates';
        case 'farmer' :
            return 'grows';
        case 'artist' :
            return 'creates';                     
        default:
            return `${role} - no such role`;
    };
};

let role: any = 'teacher';

console.log(role, getAction(role));


/*
Exercise 10: Function Overloading with Default Parameters
What You Will Learn:
    How to use function overloading in TypeScript.
    How to create overloaded functions with default parameters.
Description: Create an overloaded function with a default parameter.

Instructions
Create an overloaded function greet that can either take a name and greet the person,
or take no arguments and return a default greeting.
*/

function greet (): string;
function greet(firstName: string): string;
function greet(firstName?: string): string {
    if (typeof firstName === 'undefined'){
        return 'Hello unknown user!'
    } else return `Hello my friend ${firstName}!`;
};

console.log(greet());
console.log(greet('Pete'));