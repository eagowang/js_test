var nums = [3, 2, 5, 1, 4];
function findK(nums, k) {
  return quick_sort_c(nums, 0, nums.length, k);
}

function quick_sort_c(nums, p, q, k) {
  var pivot = nums[q];
  var m = p;
  for (var i = p; i <= q; i++) {
    if (nums[i] > pivot) {
      [nums[i], nums[m]] = [nums[m], nums[i]];
      m++;
    }
  }
  [nums[q], nums[m]] = [nums[m], nums[q]];
  if (m > k) {
    return quick_sort_c(nums, p, m - 1, k);
  } else if (m < k) {
    return quick_sort_c(nums, m + 1, q, k);
  } else {
    return nums[k];
  }
}
console.log(findK(nums, 2));
