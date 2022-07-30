function myAtoi(s: string): number {
    let isNeg: boolean = false;
    let intString: string | number = "";
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
            intString += s[i]
            i++;
        }
        intString += s[i]
        intString = Number(intString);
        intString = isNeg ? -1 * intString : intString;
        return intString > 2147483647 ? 2147483647 : intString < -2147483648 ? -2147483648 : intString;
    }
    
    return 0;
};