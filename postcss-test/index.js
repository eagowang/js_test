const postcss = require('postcss');
const v8 = require('v8');
const fs = require('fs');

const _old = require('./plugins/old');
const _new = require('./plugins/new');
// const autoprefixer = require('autoprefixer');
const path = require('path');
const resolve = (p) => path.resolve(__dirname, p);
fs.readFile(resolve('./src/app.css'), (err, css) => {
  const processor = postcss([_old, _new]);
  const result = processor.process(css, {
    from: 'src/app.css',
    to: './dist/app.css',
  });
  // console.log(result);
  fs.writeFile(resolve('dist/app.css'), result.css, () => true);
  if (result.map) {
    fs.writeFile('dist/app.css.map', result.map.toString(), () => true);
  }
});

// let root = postcss.parse('.cls { color: orange; }')

//   let rule = root
//   let json = JSON.stringify(rule.nodes)
//   console.log(json)
//   let rehydrated = postcss.fromJSON(JSON.parse(json))

//   console.log(rehydrated)
//   console.log(postcss.list)
