// Product of Array Self

function productOfSelf(nums) {
  let left = 1;
  const result = new Array(nums.length);
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right;
    right *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }
  return result;
}

console.log(productOfSelf([1, 2, 3, 4]));
console.log(productOfSelf([-1, 1, 0, -3, 3]));
console.log(productOfSelf([-1, 2, -3, 4]));
