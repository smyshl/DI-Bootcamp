"use strict";
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
    constructor(firstName, lastName, age, address) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._address = address;
    }
    ;
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    ;
}
;
let john = new Person("John", "Smith", 35, "Israel");
console.log("Full name:", john.getFullName());
;
;
class Car {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    ;
    start() {
        return `Model ${this.model} made by ${this.make} has ${this.numberOfDoors} doors`;
    }
    ;
}
;
let mustang = new Car("Ford", "Mustang", 4);
console.log(mustang.start());
