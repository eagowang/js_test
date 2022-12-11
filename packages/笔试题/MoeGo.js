// 注意: 题目有四道, 请认真仔细读题,
//      如果有不理解的地方, 请联系 HR 或面试官,
//      如果有不会的, 请留空, 不要求做完, 不要盲目答题.
// 注意: 可以使用任意版本的 ECMAScript 提供的标准 API, 不允许使用历史遗留的非标准或被弃用的 API.
/**
 * Q1: 对象浅拷贝, 需要保留原型链
 *
 * @param src 需要被拷贝的对象, 不需要考虑内部类, 如 Date, Array, Map 等
 * @return {T} 返回拷贝结果
 */
function shallowCopy(src) {
  // show me your code
  const obj = {};
  // 保留原型链
  obj.__proto__ = src.__proto__;
  for (let key in src) {
    if (src.hasOwnProperty(key)) {
      obj[key] = src[key];
    }
  }
  return obj;
}
/**
 * Q2: 加权随机函数生成器
 *
 * 给定一个正整数数组 input, 返回一个随机函数,
 * 该函数被调用时, 随机返回一个该数组的下标, 下标 i 被返回的概率
 * 为该下标对应的元素的值 / 所有元素之和.
 *
 * 要求: 返回的随机函数的时间复杂度不超过 O(log(N))
 */
function createWeightedRandom(input) {
  // show me your code
  // [4, 5, 2, 3, 2] 2 => 2/16
  // 可以有相同的数
  return function random() {
    let map = new Map();
    let acc = 0;
    const sum = input.reduce((v, c) => v + c, 0);
    for (let i = 0; i < input.length; i++) {
      let num = input[i];
      let j = num; // 3,2,1,0

      while (j > 0) {
        map.set(acc, i);
        acc++;
        j--;
      }
    }
    const pos = Math.floor(Math.random() * sum); // 16个，[0, 15)
    return map.get(pos);
  };
}
/**
 * Q3: Function Currying
 *
 * In mathematics and computer science, currying is the technique of converting a function
 * that takes multiple arguments into a sequence of functions that each takes a single argument.
 * For example, currying transform can make f(a,b,c) callable as f(a)(b)(c).
 *
 * Here, we define a curry function which takes multi arguments,
 * the first argument is the function(fn) that needs to be called finally,
 * the rest arguments are curried already.
 *
 * If the number of all curried arguments is equal to or more than the number of the arguments of the original fn,
 * the called result should be returned, otherwise it will
 * return a new function which accept the rest arguments just like the demo.
 *
 * Please refer to the test cases to determine the return value type and parameter list.
 */
// fn(a,b,c) -> f(a)(b)(c);
// var fn = function(a,b,c){retrun a+b+c};
// var cfn = curry(fn);
// cfn(a)(b)(c)
function curry(fn, ...existingArgs) {
  // show me your code
  // fn.length;
  if (existingArgs.length >= fn.length) {
    return fn.apply(this, existingArgs);
  } else {
    return function(...args) {
      return curry(fn, ...existingArgs, ...args);
    };
  }
}
/**
 * Q4: 异步并发控制器
 *
 * 该函数返回一个执行函数(executor), 该执行函数接收一个异步任务函数(task),
 * executor 被调用时, 会根据 capacity 来执行 task: 如果正在执行的异步任务数不超过 capacity,
 * 则立即执行, 否则会等到任意一个正在执行的 task 结束后再执行. 并返回值为 task 的返回值的 Promise.
 */
