// Fibonacci Number

// The sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...

// Rule:

// fib(n) = fib(n-1) + fib(n-2)

// Examples:

// fib(0) = 0
// fib(1) = 1

// fib(2) = 1
// fib(3) = 2
// fib(4) = 3
// fib(5) = 5
// fib(6) = 8

function Fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
  return memo[n];
}

console.log(Fibonacci(5));
console.log(Fibonacci(6));
console.log(Fibonacci(4));
