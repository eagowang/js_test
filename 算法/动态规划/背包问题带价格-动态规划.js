var maxV = 0; // 结果放到maxV中
var weight = [2, 2, 4, 6, 3]; // 物品的重量
var value = [5, 4, 8, 9, 6]; // 物品的价值
var n = 5; // 物品个数
var w = 9; // 背包承受的最大重量
function f(weight, value, n, w) {
  var states = Array.from({ length: 5 }).map(item => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      states[i][j] = -1;
    }
  }
  states[0][0] = 0;
  if (weight[0] <= w) {
    states[0][weight[0]] = value[0];
  }
  for (let i = 1; i < n; i++) {
    // 不选第i个物品
    for (let j = 0; j <= w; j++) {
      if (states[i - 1][j] >= 0) states[i][j] = states[i - 1][j];
    }
    // 选第i个物品
    for (let j = 0; j <= w - weight[i]; j++) {
      if (states[i - 1][j] >= 0) {
        var v = states[i - 1][j] + value[i];
        if (v > states[i][j + weight[i]]) {
          states[i][j + weight[i]] = v;
        }
      }
    }
  }
  var maxvalue = -1;
  for (let j = 0; j <= w; ++j) {
    if (states[n - 1][j] > maxvalue) maxvalue = states[n - 1][j];
  }
  console.log(maxvalue);
  return maxvalue;
}

f(weight, value, n, w);
