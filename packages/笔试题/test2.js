function main() {
  var arr = str.split('/');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '..') {
      arr[i - 1] = 'DELETED';
      arr[i] = 'DELETED';
    } else if (arr[i] === '.') {
      arr[i] = 'DELETED';
    }
  }

  return arr
    .filter((item) => item !== 'DELETED')
    .join('/')
    .replace(/&&/g, '&')
    .replace(/\?\?/g, '?');
}

console.log(main());
