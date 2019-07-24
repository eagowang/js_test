function offWork(data, next) {
  console.log("上班ing");
  setTimeout(function() {
    console.log("下班了");
    next(data);
  }, 1000);
}

function backHome(data, next) {
  console.log("回家ing");
  setTimeout(function() {
    console.log("到家了");
    console.log(data);
    next(data);
  }, 1000);
}

function Waterfall() {
  this.handles = [];
}
Waterfall.prototype.next = function(data) {
  var handle = this.handles.shift();
  var _next = this.next;
  // 重置next中的this指向
  if (handle) handle(data, _next.bind(this));
};
Waterfall.prototype.use = function(handle) {
  if (typeof handle === "function") this.handles.push(handle);
};
Waterfall.prototype.start = function(data) {
  this.next(data);
};
var w = new Waterfall();
w.use(offWork);
w.use(backHome);
w.start("打游戏");
