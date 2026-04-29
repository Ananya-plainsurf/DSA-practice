// 🟢 EASY #2 — Average of Subarrays of Size K
// 🧩 Problem
// nums = [1,3,2,6,-1,4,1,8,2]
// k = 5

// 👉 Return average of each subarray of size k

// ✅ Output:

// [2.2, 2.8, 2.4, 3.6, 2.8]

function avgOfSubArr(nums, k) {
  if (k > nums.length) return [];
  let sum = 0;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i >= k - 1) {
      res.push(sum / k);
    }
  }
  return res;
}
// [2.2, 2.8, 2.4, 3.6, 2.8]
console.log(avgOfSubArr([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
