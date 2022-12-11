const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

function flatten(obj) {
  var result = {};
  var flag = 0;
  for (let k in obj) {
    if (Array.isArray(obj[k])) {
      for (let i = 0; i < obj[k].length; i++) {
        result[`${k}[${i}]`] = obj[k][i];
      }
      flag = 1;
      // 数组
    } else if (typeof obj[k] === 'object') {
      for (let k2 in obj[k]) {
        result[`${k}.${k2}`] = obj[k][k2];
      }
      flag = 1;
      // 对象
    } else {
      result[k] = obj[k];
    }
  }
  if (flag) return flatten(result);
  else return result;
}
console.log(flatten(obj));
// {
// 	'a.b': 1,
// 	'a.c': 2,
// 	'a.d.e': 5,
// 	'b[0]': 1,
// 	'b[1]': 3,
// 	'b[2].a': 2,
// 	'b[2].b': 3
// 	 c: 3
// }
