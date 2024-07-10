/*
Instructions

Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true
allTruthy(true, false, true) ➞ false
allTruthy(5, 4, 3, 2, 1, 0) ➞ false
*/

function allTruthy(...args){
    console.log(args);
    return args.reduce((total, _arg) => {
        return total = total && Boolean(_arg);
    }, true);
};

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));