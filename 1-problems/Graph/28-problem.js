// // minimum cost to make at least one valid path in a grid

// function minCost(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
//   const dequeue = [[0, 0, 0]]; // [cost, i, j]
//   dist[0][0] = 0;

//   let front = 0;

//   const direction = [
//     [0, 1], // 1-> right
//     [0, -1], // 2 -> left
//     [1, 0], // 3 -> down
//     [-1, 0], //4 -> up
//   ];

//   while (front < dequeue.length) {
//     let [cost, r, c] = dequeue.shift();

//     for (let d = 0; d < direction.length; d++) {
//       const nr = r + direction[d][0];
//       const nc = c + direction[d][1];

//       if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

//       const moveCost = grid[r][c] === d + 1 ? 0 : 1;
//       const newCost = moveCost + cost;
//       if (newCost < dist[nr][nc]) {
//         dist[nr][nc] = newCost;
//         if (moveCost === 0) {
//           dequeue.unshift([newCost, nr, nc]);
//         } else {
//           dequeue.push([newCost, nr, nc]);
//         }
//       }
//     }
//   }
//   return dist[rows - 1][cols - 1];
// }
// console.log(
//   minCost([
//     [1, 3],
//     [1, 1],
//   ]),
// );
// console.log(
//   minCost([
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//   ]),
// );

function minCost(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  const dequeue = [[0, 0, 0]];
  dist[0][0] = 0;
  const direction = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  while (dequeue.length) {
    const [cost, r, c] = dequeue.shift();

    for (let d = 0; d < direction.length; d++) {
      const nr = r + direction[d][0];
      const nc = c + direction[d][1];

      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

      const moveCost = grid[r][c] === d + 1 ? 0 : 1;
      const newCost = cost + moveCost;

      if (newCost < dist[nr][nc]) {
        dist[nr][nc] = newCost;
        if (moveCost === 0) {
          dequeue.unshift([newCost, nr, nc]);
        } else {
          dequeue.push([newCost, nr, nc]);
        }
      }
    }
  }
  return dist[rows - 1][cols - 1];
}
console.log(
  minCost([
    [1, 3],
    [1, 1],
  ]),
);
console.log(
  minCost([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
  ]),
);
