/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    const addParens = (string, left, right) => {
        if (string.length === n * 2) {
            result.push(string);
            return;
        }
        
        if (left < n) addParens(string + '(', left + 1, right);
        if (right < left) addParens(string + ')', left, right + 1);
    }
    
    addParens('', 0, 0);
    return result;
}