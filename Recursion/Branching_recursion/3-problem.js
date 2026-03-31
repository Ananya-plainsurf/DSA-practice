// 🧩 Problem: Generate Binary Strings

// Given an integer n, generate all binary strings of length n.

// Binary means:

// 0
// 1
// Example
// Input:
// n = 3

// Output:

// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111

// Total strings:

// 2^n

function binaryString(n, str = "") {
  if (str.length === n) {
    console.log(str);
    return;
  }

  binaryString(n, str + "0");
  binaryString(n, str + "1");
}
function binaryString2(n) {
  const arr = [];
  function binary(n, str = "") {
    if (str.length === n) {
      arr.push(str);
      return;
    }

    binary(n, str + "0");
    binary(n, str + "1");
  }
  binary(n);
  return arr;
}

console.log(binaryString2(3));
console.log(binaryString2(6));
console.log(binaryString2(4));
