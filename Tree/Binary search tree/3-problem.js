// find the height of the tree
//          9
//     4           20
// 1       6   15      170

function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
console.log(
  "Height of the tree is -> ",
  height({
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
  "Height of the tree is -> ",
  height({
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
