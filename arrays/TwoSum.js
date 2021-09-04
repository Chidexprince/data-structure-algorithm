

/* Brute force approach time complexity: O(n^2), space complexity: O(1) */

var twoSum1 = function(nums, target) {
    
    for(let p1 = 0; p1 < nums.length; p1++){
        const numberToFind = target - nums[p1];

        for(let p2 = p1 + 1; p2 < nums.length; p2++) {
            if(numberToFind === nums[p2]) {
                return [p1, p2]
            }
        }
    }

    return null
};


/* Optimized solution with HashMap time complexity: O(n), space complexity: O(n) */
var twoSum2 = function(nums, target) {
    let numsMap = {};

    for(let i = 0; i < nums.length; i++) {
        const currentMapVal = numsMap[nums[i]];

        if(currentMapVal >= 0) {
            return [currentMapVal, i];
        } else {
            const numberToFind = target - nums[i];
            numsMap[numberToFind] = i
        }
    }

    return null
};