// 🧩 Problem — Binary Strings Without Consecutive 1s

// Given an integer n, generate all binary strings of length n such that no two 1s are adjacent.

// Binary digits:

// 0
// 1
// Example

// Input

// n = 3

// Valid strings

// 000
// 001
// 010
// 100
// 101

// Invalid strings

// 011
// 110
// 111

// Because they contain consecutive 1s.

function binaryStr(n, str = "") {
  if (str.length === n) {
    console.log(str);
    return;
  }
  //   console.log({ str1: str });
  binaryStr(n, str + "0");
  //   console.log({ str, prev: str[str.length - 1] });
  if (str[str.length - 1] !== "1") {
    binaryStr(n, str + "1");
  }
}
binaryStr(3);
