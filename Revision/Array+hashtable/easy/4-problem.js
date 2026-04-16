// 🟢 Easy #3 — Maximum Subarray (Intro to Kadane Later)
// 🧩 Problem

// Given an array:

// nums = [-2,1,-3,4,-1,2,1,-5,4]

// 👉 Find the maximum sum of a contiguous subarray

// ✅ Expected Output
// [4,-1,2,1]

// (Sum: 6)

function maximumSubArray(nums) {
  let sum = nums[0];
  let maxSum = nums[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      tempStart = i;
      sum = nums[i];
    } else {
      sum += nums[i];
    }

    if (maxSum < sum) {
      maxSum = sum;
      start = tempStart;
      end = i;
    }
  }
  //   console.log({ start, end });
  return {
    maxSum,
    subArr: nums.slice(start, end + 1),
  };
}
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubArray([5, -100, 6, 7])); // [6,7]
console.log(maximumSubArray([0, -3, 5, -2, 0, 3])); // [5, -2, 0, 3]
console.log(maximumSubArray([-2, -3, -1, -5])); // [-1]
