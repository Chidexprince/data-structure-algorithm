// Implementing a hash table
class HashTable {
    // initialize the space allocated to the hash table
    constructor(size) {
        this.data = new Array(size);
    }

    // hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;    
        }
        return hash;
    }

    // set function
    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // get function
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][0]
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('apples', 70);
myHashTable.set('grapes', 1000);
myHashTable.set('oranges', 200);
myHashTable.get('apples');


/* Exercise 1 
* Given 2 arrays, create a function that let's a user
* know (true/false) whether these two arrays contain any 
* common items
* For example: 
* const array1 = ['a', 'b', 'c', 'x'];
* const array2 = ['z', 'y', 'i'];
* should return false.
*
* const array1 = ['a', 'b', 'c', 'x'];
* const array2 = ['z', 'y', 'x'];
* should return true.
*/


/* Problem Work Through
* 2 parameters - arrays - no size limit (input)
* return true or false (output)
*/

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

/* Naive brute force approach */
function containCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }      
    }
    return false;
} 
// Time complexity : O(a*b) ==> O(a^2) if 2 arrays are equal // bad approach - pretty slow
// Space complexity : O(1)

containCommonItem(array1, array2);

/* A better solution */
function containCommonItem2(arr1, arr2) {
    // perform error checks to ensure - there are 2 params, they are both arrays
    // and they both have values
    // loop through the first array and create object where properties === items
    // in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]){
            const element = arr1[i];
            map[element] = true
        }        
    }

    // loop through second array and check if item in second array exists on 
    // created object
    for (let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]){
            return true;
        }        
    }
    return false;
}
// Time complexity: O(a + b) ==> O(a) if 2 arrays are equal - Good approach
// Space complexity: O(a)


/* Exercise 2 
Google Question
* Given an array find the first recurring character
* Given an array = [2,5,1,2,3,5,1,2,4];
* It should return 2
* 
* Given an array = [2,3,4,5];
* It should return undefined
*/

/* Problem Work Through
* 1 parameter - array (input)
* return value or undefined (output)
*/

const array = [2,5,1,2,3,5,1,2,4];

/*  Brute force approach */
function firstRecurringCharacter(arr) {
    // error checks
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            } 
        }  
    }
    return undefined;
}
// O(n^2)
firstRecurringCharacter(array);


/* Better solution */
function firstRecurringCharacter2(arr){
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
            const element = arr[i];
            map[element] = true;
        } else {
            return arr[i];
        }
    }

    return undefined;

}
// O(n)

function firstRecurringCharacter(arr) {
    let set = new Set();
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])) {
            return arr[i];
        }
        set.add(arr[i])
    }
    return null
}
// O(n)

/* 
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false

*/

// Naive Approach
function containsDuplicate1(arr) {
    // check
    if(!Array.isArray(arr)) {
        return 'Pass an array';
    }

    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return true;
            }
        }
    }

    return false;
}

function containsDuplicate2(arr) {
    let map = {};
    
    for(let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = true;
        } else {
            return true;
        }
    }

    return false;
}

/*
771. Jewels and Stones
Easy
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 
Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0 

*/

// Naive approach : nested for loop
function numJewelsInStones1 (jewels, stones) {
    let count = 0;
    for(let i = 0; i < jewels.length; i++) {
        for(let j = 0; j < stones.length; j++) {
            if(jewels[i] === stones[j]) {
                count++;
            }
        }
    }
    return count;
}; // O(n^2)

// optimized approach: hashtable
function numJewelsInStones2 (jewels, stones) {
    let map = {};
    let count = 0;

    for(let i = 0; i < jewels.length; i++) {
        const element = jewels[i];
        map[element] = true;
    }

    for(let j = 0; j < stones.length; j++) {
        if(map[stones[j]]) {
            count++;
        }
    }
    return {map, count};
}

/* 
1832. Check if the Sentence Is Pangram
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true;
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false

*/

