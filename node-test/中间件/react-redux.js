function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => {
    const c = a(b(...args));
    return c;
  });
}
// 返回一个函数,
const e = (...args) => {
  return ((next) => {
    return (num) => {
      next(num + 1);
    };
  })(
    ((next) => {
      return (num) => {
        setTimeout(() => {
          next(num * 2);
        }, 2000);
      };
    })(...args)
  );
};
e(doSomething)(1);
const f = (...args) => (num) => {
  ((num) => {
    setTimeout(() => {
      args[0](num * 2);
    }, 2000);
  })(num + 1);
};
f(doSomething)(1);
const add = (next) => {
  console.log(111)
  // return (num) => {
    next();
  // };
};
const multiple = (next) => {
  console.log(222)
  return (num) => {
    setTimeout(() => {
      next(num * 2);
    }, 2000);
  };
};
function doSomething(num) {
  console.log(num);
  return num;
}
const _c = compose(add, add, multiple);
const _d = _c(doSomething);

// _d(1);

// console.log(
//   Promise.resolve(
//     (async () => {
//       console.log('first before');
//       await Promise.resolve(
//         (async () => {
//           console.log('second before');
//           await Promise.resolve(
//             (() => {
//               console.log('done');
//             })()
//           );
//           console.log('second after');
//         })()
//       );
//       console.log('first after');
//     })()
//   )
// );

// console.log(
//   Promise.resolve(
//     (async () => {
//       console.log('first before');
//       await Promise.resolve(
//         (async () => {
//           console.log('second before');
//           await Promise.resolve(
//             (() => {
//               console.log('done');
//             })()
//           ).then(() => {
//             console.log('second after');
//           });
//         })()
//       ).then(() => {
//         console.log('first after');
//       });
//     })()
//   )
// );

(...args) =>
  (function m1(next) {
    // ...
  })(
    (function m2(next) {
      // ...
    })(
      (function printf(next) {
        // ...
      })(...args)
    )
  );
