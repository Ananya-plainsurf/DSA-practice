// Sum of First N Numbers
// Example
// Input: 5

// Output: 15

// Because:

// 5 + 4 + 3 + 2 + 1 = 15

function sum(n) {
  if (n === 0) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(5));
