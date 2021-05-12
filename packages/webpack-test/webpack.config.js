const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (p) => path.resolve(__dirname, p);
module.exports = {
  mode: 'development',
  entry: './src/App.vgx',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vgx?$/i,
        use: ['babel-loader', { loader: resolve('./vgx-loader.js') }],
      },
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    modules: [resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
