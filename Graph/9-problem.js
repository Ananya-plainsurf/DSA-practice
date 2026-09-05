// Surrounded Regions

function regions(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function borderDFS(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "O") {
      return;
    }
    grid[r][c] = "#";
    borderDFS(r + 1, c);
    borderDFS(r - 1, c);
    borderDFS(r, c + 1);
    borderDFS(r, c - 1);
  }

  //   column edges x | x | x | x <- top || x | O | x | x <- bottom
  for (let c = 0; c < cols; c++) {
    borderDFS(0, c);
    borderDFS(rows - 1, c);
  }

  //   rows edges
  //   left || right
  //   x         x
  //   x         x
  //   x         x
  //   x         x
  for (let r = 0; r < rows; r++) {
    borderDFS(r, 0);
    borderDFS(r, cols - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "O") {
        grid[r][c] = "X";
      }
      if (grid[r][c] === "#") {
        grid[r][c] = "O";
      }
    }
  }
  return grid;
}

console.log(
  regions([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ]),
);
