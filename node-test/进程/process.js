var child_process = require("child_process");

// 只能穿env等参数给子进程
// var exec = child_process.exec;
// exec("ls", function(err, stdout, stderr) {
//   if (err) console.log(err);
//   console.log(stdout);
// });

// spawn可以与子进程进行交互
// var child = child_process.spawn("tail", ["-f", "/var/log/system.log"]);
// child.stdout.on("data", function(data) {
//   console.log("tail output:" + data);
// });

// 子进程通信
// var child = child_process.spawn("node", ["plus_one.js"]);
// setInterval(function() {
//   var number = Math.floor(Math.random() * 10000);
//   child.stdin.write(number + "\n");
//   child.stdout.once("data", function(data) {
//     console.log("child replied to" + number + "with: " + data);
//   });
// }, 1000);

// child.stderr.on("data", function(data) {
//   process.stdout.write(data);
// });

// 监听子进程退出事件
var child = child_process.spawn("ls", ["aaa.txt"]);
child.on("exit", function(code) {
  console.log("child process exit with " + code);
});
