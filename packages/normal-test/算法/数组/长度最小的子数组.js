/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var min = nums.length;
  var sum = 0;
  var slow = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum - nums[slow] >= s && slow < i) {
      sum = sum - nums[slow];
      slow++;
    }
    if (sum >= s) {
      min = Math.min(i - slow + 1, min);
    }
  }
  return sum >= s ? min : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
