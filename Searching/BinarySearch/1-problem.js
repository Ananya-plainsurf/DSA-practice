// Array:

// [1,3,5,7,9,11,13]

// Find 11

function findTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return `Target - ${target} not present in array`;
}

console.log(findTarget([1, 3, 5, 7, 9, 11, 13], 11));
console.log(findTarget([1, 3, 5, 7, 9, 11, 13], 7));
console.log(findTarget([1, 3, 5, 7, 9, 11, 13], 77));
console.log(findTarget([1, 2], 2));
console.log(findTarget([2, 4, 6, 8, 10, 12], 8));
