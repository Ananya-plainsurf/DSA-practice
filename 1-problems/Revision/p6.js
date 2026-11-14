// Count Subarrays with Sum = K (numbers can be negative)

// Given an integer array nums (can contain negative numbers) and an integer k,
// return the total number of continuous subarrays whose sum equals k.

function countSubarraysWithSumK(nums, k) {
  let sum = 0;
  let count = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum - k;

    if (map.has(rem)) {
      count += map.get(rem);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

console.log(countSubarraysWithSumK([1, 1, 1], 2)); // 2
console.log(countSubarraysWithSumK([1, -1, 1], 1)); // 3
console.log(countSubarraysWithSumK([-2, -1, 2, 1], 1)); // 2
