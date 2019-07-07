var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function MyPromise(fn) {
  // 三种状态，一旦fulfilled或rejected，就不会变了
  this._status = PENDING;
  this._value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  var self = this;

  // resolve动作
  function reslove(result) {
    if (self._status === PENDING) {
      self._status = FULFILLED;
      self._value = result;
      self.resolvedCallbacks.forEach(function(callback) {
        callback(result);
      });
    }
  }

  // reject动作
  function reject(reason) {
    if (self._status === PENDING) {
      self._status = REJECTED;
      self._value = reason;
      self.rejectedCallbacks.forEach(function(callback) {
        callback(result);
      });
    }
  }

  fn(reslove, reject);
}

// then方法定义
// then方法不能范围this，因为then方法中可能会返回一个promise。
// 如果返回this，那么再后面注册的then方法就直接拿到resolve或reject的值了
// 所以then方法要返回一个promise，promise.then就又串起来了
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  var self = this;
  var promise2;
  onFulfilled =
    typeof onResolved === 'function'
      ? onResolved
      : function(value) {
          return value;
        };
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function(reason) {
          throw reason;
        };
  // then注册时分为三种情况
  // pending状态
  if (self._status === PENDING) {
    return (promise2 = new MyPromise(function(resolve, reject) {
      self.resolvedCallbacks.push(function(value) {
        try {
          var x = onFulfilled(value);
          if (x instanceof MyPromise) {
            // 如果then方法的回调返回的是一个promise，则再这个promise中resolve
            x.then(resolve, reject);
          } else {
            // 否则直接resolve
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      });
      self.rejectedCallbacks.push(function(value) {
        try {
          var x = onRejected(value);
          if (x instanceof MyPromise) {
            // 如果then方法的回调返回的是一个promise，则再这个promise中resolve
            x.then(resolve, reject);
          } else {
            // 否则直接resolve
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
  // resolve
  if (self._status === FULFILLED) {
    return (promise2 = new MyPromise(function(resolve, reject) {
      try {
        var x = onFulfilled(self._value);
        if (x instanceof MyPromise) {
          // 如果then方法的回调返回的是一个promise，则再这个promise中resolve
          x.then(resolve, reject);
        } else {
          // 否则直接resolve
          resolve(x);
        }
      } catch (e) {
        reject(e);
      }
    }));
  }
  // reject
  if (self._status === REJECTED) {
    return (promise2 = new MyPromise(function(resolve, reject) {
      try {
        var x = onRejected(self._value);
        if (x instanceof MyPromise) {
          x.then(resolve, reject);
        } else {
          resolve(x);
        }
      } catch (e) {
        reject(e);
      }
    }));
  }
};
// 测试用例

var p1 = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve('p1');
  }, 1000);
});

var getP2FromP1 = function(res) {
  return new MyPromise(function(resolve, reject) {
    setTimeout(function() {
      resolve('p2' + res);
    }, 1000);
  });
};

p1.then(getP2FromP1).then(function(res) {
  console.log(res);
});

var p2 = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve('hello');
  }, 1000);
});
p2.then(function(res) {
  console.log(res);
});
