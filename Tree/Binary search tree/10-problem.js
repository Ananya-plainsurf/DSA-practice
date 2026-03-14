// 4.4 — Check Balanced
function isBalance(root) {
  function height(node) {
    if (!node) return 0;

    let left = height(node.left);
    if (left === -1) return -1;
    let right = height(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    // console.log({ left, right });
    return 1 + Math.max(left, right);
  }
  //   if (!root) return -1; as empty node/root is considered balanced
  return height(root) !== -1;
}

console.log(
  isBalance({
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

console.log(
  isBalance({
    value: 4,
    left: {
      value: 2,
      left: {
        value: 1,
        left: { value: 0, left: null, right: null },
        right: null,
      },
      right: null,
    },
    right: {
      value: 6,
      left: { value: 5, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
  }),
);

console.log(isBalance()); // as this is empty it is considered balanced
