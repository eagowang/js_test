function MyPromise(func) {
  this.val = null;
  this.reason = null;
  var resolveQueue = [];
  var rejectQueue = [];

  function resolve(val) {
    this.val = val;
    var func = queue.shift();
    func(this.val);
  }

  function reject(reason) {
    this.reason = reason;
  }
  this.then = (func1, func2) => {
    resolveQueue.push(func1);
    rejectQueue.push(func2);
  };
  func(resolve, reject);
}

var p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

p.then((val) => {
  console.log(val);
});
