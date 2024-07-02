/*
Exercise 1 : Find the numbers divisible by 23
Instructions
    Create a function call displayNumbersDivisible() that takes no parameter.
    In the function, loop through numbers 0 to 500.
    Console.log all the numbers divisible by 23.
    At the end, console.log the sum of all numbers that are divisible by 23.
    Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
    368 391 414 437 460 483
    Sum : 5313

    Bonus: Add a parameter divisor to the function.
    displayNumbersDivisible(divisor)
    Example:
    displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
    and their sum
    displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
    and their sum
*/

var numbers_arr = [];
var numbers_sum = 0;
var divisor = 23;

function displayNumbersDivisible(divisor){
    for (number = 0; number <=500; number++){
        if (number % divisor == 0){
            numbers_arr.push(number);
            numbers_sum +=number;
        };
    };
    console.log("Divisor:", divisor);
    console.log("Numbers:", numbers_arr.join(" "));
    console.log("Sum of numbers:", numbers_sum);

}

displayNumbersDivisible(divisor)


/*
Exercise 2 : Shopping List
Instructions

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

    Add the stock and prices objects to your js file.
    Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
    Create a function called myBill() that takes no parameters.
    The function should return the total price of your shoppingList. In order to do this you must follow these rules:
        The item must be in stock. (Hint : check out if .. in)
        If the item is in stock find out the price in the prices object.
    Call the myBill() function.
    Bonus: If the item is in stock, decrease the item’s stock by 1
*/

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  ;

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} ;

var shoppingList = ["banana", "orange", "apple"];

function myBill(){
    total_cart_price = 0
    console.log(shoppingList);
    for (item of shoppingList){
        if (item in stock){
            if (stock[item] > 0){
                total_cart_price += prices[item];
                stock[item] -= 1;
            };
        };
    };
    return total_cart_price
};

console.log("Total price of the cart:", myBill())
console.log("In stock:", stock);


/*
Exercise 3 : What’s in my wallet ?
Instructions

Note: Read the illustration (point 4), while reading the instructions
    Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
        an item price
        and an array representing the amount of change in your pocket.
    In the function, determine whether or not you can afford the item.
        If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
        If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
    Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    A quarters is 0.25
    A dimes is 0.10
    A nickel is 0.05
    A penny is 0.01
    4. To illustrate:
After you created the function, invoke it like this:
changeEnough(4.25, [25, 20, 5, 0])
    The value 4.25 represents the item’s price
    The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
    The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

Examples
changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true
*/

function changeEnough(itemPrice, amountOfChange){
    change_values = [0.25, 0.10, 0.05, 0.01];
    sum_of_change = 0;
    for (index in amountOfChange){
        sum_of_change += amountOfChange[index] * change_values[index];
    };
    if (sum_of_change < itemPrice){
        return false
    }else{
        return true
    };
};

console.log(changeEnough(4.25, [25, 20, 5, 0]));


/*
Exercise 4 : Vacations Costs
Instructions

Let’s create functions that calculate your vacation’s costs:
    Define a function called hotelCost().
        It should ask the user for the number of nights they would like to stay in the hotel.
        If the user doesn’t answer or if the answer is not a number, ask again.
        The hotel costs $140 per night. The function should return the total price of the hotel.
    Define a function called planeRideCost().
        It should ask the user for their destination.
        If the user doesn’t answer or if the answer is not a string, ask again.
        The function should return a different price depending on the location.
            “London”: 183$
            “Paris” : 220$
            All other destination : 300$
    Define a function called rentalCarCost().
        It should ask the user for the number of days they would like to rent the car.
        If the user doesn’t answer or if the answer is not a number, ask again.
        Calculate the cost to rent the car. The car costs $40 everyday.
            If the user rents a car for more than 10 days, they get a 5% discount.
        The function should return the total price of the car rental.
    Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
    Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
    Call the function totalVacationCost()
    Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/

var hotel_cost = 140

function ask_user(question, type_of_answer = "num"){
    if (type_of_answer == "num"){
        do{
            user_input = Number(prompt(question))
        }while (isNaN(user_input) || user_input < 0) ;
    }else if (type_of_answer == "str"){
        do{
            user_input = prompt(question)
        }while (user_input == 0) ;
    };
    return user_input
};

function hotelCost(){
    nights_number = ask_user("Please enter number of nights: ", "num")
    return hotel_cost * nights_number
};

function planeRideCost(){
    destination = ask_user("Please enter destination: ", "str")
    if (destination === "London"){
        return 183
    }else if (destination === "Paris"){
        return 220
    }else {
        return 300
    };
};

function rentalCarCost(){
    days_rental = ask_user("Please enter number of rental days:", "num")
    var rental_cost = 40 * days_rental;
    if (days_rental > 10){
        rental_cost *= 0.95
    };
    return rental_cost
};

function totalVacationCost(){
    hotel_cost = hotelCost();
    plane_cost = planeRideCost();
    car_cost = rentalCarCost();

    console.log(`The car cost: ${car_cost}, the hotel cost: ${hotel_cost}, the plane tickets cost: ${plane_cost}`);

    return hotel_cost + car_cost + plane_cost
};

console.log("Total cost of vacation:", totalVacationCost());


/*
Exercise 5 : Users

see in files:
users.html
W05_D3_Exercise_XP_users.js

*/

