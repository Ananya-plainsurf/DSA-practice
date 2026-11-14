// combine sum II

function combineSum2(arr, target) {
  let res = [];
  arr.sort((a, b) => a - b);
  function dfs(idx, curr, sum) {
    if (sum === target) {
      return res.push([...curr]);
    }

    for (let i = idx; i < arr.length; i++) {
      if (i > idx && arr[i] === arr[i - 1]) continue;
      if (sum > target) break;
      curr.push(arr[i]);
      dfs(i + 1, curr, sum + arr[i]);
      curr.pop();
    }
  }
  dfs(0, [], 0);
  return res;
}
// console.log(combineSum2([1, 1, 2], 3));
console.log(combineSum2([2, 1, 2, 3, 4], 5));
console.log(combineSum2([2, 5, 2, 1, 2], 5));
