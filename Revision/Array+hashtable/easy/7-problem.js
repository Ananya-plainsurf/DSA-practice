// 🟢 EASY #1 — Contains Duplicate
// 🧩 Problem
// nums = [1,2,3,1]

// 👉 Return true if any value appears at least twice

// ✅ Output:

// true

function containsDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 1, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 1, 3, 4])); // true
console.log(containsDuplicate([1, 5, -2, -4, 0])); // false
