process.stdin.resume();
process.stdin.on("data", function(data) {
  var number;
  try {
    number = parseInt(data, 10);
    number += 1;
    process.stdout.write(number + "\n");
  } catch (e) {
    process.stderr.write(e.message + "\n");
  }
});
