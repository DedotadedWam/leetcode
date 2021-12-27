/*
Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"
*/

const longestPalindrome = (s) => {
  function findPalindrome(l, r) {
    r = r ? r : l;
    for (let j = 0; j < s.length; j++) {
      if (s[r + j] === s[l - j]) {
        current = s.slice(l - j, r + j + 1);
        if (current.length > longest.length) {
          longest = current;
        }
      } else {
        break;
      }
    }
  }

  let longest = "";

  let current = "";

  for (let i = 0; i < s.length; i += 0.5) {
    if (i % 1 !== 0) {
      let l = Math.floor(i);
      let r = Math.ceil(i);
      if (r === s.length) break;
      findPalindrome(l, r);
    } else {
      findPalindrome(i);
    }
  }

  return longest;
};

console.log(longestPalindrome("cbbd"));

/*
iterate through string.
for odd lengthed palindromes, use integers
for even lengthed palindromes, use floats at 1.5
*/
