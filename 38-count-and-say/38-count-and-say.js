/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    
    let x = countAndSay(n-1)
    
    let pairs = [];
    let current = [x[0], 1];
    
    for (let i = 1; i < x.length; i++){
        if (x[i] === x[i - 1]) {
            current[1]++;
        } else {
            pairs.push(current);
            current = [x[i], 1];
        }
    }
    
    pairs.push(current);
    
    let result = ''
    
    pairs.forEach(([number, count]) => {
        result = result + count + number;
    })
    
    return result;
};
