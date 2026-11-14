// two sum

function twoSum(nums, target) {
  const hasSeen = new Map();
  for (let i in nums) {
    const num = nums[i];
    const needed = target - num;
    if (hasSeen.has(needed)) {
      return [Number(hasSeen.get(needed)), Number(i)];
    }
    hasSeen.set(num, i);
  }
}

console.log(twoSum([3, 2, 4], 6)); // 1,2
console.log(twoSum([2, 7, 11, 15], 9)); // 0,1
console.log(twoSum([-3, 4, 3, 90], 0)); // 0,2
console.log(twoSum([-5, -2, -3, 7], 5)); // 1,3
console.log(twoSum([0, 4, 3, 0], 0)); // 0,3
console.log(twoSum([1, 5, 8, 12], 20)); // 2, 3
console.log(twoSum([-10, -1, -18, -19], -19)); // 1,2
