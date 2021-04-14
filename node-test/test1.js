const double = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val * 2);
      console.log(val * 2);
    }, 1000);
  });
};
const fn1 = double;
const fn2 = double;
const fn3 = (val) => {
  console.log(val * 3);
  return val * 3;
};
const fn4 = double;

// fn1(2)
//   .then((result) => {
//     return fn2(result);
//   })
//   .then((result) => {
//     return fn3(result);
//   })
//   .then((result) => {
//     console.log(result);
//     return result;
//   });
const fns = [fn1, fn2, fn3, fn4];
// 最简单的方式，没有洋葱模型
function compose(fns) {
  return (val) => {
    let p = Promise.resolve(val);
    for (let fn of fns) {
      p = p.then((res) => Promise.resolve(fn(res)));
    }
    return p;
  };
}
const c = compose(fns);
c(1).then((res) => {
  console.log(res);
});
