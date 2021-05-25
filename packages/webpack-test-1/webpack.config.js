const path = require('path');
const resolve = (p) => path.resolve(__dirname, p);
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: resolve('./loaders/a-loader.js'),
            options: {
              extract: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    modules: [resolve('src'), 'node_modules'],
    extensions: ['.js', '.json'],
  },
  plugins: [],
};
