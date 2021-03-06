/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  var maxSubstr = strs[0];
  for (var i = 1; i < strs.length; i++) {
    var temp = "";
    for (var j = 0; j < strs[i].length; j++) {
      if (strs[i][j] == maxSubstr[j]) {
        temp += strs[i][j];
      } else {
        break;
      }
    }
    maxSubstr = temp;
  }
  return maxSubstr;
};
const x = longestCommonPrefix(["aa", "a"]);
console.log(x);
