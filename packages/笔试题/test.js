function main(str) {
  var arr = str.match(/(<.*?>)/g);
  var stack = [];
  var map = {
    '<div>': '</div>',
    '<span>': '</span>',
    '<b>': '</b>',
  };
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '<div>' || arr[i] === '<span>' || arr[i] === '<b>') {
      stack.push(map[arr[i]]);
    } else {
      if (stack.pop() !== arr[i]) {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}

console.log(main('<span><div></span>'));
