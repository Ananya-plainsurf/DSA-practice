// Maximum Product Subarray

function maxProductSub(nums) {
  let maxNum = nums[0];
  let minNum = nums[0];
  let finalProduct = 0;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let a = num * maxNum;
    let b = num * minNum;
    maxNum = Math.max(num, a, b);
    minNum = Math.min(num, a, b);
    finalProduct = Math.max(finalProduct, maxNum);
  }
  return finalProduct;
}
console.log(maxProductSub([2, -5, -2, -4, 3]));
