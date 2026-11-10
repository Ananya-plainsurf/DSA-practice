// combination II

function combinationII(nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);
  function dfs(start, sum, arr) {
    if (sum === target) {
      return result.push([...arr]);
    }

    if (sum > target) return;
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      arr.push(nums[i]);
      dfs(i + 1, sum + nums[i], arr);
      arr.pop();
    }
  }
  dfs(0, 0, []);
  return result;
}

console.log(combinationII([10, 1, 2, 7, 6, 1, 5], 8));
