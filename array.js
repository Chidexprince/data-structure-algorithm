//Reverse a string
function reverseString(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }

 /* My solution */
  function reverseString2(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Please pass a string';
    }

    let reversedWord = [...str].reverse().join('')
    return reversedWord;
}

// Merge sorted array

/* My Solution */
function mergeSortedArrays(arr1, arr2){
    //check input
    if(!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)){
      return 'Pass only arrays';
    }

    if(arr1.length < 1){
      return arr2;
    }
  
    if(arr2.length < 1){
      return arr1;
    }
  //Merge the two arrays
    let arrMerge = [...arr1, ...arr2]; 
  
  //Sort merged arrays
    arrMerge.sort((a,b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  
    return arrMerge;
  
  }

  // New solution for mergedsorted arrays
  function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++
      } else {
        mergedArray.push(arr2[j]);
        j++
      }
    }

    while(i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++
    }

    while(j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++
    }

    return mergedArray;
  }
  
  function mergeSortedArrays(arr1, arr2){
    // check for array input
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return 'Pass only arrays';
    }
    
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;
  
    //Check input
    if(arr1.length === 0){
      return arr2;
    }
  
    if(arr2.length === 0){
      return arr1;
    }
  
    while(array1Item || array2Item) {
      if(!array2Item || array1Item < array2Item){
        mergedArray.push(array1Item);
        array1Item = arr1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = arr2[j];
        j++;
      }  
    }

    return mergedArray;
  }

  function mergeSortedArray(arr1, arr2) {

    const mergeArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    if(!arr1.length) {
      return arr2;
    }

    if(!arr2.length) {
      return arr1;
    }

    while(array1Item || array2Item) {
      if(!array2Item || array1Item < array2Item) {
        mergeArray.push(array1Item);
        array1Item = arr1[i];
        i++;
      } else {
        mergeArray.push(array2Item);
        array2Item = arr2[j];
        j++
      }
    }

    return mergeArray;
  }


/*
Leetcode
1662. Check If Two String Arrays are Equivalent
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string. 

Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

function arrayStringsAreEqual(word1, word2) {
  // Array check
  if(!Array.isArray(word1) || !Array.isArray(word2)) {
    return false;
  }
  if(word1.join('') === word2.join('')) {
    return true
  }

  return false;
}


/*
Leetcode
1929. Concatenation of Array
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

*/

function getConcatenation1(nums) {
  // check array
  let ans = [...nums, ...nums];
  return ans;
}

function getConcatenation2(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    nums.push(nums[i]);
  }
  return nums;
}
