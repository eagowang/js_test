const { resolve } = require('path');
const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncParallelBailHook,
  AsyncSeriesWaterfallHook,
  SyncWaterfallHook,
} = require('tapable');

class Car {
  constructor() {
    this.hooks = {
      start: new SyncLoopHook(),
      accelerate: new SyncWaterfallHook(['newSpeed']),
      brake: new SyncBailHook(),
      calculateRoutes: new AsyncParallelHook(),
      drift: new AsyncParallelBailHook(),
      payment: new AsyncSeriesHook(),
      getOff: new AsyncSeriesBailHook(),
      gain: new AsyncSeriesWaterfallHook(['money']),
    };
  }
  // 启动
  start() {
    this.hooks.start.call();
  }
  // 加速
  accelerate(speed) {
    this.hooks.accelerate.call(speed);
  }
  // 刹车
  brake() {
    this.hooks.brake.call();
  }
  // 计算路线
  calculateRoutes(callback) {
    this.hooks.calculateRoutes.callAsync(callback);
  }
  // 飘逸
  drift(callback) {
    this.hooks.drift.callAsync(callback);
  }
  // 付款
  payment() {
    return this.hooks.payment.promise();
  }
  // 下车
  getOff() {
    return this.hooks.getOff.promise();
  }
  // 赚钱
  gain() {
    return this.hooks.gain.promise();
  }
}

const car = new Car();
// 启动
let index = 0;
car.hooks.start.tap('startPlugin1', () => {
  console.log('start: 启动');
  if (index < 5) {
    index++;
    return 1;
  }
});
car.hooks.start.tap('startPlugin2', () => {
  console.log('start: 启动成功');
});
car.start();
// 加速
car.hooks.accelerate.tap('acceleratePlugin1', (speed) => {
  console.log(`accelerate: 加速到${speed}`);
  return speed + 100;
});
car.hooks.accelerate.tap('acceleratePlugin2', (speed) => {
  console.log(`accelerate: 加速到${speed}`);
  return speed + 80;
});
car.hooks.accelerate.tap('acceleratePlugin3', (speed) => {
  console.log(`accelerate: 加速到${speed}`);
});

car.accelerate(50); // 打印‘加速到50’‘加速到150’‘加速到250

// 刹车
car.hooks.brake.tap('brakePlugin1', () => console.log(`brake: 刹车1`));
// 只需在不想继续往下走的插件return非undefined即可。
car.hooks.brake.tap('brakePlugin2', () => {
  console.log('brake: 刹车2');
  return;
});
car.hooks.brake.tap('brakePlugin3', () => console.log(`brake: 刹车3`));

car.brake();
// 计算路线
car.hooks.calculateRoutes.tapAsync('calculateRoutesPlugin1', (callback) => {
  setTimeout(() => {
    console.log('calculateRoutes: 计算路线1');
    callback();
  }, 1000);
});

car.hooks.calculateRoutes.tapAsync('calculateRoutesPlugin2', (callback) => {
  setTimeout(() => {
    console.log('calculateRoutes: 计算路线2');
    callback();
  }, 2000);
});

car.calculateRoutes(() => {
  console.log('calculateRoutes: 计算路线完成');
});

// 飘逸
car.hooks.drift.tapAsync('driftPlugin1', (callback) => {
  setTimeout(() => {
    console.log('drift: 漂移1');
    callback('nice');
  }, 1000);
});

car.hooks.drift.tapAsync('driftPlugin2', (callback) => {
  setTimeout(() => {
    console.log('drift: 漂移2');
    callback(2);
  }, 2000);
});

car.drift((result) => {
  console.log('drift: 漂移完成', result);
});

// 付款
car.hooks.payment.tapPromise('paymentPlugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('payment: 乘客1付款100');
      resolve();
    }, 1000);
  });
});
car.hooks.payment.tapPromise('paymentPlugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('payment: 乘客2付款200');
      resolve();
    }, 2000);
  });
});
car.payment().then(() => {
  console.log('payment: 收款完成');
});
// 下车
car.hooks.getOff.tapPromise('getOffPlugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getOff: 乘客1下车');
      resolve();
    }, 1000);
  });
});

car.hooks.getOff.tapPromise('getOffPlugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getOff: 乘客2下车');
      resolve(2);
    }, 2000);
  });
});

car.getOff().then(() => {
  console.log('getOff: 剩下都是自己人');
});

// 赚钱
car.hooks.gain.tapPromise('gainPlugin1', (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('gain: ', result);
      resolve(100);
    }, 1000);
  });
});
car.hooks.gain.tapPromise('gainPlugin2', (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('gain: ', result);
      resolve(result + 200);
    }, 2000);
  });
});
car.gain().then((result) => {
  console.log('gain: final', result);
});
