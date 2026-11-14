// print from 1 to N

// 1st solution
function printTillN(n, i = 1) {
  if (i > n) return;
  console.log(i);
  printTillN(n, i + 1);
}

console.log(printTillN(5));

// AI solution
function print(n) {
  if (n === 0) return;
  print(n - 1);
  console.log(n);
}

console.log(print(5));
