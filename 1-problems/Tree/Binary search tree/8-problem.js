// CTCI 4.2 — Minimal Tree.
// 🔹 Problem

// Given a sorted array (ascending, unique), create a Binary Search Tree with minimal height.

// Example:

// [1,2,3,4,5,6,7]

// Goal:
// Balanced BST (minimum height possible).

function minimalHeightBST(arr) {
  function build(left, right) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);

    return {
      value: arr[mid],
      left: build(left, mid - 1),
      right: build(mid + 1, right),
    };
  }
  return build(0, arr.length - 1);
}

console.log(minimalHeightBST([1, 2, 3, 4, 5, 6, 7]));
