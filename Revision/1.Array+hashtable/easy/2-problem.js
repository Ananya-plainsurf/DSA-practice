// 🟢 Easy #2 — Two Sum Variation (Sorted Array)
// 🧩 Problem

// Given a sorted array:

// numbers = [2, 7, 11, 15]
// target = 9 O/p = [0,1]

// Return indices such that:

// numbers[i] + numbers[j] = target

// numbers = [-5, -3, -1, 2, 4]
// target = -4

// 👉 Expected:

// [1, 2]  // -3 + -1

function twoSumSorted(num, target) {
  let left = 0;
  let right = num.length - 1;
  while (left < right) {
    let sum = num[left] + num[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left, right];
    }
  }
}

console.log(twoSumSorted([-5, -3, -1, 2, 4], -4)); //[1,2]
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumSorted([2, 3, 6, 7], 9)); // [0,3]
console.log(twoSumSorted([1, 2, 2, 4], 4)); // [1,2]
