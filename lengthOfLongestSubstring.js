/*
@param {string} s
@return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  let greatest = 1;
  let counter;
  for (let i = 0; i < s.length; i++) {
    counter = 1;
    const current = {};
    current[s[i]] = true;
    for (let j = i + 1; j < s.length; j++) {
      if (current[s[j]]) break;
      current[s[j]] = true;
      counter++;
      if (counter > greatest) {
        greatest = counter;
      }
    }
  }

  return greatest;
};
