// water[i] = min(l_max, r_max);
// 暴力算法，双层循环，时间复杂度O(n^2)，空间复杂度O(1)
var trap = function(height) {
  var len = height.length;
  var ans = 0;
  for (var i = 0; i < len; i++) {
    var r_max = 0;
    var l_max = 0;
    for (var j = i; j < len; j++) {
      r_max = Math.max(r_max, height[j]);
    }
    for (var j = i; j >= 0; j--) {
      l_max = Math.max(l_max, height[j]);
    }
    ans += Math.min(l_max, r_max) - height[i];
  }
  return ans;
};

// 备忘录优化
var trap = function(height) {
  var len = height.length;
  var ans = 0;
  var l_max = [];
  var r_max = [];
  l_max[0] = height[0];
  r_max[len - 1] = height[len - 1];

  // 遍历确定l_max[i]
  for (var i = 1; i < len; i++) {
    l_max[i] = Math.max(l_max[i - 1], height[i]);
  }

  // 遍历确定r_max[i]
  for (var i = len - 2; i >= 0; i--) {
    r_max[i] = Math.max(r_max[i + 1], height[i]);
  }

  // 计算结果
  for (var i = 0; i < len; i++) {
    ans += Math.min(l_max[i], r_max[i]) - height[i];
  }
  return ans;
};
