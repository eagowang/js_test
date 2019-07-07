var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
function binarySearch(arr, val) {
  var low = 0,
    high = arr.length - 1;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    if (val == arr[mid]) {
      return mid;
    } else if (val > arr[mid]) {
      low = mid + 1;
    } else if (val < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, 5));
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min) {
    this.min = x;
  } else {
    this.min = Math.min(x, this.min);
  }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var pop = this.stack.pop();
  if (pop < this.min) {
    this.min = this.stack.reduce(function(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    });
  }
  return pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};
