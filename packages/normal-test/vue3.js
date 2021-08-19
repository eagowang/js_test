var handler = {
  get(target, key, receiver) {
    // return target[key];
    let result = Reflect.get(target, key, receiver);
    return result;
  },
  set(target, key, value, receiver) {
    // target[key] = value;
    Reflect.set(target, key, value, receiver);
  },
};

var obj = {
  _a: 1,
  get a() {
    return this._a;
  },
};
var proxy = new Proxy(obj, handler);
var proxy2 = {
  _a: 2,
};
Object.setPrototypeOf(proxy2, proxy);
console.log('proxy', proxy.a);
console.log('proxy2', proxy2.a);

// reflect receiver作用，保证是this指向调用方，比如proxy2的圆形对象是proxy，调用proxy2.a时，
// 如果用target[key]取值会渠道proxy上的值，用Reflect.get(target, key, receiver)就会取到proxy上的值
