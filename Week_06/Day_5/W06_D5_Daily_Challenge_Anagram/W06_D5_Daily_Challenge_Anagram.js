/*Instructions

Create a function that:
    takes in two strings as two parameters
    and returns a boolean that indicates whether or not the first string is an anagram of the second string.

Some Help
    What is an anagram?
    An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
    Example of anagrams
    "Astronomer" is an anagram of "Moon starer"
    "School master" is an anagram of "The classroom"
    "The Morse Code" is an anagram of "Here come dots"
    Do we need to consider whitespace?
    Trim whitespace prior to comparison.
*/

function delete_spaces(_string){
    // returns sorted string without spaces
    let _string_arr = [... _string.trim()];
    _string_arr.sort();
    return _string_arr.slice(_string_arr.lastIndexOf(' ') + 1,).join('');
}


function is_anagram(string_1, string_2) {
    let string_1_arr = [... delete_spaces(string_1.toLowerCase())];
    let string_2_arr = [... delete_spaces(string_2.toLowerCase())];

    if (string_1_arr.join('') === string_2_arr.join('')) {
        return true;
    } else {
        return false;
    };
}

let _string_1 = 'The Morse Code';
let _string_2 = 'Here come dots'

console.log('"' + _string_1 + '" is anafram "' + _string_2 + '"?', '-', is_anagram(_string_1, _string_2));

