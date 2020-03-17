// 归并排序

var nums = [3, 4, 1, 2, 7, 4, 5];

// function merge_sort(nums) {
//   var len = nums.length;
//   if (len <= 1) return nums;
//   var middle = Math.floor(len / 2);
//   var left = nums.slice(0, middle);
//   var right = nums.slice(middle);
//   return merge(merge_sort(left), merge_sort(right));
// }

// function merge(left, right) {
//   var res = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       res.push(left.shift());
//     } else {
//       res.push(right.shift());
//     }
//   }
//   return res.concat(left, right);
// }

function merge_sort(nums) {
  var len = nums.length;
  if (len <= 1) return nums;
  var middle = Math.floor(len / 2);
  var left = nums.slice(0, middle);
  var right = nums.slice(middle);
  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  var res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left, right);
}

console.log(merge_sort(nums));
