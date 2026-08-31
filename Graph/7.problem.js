// flood fill

function floodFill(grid, sr, sc, color) {
  const rows = grid.length;
  const col = grid[0].length;
  const originalVal = grid[sr][sc];
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= col || grid[r][c] !== originalVal)
      return;

    grid[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return grid;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);
