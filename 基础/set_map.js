// set
const s = new Set();
s.add(1);
s.add("1");
for (let i of s) {
  console.log(i);
}
console.log(s.size);
console.log(s.has(1));
// weakset ,只能是对象，并且弱引用，不会被引用计数
var obj = {};
var arr = [];
const ws = new WeakSet();
ws.add(obj);
ws.add(arr);
var obj1;
console.log(ws.has(obj)); // true
console.log(ws.has(arr)); // true
function weakset() {
  obj1 = {};
  ws.add(obj1);
  console.log(ws.has(obj1));
}
console.log(ws.has(obj1));

// map

var map = new Map();
map.set(1, "hello");
map.set(1, "hello world");

console.log(map.get(1));
for (let [key, value] of map) {
  console.log(key, value);
}
