// 🧩 Problem: Two Sum
// 📌 Problem Statement

// Given an array of integers nums and an integer target,
// return indices of two numbers such that:

// nums[i] + nums[j] = target
// ⚠️ Rules
// Each input has exactly one solution
// You cannot use the same element twice
// Return indices (not values)
// 🧠 Example 1
// nums = [2, 7, 11, 15]
// target = 9

// 👉 Output:

// [0, 1]

// 👉 Because:

// 2 + 7 = 9
// 🧠 Example 2
// nums = [3, 2, 4]
// target = 6

// 👉 Output:

// [1, 2]
// 🧠 Example 3
// nums = [3, 3]
// target = 6

// 👉 Output:

// [0, 1]

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) j++;
//       let sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(num, targ) {
  let map = new Map();

  for (let i = 0; i < num.length; i++) {
    let rem = targ - num[i];
    if (map.has(rem) && map.get(rem) !== i) {
      return [map.get(rem), i];
    }

    map.set(num[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([-1, -2, -3, -4, -5], -8)); //[2,4]
