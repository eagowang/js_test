module.exports = {
  // parser: 'postcss-sass',
  plugins: [
    // [
    //   'postcss-preset-env',
    //   {
    //     // Options
    //   },
    // ],
    // 'postcss-inline-comment',
    // 'postcss-less',
    'precss',
    // 'autoprefixer',
    require('./postcss-plugin-custom'),
  ],
};
