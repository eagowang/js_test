/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  var pIndex = 0;
  var map = new Map();
  for (var i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  function build(preorder, inl, inr) {
    if (inl > inr) return null;
    var node = new TreeNode(preorder[pIndex++]);
    var index = map.get(node.val);
    node.left = build(preorder, inl, index - 1);
    node.right = build(preorder, index + 1, inr);
    return node;
  }
  return build(preorder, 0, inorder.length - 1);
};
