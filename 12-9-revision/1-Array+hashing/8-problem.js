// 3Sum

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let freeze = nums[i];
    let j = i + 1;
    let k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      const sum = freeze + nums[j] + nums[k];

      if (sum === 0) {
        result.push([freeze, nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
