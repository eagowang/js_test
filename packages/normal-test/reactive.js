const targetMap = new WeakMap();
let activeEffect = null;

function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

function track(target, key) {
  debugger;
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (depsMap) {
    let dep = depsMap.get(key);
    if (dep) {
      dep.forEach((effect) => effect());
    }
  }
}

const baseHandler = {
  get(target, key, receiver) {
    track(target, key);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    const oldVal = target[key];
    const result = Reflect.set(target, key, value, receiver);
    if (oldVal !== result) {
      trigger(target, key);
    }
    return result;
  },
};

function reactive(target) {
  return new Proxy(target, baseHandler);
}

function ref(raw) {
  const r = {
    get value() {
      track(r, 'value');
      return raw;
    },
    set value(newVal) {
      raw = newVal;
      trigger(r, 'value');
    },
  };
  return r;
}

function computed(getter) {
  const result = ref();
  effect(() => (result.value = getter()));
  return result;
}

module.exports = {
  track,
  trigger,
  effect,
  reactive,
  ref,
  computed,
};
