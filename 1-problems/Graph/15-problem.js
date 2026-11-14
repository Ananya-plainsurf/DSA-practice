// Number of Islands

function IslandsCount(grid) {
  let island = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        island++;
        dfs(r, c);
      }
    }
  }

  return island;
}

console.log(
  IslandsCount([
    ["1", "1", "0", "0"],
    ["1", "1", "0", "1"],
    ["0", "0", "1", "1"],
    ["0", "0", "0", "1"],
  ]),
);
