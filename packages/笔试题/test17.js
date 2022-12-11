function test1(a) {
  return function test2(b) {
    return a + b;
  };
}

test1(1);

// 冒泡排序

var nums = [2, 1, 4, 3, 5];
function sort(arr) {
  // 交换，大的放后面，最大的一位再最后
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(sort(nums));

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

var test3 = debounce(test1, 1000);
test3();
