// 使用symbol标记处理过的节点
const processd = Symbol('processed');

module.exports = (opts = {}) => {
  // Plugin creator to check options or prepare caches
  return {
    postcssPlugin: 'postcss-plugin-new',
    // Plugin listeners
    Once() {},
    OnceExit(root) {
      root.walkDecls((decl) => {
        // 删除节点
        if (decl.prop === 'color') {
          decl.value = '#ee3';
        }
      });
    },
    Root() {},
    RootExit() {},
    AtRule() {},
    AtRuleExit() {},
    Rule(rule, { Declaration }) {
      if (!rule[processd]) {
        if (rule.selector === 'body') {
          rule.append(new Declaration({ prop: 'color', value: '#333' }));
        }
        rule[processd] = true;
      }
    },
    RuleExit() {},
    Comment() {},
    CommentExit() {},
    Declaration: {
      padding: (decl) => {},
      margin: (decl) => {
        if (decl.value === '0') {
          decl.value = '10px';
        }
      },
    },
    DeclarationExit() {},
  };
};
module.exports.postcss = true;
