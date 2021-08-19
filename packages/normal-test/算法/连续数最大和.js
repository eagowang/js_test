// 实现一个函数，求一个全是数字的数组中，连续位置数字相加的最大和。
// 例如：输入[1, 2, 3] 返回 6；[-3, 2, 2, -4, 3] 返回 4
// -3 -1/2 1/2/4/ 0 3
// -3 2 4
// res 2
// 前一个最大+自己
function maxSum(nums) {
  var len = nums.length;
  var max = [nums[0]];
  if (len <= 1) {
    return nums[0];
  }
  for (var i = 1; i < len; i++) {
    max[i] = Math.max(max[i - 1] + nums[i], nums[i]);
  }
  return max.sort((a, b) => a - b).pop();
}
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var result = maxSum(nums);
console.log(result);
