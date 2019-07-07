var counter = 0;
var obj = { name: 'wyc' };
var add = () => {
  counter++;
};

var changeName = name => {
  obj.name = name;
};
exports.counter = counter;
exports.obj = obj;
exports.add = add;
exports.changeName = changeName;
