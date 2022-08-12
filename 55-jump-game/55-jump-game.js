/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length - 1; ) {
    let jumps = nums[i];
    let exitedLoop = false;

    if (jumps === 0) return false;

    for (let j = 1; j < nums[i]; j++) {
      jumps--;
      if (nums[j + i] > jumps) {
        i += j;
        exitedLoop = true;
        break;
      }
    }
    if (!exitedLoop) i = i + nums[i];
  }

  return true;
};