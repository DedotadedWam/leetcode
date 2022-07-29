/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let end: number = nums.length - k;
    let temp: number;
    for (let i = 0; i < k; i++) {
        temp = nums.pop();
        nums.unshift(temp);
    }
};