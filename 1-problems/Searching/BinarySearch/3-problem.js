// 🔄 Complete Problem
// Search in Rotated Sorted Array

// You are given:

// A rotated sorted array + a target

// Example:

// arr = [4,5,6,7,0,1,2]
// target = 0

function searchIdx(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) return mid;

    if (arr[left] <= arr[mid]) {
      if (target < arr[mid] && target >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

// function searchIdx(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);

//     if (arr[mid] === target) return mid;

//     // LEFT half is sorted
//     if (arr[left] <= arr[mid]) {
//       if (target < arr[mid] && target >= arr[left]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     // RIGHT half is sorted
//     else {
//       if (target > arr[mid] && target <= arr[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// }

console.log(searchIdx([6, 7, 8, 1, 2, 3, 4], 2)); // 4
console.log(searchIdx([4, 5, 6, 7, 8, 0, 1, 2, 3], 0)); //5
console.log(searchIdx([4, 5, 6, 7, 8, 0, 1, 2, 3], 2)); //7
console.log(searchIdx([4, 5, 6, 7, 8, 0, 1, 2, 3], 3)); //8
console.log(searchIdx([4, 5, 6, 7, 8, 0, 1, 2, 3], 6)); //2
