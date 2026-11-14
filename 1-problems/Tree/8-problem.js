// path sum

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

function pathSum(node, target) {
  if (!node) return false;
  target -= node.val;
  if (!node.left && !node.right) return target === 0;

  return pathSum(node.left, target) || pathSum(node.right, target);
}

console.log(pathSum(root, 5));
console.log(pathSum(root, 4));
console.log(pathSum(root, 3));
