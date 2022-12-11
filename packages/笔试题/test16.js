var p1 = {
  top: 20,
  left: 20,
  width: 10,
  height: 10,
};

var p2 = {
  top: 31,
  left: 25,
  width: 5,
  height: 5,
};

function check(p1, p2) {
  var isXIn = false;
  var isYIn = false;
  var xDelta = Math.abs(p1.left - p2.left);
  var yDelta = Math.abs(p1.top - p2.top);

  if (p2.left - p1.left < 0) {
    // p2 在左
    isXIn = xDelta <= p2.width;
  } else {
    // p2 在右
    isXIn = xDelta <= p1.width;
  }

  if (p2.top - p1.top < 0) {
    // p2 在上
    isYIn = yDelta <= p2.height;
  } else {
    // p2在下
    isYIn = yDelta <= p1.height;
  }

  return isXIn && isYIn;
}

console.log(check(p1, p2));
