var http = require('http');
var app = http.createServer((req, res, next) => {
  console.log('next', next);
  res.end('okay');
});
app.listen(8000, () => {
  console.log('server started');
});
