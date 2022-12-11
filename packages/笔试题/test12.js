// 题目 1
// 实现bind方法
function myBind(fn, context, ...args) {
  return function(...args2) {
    const newArr = [...args, ...args2];
    const result = fn.call(context, ...newArr);
    return result;
  };
}
function test(num) {
  console.log(this.a);
  console.log(num);
}
var o = {
  a: 1,
};
var test1 = myBind(test, o);
test1(1);

// 题目 2
function sum(a, b, c, d) {
  return a + b + c + d;
}

const curryingSum = curry(sum);
console.log(curryingSum(1)(2)(3)(4)); // 10

//实现 curry函数
function curry(fn) {
  function inner(...args) {
    if (args.length < fn.length) {
      return function(...args2) {
        return inner.apply(this, [...args, ...args2]);
      };
    } else {
      return fn.apply(this, args);
    }
  }
  return inner;
}
