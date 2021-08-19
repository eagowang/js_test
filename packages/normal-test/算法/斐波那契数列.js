// 递归解法
var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};
// 动态规划解法
var fib = function(n) {
  if (n < 2) {
    return n;
  }
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
