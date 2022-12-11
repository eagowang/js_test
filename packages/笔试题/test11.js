// 实现带并发限制的异步调度器
class Scheduler {
  // Your code
  limit = 100;
  tasks = [];
  worker = 0;
  constructor(limit) {
    this.limit = limit;
  }
  next() {
    // 小于worker拿出任务立即执行
    let task = this.tasks.shift();
    if (task) {
      this.worker++;
      task().then(() => {
        this.next();
        this.worker--;
      });
    }
  }
  add(task) {
    this.tasks.push(task);
    if (this.worker < this.limit) {
      this.next();
    }
  }
}

// 异步任务函数
const fetchUser = (name, delay) => {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(name);
        console.log(name);
      }, delay);
    });
};

const scheduler = new Scheduler(2); // 控制并发数 2
scheduler.add(fetchUser('A', 2000));
scheduler.add(fetchUser('B', 1000));
scheduler.add(fetchUser('C', 800));
scheduler.add(fetchUser('D', 500));

// 打印顺序: B C A D
