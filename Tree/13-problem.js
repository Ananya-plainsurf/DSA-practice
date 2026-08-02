// zigzag level order traversal

//      3
//     / \
//    9   20
//        / \
//       15  7
// [[3],[20,9],[15,7]]

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

// function zigzag(root) {
//   let result = [];
//   let queue = [root];
//   let lToR = true;

//   while (queue.length) {
//     let size = queue.length;
//     let level = [];
//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();
//       if (lToR) {
//         level.push(node.val);
//       } else {
//         level.unshift(node.val);
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.push(level);
//     lToR = !lToR;
//   }
//   return result;
// }

function zigzag(root) {
  let result = [],
    queue = [root],
    L2R = true,
    front = 0;

  while (front < queue.length) {
    let size = queue.length - front,
      level = [];
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      if (L2R) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    L2R = !L2R;
    result.push(level);
  }
  return result;
}

console.log(zigzag(root));
