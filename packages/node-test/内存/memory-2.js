var os = require("os");
var format = function(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
};
console.log(format(os.totalmem()));
console.log(format(os.freemem()));
