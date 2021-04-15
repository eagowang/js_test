var fs = require("fs");
var process = require("process");
console.log("script start");

setTimeout(function() {
  console.log("timer");
});
setImmediate(function() {
  console.log("setImmediate");
});
process.nextTick(function() {
  console.log("process nextTick");
});
fs.readFile("./data.txt", function(data) {
  setTimeout(function() {
    console.log("io timer");
  });
  setImmediate(function() {
    console.log("io setImmediate");
  });
});

console.log("script end");
