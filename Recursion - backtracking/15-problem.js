// permutation

function permutation(arr) {
  let result = [];

  function dfs(curr, used) {
    if (curr.length === arr.length) {
      return result.push([...curr]);
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      curr.push(arr[i]);
      used[i] = true;
      dfs(curr, used);
      used[i] = false;
      curr.pop();
    }
  }
  dfs([], []);
  return result;
}

console.log(permutation([1, 2, 3]));
