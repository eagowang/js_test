function leftSmallRightBig(nums) {
  var minArr = [];
  var len = nums.length;
  var min = nums[len - 1];
  for (var i = len - 1; i >= 0; i--) {
    if (nums[i] < min) {
      minArr[i] = nums[i];
    } else {
      minArr[i] = min;
    }
  }

  var max = nums[0];
  for (var i = 0; i < len; i++) {
    if (nums[i] > max) {
      max = nums[i];
      if (nums[i] < minArr[i + 1]) {
        return nums[i];
      }
    }
  }
  return -1;
}

var nums = [1, 2, 2, 4, 3, 5, 6];

console.log(leftSmallRightBig(nums));
