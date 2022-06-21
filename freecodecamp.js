// Solutions to JavaScript and Algorithm from freecodecamp

/* Where do I Belong
 Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

 For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

 Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */

function getIndexToIns(arr, num) {
  if(!arr.length) {
    return arr.length
  }

  arr.sort((a,b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
    let sentence = str.toLowerCase().split(" ");
    for(let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}

/* 
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let sentence = str.split(" ");
    let maxWord = 0;
  
    for(let i = 0; i < sentence.length; i++) {
      maxWord = sentence[i].length > maxWord ? sentence[i].length : maxWord;
    }
    return maxWord;
}

/* 
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    let repeatStr = "";
    while(num > 0) {
      repeatStr += str;
      num--;
    }
    return repeatStr;
}

/* 
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
  
function truncateString(str, num) {
    let trunStr = "";
    for (let i = 0; i < str.length; i++){
      if(i === num) break
      trunStr += str[i]
    }
    return trunStr = str.length > num ? trunStr+="..." : trunStr
}