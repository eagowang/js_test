// 参照点，左右对比

var arr = [2, 3, 1, 5, 4];
function quickSort(nums) {
  if (nums.length <= 1) return nums;
  var pivot = nums[nums.length - 1];
  var left = [];
  var right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));
