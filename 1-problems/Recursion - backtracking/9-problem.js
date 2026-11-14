// combine sum to match target
// I/p: [2,3,6,7] target = 7
// o/p: [[2,2,3],[7]]

function combineSum(arr, tar) {
  let res = [];
  function dfs(idx, curr, sum) {
    if (sum === tar) {
      return res.push([...curr]);
    }
    if (sum > tar || idx === arr.length) return;
    curr.push(arr[idx]);
    dfs(idx, curr, sum + arr[idx]);
    curr.pop();
    dfs(idx + 1, curr, sum);
  }
  dfs(0, [], 0);
  return res;
}

console.log(combineSum([2, 3, 6, 7], 7));
console.log(combineSum([2, 3, 6, 7], 8));
