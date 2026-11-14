// sum from 1 to N
// sum(5) = 1+2+3+4+5 = 15

function sum(n, tSum = 0) {
  if (n === 0) {
    return tSum;
  }
  tSum += n;
  return sum(n - 1, tSum);
}

console.log(sum(5));
console.log(sum(10));
