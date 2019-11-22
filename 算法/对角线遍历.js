// var findDiagonalOrder = function(matrix) {
//   var ret = [];
//   var col = matrix.length;
//   var row = matrix[0].length;
//   var c = 0;
//   var r = 0;
//   for (var i = 0; i < col * row; i++) {
//     ret[i] = matrix[r][c];
//     if ((r + c) % 2 == 0) {
//       if (c == col - 1) {
//         r++;
//       } else if (r == 0) {
//         c++;
//       } else {
//         r--;
//         c++;
//       }
//     } else {
//       if (r == row - 1) {
//         c++;
//       } else if (c == 0) {
//         r++;
//       } else {
//         r++;
//         c--;
//       }
//     }
//   }
//   return ret;
// };

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix || matrix.length == 0) return [];
  var ret = [];
  var row = matrix.length;
  var col = matrix[0].length;
  var r = 0;
  var c = 0;
  for (var i = 0; i < col * row; i++) {
    ret[i] = matrix[r][c];
    // 从下到上
    if ((c + r) % 2 == 0) {
      if (c == col - 1) {
        r++;
      } else if (r == 0) {
        c++;
      } else {
        r--;
        c++;
      }
    } else {
      //从上到下
      if (r == row - 1) {
        c++;
      } else if (c == 0) {
        r++;
      } else {
        c--;
        r++;
      }
    }
  }
  return ret;
};
console.log(findDiagonalOrder([[1, 2]]));
