// subset II

function subsetII(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  function dfs(start, arr) {
    result.push([...arr]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      arr.push(nums[i]);
      dfs(i + 1, arr);
      arr.pop();
    }
  }
  dfs(0, []);
  return result;
}
console.log(subsetII([1, 2, 2]));
console.log(subsetII([0]));
