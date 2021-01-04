const _ = require('lodash');
var object = undefined;

var other = {
  a: [{ c: 3 }, { e: 5 }],
};

var res = _.merge(object, other);

console.log(object);
console.log(other);
console.log(res);
