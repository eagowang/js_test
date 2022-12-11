let arr = [
  'google',
  'gucci 官网',
  'g18',
  'g小调进行曲',
  'great',
  'girl',
  'go',
  'g2',
  'gai',
  'go的过去式英文',
  'google play下载',
  'go on',
  'got',
  'google翻译',
  'go out',
  'god',
  'goal',
  'good night',
  'good morning',
  'good luck!什么意思',
  'goodafternoon怎么读英语',
  '百度',
];
let symbol = Symbol('flag');
let map = {};
function generate() {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let len = word.length;
    let temp = map;
    for (let j = 0; j < len; j++) {
      let c = arr[i][j];
      temp[c] = temp[c] || {};
      temp = temp[c];
    }
    temp[symbol] = true;
  }
}
generate();
// console.log(map);

function search(str) {
  let temp = map;
  for (let c of str) {
    temp = temp[c];
  }
  // 读temp
  // console.log(temp);
  // 遍历temp拼接字符
  console.log(temp);
  let res = [];
  function inner(obj, tempStr) {
    if (obj[symbol] == true) res.push(tempStr);
    for (let k in obj) {
      inner(obj[k], tempStr + k);
    }
  }
  inner(temp, str);
  console.log(res);
}
search('good');
