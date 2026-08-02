// same tree

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

function sameTree(nodeT1, nodeT2) {
  if (!nodeT1 && !nodeT2) return true;
  if (!nodeT1 || !nodeT2) return false;
  if (nodeT1.val !== nodeT2.val) return false;

  let left = sameTree(nodeT1.left, nodeT2.left);

  let right = sameTree(nodeT1.right, nodeT2.right);

  return left && right;
}
console.log(sameTree(root1, root2));
