function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function doSomething() {
  console.log('end');
}
function printR(str) {
  console.log(str);
}

const delay = str => next => () => {
  setTimeout(() => {
    printR(str);
    next();
  }, 500);
};

const delayDoSomething = compose(
  delay('a'),
  delay('b'),
  delay('c')
)(doSomething);

delayDoSomething();
