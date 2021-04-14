import { resolve } from 'path';

function* gen() {
  var res = yield 1;
  return res + 2;
}
var i = gen();
var g = i.next();
console.log('1: ', g.value);
// 双向通信，在next中传回一个值作为上一个yield的返回值
g = i.next(g.value);
console.log('2: ', g.value);
g = i.next();
console.log('3: ', g.value);

function* gen1() {
  yield 1;
  yield { who: 'me' };
  yield function() {
    console.log('hello');
  };
  yield 1 + 2;
}
var i1 = gen1();
var g1 = i1.next();
console.log(g1.value);
var g2 = i1.next();
console.log(g2.value);
var g3 = i1.next();
console.log(g3.value);
var g4 = i1.next();
console.log(g4.value);
var g5 = i1.next();
console.log(g5.value);

// 异步流程控制，即使yield后面可以添加异步任务，但是我们仍然需要一个一个地调用next函数，流程化控制，就需要自动执行next函数。
// 而对于yield + promise结合的异步流程控制，核心思想就是通过next函数取得yield后面的值，然后将这个值转化为Promise，通过Promise来控制异步任务
// 异步任务完成后递归重新调用next函数重复上面的操作
function co(gen) {
  // 记录当前作用域
  var ctx = this;
  var args = Array.prototype.slice(arguments, 1);

  return new Promise((reslove, reject) => {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    // 先调用一次generator， 启动generator
    onFulfilled();
    // fulfilled 态处理函数
    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (err) {
        reject(err);
      }
      next(res);
      return null;
    }

    // reject态处理函数
    function onRejected(res) {
      var ret;
      try {
        ret = gen.throw(res);
      } catch (e) {
        reject(err);
      }
      // 递归调用next
      next(ret);
    }

    function next(ret) {
      // 如果done为true，结束流程
      if (ret.done) return resolve(ret.value);

      // 将value转化为promise对象
      var value = toPromise(ret.value);

      // 这里需要检测value是不是一个promise对象，value不一定是一个promise对象
      // 如果是则为该promise添加resolve与reject处理函数
    }
  });
}
