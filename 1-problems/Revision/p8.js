// Longest Subarray with Sum = K (numbers can be negative)

// Given an integer array nums (can include negative numbers) and an integer k,
// return the length of the longest continuous subarray whose sum equals k.

function longestSubArr(nums, k) {
  let sum = 0;
  let maxLen = 0;
  let map = new Map();

  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum - k;

    if (map.has(rem)) {
      maxLen = Math.max(maxLen, i - map.get(rem));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLen;
}
console.log(longestSubArr([1, -1, 5, -2, 3], 3));
console.log(longestSubArr([-2, -1, 2, 1], 1));
console.log(longestSubArr([3, 4, -7, 1, 3, 3, 1, -4], 7));
