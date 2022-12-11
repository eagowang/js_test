const str1 = '11+2-3*4+5/2*4+10/5';
const str2 = '11+2-3*4/5*3+5/2*4+5';
const str3 = '11+2-3/5/2*3+5*2*4+5';

// function wrap(str) {
//   return str.replace(/((\d+[*/])+\d)/gi, function(match, p1, p2) {
//     return '(' + p1 + ')';
//   });
// }

function wrap(str) {
  const stack = [];
  // 遇到 * /插入 (,设置flag，有flag遇到* /不处理，无flag遇到+ -或者无字符需要插入)
  let flag = false;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    let c = str[i];
    if (!flag) {
      if (['*', '/'].includes(c)) {
        // console.log(c);
        flag = true;
        // console.log(flag);
        let temp = [];
        while (stack.length > 0) {
          let pre = stack.pop();
          if (!/\d/.test(pre)) {
            stack.push(pre, '(', ...temp);
            break;
          }
          temp.unshift(pre);
        }
      }
    } else {
      if (['+', '-'].includes(c)) {
        stack.push(')');
        flag = false;
      }
    }
    stack.push(c);
  }
  if (flag) {
    stack.push(')');
  }
  return stack.join('');
}

console.log(wrap(str1));
console.log(wrap(str2));
console.log(wrap(str3));
