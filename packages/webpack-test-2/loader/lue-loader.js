const { parseComponent } = require('../parser/index');
module.exports = function(source, map, meta) {
  console.log(source);
  const parts = parseComponent(source);
  this.callback(null, source);
};
