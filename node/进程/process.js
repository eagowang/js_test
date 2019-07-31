var child_process = require("child_process");

var exec = child_process.exec;
exec("ls", function(err, stdout, stderr) {
  if (err) console.log(err);
  console.log(stdout);
});
