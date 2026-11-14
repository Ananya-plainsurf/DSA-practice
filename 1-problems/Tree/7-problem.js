// symmetric tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root1 = new TreeNode("1");
root1.left = new TreeNode("2");
root1.right = new TreeNode("2");

root1.left.left = new TreeNode("3");
root1.left.right = new TreeNode("4");

root1.right.right = new TreeNode("3");
root1.right.left = new TreeNode("4");

function solve(root) {
  function symmetricTree(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return (
      symmetricTree(left.left, right.right) &&
      symmetricTree(left.right, right.left)
    );
  }
  return symmetricTree(root.left, root.right);
}

console.log(solve(root1));
