var matrix0 = [
  [0, 1, 2, 2],
  [0, 1, 0, 0],
  [0, 1, 2, 0],
];

// solve = (matrix) => {
//     // ...
// }

var days = test(matrix0); // 返回 3

console.log(days);

// 1 3个
// 2 2个
// 点，递归上下左右，修改matrix
// 边界情况 0结束，2取中间值
function test(matrix) {
  let queue = [];
  let num1 = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 2) {
        queue.push([i, j]);
      }
      if (matrix[i][j] === 1) {
        num1++;
      }
    }
  }

  let count = 0;
  let num = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let flag = false;
    while (size > 0) {
      let point = queue.shift();
      let x = point[0];
      let y = point[1];
      if (matrix[x][y - 1] === 1) {
        matrix[x][y - 1] = 2;
        flag = true;
        num++;
        queue.push([x, y - 1]);
      }
      if (matrix[x][y + 1] === 1) {
        matrix[x][y + 1] = 2;
        flag = true;
        num++;
        queue.push([x, y + 1]);
      }
      if (matrix[x + 1] && matrix[x + 1][y] === 1) {
        matrix[x + 1][y] = 2;
        flag = true;
        num++;
        queue.push([x + 1, y]);
      }
      if (matrix[x - 1] && matrix[x - 1][y] === 1) {
        matrix[x - 1][y] = 2;
        flag = true;
        num++;
        queue.push([x - 1, y]);
      }
      size--;
    }
    if (flag) count++;
  }
  if (num < num1) return -1;
  return count;
}
