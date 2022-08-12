/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, end = nums.length - 1;
    
    if (end === 0) return jumps;
    
    while(end !== 0) {
        for (let i = 0; i < end; i++) {
            if(canReachEnd(i, nums[i], end)) {
                end = i;
                jumps++;
            }
        }
    }
        
//     function innerFunc(end) {
//         if(end === 0) return;
//         for(let i = 0; i < end; i++) {
//             if (canReachEnd(i, nums[i], end)) {
//                 end = i;
//                 jumps++;
//                 return innerFunc(end);
//             }
//         }
//     }
    
//     innerFunc(end);
    return jumps;
};

function canReachEnd (crtPos, maxJump, end) {
    return crtPos + maxJump >= end;
}