const postcss = require('postcss');

module.exports = postcss.plugin('postcss-plugin-old', function (opts) {
  return function (root) {
    root.walkRules((rule) => {
      if (rule.selector === 'body') {
        rule.append(postcss.decl({ prop: 'margin', value: '0' }));
        rule.append(postcss.decl({ prop: 'font-size', value: '14px' }));
      }
    });
  };
});
