// var postorderTraversal = function(root) {
//   var res = [];
//   var stack = [];
//   var node = root;
//   while (node || stack.length > 0) {
//     if (node) {
//       stack.push(node);
//       res.push(node.val);
//       node = node.right;
//     } else {
//       node = stack.pop();
//       node = node.left;
//     }
//   }
//   return res.reverse();
// };

// 后序遍历，逆向前序遍历的reverse

var postorderTraversal = function(root) {
  var res = [];
  var stack = [];
  var node = root;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      res.push(node.val);
      node = node.right;
    } else {
      node = stack.pop();
      node = node.left;
    }
  }
  return res.reverse();
};
