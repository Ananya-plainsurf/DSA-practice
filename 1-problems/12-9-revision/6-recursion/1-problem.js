// subsequence

function subsequence(nums) {
  let result = [];

  function dfs(i, newArr) {
    if (i === nums.length) {
      return result.push([...newArr]);
    }

    newArr.push(nums[i]);
    dfs(i + 1, newArr);
    newArr.pop();
    dfs(i + 1, newArr);
  }

  dfs(0, []);
  return result;
}
console.log(subsequence([1, 2, 3]));
