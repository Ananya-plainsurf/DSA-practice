// 🟢 Easy #3 — Maximum Subarray (Intro to Kadane Later)
// 🧩 Problem

// Given an array:

// nums = [-2,1,-3,4,-1,2,1,-5,4]

// 👉 Find the maximum sum of a contiguous subarray

// ✅ Expected Output
// 6

// (Subarray: [4, -1, 2, 1])

function maximumSubArray(nums) {
  let sum = nums[0];
  let finalSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    sum = Math.max(num, num + sum);
    finalSum = Math.max(sum, finalSum);
    // console.log({ sum, finalSum });
  }
  return finalSum;
}
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maximumSubArray([5, -100, 6, 7])); //13
console.log(maximumSubArray([0, -3, 5, -2, 0, 3])); //6
console.log(maximumSubArray([-2, -3, -1, -5])); //-1
