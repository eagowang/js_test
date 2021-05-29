var arr = [0, 'a', 1, 'b', 2, 'c', 3, 'e', 2, 'd', 1, 'x', 0, 'ff', 1, 'gg'];

var deserialization = (arr) => {
  var result = {};
  var keys = (cropKeys = []);
  var levels = [];
  arr.forEach((v, index) => {
    if (index % 2 == 0) {
      levels.push(v);
    } else {
      keys.push(v);
    }
  });
  for (let i = 0; i < levels.length; i++) {
    let l = 0;
    let level = levels[i];
    let temp = result;
    while (l < level) {
      if (l == level) {
      } else {
        if (!temp[cropKeys[l]]) temp[cropKeys[l]] = {};
        temp = temp[cropKeys[l]];
      }
      l++;
    }
    temp[keys[i]] = null;
    if (level === 0) cropKeys = keys.slice(i);
  }

  //请在下面实现
  return result;
};
var a = deserialization(arr);
console.log(JSON.stringify(a));
