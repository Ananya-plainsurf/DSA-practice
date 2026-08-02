// binary tree path

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode("1");
root.left = new TreeNode("2");
root.right = new TreeNode("3");

function binaryTree(root) {
  let result = [];
  function treePath(node, path) {
    if (!node) return;

    path += node.val;
    if (!node.left && !node.right) return result.push(path);

    treePath(node.left, path + "->");
    treePath(node.right, path + "->");
  }

  treePath(root, "");
  return result;
}

console.log(binaryTree(root));

//       1
//      / \
//     2   3
//      \
//       5

// dfs(1)
// |
// |______ path = '1'
// |_____dfs(2)
// |     |______path = '1->2'
// |     |_____dfs(null) return
// |     |_____dfs(5)
// |     |      |___ path = '1->2->5'
// |     |________ return result = ['1->2->5']
// |
// |_____dfs(3)
// |     |______path = '1->3'
// |     |______ return result = ['1->2->5', '1->3']
