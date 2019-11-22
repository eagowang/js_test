var preorderTraversal = function(root) {
  var res = [];
  var stack = [root];
  while (stack.length > 0) {
    var node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.right);
  }
  return res;
};

var root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
};

console.log(preorderTraversal(root));
