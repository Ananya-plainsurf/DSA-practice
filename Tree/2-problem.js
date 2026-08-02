// height of the tree
//          1
//         / \
//        2   3
//       /\   /\
//      4 5  6  7
// O/p: 2 || 1 -> 2 -> 4

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

function height(root, treeHeight) {
  if (root === null) {
    return -1;
  }

  let leftHeight = height(root.left, treeHeight);
  let rightHeight = height(root.right, treeHeight);

  return 1 + Math.max(leftHeight, rightHeight);
}
console.log(height(root, 0));

// height(1)
// |
// |____height(2) (L)
// |   |____height(4) return 1
// |   |   |____height(null) 0
// |   |   |____height(null) 0
// |   |   |______ 1 + math.max(0,0) = 1
// |   |____height(5) return 1
// |   |   |____height(null) 0
// |   |   |____height(null) 0
// |   |   |______ 1 + math.max(0,0) = 1
// |   |______ 1 + Math.max(1,1) = 2 <- Left
// |
// |____height(1) (R)
// |    |____height(null) 0
// |    |____height(null) 0
// |    |______ 1 + math.max(0,0) = 1 <- Right
// |
// |______ 1 + Math.max(left, right)
//         1 + max(2,1) = 3
