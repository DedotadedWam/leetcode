/**
 * @param {string} digits
 * @return {string[]}
**/
const digitKeys = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
    const combos = [];
    
    if (digits.length === 0) return combos;
    
    function innerFunc (currentCombo, remainingDigits) {
        if (currentCombo.length === digits.length) {
            combos.push(currentCombo);
            return;
        }
        
        digitKeys[remainingDigits[0]].forEach((char) => {
            innerFunc(currentCombo + char, remainingDigits.slice(1));
        })
    }
    
    digitKeys[digits[0]].forEach((char) => {
        innerFunc(char, digits.slice(1));
    })
    
    return combos;
};