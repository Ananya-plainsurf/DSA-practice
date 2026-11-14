// Longest Subarray with Sum = K
// Given an array nums and an integer k,
// return the length of the longest continuous subarray whose sum equals k.

function longestSum(n, k) {
  let sum = 0;
  let maxLen = 0;
  let map = new Map();

  map.set(0, -1);

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
    let rem = sum - k;

    if (map.has(rem)) {
      let len = i - map.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLen;
}

console.log(longestSum([1, -1, 5, -2, 3], 3));
console.log(longestSum([1, -1, 1], 1));
console.log(longestSum([-2, -1, 2, 1], 1));
