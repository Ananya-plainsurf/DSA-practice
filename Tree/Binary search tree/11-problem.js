// in-order traversal

function nextSuccessor(root, succ) {
  //   if (!root) return [];
  //   return [
  //     ...inOrderTraversal(root.left),
  //     root.value,
  //     ...inOrderTraversal(root.right),
  //   ];
  function inOrder(node) {
    if (!node) return [];
    return [...inOrder(node.left), node.value, ...inOrder(node.right)];
  }
  const arr = inOrder(root);
  const idx = arr.indexOf(succ);
  console.log({ arr, idx });
  return arr[idx + 1];
}
console.log(
  nextSuccessor(
    {
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
    },
    2,
  ),
);
