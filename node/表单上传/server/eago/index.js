/**
 * node框架eago
 * var app = eago();
 * app.listen();
 */
var http = require("http");

function eago() {
  return http.createServer(function(req, res) {
    switch (req.method) {
      case "GET":
        getHandler(req, res);
        break;
      case "POST":
        postHandler(req, res);
        break;
      default:
        getHandler(req, res);
    }
  });
}

// get操作
function getHandler(req, res) {}

// post操作
function postHandler(req, res) {}

exports.eago = eago;
