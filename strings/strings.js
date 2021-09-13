
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