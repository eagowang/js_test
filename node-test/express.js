/**
 *
 * @param {路由} router
 * @param {回调} fn
 */
function express() {
  var funcs = []; // 待执行的函数数组

  var app = function (req, res) {
    var i = 0;
    function next() {
      var task = funcs[i++]; // 取出函数数组里的下一个函数
      if (!task) {
        // 如果函数不存在,return
        return;
      }
      return Promise.resolve(task(req, res, next)); // 否则,执行下一个函数
    }

    return next();
  };

  /**
   * use方法就是把函数添加到函数数组中
   * @param task
   */
  app.use = function (task) {
    funcs.push(task);
  };

  return app; // 返回实例
}

var app = express();

app.use(function (req, res, next) {
  console.log('middlewareA before next()');
  next();
  console.log('middlewareA after next()');
});

app.use(async function (req, res, next) {
  console.log('middlewareB before next()');
  res.a = 111;
  await next();
  await getData('');
  console.log('middlewareB after next()');
});

app.use(async function (req, res) {
  console.log('last middleware');
  await getData('');
  console.log('done');
});

app({}, {});
function getData(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log('fetch data', text);
      resolve();
    }, 1000);
  });
}
