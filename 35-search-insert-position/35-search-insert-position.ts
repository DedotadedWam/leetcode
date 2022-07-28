function searchInsert(nums: number[], target: number): number {
    let u: number = nums.length;
    let l: number = 0;
    let m: number = (Math.floor((u + l) / 2));
    
    while (u !== l + 1) {
        if (nums[m] === target) return m;
        if (nums[m] > target) {
            u = m;
            m = (Math.floor((u + l) / 2));
        } else {
            l = m;
            m = (Math.floor((u + l) / 2));
        }
        
    }
    
    return (nums[l] >= target) ? l : u;
};