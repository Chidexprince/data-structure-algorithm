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