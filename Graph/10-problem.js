// rotting oranges
function rottingOranges(grid) {
  const queue = [];
  let fresh = 0;
  let min = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
      if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;
  let front = 0;

  function update(r, c) {
    grid[r][c] = 2;
    fresh--;
    queue.push([r, c]);
  }
  while (front < queue.length && fresh > 0) {
    let size = queue.length - front;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue[front++];
      if (r + 1 < rows && grid[r + 1][c] === 1) {
        update(r + 1, c);
      }
      if (r - 1 >= 0 && grid[r - 1][c] === 1) {
        update(r - 1, c);
      }
      if (c + 1 < cols && grid[r][c + 1] === 1) {
        update(r, c + 1);
      }
      if (c - 1 >= 0 && grid[r][c - 1] === 1) {
        update(r, c - 1);
      }
    }
    min++;
  }

  return fresh > 0 ? -1 : min;
}
console.log(
  rottingOranges([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
