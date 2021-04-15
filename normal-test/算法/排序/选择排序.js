var nums = [2, 3, 1, 7, 9, 6];

function selectSort(nums) {
  for (var i = 0; i < nums.length; i++) {
    var minP = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minP]) minP = j;
    }
    [nums[i], nums[minP]] = [nums[minP], nums[i]];
  }
  return nums;
}

console.log(selectSort(nums));
