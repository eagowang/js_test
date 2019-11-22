/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if (strs.length == 0) return "";
//   var prefix = strs[0];

//   for (var i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) != 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (!prefix) return "";
//     }
//   }
//   return prefix;
// };
// const x = longestCommonPrefix(["flower", "flow", "flight"]);
// console.log(x);
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
