// 实现一个函数，求一个全是数字的数组中，连续位置数字相加的最大和。
// 例如：输入[1, 2, 3] 返回 6；[-3, 2, 2, -7,-4, 3] 返回 4
// -3 -1/2 1/2/4/ 0 3
// -3 2 4
// res 2
// 前一个最大+自己
// 子数组大于0
function maxSum(nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    res = Math.max(res, nums[i]);
  }
  return res;
}

console.log(maxSum([-3, 2, 2, -7, -4, 3]));
