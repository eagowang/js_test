# 多种方式实现 n 的阶乘

## 实现方法

### 方法一：递归

```javascript
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
```

### 方法二：尾递归

```javascript
function factorial(n, t) {
  if (n == 1) return t;
  return factorial(n - 1, n * t);
}
```

### 方法三：循环

```javascript
// while循环
function factorial(n) {
  var r = 1;
  while (n > 0) {
    r *= n--;
  }
  return r;
}
```

---

> 方法四 & 方法五的前提：大数相乘方法

```javascript
// 利用bigint做大数乘法
function bcmul(num1, num2) {
  return (BigInt(num1) * BigInt(num2)).toString();
}
```

### 方法四：大数阶乘

```javascript
function factorial(n) {
  var r = 1;
  while (n > 0) {
    r = bcmul((n--).toString(), r.toString());
  }
  return r;
}
```

### 方法五：阶乘优化

```javascript
function factorial(n) {
  var middleSquare = Math.pow(Math.floor(n / 2), 2);
  var result = (n & 1) == 1 ? 2 * middleSquare * n : 2 * middleSquare;
  result = result.toString();
  for (var num = 1; num < n - 2; num = num + 2) {
    middleSquare = middleSquare - num;
    result = bcmul(result, middleSquare.toString());
  }
  return result;
}
```

## 总结

| 方法     | T(n) | S(n) | 测试耗时                                                                          | 优劣势                                                                       | 备注                                         |
| -------- | ---- | ---- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| 递归     | o(n) | o(n) | n=10: 0.166015625ms <br>n=100: 0.264892578125ms<br>n=1000: 0.285888671875ms       | 优：代码简单易理解<br>劣：n 很大时，调用栈会溢出，也会损失精度               | -                                            |
| 尾递归   | o(n) | o(1) | n=10: 0.09716796875ms <br>n=100: 0.113037109375ms <br> n=1000: 0.235107421875ms   | 优：代码简单易理解，n 很大时，调用栈不会溢出<br>劣：n 很大时，会损失精度     | 调用栈只有一个，不会溢出                     |
| 循环     | o(n) | o(1) | n=10: 0.094970703125ms <br>n=100: 0.099853515625ms <br> n=1000: 0.14306640625ms   | 优：时间、空间复杂度低，n 很大时，调用栈不会溢出<br>劣：n 很大时，会损失精度 | 优化点在于减少了不必要的出入栈操作           |
| 大数阶乘 | o(n) | o(1) | n=10: 0.135009765625ms <br>n=100: 0.508056640625ms<br> n=1000: 157.230712890625ms | 优：n 很大时，不会损失精度<br>劣：n 比较小时，效率不高                       | -                                            |
| 阶乘优化 | o(n) | o(1) | n=10: 0.117919921875ms <br>n=100: 0.254150390625ms<br> n=1000: 71.197998046875ms  | 优：相比 BigInt 大数阶乘方法更快，其它优点相同<br>劣：代码复杂难理解         | 通过减少耗时的乘法运算次数，来达到提速的目的 |
