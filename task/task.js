async function a1() {
  console.log('a1 start');
  await a2();
}

async function a2() {
  console.log('a2');
}
console.log('script start');

a1();
var p1 = new Promise(function(resolve, reject) {
  console.log('p1');
  resolve('p1 resolve');
});
p1.then(function(res) {
  console.log(res);
  Promise.resolve('p2').then(function(res) {
    console.log(res);
  });
});

console.log('script end');

/**
 * 1. async是同步执行
 * 2. new Promise中是同步执行
 */
