const { AsyncSeriesHook } = require('tapable');

console.log('AsyncSeriesHook --- start');

console.time('总共耗时');

const player = new AsyncSeriesHook(['EXP']);

player.tapPromise('fights', (options) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('完成刷怪任务');
      res();
    }, 600);
  });
});

player.tapPromise('teacher', (options) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('完成师门任务');
      res();
    }, 300);
  });
});

player.tapPromise('secondary', () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('完成副职业任务');
      res();
    }, 900);
  });
});

player.promise(null).then(() => {
  console.log('完成每日任务');
  console.timeEnd('总共耗时');
});

console.log('AsyncSeriesHook --- end');
