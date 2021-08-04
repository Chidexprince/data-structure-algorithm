/*
There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in .

Example

There are  words in the string: 'one', 'Two', 'Three'.
*/
function camelCase(s) {
    // Write your code here
    let arr = [...s];
    let count = 1;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i].toUpperCase()){
            count++;
        }
    }

    return count;
}


/* 
Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example: 
s1 = 'and'
s2 = 'art'
they share a common substring 'a'

s1 = 'come'
s2 = 'bit'
they don't share a common substring
Function Description

Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):

string s1: a string
string s2: another string
Returns

string: either YES or NO
*/

function twoStrings(s1, s2) {
    // Write your code here
    let map = {};
    for (var i = 0; i < s1.length; i++) {
        if(!map[s1[i]]) {
            let element = s1[i];
            map[element] = true
        }
    }

    for (var j = 0; j < s2.length; j++){
        if(map[s2[j]]) {
            return 'YES';
        }
    }

    return 'NO';
}


/* 
 FizzBuzz
Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

If i is a multiple of both 3 and 5, print FizzBuzz.
If i is a multiple of 3 (but not 5), print Fizz.
If i is a multiple of 5 (but not 3), print Buzz.
If i is not a multiple of 3 or 5, print the value of i.
 */

function fizzBuzz(n) {
    // Write your code here
    if(isNaN(n)) {
        console.log('Must be a number');
    }
    
    for(var i = 1; i < n + 1; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }

}