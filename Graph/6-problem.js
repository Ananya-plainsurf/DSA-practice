// Number of island
function outer(grid) {
  // const visited = new Set();
  let island = 0;
  const col = grid[0].length;
  const rows = grid.length;
  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= col ||
      //   visited.has(`${r},${c}`) ||
      grid[r][c] === "0"
    ) {
      return;
    }

    // visited.add(`${r},${c}`);
    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < col; c++) {
      if (
        grid[r][c] === "1"
        // && !visited.has(`${r},${c}`)
      ) {
        island++;
        dfs(r, c);
      }
    }
  }

  return island;
}

console.log(
  outer([
    ["1", "1", "0"],
    ["1", "1", "0"],
    ["1", "1", "0"],
    ["0", "0", "1"],
  ]),
);

console.log(
  outer([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);

console.log(
  outer([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
