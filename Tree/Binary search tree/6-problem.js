// Implement search for BST
//       20
//      /  \
//     10  30
//      \
//      15
// search 15

function searchValue(root, val) {
  if (!root) return false;

  while (root) {
    if (val < root.value) {
      root = root.left;
    } else if (val > root.value) {
      root = root.right;
    } else {
      return true;
    }
  }
  return false;
}

console.log(
  searchValue(
    {
      value: 20,
      left: {
        value: 10,
        left: null,
        right: { value: 15, left: null, right: null },
      },
      right: { value: 30, left: null, right: null },
    },
    15,
  ),
);

console.log(
  searchValue(
    {
      value: 20,
      left: {
        value: 10,
        left: null,
        right: { value: 15, left: null, right: null },
      },
      right: { value: 30, left: null, right: null },
    },
    30,
  ),
);
console.log(
  searchValue(
    {
      value: 20,
      left: {
        value: 10,
        left: null,
        right: { value: 15, left: null, right: null },
      },
      right: { value: 30, left: null, right: null },
    },
    0,
  ),
);
