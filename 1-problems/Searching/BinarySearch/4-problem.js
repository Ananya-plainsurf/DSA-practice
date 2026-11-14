// 🧩 Find Minimum in Rotated Sorted Array
// Problem

// You are given a rotated sorted array.

// Find the minimum element.

// Example 1
// arr = [3,4,5,1,2]

// Output:

// 1

// function findMin(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let min = +Infinity;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     min = Math.min(min, arr[mid]);
//     // if (arr[mid] > min) {
//     if (arr[mid] > arr[right] && arr[right] < arr[left]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//     // }
//   }
//   return min;
// }
// above code is good but it is:
// Binary Search + Tracking min
// → behaves like partial linear scan

// CORRECT APPROACHx
// Pure Binary Search
// → guarantees convergence to min

// so binary search guarantees convergence

function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([3, 4, 5, 6, 0, 1, 2]));
console.log(findMin([3, 4, 5, 6, 0, -1, 1, 2]));
console.log(findMin([3, 4, 5, 6, 0, -15, 1, 2]));
console.log(findMin([3, 1, 2]));
console.log(findMin([2, 3, 4, 5, 1]));
console.log(findMin([10, 1, 2, 3, 4, 5]));
