console.log('start');

setTimeout(() => {
  console.log('setTimout');
});

var p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('promise setTimeout');
    resolve();
  });
});

// 测试promise中嵌入promise的执行数顺序
p1.then(function(res) {
  console.log('p1 promise1');
  Promise.resolve().then(function(res) {
    console.log('p2 promise1');
  });
}).then(function(res) {
  console.log('p1 promise2');
});

console.log('end');

/**
 * start
 * end
 * setTimoout
 * promise setTimeout
 * p1 promise1
 * p2 promise1
 * p1 promise2
 */
