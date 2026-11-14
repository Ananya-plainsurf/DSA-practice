// Invert binary tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root1 = new TreeNode("1");
root1.left = new TreeNode("2");
root1.right = new TreeNode("3");

const root2 = new TreeNode("1");
root2.left = new TreeNode("2");
root2.right = new TreeNode("4");

const root3 = new TreeNode("2");
root3.left = new TreeNode("3");
root3.right = new TreeNode("4");

function invertTree(node) {
  if (!node) return node;

  [node.left, node.right] = [node.right, node.left];

  invertTree(node.left);
  invertTree(node.right);
  return node;
}
console.log(invertTree(root1));
console.log(invertTree(root2));
console.log(invertTree({}));
console.log(invertTree(root3));

//        4
//       / \
//      2   7
//     /\   /\
//    3  1 6  9

// dfs(4)
// | |
// | |___dfs(2)
// | |     |___dfs(3)
// | |     |___dfs(1)
// | |     |____ [3, 1] = [1,3]
// | |
// | |___dfs(7)
// | |     |___dfs(6)
// | |     |___dfs(9)
// | |     |___ [6,9] = [9,6]
// | |____ [ 2,7] = [7,2]
