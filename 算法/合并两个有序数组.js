/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 双指针
var merge = function(nums1, m, nums2, n) {
  var p1 = m - 1;
  var p2 = n - 1;

  var p = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }
  for (var i = 0; i <= p2; i++) {
    nums1[i] = nums2[i];
  }
  return nums1;
};
console.log(merge([1, 0], 1, [2], 1));
