const express = require('express');

const app = express();

function getData(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log('fetch data', text);
      resolve();
    }, 1000);
  });
}
// app.use((req, res, next) => {
//   console.log('first middleware before');
//   const startTime = Date.now();
//   next();
//   const cost = Date.now() - startTime;
//   console.log('first middleware after');
// });
// app.use(async (req, res, next) => {
//   console.log('second middleware before');
//   await next();
//   await sleep(2000, 'second');
//   console.log('second middleware after');
// });

app.get(
  '/api/test1',
  async (req, res, next) => {
    console.log('middlewareA before next()');
    await getData('');
    await next();
    console.log('middlewareA after next()');
  },
  async (req, res, next) => {
    console.log('middlewareB before next()');
    res.a = 111;
    await next();
    await getData('');
    console.log('middlewareB after next()');
  },
  async (req, res, next) => {
    console.log('last middleware');
    await getData('');
    console.log('done');
  }
);

app.listen(4000);
console.log('server listening at port 4000');
