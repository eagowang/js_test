// 柯里化概念：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

console.log(increment(2));

console.log(addTen(2));
