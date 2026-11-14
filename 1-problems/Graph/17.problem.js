// // Shortest path in binary matrix

// function shortestPath(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
//     return -1;
//   }

//   const queue = [[0, 0, 1]]; // [row, col, dist]
//   const visited = new Set();
//   let front = 0;
//   visited.add(`0,0`);

//   function update(r, c, dist) {
//     queue.push([r, c, dist + 1]);
//     visited.add(`${r},${c}`);
//   }
//   while (front < queue.length) {
//     const [r, c, dist] = queue[front++];
//     if (r === rows - 1 && c === cols - 1) {
//       return dist;
//     }
//     //   top layer
//     //   top-left
//     if (
//       r - 1 >= 0 &&
//       c - 1 >= 0 &&
//       !visited.has(`${r - 1},${c - 1}`) &&
//       grid[r - 1][c - 1] === 0
//     ) {
//       update(r - 1, c - 1, dist);
//     }
//     //   top
//     if (r - 1 >= 0 && !visited.has(`${r - 1},${c}`) && grid[r - 1][c] === 0) {
//       update(r - 1, c, dist);
//     }

//     //   top-right
//     if (
//       r - 1 >= 0 &&
//       c + 1 < cols &&
//       !visited.has(`${r - 1},${c + 1}`) &&
//       grid[r - 1][c + 1] === 0
//     ) {
//       update(r - 1, c + 1, dist);
//     }

//     //   mid layer
//     //   left
//     if (c - 1 >= 0 && !visited.has(`${r},${c - 1}`) && grid[r][c - 1] === 0) {
//       update(r, c - 1, dist);
//     }

//     //   right
//     if (c + 1 < cols && !visited.has(`${r},${c + 1}`) && grid[r][c + 1] === 0) {
//       update(r, c + 1, dist);
//     }

//     //   bottom layer
//     // bottom-left
//     if (
//       r + 1 < rows &&
//       c - 1 >= 0 &&
//       !visited.has(`${r + 1},${c - 1}`) &&
//       grid[r + 1][c - 1] === 0
//     ) {
//       update(r + 1, c - 1, dist);
//     }

//     //bottom
//     if (r + 1 < rows && !visited.has(`${r + 1},${c}`) && grid[r + 1][c] === 0) {
//       update(r + 1, c, dist);
//     }

//     //   bottom right
//     if (
//       r + 1 < rows &&
//       c + 1 < cols &&
//       !visited.has(`${r + 1},${c + 1}`) &&
//       grid[r + 1][c + 1] === 0
//     ) {
//       update(r + 1, c + 1, dist);
//     }
//   }
//   return -1;
// }

function shortestPath(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return -1;
  const queue = [[0, 0, 1]];
  let front = 0;

  grid[0][0] = 1;

  const direction = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  while (front < queue.length) {
    let [r, c, dist] = queue[front++];

    if (r === rows - 1 && c === cols - 1) return dist;

    for (const [dr, dc] of direction) {
      const newRow = r + dr;
      const newCol = c + dc;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rows ||
        newCol >= cols ||
        grid[newRow][newCol] === 1
      ) {
        continue;
      }
      //   if (grid[newRow][newCol] === 1) continue;

      grid[newRow][newCol] = 1;
      queue.push([newRow, newCol, dist + 1]);
    }
  }
  return -1;
}
console.log(
  shortestPath([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
);
console.log(
  shortestPath([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
);

console.log(
  shortestPath([
    [0, 1],
    [1, 0],
  ]),
);

console.log(
  shortestPath([
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ]),
);
