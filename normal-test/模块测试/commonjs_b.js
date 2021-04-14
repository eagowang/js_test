var A = require('./commonjs_a');

// 证明是值拷贝
console.log(A.counter);
A.add();
console.log(A.counter);
// 证明是浅拷贝
console.log(A.obj.name);
A.changeName('wss');
console.log(A.obj.name);
