// balanced binary tree

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

root.left.left = new TreeNode("4");
root.left.right = new TreeNode("5");

root.left.left.left = new TreeNode("8");
root.left.left.right = new TreeNode("9");

root.right.left = new TreeNode("6");
root.right.right = new TreeNode("7");

root.right.left.left = new TreeNode("10");
root.right.left.right = new TreeNode("11");

// function treeHeight(root) {
//   if (!root) return -1;

//   let left = treeHeight(root.left);
//   let right = treeHeight(root.right);

//   return 1 + Math.max(left, right);
// }
// function solve(node) {
//   function balanced(root) {
//     if (!root) return true;

//     let left = treeHeight(root.left);
//     let right = treeHeight(root.right);

//     if (Math.abs(left - right) > 1) {
//       return false;
//     }

//     return balanced(root.left) && balanced(root.right);
//   }
//   return balanced(node);
//   //   return { height, bal };
// }

// console.log(solve(root));

function checkHeight(node) {
  if (!node) return -1;

  let left = checkHeight(node.left);
  if (left === -Infinity) return -Infinity;

  let right = checkHeight(node.right);
  if (right === -Infinity) return -Infinity;

  if (Math.abs(left - right) > 1) return -Infinity;

  return 1 + Math.max(left, right);
}

console.log(checkHeight(root));

//       1
//      /
//     2
//    /
//   3
//  /
// 4

// dfs(1)
// |
// |____dfs(2)
// |   |____dfs(3)
// |   |    |____dfs(4) = 1
// |   |    |____dfs(null) = 0
// |   |    |____abs(1 - 0) > 1 = (1 > 1) no
// |   |    |____ height = 1 + (1,0) = 2
// |   |    |
// |   |    |____dfs(null) = 0 (right)
// |   |    |____abs(2 - 0) > 1 = (2 > 1) = -1 (Unbalanced tree)
// |   |    |
// |   |
// |   |____ before going to right if(left === -1) return -1

//     not balanced
