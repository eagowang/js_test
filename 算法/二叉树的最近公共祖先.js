/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方法1，迭代法，利用中序遍历，判断位置
var lowestCommonAncestor = function(root, p, q) {
  var res = [];
  var stack = [];
  var node = root;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      res.push(node.val);
      node = node.right;
    }
  }
  node = root;
  var posP = res.indexOf(p.val);
  var posQ = res.indexOf(q.val);
  while (node) {
    var rootVal = node.val;
    var posRoot = res.indexOf(rootVal);
    if (posRoot > posP && posRoot > posQ) {
      node = node.left;
    } else if (posRoot < posP && posRoot < posQ) {
      node = node.right;
    } else {
      return node;
    }
  }
};

var root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 8
    }
  }
};

console.log(lowestCommonAncestor(root, { val: 5 }, { val: 1 }));
