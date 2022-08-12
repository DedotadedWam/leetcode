/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 0;
    
    function innerFunk(stepsTravelled) {
        if (stepsTravelled > n) return;
        if (stepsTravelled === n) {
            count++;
            return;
        }
                
        innerFunk(stepsTravelled + 1);
        innerFunk(stepsTravelled + 2);
    }
    
    innerFunk(0)
    
    return count;
};

var climbStairs = function(n, memo = {}) {
    if (n <= 2) {
        return n;
    }
    
    
    if (memo[n]) return memo[n];
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    
    return memo[n]
    
}