// var executor = createAsyncWorker(2);
// executor(() => new Promise()).then(()=> {});
// executor(() => new Promise()).then(()=>{});
function createAsyncWorker(capacity) {
  // show me your code
  // 存任务列表
  let taskList = [];
  // 调度任务列表
  let next = function() {
    if (taskList.length > 0) {
      let task = taskList.shift();
      let p = task();
      p.then(() => {
        next();
      });
      return p;
    }
  };
  let worker = 0;
  return function executor(task) {
    // executor需要返回task执行的结果，但task不能立即执行，需要在调度时才能执行???
    // executor需要返回一个promise
    taskList.push(task);
    // 如果小于2个则直接执行，否则进入队列
    if (worker < capacity) {
      return task().then((res) => {
        worker--;
        return res;
      });
    } else {
    }
    return next();
  };
}
/* ----------------- 以下是测试用例 -----------------*/
function testShallowCopy(shallowCopyImpl) {
  const assert = require('assert');
  class UserModel {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      assert.strictEqual(typeof firstName, 'string');
      assert.strictEqual(typeof lastName, 'string');
    }
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  const src = new UserModel('Tony', 'Jaa');
  const dst = shallowCopyImpl(src);
  assert.deepStrictEqual(dst, src);
  assert.notStrictEqual(dst, src);
  assert.strictEqual(dst.fullName(), src.fullName());
}
function testCreateWeightedRandom(createWeightedRandomImpl) {
  const assert = require('assert');
  const input = [4, 5, 2, 3, 2];
  const counts = Array(input.length).fill(0);
  const random = createWeightedRandomImpl(input);
  assert.strictEqual(typeof random, 'function');
  for (let i = 0; i < 10000; i++) {
    const v = random();
    assert.ok(
      typeof v === 'number' && v < input.length && v > -1 && (v | 0) === v,
      `invalid random value: ${JSON.stringify(v)}`
    );
    counts[v]++;
  }
  const sum = input.reduce((v, c) => v + c, 0);
  for (let i = 0; i < input.length; i++) {
    const expected = input[i] / sum;
    const real = counts[i] / 10000;
    // 误差不超过 0.01
    assert.ok(
      Math.abs(expected - real) < 0.01,
      `invalid weight ${real} for ${i}, expected is ${expected}`
    );
  }
}
function testCurry(curryImpl) {
  const assert = require('assert');
  function makeArray5(a, b, c, d, e) {
    return [a, b, c, d, e];
  }
  let curriedMakeArray5 = curryImpl(makeArray5, 1, 2, 3, 4, 5);
  assert.deepStrictEqual(curriedMakeArray5, [1, 2, 3, 4, 5]);
  curriedMakeArray5 = curryImpl(makeArray5, 1);
  assert.deepStrictEqual(curriedMakeArray5(2, 3, 4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3, 4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3)(4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3)(4)(5), [1, 2, 3, 4, 5]);
}
function testCreateAsyncWorker(createParallelTaskExecutorImpl) {
  const assert = require('assert');
  const executor = createParallelTaskExecutorImpl(2);
  const runTask = (id, delay, expectedDelay, fail) => {
    const start = Date.now();
    const check = (rejected) => (v) => {
      assert.strictEqual(
        rejected,
        fail,
        `promise status of task ${id} should be ${fail}, received ${rejected}`
      );
      const realDelay = Date.now() - start;
      assert.strictEqual(
        Math.round(realDelay / 100) * 100,
        expectedDelay,
        `delay of task ${id} should be ${expectedDelay}, received ${realDelay}`
      );
      assert.strictEqual(
        v,
        delay,
        `${
          rejected ? 'error of rejected' : 'result of resolved'
        } task ${id} should be ${delay}, received ${v}`
      );
    };
    executor(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (fail) {
              reject(delay);
            } else {
              resolve(delay);
            }
          }, delay);
        })
    )
      .then(check(false), check(true))
      .catch((e) => {
        console.error(e);
      });
  };
  runTask(1, 100, 100, false);
  runTask(2, 200, 200, true);
  runTask(3, 300, 400, false);
  runTask(4, 400, 600, true);
  runTask(5, 100, 500, false);
  runTask(6, 200, 700, true);
  runTask(7, 100, 700, false);
  runTask(8, 200, 900, false);
}
try {
  testShallowCopy(shallowCopy);
} catch (error) {
  console.error(error);
}
try {
  testCreateWeightedRandom(createWeightedRandom);
} catch (error) {
  console.error(error);
}
try {
  testCurry(curry);
} catch (error) {
  console.error(error);
}
try {
  testCreateAsyncWorker(createAsyncWorker);
} catch (error) {
  console.error(error);
}
