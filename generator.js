function* gen() {
  const num1 = yield 1;
  console.log(num1);
  const num2 = yield 2;
  console.log(num2);
  return 3;
}

var g = gen();
console.log(g.next());
console.log(g.next(111));
// console.log(g.next());
// console.log(g.next());
