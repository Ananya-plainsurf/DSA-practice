class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        // left
        if (!curr.left) {
          curr.left = node;
          return;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        // right
        if (!curr.right) {
          curr.right = node;
          return;
        }
        curr = curr.right;
      } else {
        return;
      }
    }
  }
  lookup(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return `Look up ${value} = ${true} (found) `;
      } else if (curr.value > value) {
        curr = curr.left;
      } else if (curr.value < value) {
        curr = curr.right;
      }
    }
    return `Look up ${value} = ${false} (NOT found)`;
  }
  remove(value) {
    let curr = this.root;
    while (curr) {
      if (value > curr.value) {
        // right
        curr = curr.right;
      } else if (value < curr.value) {
        // left
        curr = curr.left;
      } else {
        if (value === curr.value) {
        }
      }
    }
  }
}
// Mallika@123
// Ann@na@222
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(15));
console.log(tree.lookup(10));

//          9
//     4           20
// 1       6   15      170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
