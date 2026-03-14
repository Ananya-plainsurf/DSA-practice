// 🌳 CTCI 4.3 — List of Depths
// 🔹 Problem

// Given a binary tree, create a list of nodes at each depth.

// Example:

//         1
//        / \
//       2   3
//      / \
//     4   5

// Output:

// [
//   [1],
//   [2,3],
//   [4,5]
// ]

// function listOfDepth(root) {
//   let result = [];

//   function buildByDepth(node, depth) {
//     if (!node) return;
//     if (!result[depth]) {
//       result[depth] = [];
//     }

//     result[depth].push(node.value);
//     buildByDepth(node.left, depth + 1);
//     buildByDepth(node.right, depth + 1);
//   }
//   buildByDepth(root, 0);
//   return result;
// }

function listOfDepth(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    console.log({ queue });
    let size = queue.length; // number of nodes at this level
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift(); // remove from front
      level.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

console.log(
  listOfDepth({
    value: 4,
    left: {
      value: 2,
      left: { value: 1, left: null, right: null },
      right: { value: 3, left: null, right: null },
    },
    right: {
      value: 6,
      left: { value: 5, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
  }),
);
// console.log(
//   listOfDepth({
//     value: 4,
//     left: {
//       value: 2,
//       left: { value: 1, left: null, right: null },
//       right: { value: 3, left: null, right: null },
//     },
//     right: {
//       value: 6,
//       left: { value: 5, left: null, right: null },
//       right: { value: 7, left: null, right: null },
//     },
//   }),
// );
