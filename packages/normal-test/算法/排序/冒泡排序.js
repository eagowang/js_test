var nums = [2, 3, 1, 7, 9, 6];

// function bubbleSort(nums) {
//   var len = nums.length;
//   var flag = false;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - i - 1; j++) {
//       if (nums[j] > nums[j + 1])
//         [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
//       flag = true;
//     }
//     if (!flag) break;
//   }

//   return nums;
// }

// 冒泡排序，双层循环，一次yi

console.log(bubbleSort(nums));
