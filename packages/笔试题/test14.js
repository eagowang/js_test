function add(...args) {
  var inner = function(...args2) {
    return add(...args, ...args2);
  };

  inner.sumOf = function() {
    return args.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  };
  return inner;
}

console.log('====================================');
console.log(add(1)(2, 3).sumOf());
console.log('====================================');
add(1, 2)(3).sumOf();
add(1)(2)(3).sumOf();
add(1, 2, 3).sumOf();
