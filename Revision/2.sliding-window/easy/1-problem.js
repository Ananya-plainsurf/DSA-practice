// 🟢 EASY #1 — Maximum Sum Subarray of Size K
// 🧩 Problem
// nums = [2,1,5,1,3,2], k = 3

// 👉 Find max sum of any subarray of size k

// ✅ Output:

// 9   // [5,1,3]

function maxSumOfK(nums, k) {
  let maxSum = -Infinity,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

console.log(maxSumOfK([2, 1, 5, 1, 3, 2], 3)); // 9 -> [5,1,3]
console.log(maxSumOfK([1, 2, 3, 4, 5], 2)); // 9
console.log(maxSumOfK([5, 5, 5, 5], 2)); // 10
console.log(maxSumOfK([-1, -2, -3, -4], 2)); // -3
console.log(maxSumOfK([4, -1, 2, 1], 2)); // -3
console.log(maxSumOfK([2, 3, 1, 2, 4, 3], 3)); // -6
