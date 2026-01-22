// // Count Subarrays with Sum ≤ K (all positive numbers)

// // Given an array of positive integers nums and an integer k,
// // return the total number of continuous subarrays whose sum is ≤ k.
// Example 1

// nums = [1, 2, 1], k = 3

// All subarrays:

// [1]       → 1 ✅
// [1,2]     → 3 ✅
// [1,2,1]   → 4 ❌
// [2]       → 2 ✅
// [2,1]     → 3 ✅
// [1]       → 1 ✅

// ✅ Valid count = 5

// Example 2

// nums = [2, 1, 1], k = 2

// [2]       → 2 ✅
// [2,1]     → 3 ❌
// [2,1,1]   → 4 ❌
// [1]       → 1 ✅
// [1,1]     → 2 ✅
// [1]       → 1 ✅

// ✅ Output = 4

// Example 3

// nums = [1, 1, 1], k = 2

// [1]       → 1 ✅
// [1,1]     → 2 ✅
// [1,1,1]   → 3 ❌
// [1]       → 1 ✅
// [1,1]     → 2 ✅
// [1]       → 1 ✅

// ✅ Output = 5

// Example 4

// nums = [3, 1, 2], k = 3

// [3]       → 3 ✅
// [3,1]     → 4 ❌
// [3,1,2]   → 6 ❌
// [1]       → 1 ✅
// [1,2]     → 3 ✅
// [2]       → 2 ✅

// ✅ Output = 4

function countSubArr(nums, k) {
  let sum = 0;
  let left = 0;
  let count = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    count += r - left + 1;
  }
  return count;
}

console.log(countSubArr([1, 2, 1], 3));
console.log(countSubArr([2, 1, 1], 2));
console.log(countSubArr([1, 1, 1], 2));
console.log(countSubArr([3, 1, 2], 3));
