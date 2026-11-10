//    Subarray Sum Equals K

function Subarray(nums, k) {
  let currentSum = 0;
  let count = 0;
  let map = new Map();

  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    let needed = currentSum - k;

    if (map.has(needed)) {
      count += map.get(needed);
    }
    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }
  return count;
}

console.log(Subarray([1, 2, 3], 3));
console.log(Subarray([1, 1, 1], 2));
console.log(Subarray([1, 2, 3, 4], 3));
