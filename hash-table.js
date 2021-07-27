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