// Count Subarrays Divisible by K

// Given an integer array nums (can include negative numbers) and an integer k,
// return the number of continuous subarrays whose sum is divisible by k.

function countSubArrDivByk(nums, k) {
  let sum = 0;
  let count = 0;
  let map = new Map();

  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = ((sum % k) + k) % k; // normalize

    if (map.has(rem)) {
      count += map.get(rem);
    }

    map.set(rem, (map.get(rem) || 0) + 1);
  }
  return count;
}
console.log(countSubArrDivByk([4, 5, 0, -2, -3, 1], 5)); // 7
