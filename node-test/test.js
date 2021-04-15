// 洋葱模型，正向
// async function _fn1(ctx, next) {
//   console.log('first before');
//   await next();
// }

// async function _fn2(ctx, next) {
//   await next();
//   console.log('first after');
// }

// async function _fn3(ctx, next) {
//   console.log('second before');
//   await next();
//   console.log('second after');
// }
async function m1(ctx) {}

async function m2(ctx) {}

const fns = [m1, m2];
// next，宏任务微任务执行顺序，使用next介入顺序，也就是说在next替换成对应的promise，用递归可以实现这种效果
Promise.resolve().then((ctx) => {
  console.log('first before'); // 看成在promise executor中执行
  return Promise.resolve(m1(ctx))
    .then(function (ctx) {
      console.log('second before'); // 看成在promise executor中执行
      return Promise.resolve(m2(ctx)).then(function (ctx) {
        console.log('second after');
      });
    })
    .then(function (ctx) {
      console.log('first after');
    });
});

// function compose(fns) {
//   return (ctx, next) => {
//     let index = -1;
//     return dispatch(0);
//     function dispatch(i) {
//       if (i <= index)
//         return Promise.reject(new Error('next() call multiple times'));
//       index = i;
//       let fn = fns[i];
//       if (i === fns.length) fn = next;
//       if (!fn) return Promise.resolve();
//       try {
//         return Promise.resolve(
//           fn(ctx, function next() {
//             return dispatch(i + 1);
//           })
//         );
//       } catch (e) {
//         return Promise.reject(e);
//       }
//     }
//   };
// }
// const _c = compose(_fns);
// _c(null, () => {
//   console.log('done');
// });
// async function t1() {
//   console.log('0000000');
//   await getData();
//   console.log('1111111');
// }

// function _compose(fns) {
//   return (val, next) => {
//     let p = Promise.resolve(val);
//     for (let fn of fns) {
//       p = p.then((res) => fn(res));
//     }
//     return p;
//   };
// }

// const _c = _compose(fns);
// _c().then(function () {
//   console.log('执行完毕');
// });
// 方法2，改造原函数，

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(1);
//   }, 1000);
// });

// p.then(
//   function (result) {
//     console.log('resolve', result);
//   },
//   function (reason) {
//     console.log('reject', reason);
//     throw reason;
//   }
// ).catch((e) => {
//   console.log(111);
//   console.log(e);
// });
