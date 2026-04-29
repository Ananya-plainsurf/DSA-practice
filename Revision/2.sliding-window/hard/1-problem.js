// 🔥 Next (Final Medium before Hard)
// 🟡 Minimum Size Subarray Sum
// 🧩 Problem
// nums = [2,3,1,2,4,3]
// target = 7

// 👉 Find smallest subarray length with sum ≥ target

// ✅ Output:

// 2 → [4,3]

function minSubArr(nums, target) {
  let minLen = +Infinity;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    sum += n;
    while (sum >= target) {
      minLen = Math.min(minLen, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArr([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArr([1, 1, 1, 1, 1], 3)); // 3
console.log(minSubArr([1, 2, 3], 10)); // 0
console.log(minSubArr([1, 4, 4], 4)); // 1
