// 自定义迭代器
var myIterable = {};
myIterable[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};
console.log(...myIterable);

var str = '123';
console.log(...str);

var s = new Set();
s.add(1);
s.add(2);
console.log(...s);

var m = new Map();
m.set('a', 1);
m.set('b', 2);
console.log(...m);

let iterator = str[Symbol.iterator]();

console.log(iterator + '');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

var someString = new String('hi');
someString[Symbol.iterator] = function() {
  return {
    next() {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};
console.log(...someString);
