// Maximum Subarray sum

function maxSubarray(nums) {
  let maxSum = nums[0];
  let finalSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    maxSum = Math.max(num, maxSum + num);
    finalSum = Math.max(maxSum, finalSum);
  }
  return finalSum;
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarray([5, 4, -1, 7, 8]));
