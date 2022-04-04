// Create a function that reverses a string:
// 'Hi My name is Prince' should be
// 'ecnirP si eman yM iH'

function reverseString(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Please pass a string';
    }

    const reversedWord = [];

    for(let i = str.length - 1; i >= 0; i--) {
      reversedWord.push(str[i]);
    }

  return reversedWord.join('');
}

function reverseString2(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Please pass a string';
    }

    return str.split('').reverse().join('');
}

const reverseString3 = str = [...str].reverse().join('');



/* Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

*/

/* Time complexity O(n), space complexity O(n) */
var checkString = function(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "#") {
            result.pop();
        } else {
            result.push(str[i])
        }     
    }

    return result;
}

var backspaceCompare = function(s, t) {
    let result1 = checkString(s);
    let result2 = checkString(t);
    
    if(result1.length !== result2.length) {
        return false;
    }
    

    for(let i = 0; i < result1.length; i++){
        if(result1[i] != result2[i]) {
            return false
        }    
    } 

    return true
};


/* Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Brute force solution Time Complexity: O(n^2), Space Complexity: O(n)
*/

var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;

    let longest = 0;

    for(let left = 0; left < s.length; left++) {
        let seenChars = {}, currentLongest = 0;

        for(let right = left; right < s.length; right++) {
            const currentChar = s[right];

            if(!seenChars[currentChar]) {
                currentLongest++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLongest);
            } else {
                break;
            }
        }
    }

};





/* Optimized Solution Time Complexity: O(n), Space Complexity: O(n) */

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    const seenChars = {}
    let longest = 0, left = 0;
    for(let right = 0; right < s.length; right++){
        const currentChar = s[right];
        const previouslySeenChar = seenChars[currentChar];

        if(previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        seenChars[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    
  return longest;
    
};
