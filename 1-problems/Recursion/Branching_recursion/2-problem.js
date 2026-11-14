// // 🧩 Problem: Climbing Stairs

// // You are climbing a staircase with n steps.

// // Each time you can climb:

// // 1 step

// // 2 steps

// // Find the number of distinct ways to reach the top.
// Example
// n = 3

// Possible ways:

// 1 + 1 + 1
// 1 + 2
// 2 + 1

// Output:

// 3

function climbStairs(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
function climbStairs2(n, memo = {}) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs2(n - 1, memo) + climbStairs2(n - 2, memo);
  return memo[n];
}

console.log(climbStairs(3));
console.log(climbStairs(6));
console.log(climbStairs(4));
console.log("---------------using memoisation technique------------------");
console.log(climbStairs2(3));
console.log(climbStairs2(6));
console.log(climbStairs2(4));
