/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = new Map();
  var temp = 0;
  var max = 0;
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      temp = i - map.get(s[i]);
    } else {
      temp++;
    }
    map.set(s[i], i);
    max = Math.max(max, temp);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abba"));
