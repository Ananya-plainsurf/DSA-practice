// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProduct(nums) {
  let maxPrev = nums[0];
  let minPrev = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let tempMax = num * maxPrev;
    let tempMin = num * minPrev;

    maxPrev = Math.max(num, tempMax, tempMin);
    minPrev = Math.max(num, tempMin, tempMin);
    // console.log({ maxPrev, minPrev, result });
    result = Math.max(result, maxPrev);
  }
  return result;
}
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
