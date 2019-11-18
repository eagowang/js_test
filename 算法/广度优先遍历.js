/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var queue = [];
  var res = [];
  if (root) queue.push(root);
  while (queue.length > 0) {
    var size = queue.length;
    var temp = [];
    for (var i = 0; i < size; i++) {
      var node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(temp);
  }
  return res;
};
