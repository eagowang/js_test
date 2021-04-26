module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-plugin-custom',
    Root(root, postcss) {
      // Transform CSS AST here
      console.log(root, postcss);
    },
    // Once(root) {
    //   // Plugin code
    //   console.log(decl, postcss);
    // },
    // Declaration(decl, postcss) {
    //   // The faster way to find Declaration node
    //   console.log(decl, postcss);
    // },

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  };
};
module.exports.postcss = true;
