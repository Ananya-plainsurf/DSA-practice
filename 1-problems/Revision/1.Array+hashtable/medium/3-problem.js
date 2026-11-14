// 🟡 MEDIUM #1 — Subarray Sum Equals K
// 🧩 Problem
// nums = [1,1,1], k = 2

// 👉 Count subarrays whose sum = k

// ✅ Output:

// 2

function sumSubArr(nums, k) {
  let sum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  for (let num of nums) {
    sum += num;
    let rem = sum - k;
    if (map.has(rem)) {
      count += map.get(rem);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
console.log(sumSubArr([1, 1, 1], 2));
console.log(sumSubArr([1, 2, 3], 7));
console.log(sumSubArr([3, 4, 7, 2, -3, 1, 4, 2], 7));
