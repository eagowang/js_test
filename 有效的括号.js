var isValid = function(s) {
  if (s === '') return true;
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '{') {
      stack.push('}');
    } else if (s[i] === '[') {
      stack.push(']');
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid('{()[]}'));
