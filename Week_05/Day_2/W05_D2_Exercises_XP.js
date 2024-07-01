/*
Exercise 1 : List of people
Instructions

const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review about arrays
    Write code to remove “Greg” from the people array.
    Write code to replace “James” to “Jason”.
    Write code to add your name to the end of the people array.
    Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
    Write code to make a copy of the people array using the slice method.
        The copy should NOT include “Mary” or your name.
        Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
        Hint: Check out the documentation for the slice method
    Write code that gives the index of “Foo”. Why does it return -1 ?
    Create a variable called last which value is the last element of the array.
    Hint: What is the relationship between the index of the last element in the array and the length of the array?

Part II - Loops

    Using a loop, iterate through the people array and console.log each person.
    Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
    Hint: take a look at the break statement in the lesson.
*/

const people = ["Greg", "Mary", "Devon", "James"];

console.log("Given array : ", people);

console.log("Remove", people.shift(), ":", people);

people[2] = "Jason";
console.log("Replace “James” to “Jason”:", people);

people.push("Eugene");
console.log("Add my name to the end of array”:", people);

console.log("Mary's index:", people.indexOf("Mary"));

const people_1 = people.slice(people.indexOf("Mary") + 1, people.indexOf("Eugene"));
console.log("New array without Mary and me:", people_1);

console.log("Index of 'Foo':", people_1.indexOf("Foo"));
// It returns -1 because there is no "Foo" in array

var last = people_1.at(-1);
var last_1 = people_1[people_1.length - 1];
console.log("The last element of array is:", last);
console.log("The last element of array is still:", last_1);

for (index in people){
    console.log(index, people[index]);
}


for (i = 0; i < people.indexOf("Devon"); i++){
    console.log(i, people[i]);
}


for (person of people){
    if (person != "Devon"){
        console.log(people.indexOf(person), person);   
    } else {
        break};
}


/*
Exercise 2 : Your favorite colors
Instructions
    Create an array called colors where the value is a list of your five favorite colors.
    Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
    Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
    Hint : create an array of suffixes to do the Bonus
*/

const colors = ["green", "blue", "red", "orange", "black", "white"];

for (index in colors){
    ind_for_print = +index + 1
    console.log("My #"+ ind_for_print + " choice is", colors[index]);
};

const suffix_arr = ["st", "nd", "rd", "th", "th", "th"]

for (index in colors){
    ind_for_print = +index + 1 + suffix_arr[index]
    console.log("My " + ind_for_print + " choice is", colors[index]);
};

/*
Exercise 3 : Repeat the question
Instructions
    Prompt the user for a number.
    Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
    While the number is smaller than 10 continue asking the user for a new number.
    Tip : Which while loop is more relevant for this situation?
*/
var steps = 0
do{
var user_input = prompt("Please enter a number");
var user_number = Number(user_input);
console.log(user_number, typeof(user_number));
steps++
} while (user_number < 10 && steps < 100);

// for me it's better to use this kind of while loop
// because in this case you don't need to write strings 104 and 105 second time
// if we use simple while, we'll have to ask number before the loop and
// in the loop on each step
// but result will be the same :)


/*
Exercise 4 : Building Management
Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

Review about objects
    Copy and paste the above object to your Javascript file.
    Console.log the number of floors in the building.
    Console.log how many apartments are on the floors 1 and 3.
    Console.log the name of the second tenant and the number of rooms he has in his apartment.
    Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log("Number of floors:", building.numberOfFloors);

console.log("Number of appartments on floors 1 and 3:", building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

var name_sec_ten = building.nameOfTenants[1];
console.log("Second tenant:", name_sec_ten, "\nnumber of rooms:", building.numberOfRoomsAndRent[name_sec_ten.toLowerCase()][0]);

// of course it's better to do using functions, but it will be on tomorrow lecture
// and I really don't have time to read about it by myself now, sorry
var sarahs_index = building.nameOfTenants.indexOf("Sarah");
var sarahs_name_in_low = building.nameOfTenants[sarahs_index].toLowerCase();
var sarahs_rent = building.numberOfRoomsAndRent[sarahs_name_in_low][1];
var davids_index = building.nameOfTenants.indexOf("David");
var davids_name_in_low = building.nameOfTenants[davids_index].toLowerCase();
var davids_rent = building.numberOfRoomsAndRent[davids_name_in_low][1];
var dans_index = building.nameOfTenants.indexOf("Dan");
var dans_name_in_low = building.nameOfTenants[dans_index].toLowerCase();
var dans_rent = building.numberOfRoomsAndRent[dans_name_in_low][1];
if (sarahs_rent + davids_rent > dans_rent){
    building.numberOfRoomsAndRent[dans_name_in_low][1] = 1200;
    console.log("The new Dan's rent:", building.numberOfRoomsAndRent[dans_name_in_low][1]);
};


/*
Exercise 5 : Family
Instructions
    Create an object called family with a few key value pairs.
    Using a for in loop, console.log the keys of the object.
    Using a for in loop, console.log the values of the object.
*/

var family = {
    father: "Dan",
    mother: "Sarah",
    son: "David"
};

console.log("The keys:")
for (person in family){
    console.log(person);
};

console.log("The values:")
for (person in family){
    console.log(family[person]);
};


/*
Exercise 6 : Rudolf
Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

    Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
*/

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };

  var output_str = ""
  for (key in details){
    output_str += key + " " + details[key] + " "
  };
  console.log(output_str)


  /*
Exercise 7 : Secret Group
Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

    A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
    Hint: a string is an array of letters
    Console.log the name of their secret society. The output should be “ABJKPS”
  */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

var secret_name = [];

for (_name of names){
    secret_name.push(_name[0])
};
console.log(secret_name.sort().join(""))