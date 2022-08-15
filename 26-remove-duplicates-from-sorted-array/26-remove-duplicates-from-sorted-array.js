/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lp = 0, rp = 1;
    
    while(rp !== nums.length) {
        if(nums[lp] === nums[rp]) {
            rp++;
        } else {
            lp++;
            nums[lp] = nums[rp];
            rp++;
        }
    }
    
    nums.splice(lp + 1)
    
    return rp;
};
