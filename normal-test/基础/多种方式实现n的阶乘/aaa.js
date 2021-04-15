function bcmul(a, b) {
  const aArr = a.split("");
  const bArr = b.split("");
  const aLen = aArr.length;
  const bLen = bArr.length;

  let result = new Array(aLen + bLen).fill(0);

  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < bLen; j++) {
      result[i + j + 1] += aArr[i] * bArr[j];
    }
  }

  for (let k = result.length - 1; k > 0; k--) {
    if (result[k] >= 10) {
      result[k - 1] += Math.floor(result[k] / 10);
      result[k] %= 10;
    }
  }

  return result.join("").replace(/^0*(?=\d)/g, "");
}

// function bcmul(a, b) {
//   return (BigInt(a) * BigInt(b)).toString();
// }

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
console.log("方法5", factorial_5(10000));
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
console.log("方法6", factorial_6(10000));
console.timeEnd("方法6");
