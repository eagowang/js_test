var maxV = 0; // 结果放到maxV中
var weight = [2, 2, 4, 6, 3]; // 物品的重量
var value = [3, 4, 8, 9, 6]; // 物品的价值
var n = 5; // 物品个数
var w = 9; // 背包承受的最大重量
function f(i, cw, cv) {
  // 调用f(0, 0, 0)
  if (cw == w || i == n) {
    // cw==w表示装满了，i==n表示物品都考察完了
    if (cv > maxV) maxV = cv;
    return;
  }
  f(i + 1, cw, cv); // 选择不装第i个物品
  if (cw + weight[i] <= w) {
    f(i + 1, cw + weight[i], cv + value[i]); // 选择装第i个物品
  }
}
f(0, 0, 0);
console.log(maxV);
