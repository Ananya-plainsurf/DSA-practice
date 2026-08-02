// minimum depth of binary tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
function minDepth(root) {
  if (!root) return [];
  let queue = [root];
  let front = 0;
  let level = 0;

  while (front < queue.length) {
    let size = queue.length - front;
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      if (!node.left && !node.right) {
        return ++level;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
}
console.log(minDepth(root));
