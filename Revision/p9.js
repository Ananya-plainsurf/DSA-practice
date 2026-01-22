// Count Subarrays with Sum Divisible by K

function countSubarraysDivisibleByK(nums, k) {
  let sum = 0;
  let count = 0;
  let map = new Map();

  map.set(0, 1);
  for (let ch of nums) {
    sum += ch;
    let rem = ((sum % k) + k) % k;

    if (map.has(rem)) {
      count += map.get(rem);
    }

    map.set(rem, (map.get(rem) || 0) + 1);
  }
  return count;
}

console.log(countSubarraysDivisibleByK([4, 5, 0, -2, -3, 1], 5)); // 7
console.log(countSubarraysDivisibleByK([1, -1, 1], 1)); // 6
console.log(countSubarraysDivisibleByK([-2, -1, 2, 1], 1)); // 10
