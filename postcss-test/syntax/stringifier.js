let Stringifier = require('postcss/lib/stringifier');

class ScssStringifier extends Stringifier {
  comment(node) {
    let left = this.raw(node, 'left', 'commentLeft');
    let right = this.raw(node, 'right', 'commentRight');

    if (node.raws.inline) {
      let text = node.raws.text || node.text;
      this.builder('//' + left + text + right, node);
    } else {
      this.builder('/*' + left + node.text + right + '*/', node);
    }
  }
}

module.exports = ScssStringifier;
