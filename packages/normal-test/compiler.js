const {
  baseCompile,
  baseParse,
  transform,
  getBaseTransformPreset,
} = require('@vue/compiler-core');
const util = require('util');
const [nodeTransforms] = getBaseTransformPreset();
const ast = baseParse(
  '<comp>simple <i>111</i> {{msg}}</comp>',
  // '<comp class="panel" :name="最近游戏">simple {{msg}}</comp>',
  // `
  // <div v-if="type === 0">block A</div>
  // <div v-else-if="type === 1">block B</div>
  // `,
  {
    // isNativeTag(tag) {
    //   return tag === 'div';
    // },
    // isCustomElement(tag) {
    //   return ['nav-bar'].includes(tag);
    // },
  }
);
transform(ast, {
  nodeTransforms,
});

console.log(util.inspect(ast, { showHidden: false, depth: null }));
