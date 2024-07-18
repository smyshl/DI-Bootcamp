const {addition, multiplication} = require ('./math.js');
const lodash = require ('lodash');

let arr = [];

for (i = 0; i < 10; i++){
    arr[i] = [addition(i, lodash.random(1, 10)), multiplication(i, lodash.random(1, 10))];
};

console.log(lodash.shuffle(arr));