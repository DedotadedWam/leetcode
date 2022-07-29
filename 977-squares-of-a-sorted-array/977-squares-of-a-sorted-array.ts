function sortedSquares(nums: number[]): number[] {
    let lp: number = 0;
    let rp: number = nums.length - 1;
    let result: number[] = []
    
    while (lp !== rp) {
        if (nums[lp] **2 > nums[rp] **2) {
            result.push(nums[lp] ** 2)
            lp ++;
        } else {
            result.push(nums[rp] ** 2)
            rp--;
        }
    }
    
    result.push(nums[lp] ** 2)
    
    return result.reverse()
};