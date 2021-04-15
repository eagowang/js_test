// 核心思路，从两边开始，到中间位置，如果数字相同则是回文数

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  var revertNum = 0;
  while (x > revertNum) {
    revertNum = revertNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x == revertNum || x == Math.floor(revertNum / 10);
};

isPalindrome(121);
