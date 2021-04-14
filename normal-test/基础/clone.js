// 基础类型
var a = 1;
var b = a;
a = 2;
console.log(a); // 2

// 引用类型
var c = {
  name: 'wyc',
};
var d = c;
d.name = 'wss';
console.log(c.name); // wss

// 先实现一个浅复制
function shallowClone(obj) {
  if (!obj) return;
  var cloneObj = {};
  for (var i in obj) {
    // 过滤掉原型链上的属性
    if (obj.hasOwnProperty(i)) {
      cloneObj[i] = obj[i];
    }
  }
  return cloneObj;
}
// 测试一下
function Person(name, age) {
  this.name = name;
  this.info = {
    age: age,
  };
}

Person.prototype.speak = true;

var p1 = new Person('wyc', 10);
console.log(p1); // Person { name: 'wyc', info: { age: 10 } }

var cloneP1 = shallowClone(p1);
console.log(cloneP1); // { name: 'wyc', info: { age: 10 }, speak: true }
// TODO:未做说明
console.log(cloneP1.constructor); // [Function: Object]

// 更改一下cloneP1的age
cloneP1.info.age = 20;

// 输出20，说明p1.info和cloneP1.info指向相同
console.log(p1.info.age); // 20

// JSON序列化实现deepClone
var p2 = new Person('wyc', 10);
var cloneP2 = JSON.parse(JSON.stringify(p2));

cloneP2.info.age = 20;
// 输出10，说明是deepClone
console.log(p2.info.age); // 10

// 对于一般的场景，JSON序列化反序列化都可以满足了，但是有一些情况，这么写会报错或复制错误
// undefined复制成了null
console.log(JSON.parse(JSON.stringify([1, undefined, 2]))); // [1, null, 2]
// console.log(
//   JSON.parse(JSON.stringify([document.body, document.querySelector('p')]))
// ); // -> [{}, {}]
console.log(JSON.parse(JSON.stringify([new Date()]))); // [""2019-03-04T10:09:00.419Z""]
// 先实现一个简单版deepClone
function deepClone1(obj) {
  var cloneObj = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (typeof obj[i] === 'object') {
        cloneObj[i] = deepClone1(obj[i]);
      } else {
        cloneObj[i] = obj[i];
      }
    }
  }
  return cloneObj;
}

var p3 = new Person('wyc', 10);
var cloneObj3 = deepClone1(p3);
p3.info.age = 20;
console.log(cloneObj3); // { name: 'wyc', info: { age: 10 } }

// 上面代码可以深复制我们的Person实例了，但是有一些边界情况没有考虑，null,undefined
var cloneObj4 = deepClone1(null);
console.log(cloneObj4); // {}

// 数组也会复制错误，因为typeof [] === 'object'
var cloneObj5 = deepClone1({ a: 1, b: [1, 2, 3], c: { name: 'wyc' } });
console.log(cloneObj5); //  a: 1, b: { '0': 1, '1': 2, '2': 3 }, c: { name: 'wyc' } }

// RegExp复制也会错误
var cloneObj6 = deepClone1({
  a: /abc/i,
  b: function() {
    console.log('b');
  },
});

console.log(cloneObj6); // { a: {}, b: [Function: b] }

// 下面开始解决这些问题

function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

function deepClone2(obj) {
  if (!isObject(obj)) return obj;
}
