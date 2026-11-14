// find the max node in binary tree (not necessarily BST - BinarySearchTree)

//          9
//     4           20
// 1       6   15      170

function maxNodeValue(root) {
  if (!root) return -Infinity;
  let leftMaxValue = root.value;
  let rightMaxValue = root.value;
  leftMaxValue = Math.max(leftMaxValue, maxNodeValue(root.left));
  rightMaxValue = Math.max(rightMaxValue, maxNodeValue(root.right));
  return Math.max(leftMaxValue, rightMaxValue);
}
console.log(
  "Sum of the tree is -> ",
  maxNodeValue({
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
  maxNodeValue({
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
