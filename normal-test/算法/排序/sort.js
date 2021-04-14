var nums = [4, 2, 16, 12, 32, 21, 33, 1];

// 使用array.sort排序
// console.log(
//   nums.sort(function(a, b) {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   })
// );

// 冒泡排序
// 两次循环
// function bubbleSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// }

// bubbleSort(nums);

// 选择排序
// 在未排序序列中找到最小（最大）元素,存放到排序
// function selectSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     var min = i;
//     for (var j = i + 1; j < len; j++) {
//       if (arr[j] < arr[min]) {
//         [arr[min], arr[j]] = [arr[j], arr[min]];
//       }
//     }
//   }
// }

// selectSort(nums);

// 插入排序
// 像插扑克牌一样
// 对于未排序数据，在已排序数据中从后向前扫描，找到相应的位置并插入

// function insertSort(arr) {
//   var len = arr.length;
//   for (var i = 1; i < len; i++) {
//     var key = arr[i];
//     var j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
// }
// insertSort(nums);
// console.log(nums);

// function insertSort(arr) {
//   var len = arr.length;
//   for (var i = 1; i < len; i++) {
//     var key = arr[i];
//     var j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
// }

// insertSort(nums);
// console.log(nums);

// 归并排序

// function merge(left, right) {
//   var result = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   return result.concat(left, right);
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   var mid = Math.floor(arr.length / 2);
//   var left = arr.slice(0, mid);
//   var right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// console.log(mergeSort(nums));

// 快排

// function quickSort(arr) {
//   var basic = arr[0];
//   if (arr.length <= 1) return arr;
//   var left = [];
//   var right = [];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < basic) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(basic, quickSort(right));
// }

// console.log(quickSort(nums));

// 前序遍历

// function preOrderTraverse(tree) {
//   if (tree) {
//     console.log(tree.value);
//     preOrderTraverse(tree.left);
//     preOrderTraverse(tree.right);
//   }
// }

function preOrderTravere(tree) {
  var stack = [];
  var currentNode = tree;
  while (stack.length > 0 || currentNode) {
    if (currentNode) {
      console.log(currentNode.value);
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      var node = stack.pop();
      currentNode = node.right;
    }
  }
}
