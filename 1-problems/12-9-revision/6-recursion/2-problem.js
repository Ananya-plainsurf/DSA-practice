// combination sum

function combination(candidates, target) {
  const result = [];

  function dfs(i, sum, arr) {
    if (sum === target) {
      return result.push([...arr]);
    }

    if (sum > target || i === candidates.length) return;

    arr.push(candidates[i]);
    dfs(i, sum + candidates[i], arr);
    arr.pop();
    dfs(i + 1, sum, arr);
  }

  dfs(0, 0, []);
  return result;
}

console.log(combination([2, 3, 5], 8));
