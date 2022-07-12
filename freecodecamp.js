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



/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  if(typeof str !== 'string') return
  let regExpr = /[^A-Za-z0-9]/g;
  let stripStr = str.toLowerCase().replace(regExpr, '');
  let reverseStr = stripStr.split('').reverse().join('');

  return stripStr === reverseStr
}

/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/


function diffArray(arr1, arr2) {
  const newArr = [];
  let combineArr = [...arr1, ...arr2]; // combine the elements of the two arrays
  
  let mapA = {} // add the elements as properties of an object
    for (let i = 0; i < arr1.length; i++) {
      mapA[arr1[i]] = true
    }
  
  let mapB = {} // add the elements as properties of an object
    for (let i = 0; i < arr2.length; i++) {
      mapB[arr2[i]] = true
    }
  
    for (let i = 0; i < combineArr.length; i++) {
      // Check whether element exist in any of the two
      if(!mapA[combineArr[i]] || !mapB[combineArr[i]]) { 
        newArr.push(combineArr[i])
      }
    }
    
    return newArr;
  }

  function diffArray(arr1, arr2) {
    let newArr = [];
    
    let newConcat = arr1.concat(arr2);
    
    for (let i = 0; i < newConcat.length; i++) {
      if (arr1.indexOf(newConcat[i]) === -1 || arr2.indexOf(newConcat[i]) === -1) {
       newArr.push(newConcat[i]);
      }
    }
    return newArr;
  }


  /* 
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  // basic check
  if(!Array.isArray(arr) || arr.length > 2) return

  let min = Math.min(arr[0], [1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for(let i = min; i <= max; i++) {
    sum += i;
  }

  return sum

}

/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


*/

// first solution using for loop

function myReplace(str, before, after) {
  let sentence = str.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i].toLowerCase() == before.toLowerCase()) {
      const word = sentence[i];
      if(word[0] == word[0].toLowerCase()) {
        const replaceText = after[0].toLowerCase() + after.slice(1)
        sentence[i] = replaceText;
      } 
      if(word[0] == word[0].toUpperCase()) {
        const replaceText = after[0].toUpperCase() + after.slice(1);
        sentence[i] = replaceText;
      }
    } 
  }

  return sentence.join(" ");
}

// second solution using replace()
function myReplace(str, before, after) {
  let firstLetter = before[0];
  if(firstLetter === firstLetter.toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  if(firstLetter === firstLetter.toLowerCase()) {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

/* 
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
  let args = [...arguments].slice(1);
  let remainEl = [];
  let map = {};
  for(let i = 0; i < args.length; i++) {
    map[args[i]] = true;
  }

  for (let i = 0; i < arr.length; i++) {
    if(!map[arr[i]]) {
      remainEl.push(arr[i])
    }
  }
  return remainEl;
}

// Using in-built filter()
function destroyer(arr) {
  let args = [...arguments].slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

/* 
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  // Helper function to check prime number
  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }   
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if(isPrime(i)) sum += i;
  }

  return sum;
}