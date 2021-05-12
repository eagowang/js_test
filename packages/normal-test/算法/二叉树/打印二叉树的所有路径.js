// 递归方法
var binaryTreePaths = function(root) {
  var paths = [];
  construct_path(root, "", paths);
  return paths;
};

function construct_path(node, path, paths) {
  if (node !== null) {
    path += node.val;
    // 如果是叶子节点
    if (node.left == null && node.right == null) {
      paths.push(path);
    } else {
      path += "->";
      construct_path(node.left, path, paths);
      construct_path(node.right, path, paths);
    }
  }
}

// 迭代
var binaryTreePaths = function(root) {};
