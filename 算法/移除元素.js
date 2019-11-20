/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[fast] == val) {
      slow++;
    } else {
      nums[fast - slow] = nums[fast];
    }
  }
  nums.splice(fast - slow);
  return nums.length;
};
