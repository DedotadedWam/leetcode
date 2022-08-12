/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, end = nums.length - 1;
    
    if (end === 0) return jumps;
    
    while(end !== 0) {
        for (let i = 0; i < end; i++) {
            if(i + nums[i] >= end) {
                end = i;
                jumps++;
            }
        }
    }

    return jumps;
};