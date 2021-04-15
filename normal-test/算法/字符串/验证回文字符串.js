/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;
  var lp = 0;
  var rp = s.length - 1;
  while (lp < rp) {
    var lc = s[lp].charCodeAt();
    var rc = s[rp].charCodeAt();
    if (lc < 65 || (lc > 90 && lc < 97) || lc > 122) {
      lp++;
      continue;
    }
    if (rc < 65 || (rc > 90 && rc < 97) || rc > 122) {
      rp--;
      continue;
    }
    if (s[lp].toLowerCase() != s[rp].toLowerCase()) return false;
    lp++;
    rp--;
  }
  return true;
};
console.log(isPalindrome("OP"));
