/*
Instructions
Using this object :
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference
    Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
    Create another arrow function named cloneGroceries.
        In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
            Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
        In the function, create a variable named shopping that is equal to the groceries variable.
            Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
            Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
    Invoke the cloneGroceries function.
*/

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = (_arr) => _arr.forEach(element => {
    console.log(element);
});

displayGroceries(groceries.fruits);

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user == client);
    console.log(user, client);
    // user variable didn't change after changing client because
    // we declared user variable in different scope so I think that
    // user variable refers to another area of ​​memory, not the same as client
    // so when the value of the client changes, user remains the same.
    
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log(shopping, groceries);
    // object passed by reference, so we have two variables that reference to one object
    // and if it chahges, both variables will change too.
    // this also applies to nested objects and arrays.

};

cloneGroceries();