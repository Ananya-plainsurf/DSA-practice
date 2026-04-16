// 🔴 HARD #1 — First Missing Positive
// 🧩 Problem
// nums = [3,4,-1,1]

// 👉 Find the smallest missing positive integer

// ✅ Output:

// 2

function firstMissingPositive(nums) {
  const n = nums.length;

  // 1. Cyclic Sort: Put each number x at index x - 1
  // Example: 3 should go to index 2
  for (let i = 0; i < n; i++) {
    console.log({ i, v: nums[i], nums });
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap nums[i] with the element at its target index
      let targetIdx = nums[i] - 1;
      [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
    }
  }
  console.log({ nums });
  // 2. Identify the first mismatch
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([-1, -2, -3])); // 1
console.log(firstMissingPositive([1, 2, 3, 4])); // 5
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([1, 1])); // 2
console.log(firstMissingPositive([1])); // 2
console.log(firstMissingPositive([2])); // 1
console.log(firstMissingPositive([2, 3, 1])); // 4
