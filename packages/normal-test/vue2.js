function updateView() {
  console.log(`更新视图`);
}

function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

function defineReactive(target, key, value) {
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue);
        updateView();
        value = newValue;
      }
    },
  });
}

var obj = {
  a: {
    b: 1,
  },
};

observer(obj);
obj.a.b = 2;
