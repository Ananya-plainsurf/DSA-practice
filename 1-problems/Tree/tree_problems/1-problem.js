// // What would be the output of Preorder traversal?

// Rule:

// Node → Left → Right

// For the same tree.

//         4
//       /   \
//      2     6
//     / \   / \
//    1   3 5   7

// What is the result array?

function inOrder(root, result = []) {
  if (!root) return result;
  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);
  return result;
}
console.log(
  inOrder({
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 6,
      left: { val: 5, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  }),
);
