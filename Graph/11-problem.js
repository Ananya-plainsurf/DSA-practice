// 01 Matrix

function matrix(grid) {
  const queue = [];
  const rows = grid.length;
  const cols = grid[0].length;
  const dist = Array(rows)
    .fill()
    .map(() => Array(cols).fill(-1));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        queue.push([i, j]);
        dist[i][j] = 0;
      }
      //   dist[i][j] = grid[i][j] === 0 ? 0 : -1;
    }
  }

  if (!queue.length) return grid;

  let front = 0;
  while (front < queue.length) {
    let [r, c] = queue[front++];

    if (r + 1 < rows && dist[r + 1][c] === -1) {
      dist[r + 1][c] = dist[r][c] + 1;
      queue.push([r + 1, c]);
    }
    if (c + 1 < cols && dist[r][c + 1] === -1) {
      dist[r][c + 1] = dist[r][c] + 1;
      queue.push([r, c + 1]);
    }
    if (r - 1 >= 0 && dist[r - 1][c] === -1) {
      dist[r - 1][c] = dist[r][c] + 1;
      queue.push([r - 1, c]);
    }
    if (c - 1 >= 0 && dist[r][c - 1] === -1) {
      dist[r][c - 1] = dist[r][c] + 1;
      queue.push([r, c - 1]);
    }
  }
  return dist;
}

console.log(
  matrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]),
);
