async function a1() {
  console.log("a1 start");
  await a2();
  console.log("a1 end");
}

async function a2() {
  console.log("a2");
}
console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);
a1();

new Promise(function(resolve, reject) {
  console.log("p1");
  resolve();
}).then(function() {
  console.log("p2");
});

console.log("script end");

/**
 * 1. async是同步执行
 * 2. new Promise中是同步执行
 */
