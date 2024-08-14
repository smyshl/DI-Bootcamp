/*
Exercise 1: Class with Access Modifiers
What You Will Learn:
    How to use different access modifiers in a class (private, protected, and public).
    How to create a class with a constructor to initialize properties.
    How to create a method that returns information based on the class’s properties.
Description: Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.

Instructions
Create a class Person with the following properties:
    A private property firstName of type string.
    A private property lastName of type string.
    A public property age of type number.
    A protected property address of type string.
    Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.
In this exercise, a class Person is created with different access modifiers for its properties: private for firstName and lastName, public for age, and protected for address.
The constructor initializes these properties, and the method getFullName returns the full name of the person.
*/

class Person {
    private _firstName: string;
    private _lastName: string;
    public _age: number;
    protected _address: string;

    constructor (firstName: string, lastName: string, age: number, address: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._address = address;
    };

    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    };
};

let john: Person = new Person ("John", "Smith", 35, "Israel");

console.log("Full name:", john.getFullName());


/*
Exercise 2: Extending Interfaces
What You Will Learn:
    How to create an interface with common properties and methods.
    How to extend an interface to create another interface with additional properties.
    How to implement an interface in a class.
Description: Create an interface Vehicle with common properties and methods, then create another interface Car that extends Vehicle and includes additional properties specific to a car.

Instructions
Create an interface Vehicle with properties make and model, both of type string, and a method start that returns a string. Then create an interface Car that extends Vehicle
and includes an additional property numberOfDoors of type number.
In this exercise, an interface Vehicle is created with common properties (make and model) and a method (start).
Another interface Car extends Vehicle and includes an additional property numberOfDoors. A class Sedan implements the Car interface and provides the implementation for the start method.
*/

interface VehicleInterface {
    make: string;
    model: string;
    start(): string;
};

interface CarInterface extends VehicleInterface {
    numberOfDoors: number;
};


class Car implements CarInterface {
    make: string;
    model: string;
    numberOfDoors: number;
    
    constructor (make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;        
    };

    start(): string {
        return `Model ${this.model} made by ${this.make} has ${this.numberOfDoors} doors`;
    };
};

let mustang: Car = new Car ("Ford", "Mustang", 4);

console.log(mustang.start());


/*
Exercise 3: Using Intersection Types
What You Will Learn:
    How to use intersection types to combine multiple types into a new type.
    How to create a function that returns an object with properties from both input objects.
    How to use the spread operator to combine properties from different objects.
Description: Create a function that combines two objects using intersection types and returns a new object containing all properties from both objects.

Instructions
Create a function combineObjects that accepts two objects and combines them using intersection types.
The function should return a new object containing all properties from both input objects.
In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types.
The function uses the spread operator to combine the properties of the two objects.
*/

type Object_1 = {
    prop_1_1: string;
    prop_1_2: number;
}

type Object_2 = {
    prop_2_1: boolean;
    prop_2_2: string | number | boolean;
}

function combineObjects (obj_1: Object_1, obj_2: Object_2): Object_1 & Object_2 {
    let obj_3: Object_1 & Object_2 = {...obj_1, ...obj_2}
    return obj_3;
};

let obj_1: Object_1 = {
    prop_1_1: "string",
    prop_1_2: 100,    
};

let obj_2: Object_2 = {
    prop_2_1: true,
    prop_2_2: "string | number | boolean;",
};

console.log(combineObjects(obj_1, obj_2));


/*
Exercise 4: Using Generics with Classes
What You Will Learn:
    How to create a generic class that manages a stack data structure.
    How to implement methods like push, pop, and isEmpty in the stack.
    How to use generics to make the class work with different types.
Description: Create a generic class Stack that represents a stack data structure. The class should support operations like push, pop, and isEmpty.

Instructions
Create a generic class Stack<T> that supports the following operations:

    A push method that adds an element of type T to the stack.
    A pop method that removes the top element from the stack and returns it.
    An isEmpty method that checks whether the stack is empty.

In this exercise, a generic class Stack<T> represents a stack data structure. The class supports operations such as push, pop, and isEmpty.
The push method adds an element of type T to the stack, the pop method removes and returns the top element, and the isEmpty method checks if the stack is empty.
*/

class Stack<T> {
    private stack: T[] = [];

    constructor (private stackSize: number = 5) {}

    push (element: T): void {
        if (this.stack.length < this.stackSize) {
            this.stack.push(element);
        } else {
            console.log("The stack is full");  
        };
    };

    pop (): T | void {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            console.log("The stack is empty");  
        };        
    };

    isEmpty (): boolean {
        if (this.stack.length === 0) {
            return true
        } else return false;
    };
;}

let stack_1 = new Stack(3);

console.log("Stack is empty?", stack_1.isEmpty());
stack_1.push(1);
stack_1.push(1);
stack_1.push(1);
stack_1.push(1);

stack_1.pop();
stack_1.pop();
stack_1.pop();
stack_1.pop();



/*
Exercise 5: Using Generics with Functions
What You Will Learn:
    How to create a generic function that filters an array based on a predicate function.
    How to use generics to make the function work with different types.
    How to handle predicate functions with different types.
Description: Create a generic function filterArray that accepts an array and a predicate function, and returns a new array containing elements that satisfy the predicate.

Instructions
Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean.
The function should return a new array containing elements that satisfy the predicate.

In this exercise, a generic function filterArray<T> accepts an array of type T and a predicate function (element: T) => boolean. The function returns a new array containing elements that satisfy the predicate function.
This approach demonstrates how to use generics with functions to create flexible and reusable code for filtering arrays of various types.
*/

function predicate<T> (element: T): boolean {
    if (typeof element === 'number') return true;
    return false;
}


function filterArray<T> (array: T[]): T[] {
    let newArray: number[] = [];
    
    for (let element of array) {
        if (predicate(element)) {
            newArray.push(element as number);     
        }
    }
    
    return newArray as T[];           
}


console.log(filterArray([1, 2, '1', 0]));
console.log(filterArray(['sdf', 1, true]))
