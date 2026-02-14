// find the sum of all nodes
//          9
//     4           20
// 1       6   15      170

function sumOfNodes(root) {
  if (!root) return 0;

  return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}
console.log(
  "Sum of the tree is -> ",
  sumOfNodes({
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

console.log(
  "Sum of the tree is -> ",
  sumOfNodes({
    value: 9,
    left: {
      value: 4,
      left: {
        value: 1,
        left: { value: 0, left: null, right: null },
        right: null,
      },
      right: null,
    },
    right: null,
  })
);
