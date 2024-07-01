/*
Instructions

    Write a JavaScript program that recreates the pattern below.
    Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
    Do this Daily Challenge by yourself, without looking at the answers on the internet.

*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *

*/

var star = ""

for (let index = 0; index <= 5; index++){
    star += "* "
    console.log(star)
}

for (let row = 1; row <= 6; row++){
    var star = ""
    for (col = 1; col <=row; col++){
        star += "* "
    }
    console.log(star)
}