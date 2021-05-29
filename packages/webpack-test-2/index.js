const webpack = require('webpack');
const path = require('path');

const resolve = (p) => path.resolve(__dirname, p);
const compiler = webpack({
  entry: './index.lue',
  module: {
    rules: [
      {
        test: /\.lue$/,
        loader: resolve('./loader/lue-loader.js'),
      },
    ],
  },
});

compiler.run((err, stats) => {
  // console.log(stats);
});
