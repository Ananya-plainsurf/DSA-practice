// 🌳 Problem: Diameter of Binary Tree

// Tree:

//        1
//       / \
//      2   3
//     / \
//    4   5

// Longest path between any two nodes:

// 4 → 2 → 1 → 3

// Number of edges:

// 3

// That is the diameter.

function diameterOfBinary(node, diameter = 0) {
  if (!node) return 0;
  let left = diameterOfBinary(node.left, diameter);
  let right = diameterOfBinary(node.right, diameter);
  diameter = Math.max(diameter, left + right);

  return 1 + Math.max(left, right);
}

console.log(
  diameterOfBinary({
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  }),
);
console.log(
  diameterOfBinary({
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  }),
);
