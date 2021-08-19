const { effect, reactive, ref } = require('./reactive');

let obj1 = reactive({ a: 10 });
let obj2 = reactive({ b: 20 });
let sum = 0;

effect(() => {
  sum = obj1.a + obj2.b;
});

console.log(sum);
obj1.a = 100;
console.log(sum);

var a = ref(0);
console.log(a.value);

a.value = 2;

console.log(a.value);

class A {
  constructor(a) {
    this.a = a;
  }
  get value() {
    return this.a;
  }
}
var a = new A(1);
console.log(a.value);
