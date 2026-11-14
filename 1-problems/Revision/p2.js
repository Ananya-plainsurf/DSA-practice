// Given an array of integers nums and an integer k,
// return the total number of continuous subarrays whose sum equals k.
// Input: nums = [1,1,1], k = 2
// Output: 2
// Explanation:
// [1,1] (index 0–1)
// [1,1] (index 1–2)
// Input: nums = [1,2,3], k = 3
// Output: 2
// Explanation:
// [1,2], [3]

function maxSubArr(nums, k) {
  let sum = 0;
  let count = 0;

  for (let ch of nums) {
    if (ch === k) {
      count++;
      sum = 0;
      continue;
    }
    sum += ch;
    if (sum === k) {
      count++;
      sum = ch;
      continue;
    }

    if (sum > k) {
      sum = 0;
    }
  }
  return count;
}

function maxSubArrFinal(num, k) {
  let sum = 0;
  let count = 0;
  let map = new Map();
  map.set(0, 1);

  for (let ch of num) {
    sum += ch;
    let rem = sum - k;

    if (map.has(rem)) {
      count += map.get(rem);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(maxSubArr([1, 1, 1], 2));
console.log(
  "----- in the all positive solution below [1, -1 , 1] for this logic breaks -----"
);
console.log(maxSubArr([1, -1, 1], 1));
console.log(maxSubArr([1, 2, 3], 3));
console.log(maxSubArr([3, 1, 2, 4, 1, 1, 1, 5, 3], 3));
console.log(
  "final optimized and logically correct solution--------------------"
);
console.log(maxSubArrFinal([1, 1, 1], 2));
console.log("----- in the final solution the solution is restored-----");
console.log(maxSubArrFinal([1, -1, 1], 1));
console.log(maxSubArrFinal([1, 2, 3], 3));
console.log(maxSubArrFinal([3, 1, 2, 4, 1, 1, 1, 5, 3], 3));
