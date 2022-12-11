function flat(arr1) {
  var res = [];
  function _flat(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (arr[i] instanceof Array) {
        _flat(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  }
  _flat(arr1);
  console.log(res);
  return res;
}
flat([1, [1, 2, [3]]]);
