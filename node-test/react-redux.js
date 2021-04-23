function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function doSomething(num) {
  console.log(num);
}
// function printR(str) {
//   console.log(str);
// }

// const delay = str => next => () => {
//   setTimeout(() => {
//     printR(str);
//     next();
//   }, 500);
// };

// const delayDoSomething = compose(
//   delay("a"),
//   delay("b"),
//   delay("c")
// )(doSomething);
function add(next) {
  return (num) => {
    next(num + 1);
  };
}
function multiple(next) {
  return (num) => {
    setTimeout(() => {
      next(num * 2);
    }, 2000);
  };
}

const delayDoSomething = compose(add, multiple)(doSomething);

delayDoSomething(1);

// const _delayDoSomething = (...args) => {};
