module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        // Options
      },
    ],
    require('./postcss-plugin-custom'),
  ],
};
