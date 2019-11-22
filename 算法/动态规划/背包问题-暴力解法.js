// 存储结果
var maxW = 0;
// 物品重量
var weight = [2, 2, 4, 6, 5];
// 物品数量
var n = 5;
// 背包承受的最大重量
var w = 9;

// 回溯算法
function f(i, cw) {
  if (i == n || cw == w) {
    if (cw > maxW) maxW = cw;
    return;
  }
  f(i + 1, cw);
  if (cw + weight[i] <= w) {
    f(i + 1, cw + weight[i]);
  }
}
f(0, 0);
console.log(maxW);
