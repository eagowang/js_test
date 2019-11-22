var nums = [3, 4, 1, 2, 7, 4, 5];
// 非原地排序
// function quick_sort(nums) {
//   if (nums.length <= 1) return nums;
//   var left = [];
//   var right = [];
//   var pivot = nums[0];
//   for (var i = 1; i < nums.length; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }
//   return quick_sort(left).concat(pivot, quick_sort(right));
// }

// 原地排序
function quick_sort(nums) {
  quick_sort_c(nums, 0, nums.length - 1);
  return nums;
}

function quick_sort_c(nums, p, q) {
  if (p >= q) return;
  var pivot = nums[q];
  var k = p;
  for (var i = p; i <= q; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
  [nums[q], nums[k]] = [nums[k], nums[q]];
  quick_sort_c(nums, p, k - 1);
  quick_sort_c(nums, k + 1, q);
}

console.log(quick_sort(nums));
