/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.length === 1) return;
    
    let laggingIndex: number = 0;
    let leadingIndex = 0;
    
    while (nums[leadingIndex] !== 0 && leadingIndex < nums.length) {
        leadingIndex++;
        laggingIndex++;
    }

    while (leadingIndex !== nums.length) {
        while (nums[leadingIndex] === 0 && leadingIndex < nums.length) {
            leadingIndex++;
        }
        
        if (leadingIndex === nums.length) return;
        
        nums[laggingIndex] = nums[leadingIndex];
        nums[leadingIndex] = 0;
        laggingIndex++;
    }
}