function checkIfPangram1(sentence) {
    if(!sentence || typeof sentence !== 'string' || sentence.length < 26) {
        return false;
    }
    const map = [];

    for(let i = 0; i < sentence.length; i++) {
        if(!map.includes(sentence[i])) {
            map.push(sentence[i])
        }
    }

    return map.length === 26;
}


function checkIfPangram2(sentence) {
    return new Set(sentence).size === 26;
}

function checkIfPangram3() {
    if(!sentence || typeof sentence !== 'string' || sentence.length < 26) {
        return false;
    }

    let set = new Set();
    for (let i = 0; i < sentence.length; i++) {
        if(!set.has(sentence[i])) {
            set.add(sentence[i]);
        }
        
    }

    return set.size === 26;
}

/* 
349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

function intersection(nums1, nums2) {
    if(!Array.isArray(nums1) || !Array.isArray(nums2)) {
        return;
    }
    const intersection = [];
    const map = {};


    for (let i = 0; i < nums1.length; i++) {
        if(!map[nums1[i]]) {
            const element = nums1[i];
            map[element] = true;
        }        
    }

    for (let j = 0; j < nums2.length; j++) {
        if(map[nums2[j]] && !intersection.includes(nums2[j])) {
            intersection.push(nums2[j]);
        }
    }
    
    return intersection
}

/* 
961. N-Repeated Element in Size 2N Array
You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example 1:
Input: nums = [1,2,3,3]
Output: 3

Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2

*/

function repeatedNTimes1(nums) {
    if(!Array.isArray(nums)) {
        return
    }

    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }
} // O(n^2)


function repeatedNTimes2(nums) {
    if(!Array.isArray(nums)) {
        return
    }

    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    for (let j = 0; j < nums.length; j++) {
        if(map[nums[j]]) {
            return nums[j];
        }
    }
} //O(n)


/*
1619. Mean of Array After Removing Some Elements
Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10^-5 of the actual answer will be considered accepted.

Example 1:
Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

Example 2:
Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
Output: 4.00000

*/

function trimMean(arr) {
    if(!Array.isArray(arr)) {
        return
    }
    let sum = 0;
    let sortedArr = arr.sort((a,b) => a - b);
    const removalLength = 0.05 * arr.length; // get 5% item to remove

    sortedArr.splice(0, removalLength) // remove 5% item from the start of the array
    sortedArr.splice(arr.length - removalLength, removalLength) // remove 5% item from the end
    const finalLength = sortedArr.length;

    for (let i = 0; i < sortedArr.length; i++) {
        sum += sortedArr[i]
    }

    return (sum/finalLength).toFixed(5)

}

/*
1491. Average Salary Excluding the Minimum and Maximum Salary

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted. 

Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

*/

function average(salary) {
    if(!Array.isArray(salary)) {
        return
    }

    salary.sort((a,b) => a - b );
    salary.pop();
    salary.shift();
    const length = salary.length;
    let sum = 0;

    for(let i = 0; i < salary.length; i++) {
        sum += salary[i];
    }

    return sum/length;
}

/*
Create a function that removes the n smallest numbers from an array of integers arr, taking the following into account

i. Integer n is the number of elements to remove from the array
ii. If there are multiple elements with the same values, remove the one with the lower index first
iii. If n is greater than the length of the array, return an empty array. If it is zero or less, return the original array
iv. Don't change the order of the elements that are left
*/

function removeNSmallest(n, arr) {
    // check input
    if(!Array.isArray(arr) || typeof n !== 'number') {
        return
    }

    if(n > arr.length) return arr = [];

    if(n <= 0) return arr;

    let finalArr = [];
    let sortedArr = [...arr].sort((a,b) => a - b); // copy array and sort
    let map = {};
    // get the least numbers based on the integer and store in the object
    for (let i = 0; i < n; i++) { 
        const element = sortedArr[i];
        map[element] = true;
    }

    // loop through the original and push elements excluding the smallest in the object
    for (let j = 0; j < arr.length; j++) {
        if(!map[arr[j]]) { 
            finalArr.push(arr[j])
        }
    }

    return finalArr
}