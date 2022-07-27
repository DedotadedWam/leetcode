function search(nums: number[], target: number): number {
    let midIndex: number = Math.floor(nums.length / 2);
    
    if (nums[midIndex] === target) return midIndex;
    
    let leftIndex: number = 0;
    let rightIndex: number = nums.length - 1;
    
    while(leftIndex <= rightIndex){
        let mid = Math.floor(rightIndex - leftIndex) 
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) rightIndex = mid - 1;
        if (nums[mid] < target) leftIndex = mid + 1;
    }
        
    return -1;
    
    
};