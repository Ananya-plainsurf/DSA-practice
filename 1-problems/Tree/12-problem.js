// binary tree maxPath sum

//     -10
//     / \
//    9   20
//        / \
//       15  7
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
function maxPath(root) {
  let maxSum = -Infinity;
  function dfs(node) {
    if (!node) return 0;

    let leftGain = Math.max(0, dfs(node.left));
    let rightGain = Math.max(0, dfs(node.right));

    let currentSum = leftGain + node.val + rightGain;
    maxSum = Math.max(maxSum, currentSum);
    return node.val + Math.max(leftGain, rightGain);
  }

  return { val: dfs(root), maxSum };
}

console.log(maxPath(root));

// maxSum = -∞

// dfs(-10)

// dfs(-10)
// │
// ├── dfs(9)
// │   │
// │   ├── leftGain = 0
// │   ├── rightGain = 0
// │   │
// │   ├── currentPath = 9
// │   ├── maxSum = max(-∞, 9) = 9
// │   │
// │   └── return 9
// │
// ├── dfs(20)
// │   │
// │   ├── dfs(15)
// │   │   │
// │   │   ├── leftGain = 0
// │   │   ├── rightGain = 0
// │   │   │
// │   │   ├── currentPath = 15
// │   │   ├── maxSum = max(9,15) = 15
// │   │   │
// │   │   └── return 15
// │   │
// │   ├── dfs(7)
// │   │   │
// │   │   ├── leftGain = 0
// │   │   ├── rightGain = 0
// │   │   │
// │   │   ├── currentPath = 7
// │   │   ├── maxSum = max(15,7) = 15
// │   │   │
// │   │   └── return 7
// │   │
// │   ├── leftGain = 15
// │   ├── rightGain = 7
// │   │
// │   ├── currentPath = 15 + 20 + 7 = 42
// │   ├── maxSum = max(15,42) = 42
// │   │
// │   └── return 20 + max(15,7)
// │              = 35
// │
// ├── leftGain = 9
// ├── rightGain = 35
// │
// ├── currentPath = 9 + (-10) + 35
// │               = 34
// │
// ├── maxSum = max(42,34)
// │         = 42
// │
// └── return -10 + max(9,35)
//            = 25
