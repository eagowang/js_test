import { parseHTML } from './html-parser.js';
import { makeMap } from '../shared/util.js';
const isSpecialTag = makeMap('script,style,template,config', true);

const template = `
<template>
  <div>标题</div>
  <div class="body">sfc测试</div>
  <div>
    <img src="../xxx.png" />
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style>
.body{
  margin: 0;
  padding: 0;
  color: #ddd;
}
</style>
<config>
{
  usingComponents: {
    table: '../components/table.lue'
  }
}
</config>
`;
let sfc = {
  template: null,
  script: null,
  config: null,
  styles: [],
  customBlocks: [],
};
let depth = 0;
let block = null;
function parseComponent(content, options) {
  parseHTML(content, {
    start(tag, attrs, unary, start, end) {
      if (depth === 0) {
        block = {
          tag,
          content: '',
          start: end,
          attrs: attrs.reduce(function(acc, cur) {
            let { name, value } = cur;
            acc[name] = value || true;
            return acc;
          }, {}),
        };
        if (isSpecialTag(tag)) {
          if (tag === 'style') {
            sfc.styles.push(block);
          } else {
            sfc[tag] = block;
          }
        } else {
          sfc.customBlocks.push(block);
        }
      }

      if (!unary) {
        depth++;
      }
    },
    end(tag, start, end) {
      if (depth === 1 && block) {
        block.end = start;
        let text = content.slice(block.start, block.end);
        block.content = text;
        block = null;
      }
      depth--;
    },
  });
  // console.log(sfc);
}

parseComponent(template);
