// Next Problem: Average of Levels in Binary Tree (LeetCode 637)

// Step 1 — Problem Statement

// Return the average value of nodes at each level.

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

function average(root) {
  let res = [];
  let queue = [root];
  let front = 0;

  while (front < queue.length) {
    let sum = 0;
    let size = queue.length - front;
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(sum / size);
  }
  return res;
}
console.log(average(root));
