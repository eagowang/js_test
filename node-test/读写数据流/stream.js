var http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    var rs = fs.createReadStream("./data.txt", { encoding: "utf8" });

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    rs.on("data", function(data) {
      if (!res.write(data)) {
        rs.pause();
      }
    });
    rs.on("drain", function() {
      rs.resume();
    });
    rs.on("end", function() {
      res.end();
    });
  })
  .listen(8080);
