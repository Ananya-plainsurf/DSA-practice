// 🌳 Path Sum

// Example tree:

//         5
//        / \
//       4   8
//      /
//     11
//    /  \
//   7    2

// Target sum:

// 22

// Path:

// 5 → 4 → 11 → 2 = 22

// Output:

// true

function pathSum(node, target) {
  if (!node) return false;
  if (target < 0 || !node) {
    return target;
  }

  if (!node.left && !node.right && target === node.val) return true;
  //   What the condition means
  // !node.left && !node.right

  // This checks if the node is a leaf node.

  // Meaning:

  // no left child
  // no right child

  // So the path must end here.

  // What the problem actually asks

  // The problem definition is:

  // Check if there exists a root-to-leaf path whose sum equals the target.

  // Important part:

  // root → leaf

  // Not just any node.

  target -= node.val;
  return pathSum(node.left, target) || pathSum(node.right, target);
}

console.log(
  pathSum(
    {
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
    },
    22,
  ),
);
