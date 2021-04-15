// var target = {
//   b: [1, 2],
// };
// var handler = {
//   get(target, key) {
//     console.log(`get on property ${key}`);
//     return target[key];
//   },
// };
// var proxy = new Proxy(target, handler);

// proxy.a = 'b';
// console.log(target.a);
// console.log(proxy.c === undefined);
// proxy.b.push(3);
// console.log(proxy.b);

// var handler = {
//   set(target, property, value, receiver) {
//     console.log(`set ${property} change to ${value}`);
//     target[property] = value;
//     console.log(receiver, target);
//     return true;
//   },
// };

// var proxy = new Proxy(target.b, handler);

// proxy.push(3);

// var target = {
//   get getReceiver() {
//     console.log(1111);
//     return this;
//   },
// };
// var target = {};

var proxy = new Proxy(
  {},
  {
    get: function (target, property, receiver) {
      return receiver;
    },
  }
);

console.log(proxy.getReceiver);
var inherits = Object.create(proxy);
console.log(inherits.getReceiver);
