var fs = require("fs");
var process = require("process");
console.log("script start");

setTimeout(function() {
  console.log("timer");
});
process.nextTick(function() {
  console.log("process nextTick");
});
fs.readFile("./data.txt", function(data) {
  console.log(111);
});

setImmediate(function() {
  console.log("setImmediate");
});
console.log("script end");
