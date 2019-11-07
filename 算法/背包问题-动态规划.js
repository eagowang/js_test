// 物品重量
var weight = [2, 2, 4, 6, 3];
// 物品数量
var n = 5;
// 背包承受的最大重量
var w = 9;

function f(weight, n, w) {
  var states = Array.from({ length: 5 }).map(item => []);
  states[0][0] = true; // 第一行的数据要特殊处理，可以利用哨兵优化
  if (weight[0] <= w) {
    states[0][weight[0]] = true;
  }
  for (var i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (states[i - 1][j] == true) states[i][j] = states[i - 1][j];
    }
    for (let j = 0; j <= w - weight[i]; j++) {
      //把第i个物品放入背包
      if (states[i - 1][j] == true) states[i][j + weight[i]] = true;
    }
  }
  for (var i = w; i >= 0; i--) {
    // 输出结果
    if (states[n - 1][i] == true) {
      return i;
    }
  }
}

f(weight, 5, 9);
