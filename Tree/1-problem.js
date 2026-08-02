// pre order

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

// console.log(root);
// console.log("Pre order");
// function preOrder(node) {
//   if (node === null) return;

//   console.log(node.val);
//   preOrder(node.left);
//   preOrder(node.right);
// }

// preOrder(root);

// console.log("In order");

// function inOrder(node) {
//   if (node === null) return;

//   inOrder(node.left);
//   console.log(node.val);
//   inOrder(node.right);
// }
// inOrder(root);

// console.log("Post order");

// function postOrder(node) {
//   if (node === null) return;

//   postOrder(node.left);
//   postOrder(node.right);
//   console.log(node.val);
// }
// postOrder(root);

function traverse(root) {
  let queue = [root];
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].left) {
      queue.push(queue[i].left);
    }
    if (queue[i].right) {
      queue.push(queue[i].right);
    }
  }

  let left = 0;
  let right = queue.length - 1;

  while (left < right) {
    [queue[left], queue[right]] = [queue[right], queue[left]];
    left++;
    right--;
  }

  let result = [];
  while (queue.length) {
    result.push(queue.pop().val);
  }
  return result;
}
console.log(traverse(root));

console.log("new approach");
function traverse(root) {
  let queue = [root];
  let front = 0;
  let result = [];
  //   for (let i = 0; i < queue.length; i++) {
  //     if (queue[i].left) {
  //       queue.push(queue[i].left);
  //     }
  //     if (queue[i].right) {
  //       queue.push(queue[i].right);
  //     }
  //     result.push(queue[front++].val);
  //   }

  while (front < queue.length) {
    if (queue[front].left) {
      queue.push(queue[front].left);
    }
    if (queue[front].right) {
      queue.push(queue[front].right);
    }
    result.push(queue[front++].val);
  }
  return result;
}

console.log(traverse(root));
// traverse(root);
