// Power Function

// Compute:

// 2³ = 8
// 3⁴ = 81
// 5² = 25

// Mathematically: xⁿ = x × xⁿ⁻¹

function Power(m, n) {
  if (n === 0) {
    return 1;
  }
  return m * Power(m, n - 1);
}

console.log(Power(5, 2));
console.log(Power(3, 4));
console.log(Power(2, 3));
console.log(Power(5, 0));
