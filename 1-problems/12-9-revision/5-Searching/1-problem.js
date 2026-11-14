// Search 2D Matrix

function searchMatrix(nums, target) {
  let l = 0;
  let r = nums.length * nums[0].length - 1;
  let colLength = nums[0].length;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let row = Math.floor(mid / colLength);
    let col = mid % colLength;
    let midNum = nums[row][col];

    if (midNum === target) {
      return true;
    }

    if (midNum < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    34,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    134,
  ),
);
