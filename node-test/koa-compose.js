// 洋葱模型，正向
async function m1(ctx, next) {
  console.log('first before');
  await next();
  console.log('first after');
}

 async function m2(ctx, next) {
  console.log('second before');
  await next();
  console.log('second after');

}

async function m3(ctx, next) {
  console.log('third before');
  await next();
  console.log('third after');
}
const fns = [m1, m2, m3];
// next，宏任务微任务执行顺序，使用next介入顺序，也就是说在next替换成对应的promise，用递归可以实现这种效果
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!');
  }

  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      // 当中间件执行完，赋值为外部传入的目标函数，即洋葱心（正常执行的最后一个函数）
      if (i === middleware.length) fn = next;
      // 终止条件，返回promise
      if (!fn) return Promise.resolve();
      try {
        // 确保fn()返回promise，并修改中间件的next参数
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        // return fn(context, dispatch.bind(null, i + 1));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
const c = compose(fns);
c(null, (ctx, next) => {
  console.log('done');
});

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5))// 120
// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// console.log(factorial(5, 1)) // 120