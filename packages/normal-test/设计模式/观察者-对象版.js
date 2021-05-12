//
function Subject() {
  // 存放观察者列表
  this.observeList = {};
}

Subject.prototype.add = function(type, obj) {
  if (this.observeList[type] === undefined) {
    this.observeList[type] = [];
  }
  this.observeList[type].push(obj);
};

Subject.prototype.remove = function(type, obj) {
  var typeObserveList = this.observeList[type];
  if (!typeObserveList) return;
  var len = typeObserveList.length;
  var i = len - 1;

  while (i >= 0) {
    if (typeObserveList[i] == obj) {
      typeObserveList.splice(i, 1);
    }
    i--;
  }
};

Subject.prototype.notify = function(type, msg) {
  if (!this.observeList[type]) return;

  this.observeList[type].forEach(function(item) {
    item.update(msg);
  });
};

// 观察者
function Observer(name) {
  this.name = name;
}

Observer.prototype.update = function(msg) {
  console.log(`hello, ${this.name}\nmsg: ${msg}\n------------`);
};

var s = new Subject();

var o1 = new Observer("wyc");
var o2 = new Observer("wss");
var o3 = new Observer("doudou");

s.add("eat", o1);
s.add("eat", o2);
s.add("play", o3);

s.notify("eat", "开吃");
s.remove("eat", o1);
s.notify("eat", "一个吃完了");
