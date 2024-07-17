import { people } from "./data.js";

function average_age(_arr){
    let sum_age = _arr.reduce((total, person) => total += person.age, 0);
    return sum_age / _arr.length;
};

console.log("Average age:", average_age(people));