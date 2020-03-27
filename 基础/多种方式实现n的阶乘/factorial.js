// "use strict";
var test = 10000;
/**
 * 方法1：递归
 * @param {number} n
 */
function factorial_1(n) {
  if (n == 1) return 1;
  return n * factorial_1(n - 1);
}

/**
 * 方法2：尾递归优化
 * @param {number} n
 * @param {number} t
 */
function factorial_2(n, t) {
  if (n == 1) return t;
  return factorial_2(n - 1, n * t);
}

/**
 * 方法3：while循环
 * @param {number} n
 */
function factorial_3(n) {
  var r = 1;
  while (n > 0) {
    r *= n--;
  }
  return r;
}

/**
 * 大数相乘算法
 * @param {string} a
 * @param {string} b
 */
function bcmul(num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  var res = [];
  for (var i = num1.length - 1; i >= 0; i--) {
    var n1 = Number(num1[i]);
    for (var j = num2.length - 1; j >= 0; j--) {
      var n2 = Number(num2[j]);
      res[i + j + 1] = res[i + j + 1] || 0;
      res[i + j] = res[i + j] || 0;
      var sum = res[i + j + 1] + n1 * n2;
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }

  var result = [];
  for (var i = 0; i < res.length; i++) {
    if (i == 0 && res[i] == 0) continue;
    result.push(res[i]);
  }
  return result.join("");
}

/**
 * 方法4：大数阶乘
 * @param {number} n
 */
function factorial_4(n) {
  var r = 1;
  while (n > 0) {
    r = bcmul((n--).toString(), r.toString());
  }
  return r;
}

/**
 * 方法5：阶乘优化
 * @param {number} n
 */
function factorial_5(n) {
  var middleSquare = Math.pow(Math.floor(n / 2), 2);
  var result = (n & 1) == 1 ? 2 * middleSquare * n : 2 * middleSquare;
  result = result.toString();
  for (var num = 1; num < n - 2; num = num + 2) {
    middleSquare = middleSquare - num;
    result = bcmul(result, middleSquare.toString());
  }
  return result;
}
console.time("方法5");
console.log("方法5", factorial_5(test));
console.timeEnd("方法5");

function factorial_6(n) {
  var res = [1];
  for (var i = 1; i <= n; i++) {
    for (var j = 0, c = 0; j < res.length || c != 0; j++) {
      var m = j < res.length ? i * res[j] + c : c;
      res[j] = m % 10;
      c = (m - res[j]) / 10;
    }
  }
  return res.reverse().join("");
}
console.time("方法6");
console.log("方法6", factorial_6(test));
console.timeEnd("方法6");

module.exports = {
  factorial_1,
  factorial_2,
  factorial_3,
  factorial_4,
  factorial_5
};

// console.time("方法1");
// console.log("方法1", factorial_1(test));
// console.timeEnd("方法1");

// console.time("方法2");
// console.log("方法2", factorial_2(test, 1));
// console.timeEnd("方法2");

// console.time("方法3");
// console.log("方法3", factorial_3(test));
// console.timeEnd("方法3");

// console.time("方法4");
// console.log("方法4", factorial_4(test));
// console.timeEnd("方法4");
