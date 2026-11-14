// // Q3. Sliding Window Maximum (VERY IMPORTANT)
// // nums = [1,3,-1,-3,5,3,6,7], k = 3
// // Output = [3,3,5,5,6,7]

// function slidingWindow(nums, k) {
//   const d = [];
//   const val = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (d.length < k) {
//       d.push(i);
//     }
//     if (d.length === k) {
//       let max = -Infinity;
//       for (let j = 0; j < k; j++) {
//         max = Math.max(max, nums[d[j]]);
//       }

//       val.push(max);
//       d.shift();
//     }
//   }

//   return val;
// }

// console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// // e/o/p = [3,3,5,5,6,7]
// console.log(slidingWindow([1, 2, 3], 2));
// // e/o/p = [2,3]
// console.log(slidingWindow([4, 2, 7, 1], 1));
// // e/o/p = [4,2,7,1]

function slidingWindow(n, k) {
  let d = [];
  let r = [];

  for (let i = 0; i < n.length; i++) {
    // remove if 1st element in d is smaller then i-k
    if (d.length && d[0] <= i - k) {
      d.shift();
    }

    // remove small from back and check if small
    let j = true;

    while (j) {
      if (d.length && n[d[d.length - 1]] <= n[i]) {
        d.pop();
      } else {
        j = false;
        d.push(i);
      }
    }

    // check if window is ready
    if (i >= k - 1) {
      r.push(n[d[0]]);
    }
  }

  return r;
}

console.log(slidingWindow([4, 2, 12, 3, 8, 7, 9, 1, 5], 4));
console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
