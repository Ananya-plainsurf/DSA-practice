var twoSum = function (nums, target) {
  const obj1 = new Map();
  let i = 0;
  while (i < nums.length) {
    rem = target - nums[i];
    if (obj1.has(rem)) {
      return [obj1.get(rem), i];
    } else {
      obj1.set(nums[i], i);
      i++;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
