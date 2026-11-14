// check if tree is balanced
//         1
//       /   \
//      2     3
//     / \
//    4   5
//   /
//  6
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};

function balanceCheck(root) {
  if (!root) return 0;

  let leftHeight = balanceCheck(root.left) + 1;
  let rightHeight = balanceCheck(root.right) + 1;
  console.log({ leftHeight, rightHeight, l: root.value });
  return Boolean(leftHeight - rightHeight <= 1);
}

console.log(balanceCheck(tree));
