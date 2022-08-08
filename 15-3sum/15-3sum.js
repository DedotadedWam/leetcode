/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     const usedTriplets = {};
//     const result = [];
    
//     for (let a = 0; a < nums.length; a++) {
//         for (let b = a + 1; b < nums.length; b++) {
//             for (let c = b + 1; c < nums.length; c++) {
//                 if (nums[a] + nums[b] + nums[c] !== 0) continue;

//                 let candidate = [nums[a], nums[b], nums[c]].sort((a, b) => a - b);
//                 let candidateString = JSON.stringify(candidate)

//                 if (usedTriplets[candidateString]) continue;

//                 usedTriplets[candidateString] = true;
//                 result.push(candidate);
//                 break;
//             }
//         }
//     }
//     return result;
// };

var threeSum = function(nums, target = 0) {
    const result = [];
    
    if (nums.length < 3) return result;
    
    nums = nums.sort((a,b) => a - b);
        
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;
        
        if (nums[i] === nums[i - 1]) continue;
        
        let k = nums.length - 1;
        let j = i + 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                
                while(nums[j] === nums[j + 1]) j++;
                while(nums[k] === nums[k - 1]) k--;
                
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
    }
    
    return result;
}