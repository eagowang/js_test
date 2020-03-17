// 栈同时进栈出栈左右两颗子树，比较
// var isSymmetric = function(root) {
//   var node = root;
//   var stack = [];
//   if (node) {
//     stack = [node.left, node.right];
//   }
//   while (stack.length > 0) {
//     var right = stack.pop();
//     var left = stack.pop();
//     if (right == null && left == null) continue;
//     if (right == null || left == null) return false;
//     if (left.val != right.val) return false;

//     stack.push(left.left);
//     stack.push(right.right);
//     stack.push(right.left);
//     stack.push(left.right);
//   }
//   return true;
// };

// 对称二叉树
// 栈同时进栈和出栈左右两颗子树，比较
var isSymmetric = function(root) {
  var node = root;
  var stack = [];
  if (node) {
    stack = [node.left, node.right];
  }
  while (stack.length > 0) {
    var right = stack.pop();
    var left = stack.pop();
    if (right == null && left == null) continue;
    if (right == null || left == null) return false;
    if (left.val != right.val) return false;

    stack.push(left.left);
    stack.push(right.right);
    stack.push(right.left);
    stack.push(left.right);
  }
  return true;
};
