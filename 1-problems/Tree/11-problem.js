// // validate binary search tree
//         8
//       /   \
//      3     10
//     / \      \
//    1   6      14
//       / \
//      4   7
//      o/p = true
//         10
//        /  \
//       5    15
//           /
//          6
//     o/p = false
// 7 = true
// null = false
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(14);

function dfs(node, min, max) {
  if (!node) return true;

  if (node.val <= min || node.val >= max) return false;

  return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}

console.log(dfs(root, -Infinity, +Infinity));
