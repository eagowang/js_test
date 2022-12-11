// 创建一个对象的代理

// const handler = {
//   get: function(target, prop, receiver) {
//     console.log('prop', prop, target, receiver);
//     return target[prop];
//   },
// };

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.hi = function() {
//   console.log(`my name is ${this.name}`);
// };

// const p = new Proxy(new Person('lisi'), handler);

// p.hi();

// let numbers = [];

// numbers = new Proxy(numbers, {
//   // (*)
//   set(target, prop, val) {
//     // 拦截写入属性操作
//     console.log('prop', prop);
//     if (typeof val == 'number') {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1); // 添加成功
// numbers.push(2); // 添加成功
let animal = {
  _name: 'animal',
  get name() {
    return this._name;
  },
};
let animalProxy = new Proxy(animal, {
  get(target, prop, receiver) {
    // return Reflect.get(target, prop, receiver);
    return target[prop];
  },
});
let dog = {
  __proto__: animalProxy,
  _name: 'dog',
};

console.log(dog.name);
