const async = require('async');
const fs = require('fs');
// async.map(['./file1.txt', './file2.txt', './file3.txt'], fs.stat, function(err, results){
//   console.log(err,results)
// })

async.parallel(
  [
    (callback) => {
      setTimeout(() => {
        callback(null, 2);
      }, 1000);
    },
    (callback) => {
      Promise.resolve().then(() => {
        callback(null, 3);
      });
    },
  ],

  (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
  }
);

// {
//   a: './a.js',
//   b: './b.js',
//   c: './c.js',
// }
async.eachOf(
  ['./a.js', './b.js', './c.js'],
  (value, key, callback) => {
    console.log(value, key);
    callback();
  },
  (err, results) => {
    // console.log('results', results);
  }
);
