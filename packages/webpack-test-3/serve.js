const webpack = require('webpack');

webpack(
  {
    mode: 'development',
    entry: {
      pageA: './index',
    },
  },
  (err, stats) => {
    console.log('webpack working');
  }
);
