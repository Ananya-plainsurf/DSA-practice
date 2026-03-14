// permutation

function permutation(arr) {
  const result = [];

  function dfs(curr = [], used = new Set()) {
    if (curr.length === arr.length) {
      result.push([...curr]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (used.has(i)) continue;

      curr.push(arr[i]);
      used.add(i);

      dfs(curr, used);

      curr.pop();
      used.delete(i);
    }
  }

  dfs();
  return result;
}

console.log(permutation([1, 2, 3]));
