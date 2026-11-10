// Given an array of positive integers nums and a positive integer target, find the minimum length of a contiguous subarray whose sum is greater than or equal to target.

// If no such subarray exists, return 0.

function minSub(nums, k) {
  let minSum = Infinity;
  let left = 0;
  let sum = nums[left];

  for (let right = 1; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= k) {
      minSum = Math.min(minSum, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minSum === Infinity ? 0 : minSum;
}

console.log(minSub([2, 3, 1, 2, 4, 3], 7));
console.log(minSub([1, 4, 4], 4));
