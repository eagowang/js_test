// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function(s) {
  // abcabcaa
  // 12333331
  // aabcefll
  // 11234561
  var sum = 0;
  var max = 0;
  var map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      sum = sum - map[s[i]];
    } else {
      sum++;
    }
    map[s[i]] = i;
    max = Math.max(sum, max);
  }

  return max;
};

// console.log(3)
console.log(lengthOfLongestSubstring('abcabcaa'));
// console.log(1)
console.log(lengthOfLongestSubstring('aaa'));
// console.log(6)
console.log(lengthOfLongestSubstring('aabcefll'));
