const postcss = require('postcss');

// module.exports = (opts = {}) => {
//   // Work with options here

//   return {
//     postcssPlugin: 'postcss-plugin-custom',
//     Root(root, postcss) {
//       // Transform CSS AST here
//       // console.log(root);
//     },
//     // Once(root) {
//     //   // Plugin code
//     //   console.log(decl, postcss);
//     // },
//     // Declaration(decl, postcss) {
//     //   // The faster way to find Declaration node
//     //   console.log(decl, postcss);
//     // },
//     Rule(rule, { Rule }) {
//       // console.log(rule.selector);
//       // console.log(postcss);
//       const { selector } = rule;
//       const selectorUnits = selector.split(',');
//       console.log(rule.parent);
//       console.log(selectorUnits);
//       // if (selectorUnits.length) {
//       //   for (let selectorUnit of selectorUnits) {
//       //     const newRule = new Rule({
//       //       selector: selectorUnit,
//       //       source: rule.source,
//       //     });
//       //     rule.parent.append(newRule);
//       //   }
//       // }
//       // rule.remove();
//     },
//     Declaration: {
//       color: (decl, postcss) => {
//         // The fastest way find Declaration node if you know property name
//         // console.log(decl);
//       },
//     },
//   };
// };
// module.exports.postcss = true;

module.exports = postcss.plugin('postcss-plugin-custom', function (opts) {
  return function (root) {
    const selectorRuleMap = new Map();
    root.walkRules((rule) => {
      const { selector } = rule;
      const selectorUnits = selector.split(',');
      for (let selectorUnit of selectorUnits) {
        let selectorUnitArr = selectorUnit.split(' ');
        // lynx 不支持嵌套层级，截取最后两层选择器，.a .b .c => .b .c
        if (selectorUnitArr.length > 2) {
          selectorUnitArr = selectorUnitArr.slice(selectorUnitArr.length - 2);
        }
        const selectorForLynx = selectorUnitArr.join(' ').replace('\n', '');
        const existSelectorRule = selectorRuleMap.get(selectorForLynx);
        const nodes = existSelectorRule ? [existSelectorRule.nodes, rule.nodes]: rule.nodes;
        const newRule = new postcss.Rule({
          selector: selectorForLynx,
          source: rule.source,
          nodes,
        });
        selectorRuleMap.set(selectorForLynx, newRule)
      }
      rule.remove();
    });
    selectorRuleMap.forEach(selectorRule => {
      root.append(selectorRule);
    })
  };
});
