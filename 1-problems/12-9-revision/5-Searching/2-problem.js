//    First & Last Position

function FLPosition(nums, target) {
  let result = [-1, -1];
  // first Position

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      r = mid - 1;
      result[0] = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      l = mid + 1;
      result[1] = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return result;
}

console.log(FLPosition([5, 7, 7, 8, 8, 10], 8));
