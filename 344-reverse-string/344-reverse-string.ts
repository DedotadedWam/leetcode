/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right  = s.length - 1;
    let temp: string;
    
    while (left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
};