// Same Tree

// Check if two trees are identical.

// Example:

// Tree A        Tree B

//    1             1
//   / \           / \
//  2   3         2   3

// Output:

// true

// If structure or values differ → false.

function sameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val !== q.val) return false;
  //   let left = sameTree(p.left, q.left);
  //   let right = sameTree(p.right, q.right);
  //   return left && right;

  // OR
  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}

console.log(
  sameTree(
    {
      val: 1,
      left: { val: 2, left: null, right: null },
    },
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  ),
);
console.log(
  sameTree(
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  ),
);
