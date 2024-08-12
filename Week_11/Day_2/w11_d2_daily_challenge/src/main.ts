/*
Daily Challenge : Union Type Validator
Instructions

Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean that takes a value and an array of allowed types (as strings).
The function should return true if the value is one of the allowed types; otherwise, it should return false. Demonstrate its usage by validating variables with different types.

In this daily challenge exercise, you create a function called validateUnionType that accepts a value and an array of allowed types. The function checks if the type of the value matches any of the allowed types and returns true if it does. If the value is not of an allowed type, the function returns false.
The exercise demonstrates the usage of the function by validating different types of variables (e.g., string, number, boolean) against a set of allowed types.
*/

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    let typeOfValue: string = typeof value;
    if (allowedTypes.includes(typeOfValue)) return true;
    return false;
};

let typesArray: string[] = [
    'string',
    'number',
    'boolean',
    'any',
];

let valuesArray: [string, number, boolean, any] = [
  'string',
  100,
  true,
  ['Let it be string'],    
]

for (let value of valuesArray) {
    let validation_passed: boolean = validateUnionType(value, typesArray);
    console.log("The value:", value, `- ${validation_passed ? 'passed' : "didn't pass"} validation`);
}