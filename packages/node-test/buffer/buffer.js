var fs = require('fs');
var stream = require('stream');
const http = require('http');

// const transform = stream.Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk);
//   },
// });

const myDuplex = new stream.Duplex({
  read(size) {},
  write(chunk, encoding, callback) {},
});

// let imgUrl =
//   'http://image-static.segmentfault.com/178/288/1782888584-5713a92e72596_fix732';

// http.get(imgUrl, function(response) {
//   let chunks = [];
//   response
//     .on('data', function(chunk) {
//       chunks.push(chunk);
//     })
//     .on('end', function() {
//       let buffer = Buffer.concat(chunks);
//       console.log(sizeOf(buffer)); // { width: 100, height: 100, type: 'png' }
//     });
// });
http.get(
  'http://image-static.segmentfault.com/178/288/1782888584-5713a92e72596_fix732',
  function(res) {
    res.pipe(transform.w);
  }
);

// const rs = fs.createReadStream('./test.txt', {
//   encoding: 'utf8',
// });

// const ws = fs.createWriteStream('./output.txt', {
//   encoding: 'utf8',
// });

// rs.on('data', function(chunk) {
//   console.log(chunk);
//   console.log('/n');
//   if (ws.write(chunk) === false) {
//     rs.pause();
//   }
// });

// ws.on('drain', function() {
//   rs.resume();
// });

// rs.on('end', function() {
//   ws.end();
// });

// const a = Buffer.from('你好，你是谁');
// const b = a.toString();
// const c = Buffer.alloc(10, 0);

// console.log(b);
// console.log(c);
