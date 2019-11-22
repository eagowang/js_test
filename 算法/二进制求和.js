/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//   var ret = "";
//   var carry = 0;
//   //把b变成短的
//   if (a.length < b.length) [a, b] = [b, a];
//   while (a.length > b.length) {
//     b = "0" + b;
//   }
//   for (var i = a.length - 1; i >= 0; i--) {
//     if (parseInt(a[i]) + parseInt(b[i]) + carry > 1) {
//       ret = parseInt(a[i]) + parseInt(b[i]) + carry - 2 + ret;
//       carry = 1;
//       if (i == 0) {
//         ret = "1" + ret;
//         return ret;
//       }
//     } else {
//       ret = parseInt(a[i]) + parseInt(b[i]) + carry + ret;
//       carry = 0;
//     }
//   }
//   return ret;
// };

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 补0
  if (a.length < b.length) [a, b] = [b, a];
  while (b.length < a.length) {
    b = "0" + b;
  }
  var ret = a;
  var carry = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    if (parseInt(a[i]) + parseInt(b[i]) + carry > 1) {
      ret[i] = parseInt(a[i]) + parseInt(b[i]) + carry - 2;
      carry = 1;
      if (i == 0) {
        ret = "1" + ret;
        return ret;
      }
    } else {
      ret[i] = parseInt(a[i]) + parseInt(b[i]) + carry;
      break;
    }
  }
  return ret;
};
console.log(addBinary("11", "1"));
