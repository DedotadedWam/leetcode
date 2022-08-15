/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    
    let x = countAndSay(n-1)
    
    let current = [x[0], 1];
    
    let result = ''

    
    for (let i = 1; i < x.length; i++){
        if (x[i] === x[i - 1]) {
            current[1]++;
        } else {
            result = result + current[1] + current[0];
            current = [x[i], 1];
        }
    }
    
    result = result + current[1] + current[0];
    
    return result;
};
