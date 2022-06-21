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

const reverseString3 = str => [...str].reverse().join('');

/* Palindrome Check
A Palindrome is a string that reads the same forwards and backwards. This means that the second half of the string is the reverse of the first half.
Examples
The following are palindromes (thus would return TRUE):
- "pop"     ->  p + o + p
- "deed"    ->  de + ed
The following are NOT palindromes (thus would return FALSE):
- "rad"
- "dodo"
*/

function isPalindrome1(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'pass string';
    }
    let reversedString = str.split('').reverse().join('');
    return str === reversedString ? 'YES' : 'NO';
}

function isPalindrome2(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'pass string';
    }

    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] !== str[right]) {
            return 'NO';
        }
        left += 1;
        right -= 1;
    }

    return 'YES';

}




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

/* 
1678. Goal Parser Interpretation
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"

*/

/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let result = '';
    
    for(let i = 0; i < command.length; i++) {
        if(command[i] === "(" && command[i+1] === ")") {
            result += 'o';
        } 
        else if (command[i] === "(" && command[i+1] === "a") {
            result += command[i+1];
        } 
        else if (command[i] === "l" && command[i+1] === ")") {
            result += command[i]
        }
        else if (command[i] === 'G') {
            result += command[i]
        }
    }
    return result;
}; // 0(N)

// Using in-built functions
var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");
};


/*
2114. Maximum Number of Words Found in Sentences
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.

Example 1:
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

Example 2:
Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.

*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let maxWords = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        let senLen = sentences[i].split(" ").length;
        maxWords = maxWords > senLen ? maxWords : senLen;
    }
    
    return maxWords
};


/* 
1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

*/

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let defAddr = "";
    
    for(let i = 0; i < address.length; i++) {
        if(address[i] === ".") {
            defAddr += "[.]";
        } else {
            defAddr += address[i]
        }
    }
    
    return defAddr;
};

// Using inbuilt function
var defangIPaddr = function(address) {
    if( typeof address !== 'string') return
    return address.replaceAll(".", "[.]");
};


/* 
1816. Truncate Sentence
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

Example 1:
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".

Example 2:
Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
Example 3:

Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"
 

Constraints:

1 <= s.length <= 500
k is in the range [1, the number of words in s].
s consist of only lowercase and uppercase English letters and spaces.
The words in s are separated by a single space.
There are no leading or trailing spaces.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    let senten = s.split(" ");
    let trunSen = []
    for(let i = 0; i < senten.length; i++) {
       if (i === k) break
        trunSen.push(senten[i]) 
    }
    return trunSen.join(" ");
}; //O(n)


// Using inbuilt function 
 var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};