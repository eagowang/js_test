class Observer {
  constructor(value) {
    this.value = value;
    this.vmCount++;
    if (Array.isArray(value)) {
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  }

  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
function isObject(val) {
  return val !== null && typeof val === 'object';
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function observe(value) {
  if (!isObject(value)) {
    return;
  }
  let ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}

function defineReactive(obj, key, val) {
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;

      if (Array.isArray(value)) {
        for (let e, i = 0, l = value.length; i < l; i++) {
          e = value[i];
          e && e.__ob__ && e.__ob__.dep.depend();
        }
      }
      console.log('get');
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      defineReactive(newVal);
      console.log('set');
    },
  });
}

var obj = { a: {} };

defineReactive(obj, 'a', {});
obj.a;

obj.a = { b: { c: 1 } };
obj.a.b.c = 2;
obj.a.b.c;
