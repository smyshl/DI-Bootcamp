/*Instructions
1rst daily challenge

    Create two functions. Each function should return a promise.
    The first function called makeAllCaps(), takes an array of words as an argument
        If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
        else, reject the promise with a reason.
    The second function called sortWords(), takes an array of words uppercased as an argument
        If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
        else, reject the promise with a reason.

Test:

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

*/

function makeAllCaps(_arr) {
    let string_promise = new Promise((resolve, reject) => {
        let all_str = _arr.reduce((total, item) => {
            total = total && (typeof item === 'string');
            return total;
        }, true)
        if (all_str) {
            _arr = _arr.map(element => element.toUpperCase());
            resolve (_arr);
        } else {
            reject ("Not all strings");
        };
    })
    return string_promise;
}

function sortWords(_arr){
    let words_promise = new Promise((resolve, reject) => {
        if (_arr.length > 4) {
            _arr = _arr.sort();
            resolve(_arr);
        } else {
            reject("Not more than 4 words")
        }
    })
    return words_promise;
}

makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(err => console.log(err));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))



// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

/*    Create three functions. The two first functions should return a promise..
    The first function is named toJs():
        this function converts the morse json string provided above to a morse javascript object.
        if the morse javascript object is empty, throw an error (use reject)
        else return the morse javascript object (use resolve)
    The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
        This function asks the user for a word or a sentence.
        if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
        else return an array with the morse translation of the user’s word.

        if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
        if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

    The third function called joinWords(morseTranslation), takes one argument: the morse translation array
        this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
    Chain the three functions.

Example:
"Hello" gives you
....
.
.-..
.-..
---

*/
let user_input = '';

function toJs(_string){
    morse_obj = JSON.parse(morse);
    let js_promise = new Promise((resolve, reject) => {
        if (Object.keys(morse_obj).length === 0) {
            reject ("The Morse object is empty");
        } else {
            resolve (morse_obj);
        }
    })
    return js_promise;
}

function toMorse(morse_obj){
    user_input = prompt("Please enter the word or sentence:");
    let user_input_arr = [... user_input.toLowerCase()];

    let morse_arr = [];
    let morse_obj_keys = Object.keys(morse_obj);

    let user_morse = new Promise((resolve, reject) => {
        user_input_arr.forEach(item => {
            if (!morse_obj_keys.includes(item)) {
                reject ("character " + item + " doesn't exist in the morse")
            } else {
                morse_arr.push(morse_obj[item])
            };
        resolve (morse_arr);
        })
    })
    return user_morse;
}

function joinWords(morseTranslation){
    let html_string = '"' + user_input + '" gives you:<br/>';
    
    morseTranslation.forEach(item => {
        html_string += item + '<br/>';
    })
    
    let new_div = document.createElement("div");
    document.body.appendChild(new_div);
    document.getElementsByTagName("div")[0].innerHTML = html_string;
}


toJs(morse)
.then(_obj => toMorse(_obj))
.then(arr => joinWords(arr))
.catch(err => console.log(err));