// 超出范围的大数相减

function minus(a, b) {
  // a-b
  // (1)
  // 98123
  //107345
  // (2)
  // 98123
  //  7345

  // a.length - b.length
  // a[i] - b[i]
  // 进位 j (-1 or 0)
  // a[i+1] - b[i+1] + j

  // a,b的符号位

  // -1 -2
  // -2 1
  // 1 -2
  // abs()
  // 补0数
  var k = a.length - b.length;
  var m = false;
  if (k > 0) {
    m = true;
  } else if (k == 0) {
    var atemp = a;
    var btemp = b;
    // TODO:对比一下两个数的大小
    while ((len = atemp.length && atemp[0] == btemp[0])) {
      atemp = atemp.substr(1);
      btemp = btemp.substr(1);
    }
    m = atemp[0] - btemp[0] > 0;
  }
  [a, b] = m ? [a, b] : [b, a];

  b =
    Array.from({ length: Math.abs(k) })
      .map(item => 0)
      .join("") + b;

  var res = [];
  var jinwei = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    var p = parseInt(a[i]);
    var q = parseInt(b[i]);
    var num;
    if (p - q >= 0) {
      num =
        a[i] - b[i] + jinwei >= 0
          ? a[i] - b[i] + jinwei
          : a[i] - b[i] + jinwei + 10;
      res.unshift(num);
      jinwei = 0;
    } else {
      num = p + 10 - q + jinwei;
      res.unshift(num);
      jinwei = -1;
    }
  }
  while ((len = res.length > 0 && res[0] == 0)) {
    res.shift();
  }

  var str = res.join("");
  // 去0
  return str ? (m ? str : "-" + str) : 0;
}
var res = minus("11", "12");
console.log(res);

// 大数不行？
