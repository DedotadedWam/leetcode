function myAtoi(s: string): number {
    let isNeg: boolean = false;
    const intArray: number[] = [];
    let i: number = 0;
    
    function isCharNumber(c: string): boolean {
      return c >= '0' && c <= '9';
    }
    
    while (s[i] === " ") {
        i++;
    }
    
    if (s[i] === "-" || s[i] === "+") {
        i++;
        if (isCharNumber(s[i]) && s[i - 1] === "-") {
            isNeg = true;   
        } else if (isCharNumber(s[i]) && s[i - 1] === "+") {
            isNeg = false;
        }    
        else {
            return 0;
        }
    }
    
    if (isCharNumber(s[i])) {
        while (isCharNumber(s[i + 1])) {
            intArray.push(Number(s[i]))
            i++;
        }
        intArray.push(Number(s[i]))
        let result = Number(intArray.join(''));
        result = isNeg ? -1 * result : result;
        return result > 2147483647 ? 2147483647 : result < -2147483648 ? -2147483648 : result;
    }
    
    return 0;
};