function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let lower = i + 1;
        let upper = numbers.length - 1;
        
        while (lower <= upper) {
            let mid = Math.ceil((lower + upper) / 2)
            
            if (numbers[mid] + numbers[i] ===  target) {
                return [i + 1, mid + 1]
            }
            
            if (numbers[mid] > target - numbers[i]) {
                upper = mid - 1;
            } else {
                lower = mid + 1;
            }
        }
    }
    
};