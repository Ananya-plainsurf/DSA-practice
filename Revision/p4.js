// Longest Subarray with Sum ≤ K (all positive numbers)

// Given an array of positive integers and an integer k,
// find the length of the longest continuous subarray whose sum is less than or equal to k.

// function longestSubArr(n, k) {
//   let sum = 0;
//   let maxlen = 0;
//   let d = [];

//   for (let i = 0; i < n.length; i++) {
//     sum += n[i];

//     while (sum > k) {
//       let pop = d.shift();
//       sum -= n[pop];
//     }

//     d.push(i);
//     maxlen = Math.max(maxlen, d.length);
//   }
//   return maxlen;
// }

function longestSubArr(nums, k) {
  //   let l = 0;
  //   let maxLen = 0;
  //   let sum = 0;

  //   for (let r = 0; r < n.length; r++) {
  //     sum += n[r];

  //     while (sum < k) {
  //       sum -= n[l];
  //       l++;
  //     }

  //     maxLen = Math.max(maxLen, r - l + 1);
  //   }
  //   return maxLen;
  let left = 0;
  let sum = 0;
  let maxlen = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    maxlen = Math.max(maxlen, right - left + 1);
  }

  return maxlen;
}

console.log(longestSubArr([1, 2, 1, 1, 1, 3, 1], 5));
