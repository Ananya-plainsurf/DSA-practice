// // Maximum subarray
// i/p: [-2,1,-3,4,-1,2,1,-5,4]
// o/p: 6
// explanation: [4,-1,2,1] has the largest maximum sum

// function maximumSum(nums) {
//   let curr = 0;
//   let maxSum = -Infinity;

//   for (let ch of nums) {
//     curr += ch;
//     if (curr <= 0) {
//       curr = 0;
//     } else {
//       maxSum = Math.max(curr, maxSum);
//     }
//   }
//   return maxSum;
// }

// console.log(maximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maximumSum([-5, -2, -3])); // here if all numbers are negative it will give "-Infinity" as answer
// so we need to make changes

function maximumSum(nums) {
  let curr = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    maxSum = Math.max(curr, maxSum);
  }

  return maxSum;
}
console.log(maximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSum([-5, -2, -3]));
