// 🌳 Maximum Depth of Binary Tree

// Example tree:

//         4
//       /   \
//      2     6
//     /
//    1

// Depth =

// 3

// Because the longest path is:

// 4 → 2 → 1

function depth(node, tDepth = 0) {
  if (!node) return 0;
  let left = depth(node.left, tDepth);

  let right = depth(node.right, tDepth);

  tDepth = 1 + Math.max(left, right);
  return tDepth;
}

console.log(
  depth({
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  }),
);

console.log(
  depth({
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: { val: 0, left: null, right: null }, right: null },
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  }),
);
