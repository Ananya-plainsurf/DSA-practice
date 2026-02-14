// 🟢 Level 1 – Basic Tree Understanding

// Count total nodes

// Find tree height

// Sum of all nodes

// Find min / max in BST

// Search in BST (you already did this ✅)

// 🟡 Level 2 – Traversals

// Inorder traversal

// Preorder

// Postorder

// Level Order (BFS)

// 🟠 Level 3 – Thinking Problems

// Check if tree is balanced

// Validate BST

// Diameter of tree

// Then we jump into CTCI Tree chapter.

function countNodes(root) {
  if (!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

console.log(
  "Total nodes in the tree are -> ",
  countNodes({
    value: 9,
    left: {
      value: 4,
      left: { value: 1, left: null, right: null },
      right: { value: 6, left: null, right: null },
    },
    right: {
      value: 20,
      left: { value: 15, left: null, right: null },
      right: { value: 170, left: null, right: null },
    },
  })
);
