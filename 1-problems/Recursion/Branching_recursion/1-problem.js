// fibonacci series

// f(4) = 3

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  console.log({ n, memo });
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  console.log({ memo, memoN: memo[n] });
  return memo[n];
}
console.log("Fibonacci series of 4 is: ", fibonacci(4));
console.log("Fibonacci series of 8 is: ", fibonacci(8));
console.log("Fibonacci series of 11 is: ", fibonacci(11));
console.log("Fibonacci series of 6 is: ", fibonacci(6));
