var http = require("http");
var qs = require("querystring");
http
  .createServer(function(req, res) {
    switch (req.method) {
      case "GET":
        break;
      case "POST":
        var content = "";
        req.on("data", function(chunk) {
          content += chunk;
        });

        req.on("end", function() {
          if (req.url.split("?")[0] === "/commit") {
            res.writeHead(200, "success", {
              "Content-Type": "application/json"
            });
            res.end(JSON.stringify({ data: content }));
          }
          if (req.url.split("?")[0] === "/upload") {
            res.writeHead(200, "success", {
              "Content-Type": "application/json"
            });
            res.end(JSON.stringify({ data: content }));
          }
        });
        break;
      default:
    }
  })
  .listen(8080, () => {
    console.log("server start at localhost:8080");
  });
