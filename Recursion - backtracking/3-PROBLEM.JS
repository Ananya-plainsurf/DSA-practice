// Problem: Factorial of N
// Definition
// 5! = 5 × 4 × 3 × 2 × 1 = 120

// 4! = 4 × 3 × 2 × 1 = 24

// 3! = 3 × 2 × 1 = 6

// 0! = 1

function Factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * Factorial(n - 1);
}
console.log(Factorial(5));
console.log(Factorial(4));
