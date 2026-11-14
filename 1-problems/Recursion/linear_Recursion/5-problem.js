// power function = calculate the power -> power(a,b) => a^back

function power(a, b) {
  if (b === 1) return a;

  return a * power(a, b - 1);
}

console.log(power(2, 3));
console.log(power(3, 4));
