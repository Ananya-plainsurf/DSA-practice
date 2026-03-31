// 🧩 Problem: Merge Two Sorted Arrays
// Input:
// arr1 = [1,3,5]
// arr2 = [2,4,6]
// Output:
// [1,2,3,4,5,6]

// function divide(arr) {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);

//   let left = divide(arr.slice(0, mid));
//   let right = divide(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }
// function mergeSort(arr1, arr2) {
//   return divide(arr1.concat(arr2));
// }

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
console.log(merge([1, 3, 5], [2, 4, 6]));
