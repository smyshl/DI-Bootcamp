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