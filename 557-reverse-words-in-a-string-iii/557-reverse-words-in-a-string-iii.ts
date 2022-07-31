function reverseWords(s: string): string {
    let strs: string[] = s.split(' ');
    
    strs = strs.map((str: string)=> {
        let chars: string[] = str.split('')
        reverseString(chars);
        return chars.join('');
    })
    
    return strs.join(' ')
};

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