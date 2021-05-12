function Event() {
  this.observeList = {};
}

// 监听事件
Event.prototype.on = function(type, cb) {
  if (this.observeList[type] === undefined) {
    this.observeList[type] = [];
  }
  this.observeList[type].push(cb);
};

Event.prototype.emit = function(type, msg) {
  if (!this.observeList[type]) return;
  this.observeList[type].forEach(cb => {
    cb(msg);
  });
};

Event.prototype.off = function(type, cb) {
  var typeObserveList = this.observeList[type];
  if (!typeObserveList) return;
  var len = typeObserveList.length;
  var i = len - 1;

  while (i >= 0) {
    if (typeObserveList[i] === cb) {
      typeObserveList.splice(i, 1);
    }
    i--;
  }
};

var events = new Event();
function wyc(msg) {
  console.log(`wyc eat ${msg}`);
}
function wss(msg) {
  console.log(`wss eat ${msg}`);
}
function doudou(msg) {
  console.log(`doudou play ${msg}`);
}
events.on("eat", wyc);
events.on("eat", wss);
events.on("play", doudou);

events.emit("eat", "大餐");
events.off("eat", wss);
events.emit("eat", "餐后甜品");
events.emit("play", "仙女棒");
