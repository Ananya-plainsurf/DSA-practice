// find minimum in rotated sorted array

function findMini(nums) {
  let min = Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    min = Math.min(min, nums[mid]);
    if (nums[right] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return min;
}
console.log(findMini([4, 5, 6, 7, 0, 1, 2, 3]));
console.log(findMini([1, 2, 3, 4]));
console.log(findMini([4, 5, 6, 1, 2, 3]));
console.log(findMini([5, 6, 7, 0, 1, 2, 3, 4]));
console.log(findMini([2, 3, 4, 5, 6, 1]));
console.log(findMini([5, 1, 2, 3, 4]));
