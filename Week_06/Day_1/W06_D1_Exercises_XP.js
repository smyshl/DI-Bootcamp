/*
Exercise 1 : Scope
Instructions

    Analyse the code below, and predict what will be the value of a in all the following functions.
    Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

Answer:
the value of a is 3
at the begining the value of a is 5, after that as far as condition 5 > 1 is true, the value of a is set to 3.
Check: 3

// #1.1 - run in the console:
funcOne()
result: 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?

Answer: it will be error, because it's impossible to set anover value to const.

//#2


let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}


// #2.1 - run in the console:
funcThree()     0 - the value that was set when the variable was declared
funcTwo()       5 - new value
funcThree()     5 - showing new value
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

Answer: there will be error in funcTwo()


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()      "hello"
funcFive()      "hello"


//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

Answer: result "test" because it's the value from function's scope

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

Answer: nothing will change because we're allerting value from the inner function scope

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

Answer: both 5

// #5.1 - run the code in the console

Answer: in the if block result is 5
        outside result is 2
because the block scope

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

Answer: nothing because of the if block scope

*/

/*
Exercise 2 : Ternary operator
Instructions

Using the code below:

function winBattle(){
    return true;
}
    Transform the winBattle() function to an arrow function.
    Create a variable called experiencePoints.
    Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
    Console.log the experiencePoints variable.
*/

const winBattle = () => true;
let experiencePoints = winBattle() == true ? 10 : 1;

console.log(experiencePoints)


/*
Exercise 3 : Is it a string ?
Instructions
    Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
    Check out the example below to see the expected output
Example:
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

*/

const isString = (a) => typeof(a) === "string";

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));


/*
Exercise 4 : Find the sum
Instructions
    Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
*/

const _sum = (a, b) => a + b;


/*
Exercise 5 : Kg and grams
Instructions
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
    First, use function declaration and invoke it.
    Then, use function expression and invoke it.
    Write in a one line comment, the difference between function declaration and function expression.
    Finally, use a one line arrow function and invoke it.
*/

function _weight_func(w){
    return 1000 * w;
};
console.log(_weight_func(13.5));

const _weight_expr = function (w){
    return 1000 * w;
};
console.log(_weight_expr(35.1));

// declared functions hoisted by engine, expression functions not

const _weight_arrow = (w) => 1000 * w;
console.log(_weight_arrow(348.9));


/*
Exercise 6 : Fortune teller
Instructions
    Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
    The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
*/

(function (children_num, partners_name, location, job) {
    let _p = document.createElement("p");
    _p.textContent = `You will be a ${job} in ${location}, and married to ${partners_name} with ${children_num} kids.`;
    document.getElementsByTagName("body")[0].appendChild(_p);
    console.log(children_num, partners_name, location, job);
})(7, "Jack", "Bali", "waiter");