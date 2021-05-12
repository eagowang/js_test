/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = new Map();
  map.set("I", 1);
  map.set("IV", 4);
  map.set("V", 5);
  map.set("IX", 9);
  map.set("X", 10);
  map.set("XL", 40);
  map.set("L", 50);
  map.set("XC", 90);
  map.set("C", 100);
  map.set("CD", 400);
  map.set("D", 500);
  map.set("CM", 900);
  map.set("M", 1000);
  var ret = 0;
  for (var i = 0; i < s.length; ) {
    if (i < s.length - 1 && map.has(s.substr(i, 2))) {
      ret += map.get(s.substr(i, 2));
      i += 2;
    } else {
      ret += map.get(s.substr(i, 1));
      i += 1;
    }
  }
  return ret;
};

console.log(romanToInt("III"));
