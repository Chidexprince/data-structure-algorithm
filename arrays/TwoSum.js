
/* LeetCode 1 : Given an array of integers nums and an integer target, return indices of the two numbers such that 
they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. 

Example
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

*/


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

/* LeetCode: 11 Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, 
together with the x-axis forms a container, such that the container contains the most water. 
Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.*/

/* Brute Force Approach time complexity O(n^2), space complexity O(1)*/

var maxArea1 = function(height) {  
    let maxArea = 0;

    for (let h1 = 0; h1 < height.length; h1++) {
        for(h2 = h1 + 1; h2 < height.length; h2++) {
            let length = Math.min(height[h1],height[h2]);
            let width = h2 - h1;
            let area = length * width;
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};


/* Optimized solution using pointers time complexity O(n), space complexity O(1) */

var maxArea = function(height) {  
    let p1 = 0, p2 = height.length - 1, maxArea = 0;
    
    while(p1 < p2) {
        
        let length = Math.min(height[p1],height[p2]);
        let width = p2 - p1;
        let area = length * width;
        maxArea = Math.max(maxArea, area);
        
        if(height[p1] <= height[p2] ) {
            p1++;
        } else {
            p2--
        }
    }


    return maxArea;
};